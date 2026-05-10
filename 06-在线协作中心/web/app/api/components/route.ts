import { NextResponse } from "next/server";
import { componentRecordSchema } from "../../lib/shared";
import { getSupabaseAdmin } from "../../lib/supabase-admin";
import { queueAutoSyncIfNeeded } from "../../lib/jobs";

export async function GET() {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from("component_records").select("*").order("updated_at", { ascending: false });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data ?? []);
}

export async function POST(request: Request) {
  try {
    const payload = componentRecordSchema.parse(await request.json());
    const supabase = getSupabaseAdmin() as any;
    const { data, error } = await supabase
      .from("component_records")
      .insert({
        ...payload,
        created_by: payload.owner || "unknown",
        updated_by: payload.owner || "unknown",
      })
      .select("*")
      .single();
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    await queueAutoSyncIfNeeded(data);
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid payload" }, { status: 400 });
  }
}
