"use client";

import { useState } from "react";

export function ManualSyncPanel() {
  const [componentIds, setComponentIds] = useState("");
  const [fullSync, setFullSync] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const ids = componentIds
      .split(/[,\n]/)
      .map((item) => item.trim())
      .filter(Boolean);
    const response = await fetch("/api/sync-jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ componentIds: ids, fullSync }),
    });
    const payload = await response.json();
    setMessage(response.ok ? `已创建任务 ${payload.id}` : payload.error ?? "创建失败");
    if (response.ok) {
      setComponentIds("");
      setFullSync(false);
    }
  }

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <h2 className="panel-title">手动触发同步</h2>
      <div className="field">
        <label htmlFor="componentIds">组件 ID 列表</label>
        <textarea
          id="componentIds"
          value={componentIds}
          placeholder="每行一个 UUID，或逗号分隔。留空并勾选全量同步时，将触发 full sync。"
          onChange={(event) => setComponentIds(event.target.value)}
        />
      </div>
      <div className="field">
        <label>
          <input type="checkbox" checked={fullSync} onChange={(event) => setFullSync(event.target.checked)} /> 全量同步
        </label>
      </div>
      <div className="actions">
        <button className="button" type="submit">创建任务</button>
      </div>
      {message ? <div className="help">{message}</div> : null}
    </form>
  );
}
