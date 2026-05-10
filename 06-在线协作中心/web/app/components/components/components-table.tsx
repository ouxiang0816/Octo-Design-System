import Link from "next/link";
import type { ComponentRecord } from "../../lib/shared";
import { categoryLabels } from "../../lib/shared";
import { StatusBadge } from "../ui/status-badge";

export function ComponentsTable({
  components,
}: {
  components: Array<ComponentRecord & { component_sync_state?: Record<string, string | null>[] }>;
}) {
  if (!components.length) {
    return <div className="empty">当前没有组件记录。</div>;
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>组件</th>
            <th>系统ID</th>
            <th>分类</th>
            <th>状态</th>
            <th>负责人</th>
            <th>同步</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {components.map((component) => {
            const syncState = component.component_sync_state?.[0];
            const syncTone = syncState?.last_synced_at ? "synced" : "missing";
            return (
              <tr key={component.id}>
                <td>
                  <strong>{component.name_en}</strong>
                  <div className="muted">{component.name_zh}</div>
                </td>
                <td><code>{component.system_id}</code></td>
                <td>{categoryLabels[component.category]}</td>
                <td><StatusBadge label={component.status} tone={component.status === "已有" ? "existing" : "queued"} /></td>
                <td>{component.owner || "未指定"}</td>
                <td>
                  <StatusBadge
                    label={syncState?.last_synced_at ? "已同步" : "待同步"}
                    tone={syncTone}
                  />
                </td>
                <td>
                  <Link href={`/components/${component.id}`} className="button-secondary">
                    编辑
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
