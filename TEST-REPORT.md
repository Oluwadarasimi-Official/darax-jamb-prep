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
