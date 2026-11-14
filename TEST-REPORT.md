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
