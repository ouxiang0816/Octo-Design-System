import { NextResponse } from "next/server";
import { componentRecordSchema } from "../../../lib/shared";
import { getSupabaseAdmin } from "../../../lib/supabase-admin";
import { queueAutoSyncIfNeeded } from "../../../lib/jobs";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const payload = componentRecordSchema.partial().parse(await request.json());
    const supabase = getSupabaseAdmin() as any;
    const { data: previous, error: previousError } = await supabase
      .from("component_records")
      .select("*")
      .eq("id", id)
      .single();
    if (previousError) {
      return NextResponse.json({ error: previousError.message }, { status: 404 });
    }
    const { data, error } = await supabase
      .from("component_records")
      .update({
        ...payload,
        updated_by: payload.owner || "unknown",
      })
      .eq("id", id)
      .select("*")
      .single();
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    const syncRelevantKeys = ["system_id", "name_en", "name_zh", "category", "status", "figma_url", "node_id"] as const;
    const shouldQueue = syncRelevantKeys.some((key) => previous[key] !== data[key]);
    if (shouldQueue) {
      await queueAutoSyncIfNeeded(data);
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid payload" }, { status: 400 });
  }
}
