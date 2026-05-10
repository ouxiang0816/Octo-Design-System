import Link from "next/link";
import { listJobs } from "../lib/data";
import { JobsTable } from "../components/jobs/jobs-table";
import { ManualSyncPanel } from "../components/jobs/manual-sync-panel";

export const dynamic = "force-dynamic";

export default async function JobsPage() {
  const jobs = await listJobs();

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">同步任务</h1>
          <p className="page-copy">自动任务和手动任务都在这里。worker 会轮询队列或由 GitHub Actions 接手执行。</p>
        </div>
        <div className="actions">
          <Link className="button-secondary" href="/components">返回组件维护</Link>
        </div>
      </div>
      <div className="two-up">
        <section className="panel panel-stack">
          <div>
            <h2 className="panel-title">任务队列</h2>
            <p className="muted">`auto_sync` 会由组件状态变化自动产生；`manual_sync` 用于补跑；`codegen_pr` 代表后续需要审核的代码改动。</p>
          </div>
          <JobsTable jobs={jobs} />
        </section>
        <ManualSyncPanel />
      </div>
    </>
  );
}
