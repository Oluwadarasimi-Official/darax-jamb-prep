# UI Inspection — The Official Darax Free JAMB Prep

> **Superseded (2026-11-20, later the same day).** The dark/light glass theme described in
> sections 1–5 below has been replaced by a **light-only palette modelled on the official JAMB
> interface** (Fun Green `#006633`, Forest Green `#1D943B`, Cornflower `#8BB4E7`, Tahiti Gold
> `#E87E04`), and the theme switch was removed. The contrast findings were fixed as part of
> that work. Everything about the *data layer* in this document is still accurate.

**Branch:** `arena/122331ed-darax-jamb-prep` · **Base:** `5dedce9` (v1.3.0) · **Date:** 2026-11-20
**Scope:** visual design, design-system consistency, theming, responsive behaviour, accessibility, and UI-level product gaps. No functional/data-layer claims beyond what the screens expose.

---

## How this was inspected

- Read every route under `app/` and every component in `components/` (4,736 lines of TSX/CSS total).
- Ran the dev server (`next dev` on :3000) and loaded all routes — all returned **200**, no runtime errors in the server log.
- Inspected the SSR HTML for each route and the resolved Tailwind/CSS token layer.
- **Caveat:** no headless browser is available in this sandbox, so findings come from code + computed colour contrast rather than screenshots. `next/font` also could not reach Google Fonts from this network, so my render used the fallback font — text metrics on Vercel (which self-hosts DM Sans at build) will be marginally tighter than what I saw.

---

## 1. What the UI actually is

A single-page-feel Next.js App Router app with **no server-rendered content on any route** — every page is a `'use client'` component reading from a `DbProvider` context.

**Design language:** "calm midnight-blue glass" — a dark navy base (`#0b1424`) with layered radial glows, frosted glass cards (`backdrop-filter: blur(26px)`), brand blue `#3367c1 → #173b78`, DM Sans, and a single 1.25rem card radius. Genuinely cohesive and quite handsome where it's applied consistently.

**Token system** (`app/globals.css`): a real two-theme semantic layer — `--bg`, `--ink-rgb`, `--accent-rgb`, `--glass-bg`, `--glow-1..3`, and so on, for `[data-theme="dark"]` and `[data-theme="light"]`. This is the right architecture, and it's applied via `data-theme` on `<html>` with a pre-paint boot script so there's no theme flash. Good work here.

**Primitives** (`components/ui.tsx`): `GlassCard`, `ProgressBar`, `EmptyState`, `Skeleton`, `Avatar`, `initials`. Small (40 lines) but used everywhere.

**Utility classes** in global CSS: `.glass`, `.glass-soft`, `.glass-input`, `.btn-primary`, `.btn-ghost`, `.chip`, `.muted`, `.skeleton`, `.chip` + a hand-rolled markdown stylesheet.

| Area | Screens |
|---|---|
| Public | `/` landing, `/login`, `/signup`, `/reset`, `/verify/[id]` |
| Onboarding | `/onboarding` (4-step department → English → 3 subjects → course) |
| Student app | dashboard, subjects, subjects/[id], learn/[lessonId] (slide deck), quiz/[lessonId], assessments, mock, utme, archive, tutor, leaderboards, achievements, achievements/[id], notifications, profile, settings |
| Admin | `/admin` (analytics, users, announcements, weekly run), `/admin/content` (Content Studio) |

---

## 2. Findings, by severity

### 🔴 Major — the Tutor is a different application

`app/app/tutor/page.tsx` does not use the design system at all. It is a hardcoded **dark navy + emerald** chat UI: `bg-[#0b1220]` (line 127), `bg-[#101a2b]`, `bg-[#0e1727]`, `bg-[#142137]`, `bg-[#17253a]`, `bg-[#1a2940]`, `text-slate-100/200/300/400/500/950`, `bg-emerald-400/300`, `text-emerald-200/300`.

Consequences:

1. **It ignores the theme.** A student who has chosen Light mode gets a full-screen dark emerald app the moment they tap "Darax AI Tutor". Every other surface is blue glass. Zero of the 22 hardcoded colour utilities in this file respond to `data-theme`.
2. **It ignores the brand accent.** The app's accent is blue (`#3367c1`); the tutor's is emerald `#10b981`. Two different products.
3. **It bypasses the shell.** `components/AppShell.tsx:55` — `if (pathname === '/app/tutor') return <>{children}</>;` — so there is no sidebar, no nav, no theme toggle. The only exit is a `‹` back button. On desktop that's a jarring full-viewport takeover (`fixed inset-0 z-[60]`), and the user loses their bearings.
4. **It loads MathJax from a third-party CDN** (`cdn.jsdelivr.net`, line 128) — the only external script in the app, and the only place LaTeX renders. Everywhere else, formula strings are dumped into `font-mono` `<p>` tags.

This is the single most visible inconsistency in the product and it's on a marquee feature.

### 🔴 Major — hardcoded light surfaces break dark mode contrast

Two screens opt out of the token layer and paint white translucent panels. On the dark navy background this renders as a **light grey block with the app's light text on top**.

| File | Line | Class |
|---|---|---|
| `app/app/utme/page.tsx` | 117, 147 | `bg-white/70` (year + duration `<select>`) |
| `app/app/utme/page.tsx` | 137 | `bg-white/50` (optional-subject buttons) |
| `components/QuestionLibrary.tsx` | 50, 56, 60 | `bg-white/60`, `bg-white/70` ×2 |
| `components/QuestionLibrary.tsx` | 84, 85 | `bg-white/40`, `bg-white/50` (answer options) |

Measured: `bg-white/70` composited over `--bg: #0b1424` yields approximately `#b6b8bd`. Body text `--text: #eff4fc` on that is **≈1.8:1 contrast** — well under the 4.5:1 AA floor, and visually the labels nearly vanish. This hits the exam setup screen and the Past Questions Archive, i.e. two of the three things students use most.

Same files also hardcode non-token accents: `border-amber-500/25` (utme:172), `border-emerald-500` / `bg-emerald-500/10` / `border-rose-400` / `text-emerald-700` (QuestionLibrary:84,90). `text-emerald-700` on a dark card is another low-contrast pair.

### 🟠 Moderate — the public landing page renders as a loading skeleton

`app/page.tsx` is `'use client'` and sits inside `DbProvider`, whose gate is:

> `components/db-context.tsx:78` — `Restoring your session…`

The SSR HTML for `/` is literally the skeleton card, nothing else. So:

- **First impression:** the marketing page at `daraxjambprep.vercel.app` flashes a dark "Restoring your session…" placeholder before the hero appears.
- **SEO:** there is no headline, no copy, no subject list in the HTML. The one page that should be crawlable is the one page with no content in the response.
- Same applies to `/verify/[id]` — a *shareable* verification link. When a student posts it to WhatsApp, the preview shows the generic site title rather than the achievement, because the page is client-rendered and `app/layout.tsx` is the only file exporting `metadata`.

### 🟠 Moderate — no route-level loading, error, or 404 states

`find app -name loading.tsx -o -name error.tsx -o -name not-found.tsx` → **nothing**.

- An unknown URL serves Next's stock 404 ("This page could not be found", unstyled black-on-white) inside the branded app. Confirmed live.
- A thrown error in any page drops the user to the default Next error overlay/page, not a Darax card.
- Navigating between routes has no transition state; the page just swaps.

### 🟠 Moderate — the UTME and Archive are science-only, silently

- `app/app/utme/page.tsx:9-14` — `OPTIONAL` is hardcoded to Mathematics, Physics, Chemistry, Biology.
- `components/QuestionLibrary.tsx:6-12` — the subject filter is All / English / Maths / Physics / Chemistry / Biology.

But the curriculum ships Government, Economics, Literature, CRS, IRS, Yoruba, Commerce, Accounting, Geography and Agricultural Science, and the landing page (and `DEPARTMENTS`) markets Arts and Commercial. An Arts student who enrols, then opens **"Full UTME Simulation"** in the sidebar, can only tick science subjects and gets a red error. The **"Past Questions Archive"** shows them nothing but science questions. No empty state, no explanation — just a subject list that doesn't contain their subjects.

### 🟡 Minor — Light-mode card edges are effectively invisible

`app/globals.css:41` — light theme `--glass-border: rgba(255,255,255,.82)` sitting on `--bg: #eef3fa`. A white border on near-white is **≈1.1:1**. In light mode every `.glass` card loses its outline and relies entirely on a `0 16px 42px rgba(33,57,91,.10)` shadow to separate from the page. Cards look flat and the grid structure dissolves.

### 🟡 Minor — the exam question palette legend has no colours

`components/QuizRunner.tsx:285`:

```jsx
<div className="flex flex-wrap gap-3 text-[11px] muted mt-3"><span>Current</span><span>Answered</span><span>Not answered</span></div>
```

Three plain grey words. The palette above uses three distinct states (solid accent / `bg-accent/15` / `bg-ink/5`) but the legend renders no swatch, dot, or border to map them. As written the legend communicates nothing.

### 🟡 Minor — mobile chrome ignores the safe area

`app/layout.tsx` sets `viewportFit: 'cover'` but only the Tutor handles insets (`page.tsx:206`, `pb-[max(12px,env(safe-area-inset-bottom))]`).

- The sticky mobile header (`AppShell.tsx:89`) has no `env(safe-area-inset-top)` padding, so on a notched iPhone it renders under the status bar.
- Its `min-h-[76px]` is also tall for a phone header (56–64 is the norm), and it's sticky, so it permanently eats ~10% of a small screen.

### 🟡 Minor — collapsed sidebar hides the unread count

`AppShell.tsx:67` — the notification badge is gated on `!isCollapsed`. Collapse the rail to its 76px state and your unread-notification count silently disappears; the bell looks permanently clear.

### 🟡 Minor — three different version numbers in the UI

| Where | Says |
|---|---|
| `AppShell.tsx:84`, `:102`, `settings/page.tsx:121`, `AdminGuard.tsx:43` | v1.0.0 |
| `app/page.tsx:93` (public footer) | v1.2.0 |
| `package.json` | 1.0.0 |
| HEAD commit | v1.3.0 |

The public footer is the most out-of-date one, which is the worst place to be wrong.

### 🟡 Minor — two different quiz interaction models

`QuizRunner` renders **all** questions stacked on one scrolling page for lesson/topic/subject/mixed assessments, but switches to **one-question-at-a-time with a palette** only when `examMode` is true (mock/UTME). Same component, two very different mental models, no visual cue that they differ. A 20-question subject exam becomes a long scroll with no progress indicator per question.

### 🟡 Minor — brand gradients hardcoded outside the token layer

`components/ui.tsx` — `ProgressBar` (`linear-gradient(90deg,#3367c1,#173b78)`) and `Avatar` (`linear-gradient(135deg,#3367c1,#173b78)`) hardcode hex instead of using `--accent-rgb`. Also `app/app/achievements/[id]/page.tsx` canvas export uses `rgba(30,158,80,0.7)` for the frame — a **green** border on an otherwise navy/blue badge, and `#b9d0f7`/`#3367c1`/`#173b78` literals.

### 🟡 Minor — accessibility gaps

- `app/app/profile/page.tsx:91` — a `<label>` wraps a `role="radiogroup"` containing `<button role="radio">` elements. A label must be associated with a single labelable control; this association is invalid and clicking the label text behaves unpredictably.
- Tutor replies have no `aria-live` region, so screen-reader users get no announcement when the AI answer arrives.
- Quiz answer buttons expose no `aria-pressed` / radio semantics — selection state is colour-only.
- Dark is the default even when the OS prefers light (`lib/theme.ts` `getStoredTheme` returns `'dark'`; the boot script defaults to `'dark'`), so `prefers-color-scheme` is ignored until the user visits Settings.

### 🟢 What's already good

Worth saying, because it's not accidental: `prefers-reduced-motion` is respected globally; `:focus-visible` has a proper 2px accent ring with offset; `overflow-x: clip` + a `.break-anywhere` utility prevent long IDs/emails from forcing horizontal scroll; the lesson deck supports keyboard arrows, swipe, and a labelled `role="tablist"`; `ProgressBar` exposes `role="progressbar"` with aria values; the exam palette has `aria-label`s per index; the light/dark token architecture and pre-paint theme boot are correct and better than most projects at this stage.

---

## 3. Theme audit summary

| Theme-sensitive surface | Uses tokens? |
|---|---|
| Landing, login, signup, onboarding, reset | ✅ |
| Dashboard, subjects, learn, quiz, assessments, mock, utme *(layout)* | ✅ |
| Leaderboards, achievements, verify, notifications, profile, settings | ✅ |
| Admin + Content Studio | ✅ |
| **Tutor** | ❌ hardcoded dark emerald |
| **UTME selects/subject buttons** | ❌ `bg-white/*` |
| **Question Library filters/options** | ❌ `bg-white/*`, emerald/rose |

Roughly **90% of the product switches themes correctly.** The failures are concentrated, and therefore cheap to fix.

---

## 4. Suggested fix order

1. **Re-skin the Tutor onto the token system.** Swap every `bg-[#…]`/`slate`/`emerald` for `--glass-*`, `--ink-rgb`, `--accent-rgb`; let it render *inside* AppShell instead of `fixed inset-0`. Biggest visual win per hour spent.
2. **Kill the `bg-white/*` surfaces** in `utme` and `QuestionLibrary` → `.glass-soft` or `bg-ink/5`. Fixes a genuine AA contrast failure in two high-traffic screens.
3. **Make the landing page and `/verify/[id]` server-rendered** (or at least render the hero/verification card as static markup, hydrating the session check around it). Then add per-page `metadata` + an OG image.
4. **Add `not-found.tsx`, `error.tsx`, and `loading.tsx`** styled with `GlassCard`.
5. **Fix light-mode `--glass-border`** to a real tint (e.g. `rgba(68,103,151,.16)`).
6. **Add colour swatches to the exam legend**; add `aria-pressed` to answer buttons.
7. **Decide the Arts/Commercial story** for UTME + Archive — either build those banks, or gate the two entry points behind a clear "science-only for now" state instead of an error.
8. Mobile safe-area padding + reduce header to ~64px; show the unread badge when collapsed; unify the version string to one constant.

---

---

## 5. Fix pass applied (2026-11-20)

Constraint for this pass: **do not disturb the Supabase / Groq / API integration.** Every change below is presentation, markup semantics, or a version constant. No data flow was touched.

### The protected surface — verified byte-for-byte unchanged

`git diff --name-only` against these paths returns **empty**:

```
lib/supabase.ts          lib/sync.ts             lib/auth.ts
lib/store.ts             lib/progression.ts      lib/utme-scoring.ts
components/db-context.tsx   components/PageViewTracker.tsx
app/api/**               supabase/**             .env.example
```

Specifically preserved: the `SUPABASE_CONFIGURED` gate and env-var names (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`), the anon-key-only client with its `persistSession`/`autoRefreshToken`/`detectSessionInUrl` config and localStorage session key, all `sb*` read/write helpers, every `mirror*` fire-and-forget call, `restoreSupabaseSession`, the `DbProvider` readiness gate and `onAuthStateChange` subscription, the four API routes (`/api/tutor`, `/api/attempts`, `/api/admin/generate-lesson`, `/api/weekly/run`), the Groq key read from `process.env.GROQ_API_KEY`, and the RLS migrations.

Also preserved inside the re-skinned files: the tutor's `fetch('/api/tutor')`, its conversation/usage bookkeeping, the MathJax CDN script and the `mathjax-ready` event, and `QuizRunner`'s shuffle → grade → `setDb`/`mirrorAttempt` pipeline.

### Fixed

| # | Change | Files |
|---|---|---|
| 1 | **Tutor re-skinned onto the token system.** All `bg-[#…]`, `slate-*`, `emerald-*` and `white/*` replaced with `--ink-rgb` / `--accent-rgb` / `--glass-*`. Now follows Light/Dark like everything else, and emerald ACCENT became the brand blue. Immersive full-screen shell kept (no navigation change). | `app/app/tutor/page.tsx`, `components/TutorMarkdown.tsx` |
| 2 | **Killed every hardcoded light surface** — `bg-white/70`, `/60`, `/50`, `/40` in the exam setup and Question Library replaced with `.glass-input` / `bg-ink/5` / `bg-ink/15`. Removes the ≈1.8:1 contrast failure. | `app/app/utme/page.tsx`, `components/QuestionLibrary.tsx` |
| 3 | **Swapped ad-hoc colours for semantic tokens** — `amber-*` → `warn`, `emerald/rose` answer states → `accent`/`danger`. | same |
| 4 | **Fixed white-on-light-accent contrast** in the exam subject tabs and question palette (`bg-accent text-white` → `bg-accent/25 text-ink`), ≈2:1 → AA. | `components/QuizRunner.tsx` |
| 5 | **Exam legend now has colour swatches** mapping to the three palette states. | `components/QuizRunner.tsx` |
| 6 | **Light-mode `--glass-border`** retinted from `rgba(255,255,255,.82)` (≈1.1:1) to `rgba(48,79,128,.17)`. | `app/globals.css` |
| 7 | **One version number** via `lib/version.ts` (`APP_VERSION = '1.3.0'`), replacing v1.0.0/v1.2.0 drift across 5 call sites. | `lib/version.ts` + 4 files |
| 8 | **Mobile safe areas** — `env(safe-area-inset-top)` on the sticky header (honours `viewportFit: 'cover'`), bottom inset on `<main>`, header 76px → 64px. | `components/AppShell.tsx` |
| 9 | **Collapsed sidebar keeps the unread count** as a dot with an accessible label. | `components/AppShell.tsx` |
| 10 | **a11y** — `<label>` no longer wraps a radiogroup; `aria-pressed` on every quiz answer button; `role="log"` + `aria-live` on the tutor transcript. | `profile`, `QuizRunner`, `tutor` |

### Deliberately NOT done (would touch the integration)

These are the items from §4 that require changing *how the session hydrates*, so they were left alone under the constraint:

- **Server-rendering the landing page and `/verify/[id]`** (recommendations #3 and part of #4). `app/page.tsx` and `/verify` both call `useDb()` and are gated by `DbProvider`, which deliberately blocks render until `restoreSupabaseSession()` resolves. Making them static means splitting the component's public markup from the session-aware layer — a structural change with real regression risk for returning Supabase users (the exact bug `db-context.tsx` was written to prevent).
- **Per-route `metadata` / OG images.** Same reason: those pages are client components; `generateMetadata` needs a server component boundary.
- **`not-found.tsx` / `error.tsx` / `loading.tsx`.** These are additive and safe in principle, but `error.tsx` must wrap the `DbProvider` subtree carefully; worth doing as its own reviewed change.
- **Arts/Commercial UTME + Archive banks** — a content/data decision, not a styling one.

### Verification

- `npx tsc --noEmit` → **0 errors**.
- `npm run build` → fails **only** on `next/font` fetching DM Sans, because this sandbox has no egress to `fonts.googleapis.com` (`curl` → HTTP 000). `app/layout.tsx` is untouched; this is environmental and will not occur on Vercel, where `next/font` self-hosts at build time.
- All routes re-served **HTTP 200** from a clean `.next`: `/`, `/login`, `/signup`, `/app/tutor`, `/app/utme`, `/app/archive`, `/app/profile`, `/app/settings`.
- Compiled CSS contains every token class used and **zero** `bg-white/*` remain in source.
- Bonus find: `bg-white/7` and `bg-white/12` in the old tutor CSS **never generated any CSS** (not valid opacity steps) — the active/hover conversation states were silently dead. Now fixed as a side effect.

*Note: `npm run build` writes `.next` — do not run it while the dev server is up, it will corrupt the dev manifest and make `/` 404 until `.next` is cleared.*
