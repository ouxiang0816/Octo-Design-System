import { NextResponse } from "next/server";
import { retryJobSchema } from "../../../../lib/shared";
import { getSupabaseAdmin } from "../../../../lib/supabase-admin";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    retryJobSchema.parse(await request.json());
    const { id } = await params;
    const supabase = getSupabaseAdmin() as any;
    const { data: existing, error: readError } = await supabase.from("sync_jobs").select("*").eq("id", id).single();
    if (readError) {
      return NextResponse.json({ error: readError.message }, { status: 404 });
    }
    const { data, error } = await supabase
      .from("sync_jobs")
      .insert({
        job_type: existing.job_type,
        scope_type: existing.scope_type,
        scope_payload: existing.scope_payload,
        status: "queued",
        trigger_source: "manual",
        triggered_by: "retry",
      })
      .select("*")
      .single();
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid request" }, { status: 400 });
  }
}
