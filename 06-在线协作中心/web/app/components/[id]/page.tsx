import { notFound } from "next/navigation";
import { ComponentForm } from "../../components/forms/component-form";
import { getComponentById, listJobs } from "../../lib/data";

export const dynamic = "force-dynamic";

export default async function ComponentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const [component, jobs] = await Promise.all([getComponentById(id), listJobs(10)]);
    const relatedJobs = jobs.filter((job) => {
      const componentIds = Array.isArray((job.scope_payload as { componentIds?: string[] })?.componentIds)
        ? (job.scope_payload as { componentIds?: string[] }).componentIds ?? []
        : [];
      return componentIds.includes(id);
    });

    return (
      <>
        <div className="page-header">
          <div>
            <h1 className="page-title">{component.name_en} / {component.name_zh}</h1>
            <p className="page-copy">当前组件的最近任务、同步状态和 Figma 信息都围绕这一条记录组织。</p>
          </div>
        </div>
        <div className="two-up">
          <ComponentForm mode="edit" initialValue={component} />
          <section className="panel panel-stack">
            <div>
              <h2 className="panel-title">最近任务</h2>
              <p className="muted">和这条组件记录相关的任务会显示在这里。</p>
            </div>
            {relatedJobs.length ? (
              <div className="log-list">
                {relatedJobs.map((job) => (
                  <div className="log-item" key={job.id}>
                    <strong>{job.job_type}</strong>
                    <div className="muted">{job.status}</div>
                    <div>{job.result_summary ?? job.error_summary ?? "等待执行"}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty">还没有关联任务。</div>
            )}
          </section>
        </div>
      </>
    );
  } catch {
    notFound();
  }
}
