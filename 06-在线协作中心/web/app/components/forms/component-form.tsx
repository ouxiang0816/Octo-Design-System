"use client";

import { useMemo, useState } from "react";
import { categoryLabels, componentCategories, componentStatuses, extractNodeId, type ComponentRecord } from "../../lib/shared";
import { useRouter } from "next/navigation";

interface ComponentFormProps {
  mode: "create" | "edit";
  initialValue?: Partial<ComponentRecord>;
}

export function ComponentForm({ mode, initialValue }: ComponentFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    system_id: initialValue?.system_id ?? "",
    name_en: initialValue?.name_en ?? "",
    name_zh: initialValue?.name_zh ?? "",
    category: initialValue?.category ?? "basic",
    status: initialValue?.status ?? "需要",
    figma_url: initialValue?.figma_url ?? "",
    node_id: initialValue?.node_id ?? "",
    note: initialValue?.note ?? "",
    owner: initialValue?.owner ?? "",
  });

  const inferredNodeId = useMemo(() => extractNodeId(form.figma_url || null), [form.figma_url]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError(null);
    const method = mode === "create" ? "POST" : "PATCH";
    const endpoint = mode === "create" ? "/api/components" : `/api/components/${initialValue?.id}`;
    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        node_id: form.node_id || inferredNodeId,
      }),
    });
    if (!response.ok) {
      const payload = await response.json().catch(() => ({ error: "保存失败" }));
      setError(payload.error ?? "保存失败");
      setSaving(false);
      return;
    }
    router.push("/components");
    router.refresh();
  }

  return (
    <form className="panel panel-stack" onSubmit={handleSubmit}>
      <div>
        <h2 className="panel-title">{mode === "create" ? "新增组件记录" : "编辑组件记录"}</h2>
        <p className="page-copy" style={{ marginTop: 0 }}>
          保存后，如果状态是“需要 / 新增 / 修改”，系统会自动创建同步任务，不再要求成员把 Excel 内容手动发给维护者。
        </p>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="system_id">系统ID</label>
          <input id="system_id" value={form.system_id} onChange={(event) => setForm((prev) => ({ ...prev, system_id: event.target.value }))} />
        </div>
        <div className="field">
          <label htmlFor="owner">负责人</label>
          <input id="owner" value={form.owner} onChange={(event) => setForm((prev) => ({ ...prev, owner: event.target.value }))} />
        </div>
        <div className="field">
          <label htmlFor="name_en">英文名</label>
          <input id="name_en" value={form.name_en} onChange={(event) => setForm((prev) => ({ ...prev, name_en: event.target.value }))} />
        </div>
        <div className="field">
          <label htmlFor="name_zh">中文名</label>
          <input id="name_zh" value={form.name_zh} onChange={(event) => setForm((prev) => ({ ...prev, name_zh: event.target.value }))} />
        </div>
        <div className="field">
          <label htmlFor="category">分类</label>
          <select id="category" value={form.category} onChange={(event) => setForm((prev) => ({ ...prev, category: event.target.value as ComponentRecord["category"] }))}>
            {componentCategories.map((category) => (
              <option key={category} value={category}>{categoryLabels[category]}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="status">状态</label>
          <select id="status" value={form.status} onChange={(event) => setForm((prev) => ({ ...prev, status: event.target.value as ComponentRecord["status"] }))}>
            {componentStatuses.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="figma_url">Figma 链接</label>
          <input id="figma_url" value={form.figma_url ?? ""} onChange={(event) => setForm((prev) => ({ ...prev, figma_url: event.target.value }))} />
        </div>
        <div className="field">
          <label htmlFor="node_id">节点 ID</label>
          <input id="node_id" value={form.node_id ?? inferredNodeId ?? ""} onChange={(event) => setForm((prev) => ({ ...prev, node_id: event.target.value }))} />
          <div className="help">未填写时会尝试从 Figma 链接自动推断。</div>
        </div>
        <div className="field full">
          <label htmlFor="note">备注</label>
          <textarea id="note" value={form.note} onChange={(event) => setForm((prev) => ({ ...prev, note: event.target.value }))} />
        </div>
      </div>

      {error ? <div className="badge failed">{error}</div> : null}

      <div className="actions">
        <button type="submit" className="button" disabled={saving}>
          {saving ? "保存中..." : mode === "create" ? "创建并入队" : "保存更新"}
        </button>
        <button type="button" className="button-secondary" onClick={() => router.push("/components")}>
          返回列表
        </button>
      </div>
    </form>
  );
}
