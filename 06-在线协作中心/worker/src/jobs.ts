import fs from "node:fs/promises";
import { spawn } from "node:child_process";
import XLSX from "xlsx";
import { componentIdFromNames, needsAutoSync, type ComponentRecord, type SyncJob } from "@octo-hub/shared";
import { aiReferencePath, excelPath, generatedRegistryPath, previewHtmlPath, workflowRoot } from "./config.js";
import { appendLog, supabase } from "./supabase.js";
import { buildWorkbookFromComponents } from "./excel.js";

interface RegistryEntry {
  id: string;
  syncStatus: string;
  syncError: string;
  figma?: {
    contextPath?: string;
    screenshotPath?: string;
  } | null;
}

function normalizeImportedStatus(rawStatus: string) {
  const status = rawStatus.trim();
  if (!status) {
    return { status: "暂定" as ComponentRecord["status"], migrated: "空状态 -> 暂定" };
  }
  if (status.includes("已有")) {
    return { status: "已有" as ComponentRecord["status"], migrated: status === "已有" ? null : `${status} -> 已有` };
  }
  if (status.includes("需要")) {
    return { status: "需要" as ComponentRecord["status"], migrated: status === "需要" ? null : `${status} -> 需要` };
  }
  if (status.includes("新增")) {
    return { status: "新增" as ComponentRecord["status"], migrated: status === "新增" ? null : `${status} -> 新增` };
  }
  if (status.includes("修改")) {
    return { status: "修改" as ComponentRecord["status"], migrated: status === "修改" ? null : `${status} -> 修改` };
  }
  if (status.includes("暂定")) {
    return { status: "暂定" as ComponentRecord["status"], migrated: status === "暂定" ? null : `${status} -> 暂定` };
  }
  if (status.includes("不要")) {
    return { status: "暂定" as ComponentRecord["status"], migrated: `${status} -> 暂定` };
  }
  return { status: "暂定" as ComponentRecord["status"], migrated: `${status} -> 暂定` };
}

async function runCommand(jobId: string, command: string, args: string[], cwd: string) {
  await appendLog(jobId, "command", "info", `${command} ${args.join(" ")}`, { cwd });
  return new Promise<void>((resolve, reject) => {
    const child = spawn(command, args, { cwd, stdio: "pipe", env: process.env });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += String(chunk);
    });
    child.stderr.on("data", (chunk) => {
      stderr += String(chunk);
    });
    child.on("close", async (code) => {
      if (stdout.trim()) {
        await appendLog(jobId, "stdout", "info", stdout.trim().slice(-4000));
      }
      if (stderr.trim()) {
        await appendLog(jobId, "stderr", code === 0 ? "warn" : "error", stderr.trim().slice(-4000));
      }
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`${command} exited with code ${code}`));
    });
  });
}

async function updateJob(jobId: string, fields: Record<string, unknown>) {
  const { error } = await supabase.from("sync_jobs").update(fields).eq("id", jobId);
  if (error) {
    throw error;
  }
}

async function fetchJob(jobId: string) {
  const { data, error } = await supabase.from("sync_jobs").select("*").eq("id", jobId).single();
  if (error) {
    throw error;
  }
  return data as SyncJob;
}

async function fetchComponents(job: SyncJob) {
  if (job.scope_type === "full") {
    const { data, error } = await supabase.from("component_records").select("*").order("category");
    if (error) {
      throw error;
    }
    return (data ?? []) as ComponentRecord[];
  }

  const componentIds = Array.isArray((job.scope_payload as { componentIds?: string[] }).componentIds)
    ? (job.scope_payload as { componentIds?: string[] }).componentIds ?? []
    : [];

  const { data, error } = await supabase.from("component_records").select("*").in("id", componentIds);
  if (error) {
    throw error;
  }
  return (data ?? []) as ComponentRecord[];
}

async function writeExcelSource(jobId: string, components: ComponentRecord[]) {
  const workbook = buildWorkbookFromComponents(components);
  XLSX.writeFile(workbook, excelPath);
  await appendLog(jobId, "excel", "info", "Rebuilt source workbook from component_records", {
    componentCount: components.length,
    excelPath,
  });
}

async function readRegistryMap() {
  const raw = await fs.readFile(generatedRegistryPath, "utf-8");
  const parsed = JSON.parse(raw) as { entries: RegistryEntry[] };
  return new Map(parsed.entries.map((entry) => [entry.id, entry]));
}

async function updateSyncState(jobId: string, components: ComponentRecord[]) {
  const registry = await readRegistryMap();
  const now = new Date().toISOString();

  for (const component of components) {
    const generatedId = componentIdFromNames(component.name_en, component.name_zh);
    const registryEntry = registry.get(generatedId);
    await supabase.from("component_sync_state").upsert({
      component_record_id: component.id,
      figma_cache_status: registryEntry?.figma?.contextPath ? "ready" : needsAutoSync(component.status) ? "missing" : "n/a",
      md_status: registryEntry?.syncStatus ?? "missing",
      registry_status: registryEntry?.syncStatus ?? "missing",
      preview_status: registryEntry?.syncStatus === "synced" ? "ready" : "pending",
      code_status: ["新增", "修改"].includes(component.status) ? "needs_review" : "n/a",
      last_job_id: jobId,
      last_synced_at: now,
    });
  }
}

async function queueCodegenReview(jobId: string, components: ComponentRecord[]) {
  const reviewTargets = components.filter((component) => component.status === "新增" || component.status === "修改");
  if (!reviewTargets.length) {
    return;
  }

  const componentIds = reviewTargets.map((item) => item.id!);
  const { data: existing } = await supabase
    .from("sync_jobs")
    .select("id")
    .eq("job_type", "codegen_pr")
    .in("status", ["queued", "running", "needs_review"])
    .contains("scope_payload", { componentIds })
    .limit(1);
  if (existing && existing.length > 0) {
    await appendLog(jobId, "codegen", "warn", "Skipped creating duplicate codegen_pr job", { componentIds });
    return;
  }

  const { data, error } = await supabase.from("sync_jobs").insert({
    job_type: "codegen_pr",
    scope_type: reviewTargets.length > 1 ? "batch" : "component",
    scope_payload: {
      componentIds,
      upstreamJobId: jobId,
      suggestedBranch: `octo-hub/codegen-${Date.now()}`,
    },
    status: "needs_review",
    trigger_source: "auto",
    triggered_by: "worker",
    result_summary: `待生成代码 PR：${reviewTargets.map((item) => item.system_id).join(", ")}`,
  }).select("*").single();
  if (error) {
    throw error;
  }
  await appendLog(jobId, "codegen", "info", "Queued codegen_pr review job", { codegenJobId: data.id, componentIds });
}

export async function runSyncJob(jobId: string) {
  const job = await fetchJob(jobId);
  const components = await fetchComponents(job);

  await updateJob(jobId, { status: "running", started_at: new Date().toISOString(), error_summary: null });
  await appendLog(jobId, "job", "info", "Job started", {
    jobType: job.job_type,
    scopeType: job.scope_type,
    componentCount: components.length,
  });

  try {
    await writeExcelSource(jobId, components);
    await runCommand(jobId, "npm", ["run", "ds:build"], workflowRoot);

    const stats = await Promise.all([
      fs.stat(generatedRegistryPath),
      fs.stat(aiReferencePath),
      fs.stat(previewHtmlPath),
    ]);

    await updateSyncState(jobId, components);
    await queueCodegenReview(jobId, components);
    await updateJob(jobId, {
      status: "succeeded",
      finished_at: new Date().toISOString(),
      result_summary: `同步完成：${components.length} 个组件，registry / AI_REFERENCE / 预览站已刷新`,
    });
    await appendLog(jobId, "job", "info", "Job finished", {
      registryBytes: stats[0].size,
      aiReferenceBytes: stats[1].size,
      previewBytes: stats[2].size,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    await updateJob(jobId, {
      status: "failed",
      finished_at: new Date().toISOString(),
      error_summary: message,
    });
    await appendLog(jobId, "job", "error", "Job failed", { message });
    throw error;
  }
}

export async function pollForQueuedJobs(limit = 1) {
  const { data, error } = await supabase
    .from("sync_jobs")
    .select("*")
    .eq("status", "queued")
    .in("job_type", ["auto_sync", "manual_sync"])
    .order("created_at", { ascending: true })
    .limit(limit);
  if (error) {
    throw error;
  }
  return (data ?? []) as SyncJob[];
}

export async function importExistingExcel(owner = "excel-import") {
  const workbook = XLSX.readFile(excelPath);
  const records: ComponentRecord[] = [];
  const sheetCategoryMap = {
    "🔵 基础类": "basic",
    "📦 容器类": "container",
    "🧭 导航类": "navigation",
    "📝 表单类": "form",
    "📊 数据展示类": "data-display",
    "🔔 反馈类": "feedback",
  } as const;

  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json<(string | undefined)[]>(sheet, { header: 1 });
    const category = sheetCategoryMap[sheetName as keyof typeof sheetCategoryMap];
    if (!category) {
      continue;
    }
    for (const row of rows.slice(2)) {
      const nameCell = String(row[0] ?? "").trim();
      if (!nameCell) {
        continue;
      }
      const [nameEn, nameZh = ""] = nameCell.split("\n");
      const normalized = normalizeImportedStatus(String(row[1] ?? ""));
      const note = String(row[3] ?? "").trim();
      const record: ComponentRecord = {
        system_id: componentIdFromNames(nameEn, nameZh),
        name_en: nameEn,
        name_zh: nameZh,
        category: category as ComponentRecord["category"],
        status: normalized.status,
        figma_url: String(row[2] ?? "").trim() || null,
        node_id: null,
        note: [normalized.migrated, note].filter(Boolean).join(" | "),
        owner,
        created_by: owner,
        updated_by: owner,
      };
      records.push(record);
    }
  }

  const { error } = await supabase.from("component_records").upsert(records, { onConflict: "system_id" });
  if (error) {
    throw error;
  }
  return records.length;
}
