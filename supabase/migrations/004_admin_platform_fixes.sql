-- 004: close admin authorization gaps and persist shared admin operations.
-- Run after 001, 002_platform_analytics.sql and 003_admin_user_management.sql.

-- Prevent users from promoting themselves by updating their own profile row.
-- Ordinary users may edit only their own non-privileged profile fields.
revoke update on table public.djp_profiles from authenticated;
grant update (full_name, onboarded, intended_course, last_active_at)
  on table public.djp_profiles to authenticated;

-- djp_roles.user_id references djp_profiles.id, not auth.users.id.
create or replace function public.djp_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public, auth
as $$
  select exists (
    select 1
    from public.djp_profiles p
    where p.auth_id = auth.uid()
      and p.role = 'admin'
      and p.active = true
  );
$$;

create or replace function public.djp_admin_publish_announcement(p_title text, p_body text)
returns jsonb
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  caller public.djp_profiles%rowtype;
  announcement_id uuid;
  recipients integer;
begin
  select * into caller from public.djp_profiles
  where auth_id = auth.uid() and role = 'admin' and active = true;
  if caller.id is null then raise exception 'Administrator access required' using errcode = '42501'; end if;
  if length(trim(coalesce(p_title, ''))) = 0 or length(trim(coalesce(p_title, ''))) > 160
     or length(trim(coalesce(p_body, ''))) = 0 or length(trim(coalesce(p_body, ''))) > 10000 then
    raise exception 'A title (max 160 chars) and message (max 10000 chars) are required.' using errcode = '22023';
  end if;
  insert into public.djp_announcements(title, body, author)
  values (trim(p_title), trim(p_body), caller.full_name)
  returning id into announcement_id;
  insert into public.djp_notifications(user_id, title, body, kind, link)
  select p.id, 'Announcement: ' || trim(p_title), trim(p_body), 'announcement', '/app/notifications'
  from public.djp_profiles p
  where p.role = 'student' and p.active = true and p.is_demo = false;
  get diagnostics recipients = row_count;
  return jsonb_build_object('id', announcement_id, 'notifications_created', recipients);
end;
$$;

create or replace function public.djp_admin_get_content_state()
returns jsonb
language plpgsql
security definer
set search_path = public, auth
as $$
declare result jsonb;
begin
  if not exists (select 1 from public.djp_profiles where auth_id = auth.uid() and role = 'admin' and active = true) then
    raise exception 'Administrator access required' using errcode = '42501';
  end if;
  select value into result from public.djp_platform_settings where key = 'admin_content_state';
  return coalesce(result, '{}'::jsonb);
end;
$$;

create or replace function public.djp_admin_save_content_state(p_state jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public, auth
as $$
begin
  if not exists (select 1 from public.djp_profiles where auth_id = auth.uid() and role = 'admin' and active = true) then
    raise exception 'Administrator access required' using errcode = '42501';
  end if;
  if jsonb_typeof(p_state) <> 'object' or pg_column_size(p_state) > 5000000 then
    raise exception 'Invalid or oversized content state.' using errcode = '22023';
  end if;
  insert into public.djp_platform_settings(key, value, updated_at)
  values ('admin_content_state', p_state, now())
  on conflict (key) do update set value = excluded.value, updated_at = now();
  return jsonb_build_object('saved', true, 'updated_at', now());
end;
$$;

revoke all on function public.djp_admin_publish_announcement(text, text) from public;
revoke all on function public.djp_admin_get_content_state() from public;
revoke all on function public.djp_admin_save_content_state(jsonb) from public;
grant execute on function public.djp_admin_publish_announcement(text, text) to authenticated;
grant execute on function public.djp_admin_get_content_state() to authenticated;
grant execute on function public.djp_admin_save_content_state(jsonb) to authenticated;
