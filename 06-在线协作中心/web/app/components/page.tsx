import Link from "next/link";
import { listComponents } from "../lib/data";
import { ComponentsTable } from "../components/components/components-table";

export const dynamic = "force-dynamic";

export default async function ComponentsPage() {
  const components = await listComponents();

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">组件维护</h1>
          <p className="page-copy">组件状态、Figma 链接、负责人和备注都在这里维护。在线表单是新的主数据源，Excel 只保留为兼容格式。</p>
        </div>
        <div className="actions">
          <Link href="/components/new" className="button">新增组件</Link>
        </div>
      </div>
      <section className="panel">
        <ComponentsTable components={components} />
      </section>
    </>
  );
}
