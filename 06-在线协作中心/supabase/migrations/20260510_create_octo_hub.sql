create extension if not exists "pgcrypto";

create table if not exists public.component_records (
  id uuid primary key default gen_random_uuid(),
  system_id text not null unique,
  name_en text not null,
  name_zh text not null,
  category text not null check (category in ('basic', 'container', 'navigation', 'form', 'data-display', 'feedback')),
  status text not null check (status in ('需要', '新增', '修改', '已有', '暂定')),
  figma_url text,
  node_id text,
  note text not null default '',
  owner text not null default '',
  created_by text,
  updated_by text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.sync_jobs (
  id uuid primary key default gen_random_uuid(),
  job_type text not null check (job_type in ('auto_sync', 'manual_sync', 'codegen_pr')),
  scope_type text not null check (scope_type in ('component', 'batch', 'full')),
  scope_payload jsonb not null default '{}'::jsonb,
  status text not null check (status in ('queued', 'running', 'succeeded', 'failed', 'needs_review')),
  trigger_source text not null check (trigger_source in ('auto', 'manual')),
  triggered_by text,
  result_summary text,
  error_summary text,
  started_at timestamptz,
  finished_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.sync_logs (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.sync_jobs(id) on delete cascade,
  step text not null,
  level text not null check (level in ('info', 'warn', 'error')),
  message text not null,
  payload jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.component_sync_state (
  component_record_id uuid primary key references public.component_records(id) on delete cascade,
  figma_cache_status text,
  md_status text,
  registry_status text,
  preview_status text,
  code_status text,
  last_job_id uuid references public.sync_jobs(id) on delete set null,
  last_synced_at timestamptz
);

create index if not exists sync_jobs_status_created_at_idx on public.sync_jobs(status, created_at);
create index if not exists sync_logs_job_id_created_at_idx on public.sync_logs(job_id, created_at);

create or replace function public.touch_component_records_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists component_records_updated_at on public.component_records;
create trigger component_records_updated_at
before update on public.component_records
for each row
execute procedure public.touch_component_records_updated_at();

alter table public.component_records enable row level security;
alter table public.sync_jobs enable row level security;
alter table public.sync_logs enable row level security;
alter table public.component_sync_state enable row level security;

create policy "authenticated read component records"
on public.component_records
for select
to authenticated
using (true);

create policy "authenticated mutate component records"
on public.component_records
for all
to authenticated
using (true)
with check (true);

create policy "authenticated read sync jobs"
on public.sync_jobs
for select
to authenticated
using (true);

create policy "authenticated create sync jobs"
on public.sync_jobs
for insert
to authenticated
with check (true);

create policy "service role mutate sync jobs"
on public.sync_jobs
for update
to service_role
using (true)
with check (true);

create policy "authenticated read sync logs"
on public.sync_logs
for select
to authenticated
using (true);

create policy "service role write sync logs"
on public.sync_logs
for insert
to service_role
with check (true);

create policy "authenticated read sync state"
on public.component_sync_state
for select
to authenticated
using (true);

create policy "service role mutate sync state"
on public.component_sync_state
for all
to service_role
using (true)
with check (true);
