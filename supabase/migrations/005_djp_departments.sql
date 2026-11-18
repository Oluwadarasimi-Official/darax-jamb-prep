-- The Official Darax Free JAMB Prep — migration 005: departments (Arts + Commercial)
-- Renumbered 005: 002/003/004 were taken by parallel admin-platform work
-- (002_platform_analytics, 002_utme_assessment_kind, 003_admin_user_management,
-- 004_admin_platform_fixes). Apply AFTER 004. Adds the department column to
-- djp_profiles, seeds the 7 new subjects (Literature, Government, CRS, Yoruba,
-- Economics, Commerce, Accounting) and the Arts/Commercial course combinations.
-- Existing accounts default to 'science'.
-- NOTE: apply in the Supabase dashboard SQL editor. Do not claim it is live until
-- the table/column check below has been verified on the project.

alter table public.djp_profiles
  add column if not exists department text not null default 'science'
  check (department in ('science', 'arts', 'commercial'));

-- Seed the 7 new subjects (ids match the app's curriculum; blue family only).
insert into public.djp_subjects (id, name, short, colour, tagline, description) values
  ('literature','Literature in English','LIT','#4a6fd4','African and world literature, drama, poetry and prose.','African prose, poetry and drama, literary devices, unseen passages and oral literature for JAMB.'),
  ('government','Government','GOV','#1e40af','Constitutions, federalism, parties and public administration.','Constitutions, federalism, political parties, democracy and public administration for JAMB.'),
  ('crs','Christian Religious Studies','CRS','#60a5fa','Old and New Testament themes, parables and epistles.','Old and New Testament themes, the parables and miracles of Jesus, the early Church and Christian ethics for JAMB.'),
  ('yoruba','Yoruba','YOR','#6d9de0','Phonology, grammar, literature and culture.','Yoruba phonology and tones, orthography, grammar, oral and written literature, and Yoruba culture and customs for JAMB.'),
  ('economics','Economics','ECO','#0f2a5c','Demand, national income, money and markets.','Demand and supply, national income, money and banking, and market structures for JAMB.'),
  ('commerce','Commerce','COM','#2f6fd0','Trade, business, insurance and marketing.','Trade, business organisations, insurance, marketing and banking for JAMB.'),
  ('accounting','Accounting','ACC','#5a9bd4','Double entry, final accounts and partnerships.','Double entry, final accounts, partnership and company accounts for JAMB.')
on conflict (id) do nothing;

-- Seed Arts course combinations (English always included).
insert into public.djp_subject_combinations (course, subjects, note) values
  ('Law', array['english','literature','government','crs'], 'Law requires English, Literature in English, Government and CRS.'),
  ('Mass Communication', array['english','literature','government','economics'], 'Mass Communication requires English, Literature in English, Government and Economics (or CRS).'),
  ('English Language', array['english','literature','government','crs'], 'English Language requires English, Literature in English, Government and CRS.'),
  ('Theatre Arts', array['english','literature','government','crs'], 'Theatre Arts requires English, Literature in English, Government and CRS.'),
  ('Linguistics', array['english','literature','yoruba','government'], 'Linguistics requires English, Literature in English, a Nigerian language (Yoruba) and Government.'),
  ('Yoruba Language', array['english','yoruba','literature','government'], 'Yoruba Language requires English, Yoruba, Literature in English and Government.'),
  ('Religious Studies', array['english','crs','government','literature'], 'Religious Studies requires English, CRS, Government and Literature in English.')
on conflict (course, subjects) do nothing;

-- Seed Commercial course combinations (English always included).
insert into public.djp_subject_combinations (course, subjects, note) values
  ('Accounting', array['english','mathematics','economics','commerce'], 'Accounting requires English, Mathematics, Economics and Commerce (or Accounting).'),
  ('Business Administration', array['english','mathematics','economics','commerce'], 'Business Administration requires English, Mathematics, Economics and Commerce.'),
  ('Economics', array['english','mathematics','economics','government'], 'Economics requires English, Mathematics, Economics and Government (or Geography).'),
  ('Banking and Finance', array['english','mathematics','economics','commerce'], 'Banking and Finance requires English, Mathematics, Economics and Commerce.'),
  ('Marketing', array['english','mathematics','economics','commerce'], 'Marketing requires English, Mathematics, Economics and Commerce.'),
  ('Insurance', array['english','mathematics','economics','commerce'], 'Insurance requires English, Mathematics, Economics and Commerce.')
on conflict (course, subjects) do nothing;

-- Grants — NARROW on purpose. 004 locked djp_profiles updates down to a
-- column allow-list (full_name, onboarded, intended_course, last_active_at)
-- so users cannot promote themselves (role/active stay locked). A table-wide
-- UPDATE grant here would silently undo that, so this file grants ONLY:
--   * read access to the new reference rows (subjects + combinations), and
--   * UPDATE on the department column only — department is a user-chosen,
--     non-privileged field (like full_name), needed by onboarding and by
--     My Profile when a student switches department.
-- Signup INSERTs into djp_profiles (including department) keep working under
-- the table INSERT grant from 001; 004 revoked UPDATE only.
grant select on public.djp_subjects to anon, authenticated;
grant select on public.djp_subject_combinations to anon, authenticated;
grant update (department) on table public.djp_profiles to authenticated;

-- Verify with:
--   select column_name from information_schema.columns where table_name = 'djp_profiles' and column_name = 'department';
--   select id from public.djp_subjects order by id;
