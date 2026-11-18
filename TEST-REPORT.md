# Test Report — The Official Darax Free JAMB Prep (v1.0.0)

Date: 2026-11-14. Environment: production build (`npm run build` ✓) served
locally on :3100, tested with headless Chromium (playwright-core,
chromium_headless_shell-1148) — 35/35 automated checks passed. Dev server
verified separately: Ready in 4.9s, `GET / 200`.

Seed demo account: `demo_student` / `Demo1234!` (flagged `is_demo`, excluded
from leaderboards; sample progress: 3 lessons completed, 2 attempts).

## TEST A–R checklist

| Test | Result | Evidence |
|---|---|---|
| A. Student registration and login | ✅ PASS | Signup validation (unique username/email, password ≥8, confirm match) implemented; demo login in headless browser reached `/app/dashboard` and showed "Demo Student". |
| B. Science student onboarding | ✅ PASS | `/onboarding` enforces English compulsory + exactly 3 science subjects; submit disabled until 3 picked. |
| C. Four-subject selection and validation | ✅ PASS | `validateCombination()` in `lib/store.ts` checks 12 courses (Medicine, Engineering, Pharmacy, etc.) and shows the exact requirement when a combo is invalid. |
| D. Subject dashboard | ✅ PASS | Dashboard renders real data from the store: overall %, per-subject progress, completed/locked counts, recent scores, weekly rank, badges, notifications, Continue Learning. |
| E. Lesson navigation and content loading | ✅ PASS | Headless check: lesson page renders objectives, sections, definitions, formulas, worked examples, tips, mistakes, facts. Subject pages list all 10 lessons per subject. |
| F. Assessment submission and automatic grading | ✅ PASS | Quiz submitted in headless browser; server route `/api/attempts` graded from the curriculum bank and the result screen showed score, correct/incorrect, explanations and "graded by the server" note. |
| G. 70% progression and unlocking rules | ✅ PASS | Demo (maths-01 passed at 100%) could open maths-02 but maths-03 showed "locked". Lesson 02 quiz completed in test; unlock logic is the single shared `lib/progression.ts` used by UI and the attempt path. |
| H. Assessment retakes | ✅ PASS | Result screen has a working Retake button (resets state, new attempt recorded). Retakes update best score; completed lessons stay revisitable. |
| I. Groq AI integration | ⚠️ PARTIAL — honest state | Tutor and admin-generation routes read **only** `process.env.GROQ_API_KEY` (never hardcoded/logged). With no key set in the test env, `/api/tutor` returned 503 and the UI showed "AI tutor is not connected yet — the administrator needs to add the Groq API key". **Live Groq answering is NOT yet verified** — it needs the key set on Vercel (David supplied it; parent sets it at deploy) and a live call after deploy. |
| J. Weekly top scorers calculation | ✅ PASS (logic) | `computeScorers` (normalised average %, min 3 assessments, tie-break accuracy → earliest) verified by code + empty-state rendering; no fabricated rows — with only demo data (excluded) the board correctly shows "Not enough data yet". Live weekly run with real students is pending real usage. |
| K. Weekly top scholars calculation | ✅ PASS (logic) | `computeScholars` composite (accuracy 40 / completion 30 / consistency 20 / quality 10, sub-60s lessons excluded) verified by code + empty state. Same live-data caveat as J. |
| L. Automatic achievement badge generation | ✅ PASS (logic) | `runWeekly` is idempotent by week key; admin "Run weekly calculation" re-run reports "already calculated — no duplicates". Badge issuing + notifications are wired in the same function. No real badges exist yet (no eligible real students). |
| M. Badge sharing and verification | ✅ PASS (UI) | Badge detail page renders branding, name, title, position, week, ID, "Signed by Official Darax" + verified mark; PNG download (canvas), Web Share + copy link implemented. `/verify/[bad-id]` honestly shows "Badge not found". End-to-end share of a real badge awaits the first real weekly winner. |
| N. Automatic notifications | ✅ PASS | Assessment submission created a result notification in the test session; weekly wins call `notify()`; notifications page supports read / mark-all-read / unread count badge (verified: unread "1" badge rendered). |
| O. Administrator permissions | ✅ PASS | `/admin` as a non-admin shows the claim form, not the dashboard; admin API routes reject `role !== 'admin'` (403). First-admin claim uses `NEXT_PUBLIC_ADMIN_CODE` (default `CHANGE-ME` — must be changed before go-live). |
| P. Mobile and desktop responsiveness | ✅ PASS | 390px checks: dashboard, subjects, lesson, leaderboards, tutor all 0px overflow (after fixing a 13px dashboard overflow caused by grid/flex min-content; fixed with `min-w-0`). Desktop 1280px layout verified in the same run. |
| Q. Database security and row-level security | ⚠️ PARTIAL — migration only | Full RLS migration written (`supabase/migrations/001_djp_schema.sql`, 22 `djp_*` tables, RLS policies, grants). **Not live**: Supabase is not connected in this build (no env vars set), so RLS has not been executed against a real project yet. Local tier stores data per-device in localStorage. |
| R. Error handling and session persistence | ✅ PASS | Sessions persist across reloads (demo stayed logged in through the whole smoke run); login errors, tutor 503, verify not-found, locked-lesson and empty states all render honest messages; no dead buttons found in the smoke run (all nav routes render). |

## Automated smoke run (35/35)

Landing (logo.png, no overflow) · demo login → dashboard · all 9 app nav routes ·
subject page · lesson page (notes/examples/quiz CTA) · locked lesson 03 ·
quiz load + 5 questions + submit + server-graded result with explanations +
retake · tutor honest not-configured state · verify not-found · admin gate ·
mobile 390px overflow on 5 routes (0px each).

## Live verification (2026-11-14 ~17:56 WAT, by Maverick after deploy)

- Production URL https://daraxjambprep.vercel.app serves the app (logo, title, tagline, feature sections verified in browser).
- **TEST I (Groq) now ✅ PASS live**: POST /api/tutor with a real Physics question returned HTTP 200 with a correct Newton's First Law explanation from model openai/gpt-oss-120b. GROQ_API_KEY is set on Vercel (Production + Preview).
- Deploy: GitHub Oluwadarasimi-Official/darax-jamb-prep → Vercel project daraxjambprep (Tech Nova Academy team), build READY in 42s. Vercel MCP API was 403-blocked on the team scope, so deploy went via the Vercel dashboard + identity code.
- Admin code set on Vercel: DARAX-516ED1-8D18CD (tell David in chat; not in repo).
- Still open: TEST Q (Supabase RLS — migration written, not yet run against a real project); first real weekly run needs real students; reference video not received.

## Known gaps (need David / deploy-time)

1. **Groq live call** — set `GROQ_API_KEY` on Vercel, then send one tutor message
   and generate one AI lesson draft to verify end-to-end.
2. **Supabase** — create the project, run the migration, set
   `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`, verify RLS.
3. **Admin code** — set a real `NEXT_PUBLIC_ADMIN_CODE` in Vercel (default is
   `CHANGE-ME`).
4. **First real weekly run** — needs real (non-demo) students with ≥3 assessments.
5. **Reference video** — not received; glassmorphism follows the real logo's
   glassy style and the brief. Refine if a video arrives.

## Bugs found and fixed during testing

- `maths-01` IDs in the Mathematics curriculum did not match the `mathematics-*`
  convention (and the demo seed) — renamed to `mathematics-01…10`.
- Stray lone-comma line in `agricultural-science.ts` created an array hole
  (TypeScript `Lesson | undefined` error) — removed.
- 13px horizontal overflow on the mobile dashboard — fixed with `min-w-0` on
  the app-shell `<main>` and dashboard grid columns.
- Import-depth errors across nested routes — converted app imports to the `@/`
  alias.

## Style update — Roemichs blue + theme switcher (2026-11-14, v1.0.1)

- Recoloured the whole app from green/navy to the Roemichs blue family:
  primary #3367c1, deep #173b78, tints #dce8ff / #eaf1ff / #f8faff.
  Green accent #1E9E50 and navy base #102D46 are gone from the UI; the real
  logo (public/logo.png) is untouched. Subject dots are now 8 distinct blues.
- Theme switcher: Settings → Appearance offers Dark / Light / System,
  persisted in localStorage (`darax-theme`), applied via `data-theme` on
  <html> with CSS variables; a sun/moon toggle sits in the sidebar footer,
  the mobile drawer and the landing header. Default is Dark; a boot script
  in <head> applies the stored theme before first paint (no white flash).
- Headless checks (playwright-core, production build on :3100): landing,
  dashboard, lesson, settings at 390px and 1280px in BOTH themes — 0px
  horizontal overflow on all 16 combos, logo loads everywhere, toggle click
  flips the theme and persists it. Screenshots reviewed: light landing +
  dashboard + settings, dark lesson + landing — all readable, no clipping.
  One fix found in review: the mobile landing header crowded at 390px —
  fixed by making the toggle icon-only below the sm breakpoint and letting
  the header wrap.

## Supabase Auth + database wiring (2026-11-14, v1.0.2)

- Installed @supabase/supabase-js; lib/supabase.ts is now a real client
  (anon key only — no service-role key anywhere in the repo). lib/sync.ts
  bridges the local store and the djp_* tables: Supabase is the source of
  truth for identity when configured, the local store stays the working cache.
- Auth rewritten (lib/auth.ts): signup/login/logout/password-reset go through
  Supabase Auth when NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY
  are set; local SHA-256 accounts remain the fallback when they are absent.
  Signup creates the djp_profiles row; login syncs profile, subjects,
  progress, attempts and notifications from the server; sessions persist via
  Supabase and are restored on load. Demo account stays local-only.
- Mirrored to Supabase (fire-and-forget, never blocks UI): onboarding
  subjects + intended course, profile subject changes, quiz attempts +
  lesson progress + result notifications, admin role claims/grants, name
  changes. Password change re-authenticates then uses Supabase updateUser.
  Reset flow uses Supabase reset emails with a recovery session on /reset.
- Role comes from djp_profiles.role; /admin (AdminGuard) and admin API
  routes still require role='admin'; NEXT_PUBLIC_ADMIN_CODE first-admin
  claim kept as the fallback path.
- Migration fix: 001_djp_schema.sql had NO insert policy for djp_profiles
  (signup could never create its profile row) and none for
  djp_student_answers. Added "own profile insert" and "own answers insert"
  policies to the file — if the migration was already applied WITHOUT them,
  run those two CREATE POLICY statements in the SQL editor.
- Fixes found while wiring: signup page pushed the new profile twice
  (register() already pushes it) — guarded the page-side push.
- Build: `npm run build` passes (24 routes, tsc clean). Dev server with
  .env.local (real URL + anon key) serves landing/signup/login as 200s.

### Live verification (2026-11-14 ~18:33 WAT)
- Supabase Auth PROVEN live: signUp probe returned a session immediately
  (email_confirmed_at set) — Confirm email is OFF, no confirmation needed.
- djp_* tables NOT YET PRESENT: 5 supabase-js checks over ~10 minutes all
  returned "Could not find the table 'public.djp_*' in the schema cache"
  (the project is reachable and the anon key is valid — the migration had
  not landed when tested). Full signup → profile → onboarding DB test is
  BLOCKED until the migration is applied; no workaround was invented.
  Re-run the table check, then sign up a test user in the app and confirm
  a djp_profiles row + djp_student_subjects rows exist.
- Probe auth user created by the Auth test (delete in dashboard Auth →
  Users after testing): mav-probe-20261114@darax-test.example,
  id f91ff2ee-9ae0-4331-8265-ce74a0c2a27b. It has no profile row (tables
  absent); login after the migration will create it from the Auth metadata.
- Known limits (honest): username login works via email everywhere, and via
  username only on a device where that account was created (RLS prevents
  resolving username→email anonymously). Cross-user leaderboards still
  compute from the local store — the weekly endpoint has no service-role
  key, so server-side weekly boards need a service-role-backed job later.
  Leaderboard/badge rows are NOT mirrored from the client (RLS: only
  service_role writes them, except admin writes via djp_roles).

## UI upgrade — slideshow lessons, reshuffle-on-retake, structured tutor, admin publish (2026-11-15, v1.1.0)

Work by the UI subagent (uncommitted; coordinator commits). Content workers
expanded the curriculum in parallel — final count verified at the end of this
work (see below). Roemichs blue palette (#3367c1/#173b78) and the theme system
unchanged; lib/auth.ts, lib/supabase.ts, lib/sync.ts untouched; migration
table structure untouched; the 8 lib/curriculum/*.ts subject files untouched
(only the types.ts quiz comment, as instructed).

### What changed
1. **Slideshow lessons** (`app/app/learn/[lessonId]/page.tsx`, rewritten):
   one slide at a time in reading order — Introduction → Objectives → each
   notes section → Definitions → Formulas/Laws (if any) → one slide per worked
   example → JAMB tips → Common mistakes → Key facts → Quiz start slide.
   Previous/Next buttons, clickable slide dots (labelled, wrapping), progress
   bar, slide counter (e.g. 3/12), keyboard ArrowLeft/ArrowRight, touch swipe
   (touchstart/touchend, 50px threshold). Time-spent recording and the
   60-second scholar rule note kept; locked-lesson gate and prev/next-lesson
   navigation kept. Quiz slide says 15 questions and links to the quiz.
2. **Reshuffle on retry** (`components/QuizRunner.tsx` rewritten,
   `app/api/attempts/route.ts` extended without changing the grading contract):
   every attempt (first load AND every retake) gets a fresh seeded shuffle
   (mulberry32) of BOTH question order AND option order. QuizRunner converts
   displayed choices back to original option indices and sends refs in
   display order, so the server still grades by `lessonId:originalIndex` +
   original option index. Visible note: "Questions and answer options
   reshuffle on every retake." Applies to lesson quizzes, topic tests, subject
   exams, mixed revision and mocks — all use QuizRunner (verified by reading
   `app/app/quiz/[lessonId]/page.tsx`, `app/app/assessments/page.tsx`,
   `app/app/mock/page.tsx`; all three now also pass the db-aware lesson lists).
   Custom-lesson questions (see §5) carry their answer key to the route,
   which grades them from that key and returns `serverValidated: false` with
   an honest on-screen label; built-in questions are graded from the server
   bank exactly as before.
3. **Structured AI answers** (new `components/Markdown.tsx`, no new
   dependency — headings, bold, italic, inline code, fenced code blocks,
   ordered/unordered lists, tables, horizontal rules, paragraphs, links;
   raw HTML never rendered): used for assistant replies in
   `app/app/tutor/page.tsx`. `SYSTEM_PROMPT` in `app/api/tutor/route.ts` now
   enforces ONE structure — ## Direct answer first, then ## Step by step,
   then ## Worked example, then ## Try this (one practice question) — with
   Markdown required; educational-only redirect and the never-invent-past-
   question-years rule kept; GROQ_API_KEY server-only and the honest 503
   kept. Tutor UI: subject chips, pinned input, copy button per answer
   (with "✓ Copied" feedback), typing dots while busy, dismissible error
   banner, auto-scroll to the latest reply, conversation history / new /
   clear kept.
4. **UI cleanup sweep**: every page audited at 390px and 1280px in both
   themes (see headless results). Fixes: `min-w-0` on the Settings name
   input, `break-all` on badge IDs (achievements list + detail, admin badge
   log), `break-words` guards on lesson/quiz/tutor/admin text. No other
   overlaps found — the rest of the sweep was verification-only.
5. **Admin publish flow** (`app/admin/content/page.tsx` rewritten,
   `lib/store.ts` + `lib/curriculum.ts` + `lib/progression.ts`):
   - New `db.customLessons` store; `getCustomLessons()` /
     `getAllLessons(db)` / `getLessonById(id, db)` /
     `getSubjectLessons(subjectId, db)` merge published custom lessons into
     the Academy; progression (`orderedLessons`, `isLessonUnlocked`) uses
     the merged lists, so published lessons sit in the 70% unlock chain.
     Subject page also renders topics that only exist on custom lessons.
   - NEW manual lesson form: full content (intro, objectives, sections,
     definitions, formulas, examples, tips, mistakes, facts) + a 15-question
     quiz editor (4 options, radio for the correct answer, explanation each).
     Saves as a draft, never directly live.
   - Drafts (AI via Groq, or manual) get a rendered preview (counts,
     section list, sample quiz question) instead of raw JSON. Approve →
     Publish validates strictly (full notes + exactly 15 quiz questions,
     4 options + valid answer + explanation each); invalid drafts are
     blocked with the exact problems listed. Publish assigns id + next
     unlock order and the lesson appears immediately in the Academy.
   - `app/api/admin/generate-lesson` prompt now asks for exactly 15 quiz
     questions (was 5) and max_tokens raised 4000 → 8000 for the longer
     output. AI drafts still save as drafts and need approval before publish.
   - Stale copy fixed: "5 questions" → 15 (lesson quiz slide);
     `lib/curriculum/types.ts` quiz comment exactly 5 → exactly 15;
     `lib/curriculum.ts` comment 80 → 112 lessons; landing "80 lessons" →
     112; demo seed attempts updated to 15-question totals (12/15 = 80%,
     15/15 = 100% — same scores).
   - Count helper saved at `scripts/count-curriculum.js` (transpiles the
     curriculum files and reports lessons + quiz lengths per subject).

### Build
- `npm run build` passes, tsc clean (24 routes). Mid-task the working-tree
  build FAILED on syntax errors in `lib/curriculum/agricultural-science.ts`
  (stray `""`) and `biology.ts` (extra `},`) while the content workers were
  mid-edit — those files are not mine to edit, so my code was verified
  against a HEAD-curriculum worktree first (build green), and the working
  tree built green once the workers' files were syntactically valid again.

### Headless verification (production builds, playwright-core + headless Chromium, demo_student / Demo1234!)
- **Content count** (only verified once it reported the target):
  `node scripts/count-curriculum.js` → **112 lessons, 1680 questions** —
  every subject 14 lessons × 15 questions, zero lessons with a non-15 quiz.
- **Suite 1 — 109/109 passed** (real 112-lesson build): overflow sweep on
  22 routes × 390px/1280px × Dark/Light = 88 combos, all 0px overflow, no
  element extending past the viewport; slideshow Next / dot jump to slide 5 /
  ArrowRight / ArrowLeft / swipe-left all move correctly (15 slides on
  mathematics-01); quiz-start slide says 15 questions, links to the quiz,
  60-second note present; lesson quiz shows **15 questions**; two
  consecutive retakes each produced a DIFFERENT question order AND a
  DIFFERENT option order; submit → server-graded result; tutor renders a
  seeded Markdown reply as headings/lists/bold/table/code block (no raw
  `##` or `**` text), copy button + subject chips present.
- **Suite 2 — 14/14 passed** (real 112-lesson build): admin claim (default
  code) → Content Studio; seeded 15-question AI draft preview renders
  content; Approve → Publish → "now live in the Academy"; published lesson
  visible on the subject page, unlocked in the chain, opens as a 10-slide
  slideshow, and its 15-question quiz submits and grades (labelled honestly
  "graded on this device"); manual form filled end-to-end (all 15 questions)
  saves as a draft with a 15-question quiz.
- **Screenshots reviewed**: landing, lesson (quiz slide), quiz, tutor,
  settings at 390px dark; subject page at 390px dark; admin Content Studio
  at 1280px dark (published custom lesson listed as #15, "Admin-created").
  No overlaps or clipping. (The fixed mobile bottom nav covers content only
  at the fold in screenshots; the page scrolls past it via the existing
  bottom padding — pre-existing behaviour, not an overlap.)

### Bugs found and fixed during testing
- Manual quiz `<details>` toggle: the native toggle + React `open` prop
  fought, leaving a question stuck closed. Fixed by making the summary
  click fully controlled (`preventDefault` + explicit open state).
- Duplicate placeholder "Lesson title" on the AI card and the manual form
  (a fill landed in the wrong input). Manual form placeholder changed to
  "e.g. Indices and Logarithms".

### Still unverified live (needs David / deploy-time)
1. **Live Groq tutor answer structure** — no GROQ_API_KEY in the test env,
   so no live tutor reply was observed; the prompt change and the Markdown
   renderer are verified (seeded reply), but a real Groq reply following the
   four-section structure still needs one live message after deploy.
2. **Phone acceptance** — all checks above are headless Chromium; David's
   phone test (slideshow swipe, retake reshuffle, tutor chat, admin publish)
   is still owed.
3. **Cross-device publish** — admin-published lessons live in the local
   store on the device that published them (same tier as everything else in
   this build). They appear immediately for students on that device; making
   them visible on other students' devices needs Supabase lesson tables,
   which the frozen migration does not have — flagged for the coordinator,
   not silently claimed.
4. **Live AI lesson generation with 15 questions** — the prompt and token
   budget changed, but no live Groq generation was run in this task (no key
   in test env); verify one AI draft end-to-end after deploy.

---

## Merge note — 2026-11-15: origin/master merged into master (commit f111142)

Local master was at 5459289 ("UI upgrade v1.1.0"); `git push` had been rejected
as non-fast-forward. Merged origin/master (8 commits on top of shared base
b75af75) with a merge commit — no rebase, no force-push. `.env.local` untouched
and never committed.

### What came in from origin/master
- "Format AI tutor responses as plain text" + "Normalize JSON-shaped tutor
  responses" (PR #1): `unwrapTutorReply` JSON unwrapping in
  `app/api/tutor/route.ts`.
- "Improve Darax AI Tutor and lesson experience": tutor + lesson page rework.
- "Polish mobile layout, typography and glass UI": AppShell SVG icons,
  focus-visible, font-inherit, mobile radius, reduced-motion rules.
- "Keep students signed in across visits": Supabase `persistSession: true` +
  `autoRefreshToken` + `detectSessionInUrl` in `lib/supabase.ts`, session
  restore in `components/db-context.tsx`.
- "Hide admin panel link from student navigation (#5)": the role-gated Admin
  Panel link was removed from AppShell entirely — the admin route (/admin) is
  still reachable by direct URL.
- "Full-screen AI chat with scientific equation rendering (#6)": full-screen
  tutor layout + new `components/TutorMarkdown.tsx` (MathJax via jsdelivr CDN).

### Conflicts resolved (4 files)
- `app/api/tutor/route.ts` — kept the local 4-section structured system prompt
  (Direct answer / Step by step / Worked example / Try this) AND origin's
  `unwrapTutorReply`; added one LaTeX sentence to the prompt's FORMATTING
  section so equations can render via MathJax.
- `app/app/tutor/page.tsx` — origin's full-screen chat layout + TutorMarkdown
  rendering; restored local copy-feedback ("✓ Copied") and a note that every
  answer follows the 4-section structure. `components/Markdown.tsx` stays in
  the repo (unused by the tutor now, kept as fallback).
- `app/app/learn/[lessonId]/page.tsx` — kept the local slideshow wholesale
  (keyboard/swipe/slide tabs, 15-question quiz text); origin's rewrite was a
  subset and still said "5 original practice questions".
- `app/globals.css` — merged both sides (local md-body/typing-dots/slideshow
  rules + origin's focus-visible, font-inherit, mobile radius,
  reduced-motion rules; one duplicate `.prose-glass p` rule deduped).
- Clean merges kept as-is: AppShell (hidden admin link + sidebar/theme),
  `lib/supabase.ts` + `db-context.tsx` (session persistence + Auth wiring),
  `app/layout.tsx`, `app/login/page.tsx`, `tailwind.config.js`,
  `app/app/subjects/[id]/page.tsx`. Curriculum files untouched by either side
  of the conflict; QuizRunner untouched by origin (reshuffle intact).

### Verification (after the merge)
- `node scripts/count-curriculum.js`: 112 lessons, 1680 questions,
  zero non-15 quizzes (14 lessons x 15 questions per subject).
- `npm run build`: passes, tsc clean, 24 routes.
- Headless Chromium spot checks on the production build (demo_student login):
  - Slideshow: Slide 1 of 15 "Introduction" -> Next -> Slide 2 of 15
    "Objectives" -> Previous -> back to Slide 1. PASS.
  - Quiz (mathematics-01): 15 questions shown; all-A submit graded
    server-side (4/15); retake reshuffled question order (Q1 changed) and
    option order (13 of 15 questions had a changed option order; same
    15-question set). PASS.
  - Tutor: seeded structured reply rendered all 4 headings (Direct answer,
    Step by step, Worked example, Try this), bold intact, zero raw "##"
    markdown leaked. PASS with one caveat (below).
  - Admin Content Studio: opened as admin; seeded draft previewed
    (Quiz questions 15/15), Approve -> Publish worked ("Published ...",
    "Live in the Academy" badge), published lesson appeared on the
    Mathematics subject page. PASS.

### Still unverified / caveats
- **MathJax typesetting not proven in headless Chromium**: the jsdelivr CDN
  script failed in this VM's headless browser
  (`net::ERR_TUNNEL_CONNECTION_FAILED`) even though curl reaches jsdelivr
  fine (200) — a VM proxy limitation, not a code defect. `window.MathJax`
  stayed partial (`typesetPromise` never appeared, 0 `mjx-container`s after
  30 s). TutorMarkdown falls back to showing the raw LaTeX text, so nothing
  breaks — but confirm on a real phone/browser that `\(...\)` equations
  actually typeset after deploy.
- **No live Groq tutor reply**: no GROQ_API_KEY in the test env, so a real
  tutor answer following the 4-section structure + LaTeX still needs one live
  message after deploy (pre-existing gap, see above).
- One headless quiz submit was performed as demo_student (test data, excluded
  from leaderboards); the grader route is server-side only and the client
  mirror may or may not have written one demo attempt row to Supabase — could
  not verify (run-sql returns 403 on this project). Harmless either way.
- All seeded test data (conversation, draft, published lesson, admin role)
  lived only in the throwaway headless browser profile — nothing was written
  to the repo or the live database by the seeding itself.

---

## Arts + Commercial departments — 2026-11-18 (v1.2.0, unreleased to live until Vercel deploys)

**What shipped:** Arts + Commercial departments at the same standard as Science.
Final subject lists (after David's three changes — French, History, Fine Art and
Music all REMOVED, Yoruba ADDED):
- Arts (new): Literature in English, Government, CRS, Yoruba (+ English).
- Commercial (new): Economics, Commerce, Accounting (+ English, Mathematics,
  Geography, Government, CRS shared).
- 7 new subjects × 14 lessons × 15 questions = 98 new lessons, 1,470 new
  questions. Grand totals: **15 subjects, 210 lessons, 3,150 questions** —
  verified by `scripts/count-curriculum.js`: 15 subjects, 210 lessons,
  3,150 questions, **zero non-15 quizzes**.
- Department selector on signup (three glass cards); department saved on the
  profile (local store + Supabase via `djp_profiles.department`); onboarding
  picks department FIRST, then English locked + exactly 3 subjects from that
  department only; course-combination validation per department (Arts: Law,
  Mass Communication, English Language, Theatre Arts, Linguistics, Yoruba
  Language, Religious Studies; Commercial: Accounting, Business Administration,
  Economics, Banking and Finance, Marketing, Insurance). Existing accounts
  backfill to 'science'. Changing department in My Profile resets enrolment
  to that department's onboarding.
- Landing copy now Science / Arts / Commercial (dynamic counts: 210 lessons,
  15 subjects); dashboard + subjects pages scoped to the student's department;
  Academy grouped by department; AI tutor prompts cover all 15 subjects;
  admin Content Studio subject dropdowns (manual form, AI authoring, lessons
  filter) all grouped by department via a shared `SubjectSelect`; attempts
  record `department` for a future filter (filter NOT built).
- New migration: `supabase/migrations/005_djp_departments.sql` (renumbered from 002 —
  002/003/004 were taken by parallel admin-platform work: 002_platform_analytics,
  002_utme_assessment_kind, 003_admin_user_management, 004_admin_platform_fixes;
  apply AFTER 004. Its grants are deliberately NARROW: read-only on the new
  reference rows plus UPDATE on the department column only — a table-wide
  UPDATE grant would have undone 004's column allow-list that stops users
  promoting themselves. Adds
  `djp_profiles.department`, seeds the 7 new subjects with Roemichs-blue
  colours, seeds Arts/Commercial course combinations, explicit GRANTs).
  **002 is NOT applied to the live project yet — apply via the Supabase
  dashboard SQL editor before students sign up as Arts/Commercial.**
- Science content untouched (all 112 lessons / 1,680 questions unchanged).
  Demo account stays Science.

**Build:** `npm run build` passes (tsc clean, exit 0); 24 routes.

**Headless Chromium checks (production build, playwright-core + headless
shell, 2026-11-18) — 61/61 passed** (script `/tmp/pwtest/dept-check.js`;
manual-form dropdown checked separately, `/tmp/pwtest/manual-form.js`):
- Landing 390px + 1280px × Dark + Light: 0px overflow everywhere; chip
  "SCIENCE · ARTS · COMMERCIAL"; Science/Arts/Commercial group headings;
  "210 lessons", "15 subjects".
- Signup as Arts → onboarding shows ONLY Literature in English, Government,
  CRS, Yoruba; hides Mathematics, Physics, French, History, Fine Art, Music.
  Law combination (English + Literature + Government + CRS) validated as
  meeting the JAMB requirement. Dashboard shows Literature + Yoruba after a
  Yoruba enrolment; subjects page shows no Mathematics/Economics.
- Signup as Commercial → onboarding shows ONLY Economics, Commerce,
  Accounting, Mathematics, Geography, Government, CRS; hides Biology and
  Literature. Accounting combination (English + Mathematics + Economics +
  Commerce) validated.
- Signup as Science (control) → onboarding shows Mathematics/Physics/
  Chemistry only; hides Literature, Economics, Yoruba.
- Arts lesson slideshow: `/app/learn/literature-01` loads, Next advances the
  slide counter 1/13 → 2/13.
- Commercial quiz: `/app/quiz/commerce-01` header "15 questions", exactly 15
  questions found, submit works (score shown, "X correct out of 15"), result
  lists 15 graded questions, **Retake reshuffles the question order**.
- Admin Content Studio: all three subject dropdowns grouped into "Science
  Department" / "Arts Department" / "Commercial Department" optgroups;
  Yoruba and Economics listed; no French / History / Fine Art / Music anywhere.
- Overflow: 0px on every page checked (landing, onboarding, dashboard,
  lesson, quiz, admin content) at 390px and 1280px, both themes.

**Test-env note (honest):** the headless run used a production build WITHOUT
the Supabase env vars (`.env.local` moved aside, rebuilt, restored after),
because the VM's egress proxy blocks the headless browser's fetch to
supabase.co ("Failed to fetch" on signup against the live project — the same
proxy limit as the v1.1.0 MathJax CDN failure). All department logic was
therefore exercised through the local-store path; the Supabase sync path is
the same code as v1.1.0 (proven live then) with `department` carried through
`sbInsertProfile` / `sbUpdateProfile` / `mirrorOnboarding`. The final build
was restored WITH `.env.local` and rebuilds clean.

**Still unverified live (parent / David's phone):**
- Migration 005 not applied on the live Supabase project (see above).
- Live signup per department + live onboarding scoping on
  https://daraxjambprep.vercel.app after Vercel deploys this push.
- Admin publish flow for an Arts/Commercial lesson end-to-end (the publish
  path is subject-agnostic and the grouped dropdowns are proven; a full
  Yoruba/Accounting draft→publish on the live site is still owed).
- David's phone acceptance of the new departments.

**Rebase note (same day, before push):** the push was first rejected — five
commits had landed on master in parallel (admin security/persistence +
"Redirect app entry to dashboard", migrations 002_platform_analytics,
002_utme_assessment_kind, 003_admin_user_management, 004_admin_platform_fixes).
Rebased v1.2.0 onto them; two conflicts, both merged rather than reverted:
- `app/page.tsx`: the other work replaced the landing page with a server
  redirect to /app/dashboard. Merged: the page is now a client component —
  signed-in visitors are sent to /app/dashboard, new visitors still see the
  public landing page (with the new Science/Arts/Commercial copy). Verified
  headless: fresh contexts see the landing page; a signed-in Arts user
  visiting `/` lands on /app/dashboard.
- `lib/store.ts`: kept both sides — `Attempt.department` (this work) and the
  `'utme'` assessment kind (their work).
- Migration renumbered 002 → 005 (three files already used 002); its grants
  narrowed so it does NOT undo 004's column allow-list on djp_profiles (see
  the migration header). `Attempt.department` + `'utme'` both kept.
- Full re-verification after the rebase: tsc clean, counts 15 / 210 / 3,150 /
  zero non-15, `npm run build` passes, headless suite **62/62 passed**
  (61 original + the signed-in redirect check).
