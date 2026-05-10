import { NextResponse } from "next/server";
import { syncJobRequestSchema } from "../../lib/shared";
import { getSupabaseAdmin } from "../../lib/supabase-admin";

export async function GET() {
  const supabase = getSupabaseAdmin() as any;
  const { data, error } = await supabase.from("sync_jobs").select("*").order("created_at", { ascending: false });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data ?? []);
}

export async function POST(request: Request) {
  try {
    const payload = syncJobRequestSchema.parse(await request.json());
    const scopeType = payload.fullSync ? "full" : payload.componentIds.length > 1 ? "batch" : "component";
    const supabase = getSupabaseAdmin() as any;
    const { data, error } = await supabase
      .from("sync_jobs")
      .insert({
        job_type: "manual_sync",
        scope_type: scopeType,
        scope_payload: payload.fullSync ? { fullSync: true } : { componentIds: payload.componentIds },
        status: "queued",
        trigger_source: "manual",
        triggered_by: "web-user",
      })
      .select("*")
      .single();
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid payload" }, { status: 400 });
  }
}
