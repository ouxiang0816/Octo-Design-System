import { z } from "zod";

export const componentStatuses = ["需要", "新增", "修改", "已有", "暂定"] as const;
export const componentCategories = [
  "basic",
  "container",
  "navigation",
  "form",
  "data-display",
  "feedback",
] as const;
export const jobTypes = ["auto_sync", "manual_sync", "codegen_pr"] as const;
export const scopeTypes = ["component", "batch", "full"] as const;
export const triggerSources = ["auto", "manual"] as const;
export const jobStatuses = ["queued", "running", "succeeded", "failed", "needs_review"] as const;
export const figmaFetchStatuses = new Set<ComponentStatus>(["需要", "新增", "修改"]);

export type ComponentStatus = (typeof componentStatuses)[number];
export type ComponentCategory = (typeof componentCategories)[number];
export type JobType = (typeof jobTypes)[number];
export type ScopeType = (typeof scopeTypes)[number];
export type TriggerSource = (typeof triggerSources)[number];
export type JobStatus = (typeof jobStatuses)[number];

export const categoryLabels: Record<ComponentCategory, string> = {
  basic: "基础类",
  container: "容器类",
  navigation: "导航类",
  form: "表单类",
  "data-display": "数据展示类",
  feedback: "反馈类",
};

export const componentRecordSchema = z.object({
  id: z.string().uuid().optional(),
  system_id: z.string().min(1, "system_id is required"),
  name_en: z.string().min(1, "name_en is required"),
  name_zh: z.string().min(1, "name_zh is required"),
  category: z.enum(componentCategories),
  status: z.enum(componentStatuses),
  figma_url: z.string().url().nullable().or(z.literal("")).transform((value) => value || null),
  node_id: z.string().nullable().or(z.literal("")).transform((value) => value || null),
  note: z.string().default(""),
  owner: z.string().default(""),
});

export const syncJobRequestSchema = z.object({
  componentIds: z.array(z.string().uuid()).default([]),
  fullSync: z.boolean().default(false),
});

export const retryJobSchema = z.object({
  retry: z.literal(true).default(true),
});

export type ComponentRecordInput = z.input<typeof componentRecordSchema>;
export type ComponentRecordPayload = z.output<typeof componentRecordSchema>;
export type SyncJobRequest = z.infer<typeof syncJobRequestSchema>;

export interface ComponentRecord extends ComponentRecordPayload {
  created_at?: string;
  updated_at?: string;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface SyncJob {
  id: string;
  job_type: JobType;
  scope_type: ScopeType;
  scope_payload: Record<string, unknown>;
  status: JobStatus;
  trigger_source: TriggerSource;
  triggered_by: string | null;
  result_summary: string | null;
  error_summary: string | null;
  started_at: string | null;
  finished_at: string | null;
  created_at: string;
}

export interface SyncLog {
  id: string;
  job_id: string;
  step: string;
  level: "info" | "warn" | "error";
  message: string;
  payload: Record<string, unknown> | null;
  created_at: string;
}

export function needsAutoSync(status: ComponentStatus): boolean {
  return figmaFetchStatuses.has(status);
}

export function extractNodeId(figmaUrl: string | null): string | null {
  if (!figmaUrl) {
    return null;
  }
  const parsed = new URL(figmaUrl);
  const nodeId = parsed.searchParams.get("node-id");
  return nodeId ? nodeId.replace(/-/g, ":") : null;
}
