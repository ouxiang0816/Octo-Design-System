import { notFound } from "next/navigation";
import { getJobDetail } from "../../lib/data";
import { StatusBadge } from "../../components/ui/status-badge";

export const dynamic = "force-dynamic";

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const detail = await getJobDetail(id);
    return (
      <>
        <div className="page-header">
          <div>
            <h1 className="page-title">任务 {detail.job.id.slice(0, 8)}</h1>
            <p className="page-copy">这里展示 worker 回写的结构化日志，便于团队成员自己定位失败步骤，而不是再来找你代查。</p>
          </div>
        </div>
        <div className="two-up">
          <section className="panel panel-stack">
            <div>
              <h2 className="panel-title">任务摘要</h2>
            </div>
            <div className="kpi-list">
              <div className="kpi-row"><span>类型</span><StatusBadge label={detail.job.job_type} tone={detail.job.job_type} /></div>
              <div className="kpi-row"><span>状态</span><StatusBadge label={detail.job.status} tone={detail.job.status} /></div>
              <div className="kpi-row"><span>范围</span><strong>{detail.job.scope_type}</strong></div>
              <div className="kpi-row"><span>结果</span><strong>{detail.job.result_summary ?? detail.job.error_summary ?? "等待执行"}</strong></div>
            </div>
          </section>
          <section className="panel panel-stack">
            <div>
              <h2 className="panel-title">执行日志</h2>
            </div>
            {detail.logs.length ? (
              <div className="log-list">
                {detail.logs.map((log) => (
                  <div className="log-item" key={log.id}>
                    <strong>{log.step}</strong> <span className="muted">{log.level}</span>
                    <div>{log.message}</div>
                    {log.payload ? <pre className="help">{JSON.stringify(log.payload, null, 2)}</pre> : null}
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty">当前没有日志。</div>
            )}
          </section>
        </div>
      </>
    );
  } catch {
    notFound();
  }
}
