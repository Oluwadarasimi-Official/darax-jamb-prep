# The Official Darax Free JAMB Prep

**LEARN. PRACTICE. IMPROVE. EXCEL.** — Powered by Official Darax.

A complete, free JAMB preparation platform for science students: structured lessons,
lesson quizzes with a 70% unlock rule, topic/subject/mixed assessments, timed
JAMB-style mocks, a Darax AI Tutor (Groq), weekly leaderboards, official
achievement badges with public verification, notifications, and an admin
Content Studio with AI-assisted lesson authoring.

**Public address (confirmed by David): https://daraxjambprep.vercel.app**

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS — dependency-light, no heavy UI libs
- Auth: Supabase Auth when connected; local SHA-256 (WebCrypto) accounts in the local tier
- Database: Supabase PostgreSQL (`djp_*` tables) when connected; localStorage store until then
- AI: Groq (`openai/gpt-oss-120b`) via server routes only
- Hosting: Vercel

## Honest data-layer status (read this first)

This app has **two tiers**:

1. **Local tier (active now):** all data (profiles, enrolment, progress, attempts,
   notifications, badges, conversations, drafts) persists in the browser's
   localStorage (`lib/store.ts`). Everything works end-to-end on this tier, but
   data is **per-device** — a student on another phone will not see it.
2. **Supabase tier (activates when configured):** set `NEXT_PUBLIC_SUPABASE_URL`
   and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. `lib/supabase.ts` only creates a client
   when both are set. The full schema is in
   `supabase/migrations/001_djp_schema.sql` (all 22 `djp_*` tables, foreign keys,
   unique constraints, indexes, RLS policies).

**Supabase is NOT live until the env vars are set and the connection is verified
in the deployed app.** Do not claim otherwise.

Similarly, the AI tutor and AI lesson generation return an honest
"not connected yet" state until `GROQ_API_KEY` is set — they never fake answers.

## Quick start (local)

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

## Environment variables

Copy `.env.example` to `.env.local`. Never commit real keys.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (optional until Supabase is connected) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (optional until Supabase is connected) |
| `GROQ_API_KEY` | Groq API key for the AI tutor + AI lesson generation. **Read only from `process.env.GROQ_API_KEY` in server routes (`app/api/tutor/route.ts`, `app/api/admin/generate-lesson/route.ts`). Never hardcoded, never logged, never sent to the browser.** David supplied the key — set it as an env var on Vercel at deploy time. |
| `NEXT_PUBLIC_ADMIN_CODE` | First-admin claim code. **Default is `CHANGE-ME` — set your own value in Vercel before going live.** |

## Test accounts

| Account | Password | Notes |
|---|---|---|
| `demo_student` | `Demo1234!` | Seeded demo student (flagged `is_demo`), with sample progress (3 lessons completed, 2 attempts). **Demo data is labelled as test data and is excluded from leaderboards.** |

Create a real account from `/signup` — no email confirmation needed. After signup,
onboarding is mandatory: English Language is locked compulsory + pick exactly 3
more science subjects, with optional intended-course JAMB combination validation.

## Admin access

1. Log in, go to `/admin`.
2. Enter the admin setup code (`NEXT_PUBLIC_ADMIN_CODE`, default `CHANGE-ME`).
3. Your account is promoted to admin. Admin routes also check the role on the
   server side (`/api/admin/*` rejects non-admin roles); hiding the button is
   never the only protection. **Change the default code before going live.**

Admin can: view platform stats, manage users (promote/demote/deactivate),
run the weekly calculation, view badge records, publish announcements,
monitor AI usage, and use Content Studio (publish/unpublish, reorder lessons,
preview, AI lesson drafting with mandatory review before publishing).

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import into Vercel (project name `daraxjambprep` — the public address is
   https://daraxjambprep.vercel.app).
3. Set env vars in Vercel: `GROQ_API_KEY`, `NEXT_PUBLIC_ADMIN_CODE`
   (your own value), and Supabase vars when ready.
4. Deploy. No build-time secrets are needed.

Weekly winner cron (when Supabase is connected): call
`POST /api/weekly/run` with `{ "role": "admin", "week": "2026-W46" }` once a
week (e.g. Monday 00:05 Africa/Lagos). The calculation is idempotent by week
key — re-running a week never duplicates badges or notifications.

## Routes

- `/` landing · `/login` · `/signup` · `/reset` (password reset) · `/onboarding`
- `/app/dashboard` · `/app/subjects` · `/app/subjects/[id]` · `/app/learn/[lessonId]`
- `/app/quiz/[lessonId]` · `/app/assessments` · `/app/mock` (timed, 30 min)
- `/app/tutor` · `/app/leaderboards` · `/app/achievements` · `/app/achievements/[id]`
- `/verify/[id]` (public badge verification) · `/app/notifications` · `/app/profile` · `/app/settings`
- `/admin` · `/admin/content` (Content Studio)

## Curriculum

80 lessons: 8 subjects × 5 topics × 2 lessons (`lib/curriculum/*.ts`), each with
introduction, objectives, full notes, definitions, formulas, 2–3 worked examples,
JAMB tips, common mistakes, key facts, and a 5-question quiz (original practice
questions — **never labelled as official past questions, no invented years**).

## Key rules implemented

- **70% unlock rule:** a lesson unlocks only when the previous lesson's quiz is
  passed at ≥70%. Grading is done by the server (`/api/attempts`) from the
  curriculum question bank; the client persists only the server-returned score.
  The same `lib/progression.ts` rule drives the UI.
- **Weekly leaderboards (Africa/Lagos, Mon–Sun):** Top Scorers = normalised
  average %, min 3 assessments, tie-break accuracy → earliest completion.
  Top Scholars = accuracy 40% + completion 30% + consistency 20% + quality 10%,
  min 2 assessments, lessons under 60 seconds don't count. Demo accounts excluded.
- **Badges:** `DRX-JAMB-YYYY-Www-XXXX`, "Signed by Official Darax" + verified
  mark, downloadable as PNG, shareable, publicly verifiable at `/verify/[id]`.
- **AI tutor:** strict educational system prompt, redirects non-educational
  requests, max 20 messages/user/hour, server-side Groq only.
- **Logo:** the real logo supplied by David is `public/logo.png` (graduation cap
  over open book with atom, navy #102D46 + green). It is used everywhere via
  `<img src="/logo.png">` with `object-fit: contain`, never stretched or cropped.
  No reference video arrived yet — the glassmorphism follows the logo's own
  glassy style and the brief; it will be refined if a video comes later.

## Testing

See [TEST-REPORT.md](TEST-REPORT.md) for the TEST A–R checklist with honest
pass/fail evidence from the local build and headless-browser smoke test.
