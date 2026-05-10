"use client";

import { useState } from "react";
import type { SyncJob } from "../../lib/shared";
import { StatusBadge } from "../ui/status-badge";
import Link from "next/link";

export function JobsTable({ jobs }: { jobs: SyncJob[] }) {
  const [busyId, setBusyId] = useState<string | null>(null);

  async function retryJob(id: string) {
    setBusyId(id);
    await fetch(`/api/sync-jobs/${id}/retry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ retry: true }),
    });
    window.location.reload();
  }

  if (!jobs.length) {
    return <div className="empty">当前没有同步任务。</div>;
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>任务ID</th>
            <th>类型</th>
            <th>范围</th>
            <th>状态</th>
            <th>结果</th>
            <th>开始</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td><code>{job.id.slice(0, 8)}</code></td>
              <td><StatusBadge label={job.job_type} tone={job.job_type} /></td>
              <td>{job.scope_type}</td>
              <td><StatusBadge label={job.status} tone={job.status} /></td>
              <td>{job.result_summary ?? job.error_summary ?? "等待执行"}</td>
              <td>{job.started_at ? new Date(job.started_at).toLocaleString() : "未开始"}</td>
              <td>
                <Link className="button-ghost" href={`/jobs/${job.id}`}>
                  日志
                </Link>
                {(job.status === "failed" || job.status === "needs_review") ? (
                  <button className="button-secondary" onClick={() => retryJob(job.id)} disabled={busyId === job.id}>
                    {busyId === job.id ? "处理中..." : "重试"}
                  </button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
