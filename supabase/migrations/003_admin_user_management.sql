-- 003: Live administrator user directory and safe account controls.
-- Run after 001_djp_schema.sql and 002_platform_analytics.sql in Supabase SQL Editor.

create or replace function public.djp_admin_user_directory()
returns jsonb
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  result jsonb;
begin
  if not exists (
    select 1 from public.djp_profiles p
    where p.auth_id = auth.uid() and p.role = 'admin' and p.active = true
  ) then
    raise exception 'Administrator access required' using errcode = '42501';
  end if;

  select coalesce(jsonb_agg(jsonb_build_object(
    'id', p.id, 'full_name', p.full_name, 'username', p.username,
    'email', p.email, 'role', p.role, 'active', p.active,
    'is_demo', p.is_demo, 'created_at', p.created_at,
    'last_active_at', p.last_active_at
  ) order by p.created_at desc), '[]'::jsonb)
  into result
  from public.djp_profiles p;

  return result;
end;
$$;

create or replace function public.djp_admin_update_user(
  target_profile_id uuid,
  new_role text default null,
  new_active boolean default null
)
returns jsonb
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  caller_id uuid;
  updated_row public.djp_profiles%rowtype;
begin
  select id into caller_id from public.djp_profiles
  where auth_id = auth.uid() and role = 'admin' and active = true;
  if caller_id is null then
    raise exception 'Administrator access required' using errcode = '42501';
  end if;
  if target_profile_id = caller_id then
    raise exception 'You cannot change your own administrator account' using errcode = '42501';
  end if;
  if new_role is not null and new_role not in ('student', 'admin') then
    raise exception 'Invalid role' using errcode = '22023';
  end if;
  update public.djp_profiles
  set role = coalesce(new_role, role), active = coalesce(new_active, active)
  where id = target_profile_id
  returning * into updated_row;
  if not found then raise exception 'User not found' using errcode = 'P0002'; end if;

  if new_role = 'admin' then
    insert into public.djp_roles(user_id, role) values (target_profile_id, 'admin')
    on conflict (user_id, role) do nothing;
  elsif new_role = 'student' then
    delete from public.djp_roles where user_id = target_profile_id and role = 'admin';
  end if;

  return jsonb_build_object('id', updated_row.id, 'role', updated_row.role, 'active', updated_row.active);
end;
$$;

revoke all on function public.djp_admin_user_directory() from public;
revoke all on function public.djp_admin_update_user(uuid, text, boolean) from public;
grant execute on function public.djp_admin_user_directory() to authenticated;
grant execute on function public.djp_admin_update_user(uuid, text, boolean) to authenticated;
