import { createClient } from "@supabase/supabase-js";
import { supabaseServiceRoleKey, supabaseUrl } from "./config.js";

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL/SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
}

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false },
});

export async function appendLog(jobId: string, step: string, level: "info" | "warn" | "error", message: string, payload?: Record<string, unknown>) {
  await supabase.from("sync_logs").insert({
    job_id: jobId,
    step,
    level,
    message,
    payload: payload ?? null,
  });
}
