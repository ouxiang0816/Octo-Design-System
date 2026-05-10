import type { ComponentRecord } from "./shared";
import { needsAutoSync } from "./shared";
import { getSupabaseAdmin } from "./supabase-admin";

export async function queueAutoSyncIfNeeded(component: ComponentRecord) {
  if (!needsAutoSync(component.status)) {
    return null;
  }
  const supabase = getSupabaseAdmin() as any;
  const { data: existing, error: existingError } = await supabase
    .from("sync_jobs")
    .select("id")
    .in("status", ["queued", "running"])
    .contains("scope_payload", { componentIds: [component.id] })
    .limit(1);
  if (existingError) {
    throw existingError;
  }
  if (existing && existing.length > 0) {
    return existing[0];
  }
  const { data, error } = await supabase
    .from("sync_jobs")
    .insert({
      job_type: "auto_sync",
      scope_type: "component",
      scope_payload: { componentIds: [component.id] },
      status: "queued",
      trigger_source: "auto",
      triggered_by: component.updated_by ?? component.created_by ?? null,
    })
    .select("*")
    .single();
  if (error) {
    throw error;
  }
  return data;
}
