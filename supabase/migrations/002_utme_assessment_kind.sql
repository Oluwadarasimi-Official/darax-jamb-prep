-- Allow full UTME simulation attempts in the existing assessment records.
-- Apply this migration to Supabase if the project has Supabase persistence enabled.
alter table public.djp_assessment_attempts
  drop constraint if exists djp_assessment_attempts_kind_check;
alter table public.djp_assessment_attempts
  add constraint djp_assessment_attempts_kind_check
  check (kind in ('lesson','topic','subject','mixed','mock','utme'));

alter table public.djp_assessments
  drop constraint if exists djp_assessments_kind_check;
alter table public.djp_assessments
  add constraint djp_assessments_kind_check
  check (kind in ('lesson','topic','subject','mixed','mock','utme'));
