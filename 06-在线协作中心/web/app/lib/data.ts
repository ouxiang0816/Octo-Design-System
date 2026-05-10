import type { ComponentRecord, ComponentStatus, SyncJob, SyncLog } from "./shared";
import { categoryLabels } from "./shared";
import { getSupabaseAdmin } from "./supabase-admin";

export async function listComponents() {
  const supabase = getSupabaseAdmin() as any;
  const { data, error } = await supabase
    .from("component_records")
    .select("*, component_sync_state(*)")
    .order("updated_at", { ascending: false });
  if (error) {
    throw error;
  }
  return (data ?? []) as Array<ComponentRecord & { component_sync_state?: Record<string, string | null>[] }>;
}

export async function getComponentById(id: string) {
  const supabase = getSupabaseAdmin() as any;
  const { data, error } = await supabase
    .from("component_records")
    .select("*, component_sync_state(*)")
    .eq("id", id)
    .single();
  if (error) {
    throw error;
  }
  return data as ComponentRecord & { component_sync_state?: Record<string, string | null>[] };
}

export async function listJobs(limit = 30) {
  const supabase = getSupabaseAdmin() as any;
  const { data, error } = await supabase
    .from("sync_jobs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) {
    throw error;
  }
  return (data ?? []) as SyncJob[];
}

export async function getJobDetail(id: string) {
  const supabase = getSupabaseAdmin();
  const [{ data: job, error: jobError }, { data: logs, error: logError }] = await Promise.all([
    supabase.from("sync_jobs").select("*").eq("id", id).single(),
    supabase.from("sync_logs").select("*").eq("job_id", id).order("created_at", { ascending: true }),
  ]);
  if (jobError) {
    throw jobError;
  }
  if (logError) {
    throw logError;
  }
  return {
    job: job as SyncJob,
    logs: (logs ?? []) as SyncLog[],
  };
}

export async function getDashboardSummary() {
  const [components, jobs] = await Promise.all([listComponents(), listJobs(50)]);
  const statusCounts = components.reduce<Record<ComponentStatus, number>>(
    (acc, item) => {
      acc[item.status] += 1;
      return acc;
    },
    { 需要: 0, 新增: 0, 修改: 0, 已有: 0, 暂定: 0 },
  );
  const categoryCounts = Object.entries(categoryLabels).map(([key, label]) => ({
    key,
    label,
    count: components.filter((item) => item.category === key).length,
  }));
  return {
    components,
    jobs,
    statusCounts,
    categoryCounts,
    pendingJobs: jobs.filter((job) => job.status === "queued" || job.status === "running").length,
  };
}
