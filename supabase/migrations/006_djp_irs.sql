-- The Official Darax Free JAMB Prep — migration 006: Islamic Religious Studies (IRS)
-- Apply AFTER 005 in the Supabase dashboard SQL editor. Seeds the IRS subject
-- row and the IRS course combinations (Islamic Studies, Religious Studies with
-- IRS, Law with IRS). Existing subjects, combinations and profiles untouched.
-- NOTE: apply in the Supabase dashboard SQL editor. Do not claim it is live until
-- the check below has been verified on the project.

-- Seed the IRS subject (id, name, short, colour, tagline, description match
-- lib/curriculum/irs.ts exactly).
insert into public.djp_subjects (id, name, short, colour, tagline, description) values
  ('irs','Islamic Religious Studies','IRS','#2563eb','The Qur''an, Hadith, beliefs, history and Shariah.','Master the Qur''an and Hadith, Islamic beliefs and practices, the life of the Prophet Muhammad, the Caliphate and the spread of Islam, Shariah and Islamic ethics for JAMB, with accurate references and original practice questions.')
on conflict (id) do nothing;

-- Seed the IRS course combinations (English always included).
insert into public.djp_subject_combinations (course, subjects, note) values
  ('Islamic Studies', array['english','irs','government','literature'], 'Islamic Studies requires English, Islamic Religious Studies, Government and Literature in English.'),
  ('Religious Studies', array['english','irs','government','literature'], 'Religious Studies requires English, IRS, Government and Literature in English.'),
  ('Law', array['english','literature','government','irs'], 'Law requires English, Literature in English, Government and IRS.')
on conflict (course, subjects) do nothing;

-- Grants — NARROW on purpose, same as 005: read access to the new reference
-- rows only. NO profile grants, NO broad grants; 004's column allow-list on
-- djp_profiles is untouched.
grant select on public.djp_subjects to anon, authenticated;
grant select on public.djp_subject_combinations to anon, authenticated;

-- Verify with:
--   select id, name, short, colour from public.djp_subjects where id = 'irs';
--   select course, subjects from public.djp_subject_combinations where 'irs' = any(subjects) order by course;
