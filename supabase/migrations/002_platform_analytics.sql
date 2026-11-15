-- Platform analytics for the Official Darax Free JAMB Prep.
-- Apply this migration in the Supabase SQL editor after 001_djp_schema.sql.
create table if not exists public.djp_page_views (
  id bigint generated always as identity primary key,
  visitor_id uuid not null,
  path text not null,
  viewed_at timestamptz not null default now()
);
create index if not exists idx_djp_page_views_viewed_at on public.djp_page_views(viewed_at desc);
create index if not exists idx_djp_page_views_visitor on public.djp_page_views(visitor_id);
alter table public.djp_page_views enable row level security;
drop policy if exists "record anonymous page views" on public.djp_page_views;
create policy "record anonymous page views" on public.djp_page_views
  for insert to anon, authenticated with check (
    path like '/%' and length(path) <= 300
  );
revoke all on public.djp_page_views from anon, authenticated;
grant insert on public.djp_page_views to anon, authenticated;
grant usage, select on sequence public.djp_page_views_id_seq to anon, authenticated;

create or replace function public.djp_admin_analytics()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  result jsonb;
begin
  if not exists (
    select 1 from public.djp_profiles
    where auth_id = auth.uid() and role = 'admin' and active = true
  ) then
    raise exception 'Administrator access required' using errcode = '42501';
  end if;

  select jsonb_build_object(
    'registered_users', (select count(*) from public.djp_profiles where role = 'student' and is_demo = false),
    'active_users_7d', (select count(*) from public.djp_profiles where role = 'student' and is_demo = false and last_active_at >= now() - interval '7 days'),
    'total_page_views', (select count(*) from public.djp_page_views),
    'unique_visitors', (select count(distinct visitor_id) from public.djp_page_views),
    'views_24h', (select count(*) from public.djp_page_views where viewed_at >= now() - interval '24 hours'),
    'views_7d', (select count(*) from public.djp_page_views where viewed_at >= now() - interval '7 days'),
    'views_30d', (select count(*) from public.djp_page_views where viewed_at >= now() - interval '30 days'),
    'last_updated', now()
  ) into result;
  return result;
end;
$$;
revoke all on function public.djp_admin_analytics() from public;
grant execute on function public.djp_admin_analytics() to authenticated;
