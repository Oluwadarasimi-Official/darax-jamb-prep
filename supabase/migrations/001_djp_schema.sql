-- The Official Darax Free JAMB Prep — Supabase schema (djp_* tables)
-- Apply in the Supabase SQL editor (project dashboard) or via `supabase db push`.
-- Run AFTER creating the project. Requires pgcrypto (gen_random_uuid).
-- NOTE: the app works fully on its local per-device store until these env vars
-- are set (NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY). This
-- migration is the path to shared, server-side persistence. Do not claim
-- Supabase is live until the connection has been verified in the deployed app.

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------- profiles
create table if not exists public.djp_profiles (
  id uuid primary key default gen_random_uuid(),
  auth_id uuid unique,
  full_name text not null,
  username text not null unique,
  email text not null unique,
  role text not null default 'student' check (role in ('student','admin')),
  onboarded boolean not null default false,
  intended_course text,
  is_demo boolean not null default false,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  last_active_at timestamptz not null default now()
);
create table if not exists public.djp_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.djp_profiles(id) on delete cascade,
  role text not null check (role in ('student','admin')),
  granted_at timestamptz not null default now(),
  unique (user_id, role)
);

-- ---------------------------------------------------------------- subjects
create table if not exists public.djp_subjects (
  id text primary key,
  name text not null,
  short text not null,
  colour text not null default '#1769AA',
  tagline text not null default '',
  description text not null default '',
  created_at timestamptz not null default now()
);
create table if not exists public.djp_subject_combinations (
  id uuid primary key default gen_random_uuid(),
  course text not null,
  subjects text[] not null,
  note text not null default '',
  unique (course, subjects)
);
create table if not exists public.djp_student_subjects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.djp_profiles(id) on delete cascade,
  subject_id text not null references public.djp_subjects(id) on delete cascade,
  enrolled_at timestamptz not null default now(),
  unique (user_id, subject_id)
);

-- ---------------------------------------------------------------- curriculum
create table if not exists public.djp_curriculum_topics (
  id uuid primary key default gen_random_uuid(),
  subject_id text not null references public.djp_subjects(id) on delete cascade,
  name text not null,
  position int not null default 0,
  unique (subject_id, name)
);
create table if not exists public.djp_lessons (
  id text primary key,
  subject_id text not null references public.djp_subjects(id) on delete cascade,
  topic_id uuid references public.djp_curriculum_topics(id) on delete set null,
  topic text not null,
  subtopic text not null,
  title text not null,
  position int not null default 0,
  status text not null default 'published' check (status in ('published','draft','awaiting')),
  created_at timestamptz not null default now()
);
create table if not exists public.djp_lesson_content (
  lesson_id text primary key references public.djp_lessons(id) on delete cascade,
  introduction text not null default '',
  objectives jsonb not null default '[]'::jsonb,
  sections jsonb not null default '[]'::jsonb,
  definitions jsonb not null default '[]'::jsonb,
  formulas jsonb not null default '[]'::jsonb,
  examples jsonb not null default '[]'::jsonb,
  tips jsonb not null default '[]'::jsonb,
  mistakes jsonb not null default '[]'::jsonb,
  facts jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);
create table if not exists public.djp_lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.djp_profiles(id) on delete cascade,
  lesson_id text not null references public.djp_lessons(id) on delete cascade,
  completed boolean not null default false,
  best_score int not null default 0,
  attempts int not null default 0,
  time_spent_sec int not null default 0,
  completed_at timestamptz,
  unique (user_id, lesson_id)
);

-- ---------------------------------------------------------------- assessments
create table if not exists public.djp_assessments (
  id uuid primary key default gen_random_uuid(),
  lesson_id text references public.djp_lessons(id) on delete cascade,
  subject_id text references public.djp_subjects(id) on delete cascade,
  kind text not null check (kind in ('lesson','topic','subject','mixed','mock')),
  title text not null,
  time_limit_sec int,
  created_at timestamptz not null default now()
);
create table if not exists public.djp_questions (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid references public.djp_assessments(id) on delete cascade,
  lesson_id text references public.djp_lessons(id) on delete cascade,
  question_text text not null,
  position int not null default 0,
  created_at timestamptz not null default now()
);
create table if not exists public.djp_answer_options (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.djp_questions(id) on delete cascade,
  option_text text not null,
  is_correct boolean not null default false,
  explanation text not null default '',
  position int not null default 0
);
create table if not exists public.djp_assessment_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.djp_profiles(id) on delete cascade,
  assessment_id uuid references public.djp_assessments(id) on delete set null,
  lesson_id text references public.djp_lessons(id) on delete set null,
  subject_id text references public.djp_subjects(id) on delete set null,
  kind text not null check (kind in ('lesson','topic','subject','mixed','mock')),
  title text not null,
  total int not null,
  correct int not null,
  score int not null,
  duration_sec int not null default 0,
  started_at timestamptz not null default now(),
  completed_at timestamptz not null default now()
);
create table if not exists public.djp_student_answers (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.djp_assessment_attempts(id) on delete cascade,
  question_id uuid references public.djp_questions(id) on delete set null,
  question_text text not null,
  chosen_index int not null,
  correct_index int not null,
  is_correct boolean not null
);

-- ---------------------------------------------------------------- leaderboards
create table if not exists public.djp_leaderboard_weekly (
  week text primary key,
  year int not null,
  computed_at timestamptz not null default now()
);
create table if not exists public.djp_leaderboard_entries (
  id uuid primary key default gen_random_uuid(),
  week text not null references public.djp_leaderboard_weekly(week) on delete cascade,
  board text not null check (board in ('scorers','scholars')),
  user_id uuid not null references public.djp_profiles(id) on delete cascade,
  position int not null,
  score numeric not null,
  assessments int not null default 0,
  detail text not null default '',
  unique (week, board, user_id),
  unique (week, board, position)
);
create table if not exists public.djp_achievements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.djp_profiles(id) on delete cascade,
  week text not null,
  board text not null check (board in ('scorers','scholars')),
  position int not null,
  created_at timestamptz not null default now(),
  unique (user_id, week, board)
);
create table if not exists public.djp_achievement_badges (
  id text primary key,
  user_id uuid not null references public.djp_profiles(id) on delete cascade,
  achievement_id uuid references public.djp_achievements(id) on delete set null,
  full_name text not null,
  title text not null,
  position int not null,
  week text not null,
  year int not null,
  issue_date timestamptz not null default now()
);

-- ---------------------------------------------------------------- engagement
create table if not exists public.djp_notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.djp_profiles(id) on delete cascade,
  title text not null,
  body text not null,
  kind text not null default 'general',
  link text,
  read boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists public.djp_ai_conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.djp_profiles(id) on delete cascade,
  subject text not null,
  title text not null,
  created_at timestamptz not null default now()
);
create table if not exists public.djp_ai_messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.djp_ai_conversations(id) on delete cascade,
  role text not null check (role in ('user','assistant')),
  text text not null,
  created_at timestamptz not null default now()
);
create table if not exists public.djp_announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  author text not null,
  created_at timestamptz not null default now()
);
create table if not exists public.djp_platform_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------- indexes
create index if not exists idx_djp_progress_user on public.djp_lesson_progress(user_id);
create index if not exists idx_djp_attempts_user on public.djp_assessment_attempts(user_id);
create index if not exists idx_djp_attempts_completed on public.djp_assessment_attempts(completed_at);
create index if not exists idx_djp_notif_user on public.djp_notifications(user_id, read);
create index if not exists idx_djp_badges_user on public.djp_achievement_badges(user_id);
create index if not exists idx_djp_lessons_subject on public.djp_lessons(subject_id, position);

-- ---------------------------------------------------------------- RLS
alter table public.djp_profiles enable row level security;
alter table public.djp_roles enable row level security;
alter table public.djp_subjects enable row level security;
alter table public.djp_subject_combinations enable row level security;
alter table public.djp_student_subjects enable row level security;
alter table public.djp_curriculum_topics enable row level security;
alter table public.djp_lessons enable row level security;
alter table public.djp_lesson_content enable row level security;
alter table public.djp_lesson_progress enable row level security;
alter table public.djp_assessments enable row level security;
alter table public.djp_questions enable row level security;
alter table public.djp_answer_options enable row level security;
alter table public.djp_assessment_attempts enable row level security;
alter table public.djp_student_answers enable row level security;
alter table public.djp_leaderboard_weekly enable row level security;
alter table public.djp_leaderboard_entries enable row level security;
alter table public.djp_achievements enable row level security;
alter table public.djp_achievement_badges enable row level security;
alter table public.djp_notifications enable row level security;
alter table public.djp_ai_conversations enable row level security;
alter table public.djp_ai_messages enable row level security;
alter table public.djp_announcements enable row level security;
alter table public.djp_platform_settings enable row level security;

-- Helper: is the calling user an admin? (reads djp_roles; service_role bypasses RLS.)
create or replace function public.djp_is_admin() returns boolean
language sql stable as $$
  select exists (
    select 1 from public.djp_roles r
    where r.user_id = auth.uid() and r.role = 'admin'
  );
$$;

-- Public read: subjects, combinations, curriculum, assessments, questions, options,
-- announcements, weekly boards and badges (verification must be public).
create policy "public read subjects" on public.djp_subjects for select using (true);
create policy "public read combinations" on public.djp_subject_combinations for select using (true);
create policy "public read topics" on public.djp_curriculum_topics for select using (true);
create policy "public read lessons" on public.djp_lessons for select using (true);
create policy "public read lesson content" on public.djp_lesson_content for select using (true);
create policy "public read assessments" on public.djp_assessments for select using (true);
create policy "public read questions" on public.djp_questions for select using (true);
create policy "public read options" on public.djp_answer_options for select using (true);
create policy "public read announcements" on public.djp_announcements for select using (true);
create policy "public read weekly" on public.djp_leaderboard_weekly for select using (true);
create policy "public read entries" on public.djp_leaderboard_entries for select using (true);
create policy "public read badges" on public.djp_achievement_badges for select using (true);

-- Own records only: profiles (own row), student_subjects, progress, attempts,
-- answers (via attempt owner), notifications, AI conversations/messages.
create policy "own profile" on public.djp_profiles for select using (auth.uid() = auth_id);
create policy "own profile insert" on public.djp_profiles for insert with check (auth.uid() = auth_id);
create policy "own profile update" on public.djp_profiles for update using (auth.uid() = auth_id);
create policy "own student subjects" on public.djp_student_subjects for all using (
  user_id in (select id from public.djp_profiles where auth_id = auth.uid()));
create policy "own progress" on public.djp_lesson_progress for all using (
  user_id in (select id from public.djp_profiles where auth_id = auth.uid()));
create policy "own attempts" on public.djp_assessment_attempts for all using (
  user_id in (select id from public.djp_profiles where auth_id = auth.uid()));
create policy "own answers" on public.djp_student_answers for select using (
  attempt_id in (select id from public.djp_assessment_attempts
    where user_id in (select id from public.djp_profiles where auth_id = auth.uid())));
create policy "own answers insert" on public.djp_student_answers for insert with check (
  attempt_id in (select id from public.djp_assessment_attempts
    where user_id in (select id from public.djp_profiles where auth_id = auth.uid())));
create policy "own notifications" on public.djp_notifications for all using (
  user_id in (select id from public.djp_profiles where auth_id = auth.uid()));
create policy "own conversations" on public.djp_ai_conversations for all using (
  user_id in (select id from public.djp_profiles where auth_id = auth.uid()));
create policy "own ai messages" on public.djp_ai_messages for all using (
  conversation_id in (select id from public.djp_ai_conversations
    where user_id in (select id from public.djp_profiles where auth_id = auth.uid())));

-- Achievements: students read their own; nobody except service_role writes.
create policy "own achievements" on public.djp_achievements for select using (
  user_id in (select id from public.djp_profiles where auth_id = auth.uid()));

-- Admin write: curriculum, subjects, combinations, weekly results, entries,
-- achievements, badges, announcements, settings, roles.
create policy "admin write subjects" on public.djp_subjects for all using (public.djp_is_admin());
create policy "admin write combinations" on public.djp_subject_combinations for all using (public.djp_is_admin());
create policy "admin write topics" on public.djp_curriculum_topics for all using (public.djp_is_admin());
create policy "admin write lessons" on public.djp_lessons for all using (public.djp_is_admin());
create policy "admin write lesson content" on public.djp_lesson_content for all using (public.djp_is_admin());
create policy "admin write assessments" on public.djp_assessments for all using (public.djp_is_admin());
create policy "admin write questions" on public.djp_questions for all using (public.djp_is_admin());
create policy "admin write options" on public.djp_answer_options for all using (public.djp_is_admin());
create policy "admin write weekly" on public.djp_leaderboard_weekly for all using (public.djp_is_admin());
create policy "admin write entries" on public.djp_leaderboard_entries for all using (public.djp_is_admin());
create policy "admin write achievements" on public.djp_achievements for all using (public.djp_is_admin());
create policy "admin write badges" on public.djp_achievement_badges for all using (public.djp_is_admin());
create policy "admin write announcements" on public.djp_announcements for all using (public.djp_is_admin());
create policy "admin write settings" on public.djp_platform_settings for all using (public.djp_is_admin());
create policy "admin write roles" on public.djp_roles for all using (public.djp_is_admin());
create policy "admin read profiles" on public.djp_profiles for select using (public.djp_is_admin());

-- Seed the 8 subjects (ids match the app's curriculum).
insert into public.djp_subjects (id, name, short, colour, tagline, description) values
  ('english','English Language','English','#1769AA','Comprehension, grammar & oral English','Comprehension, lexis and structure, oral English, grammar, vocabulary and sentence interpretation.'),
  ('mathematics','Mathematics','Maths','#1E9E50','Numbers, algebra & calculus','Number and numeration, algebra, geometry and trigonometry, calculus, statistics and probability.'),
  ('physics','Physics','Physics','#1769AA','Motion, energy & electricity','Measurements and motion, forces and energy, heat and waves, light and optics, electricity and magnetism.'),
  ('chemistry','Chemistry','Chemistry','#1E9E50','Atoms, reactions & organic chemistry','Atomic structure and bonding, stoichiometry, acids bases and salts, organic chemistry, electrochemistry.'),
  ('biology','Biology','Biology','#1E9E50','Cells, genetics & ecology','Cell biology, genetics and evolution, ecology, human physiology, plant biology and classification.'),
  ('agricultural-science','Agricultural Science','Agric','#1E9E50','Soil, crops & livestock','Soil science, crop production, animal production, farm management and agricultural economics.'),
  ('geography','Geography','Geography','#1769AA','Land, climate & people','Physical geography, map work and GIS, climate and vegetation, population and settlement, economic geography.'),
  ('computer-studies','Computer Studies','Computing','#1769AA','Hardware, data & programming','Computer fundamentals, data representation, operating systems, databases and networks, programming logic.')
on conflict (id) do nothing;

-- ---------------------------------------------------------------- grants (Supabase Data API)
-- New tables need explicit grants (Supabase stopped auto-granting them in 2026).
grant select on all tables in schema public to anon;
grant select, insert, update, delete on all tables in schema public to authenticated;
grant select, insert, update, delete on all tables in schema public to service_role;
