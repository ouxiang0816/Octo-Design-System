import Link from "next/link";
import { getDashboardSummary } from "./lib/data";
import { ComponentsTable } from "./components/components/components-table";
import { JobsTable } from "./components/jobs/jobs-table";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const summary = await getDashboardSummary();

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">设计系统协作总览</h1>
          <p className="page-copy">
            这里接管团队成员的组件状态维护和任务排队，把原来由维护者人工收集 Excel 内容的流程，改成统一在线表单和自动同步队列。
          </p>
        </div>
        <div className="actions">
          <Link href="/components/new" className="button">新增组件</Link>
          <Link href="/jobs" className="button-secondary">查看任务</Link>
        </div>
      </div>

      <section className="grid-tiles">
        <div className="tile">
          <div className="tile-label">组件记录</div>
          <div className="tile-value">{summary.components.length}</div>
        </div>
        <div className="tile">
          <div className="tile-label">待执行任务</div>
          <div className="tile-value">{summary.pendingJobs}</div>
        </div>
        <div className="tile">
          <div className="tile-label">需要 / 新增 / 修改</div>
          <div className="tile-value">
            {summary.statusCounts["需要"] + summary.statusCounts["新增"] + summary.statusCounts["修改"]}
          </div>
        </div>
        <div className="tile">
          <div className="tile-label">已有组件</div>
          <div className="tile-value">{summary.statusCounts["已有"]}</div>
        </div>
      </section>

      <div className="two-up">
        <section className="panel panel-stack">
          <div>
            <h2 className="panel-title">最近组件</h2>
            <p className="muted">组件状态保存后自动入队，默认同步到 Markdown、registry、AI Reference 和预览站。</p>
          </div>
          <ComponentsTable components={summary.components.slice(0, 8)} />
        </section>

        <section className="panel panel-stack">
          <div>
            <h2 className="panel-title">维护概况</h2>
          </div>
          <div className="kpi-list">
            {summary.categoryCounts.map((item) => (
              <div className="kpi-row" key={item.key}>
                <span>{item.label}</span>
                <strong>{item.count}</strong>
              </div>
            ))}
          </div>
          <div>
            <h3 className="panel-title" style={{ fontSize: 16 }}>状态分布</h3>
            <div className="status-list">
              {Object.entries(summary.statusCounts).map(([label, value]) => (
                <span className="badge queued" key={label}>{label} {value}</span>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="panel panel-stack" style={{ marginTop: 18 }}>
        <div>
          <h2 className="panel-title">最近任务</h2>
          <p className="muted">失败任务可以在任务页重试；代码级变更会被转成 `codegen_pr` 任务。</p>
        </div>
        <JobsTable jobs={summary.jobs.slice(0, 8)} />
      </section>
    </>
  );
}
