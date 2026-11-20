'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Logo, VerifiedBadge } from '@/components/Logo';
import { Mascot } from '@/components/Mascot';
import { ALL_LESSONS, SUBJECTS, getSubject } from '@/lib/curriculum';
import { DEPARTMENTS, DEPARTMENT_SUBJECTS } from '@/lib/store';
import { useDb } from '@/components/db-context';
import { APP_VERSION } from '@/lib/version';

// App entry: a signed-in visitor goes straight into the app (dashboard),
// a new visitor sees the public landing page.
export default function Landing() {
  const { user, ready } = useDb();
  const router = useRouter();
  useEffect(() => {
    if (ready && user) router.replace('/app/dashboard');
  }, [ready, user, router]);

  const lessonCount = ALL_LESSONS.length;
  const subjectCount = SUBJECTS.length;

  const features = [
    { t: 'Structured lessons', d: `${lessonCount} lessons across ${subjectCount} subjects — full notes, worked examples, JAMB tips and common mistakes, delivered one slide at a time.` },
    { t: 'The 70% unlock rule', d: 'Score at least 70% on a lesson quiz to unlock the next lesson. Retake as often as you need. Mastery before momentum.' },
    { t: 'Real CBT practice', d: 'A faithful JAMB CBT replica: green navigation bar, countdown timer, and the same green / blue / red question map used on exam day.' },
    { t: 'DARAX AI Tutor', d: 'Ask any question and get a step-by-step explanation with a worked example and a practice question at the end.' },
    { t: 'Weekly leaderboards', d: 'Top Scorers and Top Scholars, ranked from real assessment results every week — never from volume alone.' },
    { t: 'Verified badges', d: 'Weekly winners receive an Official Darax badge with a unique ID anyone can verify from a public link.' },
  ];

  const faqs = [
    { q: 'Is it really free?', a: 'Yes. Every lesson, every practice question, every mock exam and the AI tutor are free. There is no payment step anywhere in the platform.' },
    { q: 'Do I need to confirm my email?', a: 'No. Create an account with an email and a password, and you go straight into subject setup.' },
    { q: 'Are these real JAMB past questions?', a: 'No — and we will never claim otherwise. Every question is original and written for this platform, mapped to the JAMB syllabus. They are JAMB-style practice, not leaked or verbatim past papers.' },
    { q: 'Which subjects are covered?', a: `English Language plus ${subjectCount - 1} others across Science, Arts and Commercial — including Mathematics, Physics, Chemistry, Biology, Government, Literature, Economics, Accounting, CRS, IRS, Yoruba and more.` },
    { q: 'Can I use it on my phone?', a: 'Yes. The whole platform is built mobile-first, including the CBT simulation. A data connection is needed to grade assessments.' },
    { q: 'What is the 70% rule?', a: 'It is our mastery gate. You unlock the next lesson by scoring at least 70% on the current lesson quiz. It keeps you honest about what you actually know.' },
  ];

  const steps = [
    { n: '01', t: 'Create an account', d: 'Email and password. That is the whole sign-up form.' },
    { n: '02', t: 'Set up your subjects', d: 'Pick your department, then your three subjects alongside compulsory English.' },
    { n: '03', t: 'Learn and practise', d: 'Work through lessons, unlock quizzes, then sit a timed 180-question UTME simulation.' },
  ];

  return (
    <div className="min-h-screen">
      {/* ------------------------------------------------------------ header */}
      <header className="sticky top-0 z-40 border-b border-[var(--card-border)] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex" aria-label="Site">
            <a href="#features" className="muted hover:text-ink">Features</a>
            <a href="#how" className="muted hover:text-ink">How it works</a>
            <a href="#subjects" className="muted hover:text-ink">Subjects</a>
            <a href="#about" className="muted hover:text-ink">About us</a>
            <a href="#faq" className="muted hover:text-ink">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login" className="btn-ghost text-sm">Log in</Link>
            <Link href="/signup" className="btn-primary text-sm">Get started free</Link>
          </div>
        </div>
      </header>

      <main>
        {/* ------------------------------------------------------------- hero */}
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-14 sm:pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)]">
            <div>
              <span className="chip inline-flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                100% FREE · SCIENCE · ARTS · COMMERCIAL
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                Pass JAMB with<br />
                <span className="text-accent">structured practice.</span>
              </h1>
              <p className="muted mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
                The Official Darax Free JAMB Prep gives every Nigerian candidate the same thing private tutoring charges for:
                a real syllabus, worked explanations, a faithful CBT simulation, and an AI tutor that answers at 2am.
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-accent">Learn. Practice. Improve. Excel.</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/signup" className="btn-primary text-base">Start learning free</Link>
                <Link href="/login" className="btn-ghost text-base">I already have an account</Link>
              </div>
              <p className="mt-3 text-xs muted">No email confirmation · No payment · Set up in about a minute</p>

              <dl className="mt-8 grid max-w-lg grid-cols-3 gap-4">
                {[
                  [`${lessonCount}`, 'lessons'],
                  [`${subjectCount}`, 'subjects'],
                  ['17', 'practice years'],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="text-2xl font-extrabold tracking-tight">{v}</dt>
                    <dd className="text-xs muted">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* mascot panel */}
            <div className="relative">
              <div className="glass relative overflow-hidden p-6">
                <div className="flex items-center justify-between">
                  <span className="chip chip-blue">Your study buddy</span>
                  <VerifiedBadge size={20} />
                </div>
                <div className="mt-4 flex justify-center">
                  <Mascot size={168} wave className="mascot-float" />
                </div>
                <p className="mt-2 text-center text-lg font-bold">Meet Dara</p>
                <p className="muted mt-1 text-center text-sm leading-relaxed">
                  She walks first-timers through the whole platform, step by step, the first time you log in.
                </p>
              </div>

              <div className="pointer-events-none absolute -left-4 top-24 hidden sm:block">
                <div className="glass-soft flex items-center gap-2 px-3 py-2 shadow-card">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-[10px] font-bold text-white">A</span>
                  <span className="text-xs font-semibold">Physics · 98%</span>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-3 bottom-16 hidden sm:block">
                <div className="glass-soft flex items-center gap-2 px-3 py-2 shadow-card">
                  <span className="text-sm">🔥</span>
                  <span className="text-xs font-semibold">12-day streak</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ stats */}
        <section className="border-y border-[var(--card-border)] bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
            {[
              ['3,000+', 'practice questions with explanations'],
              ['180', 'questions in every full UTME simulation'],
              ['70%', 'pass mark that unlocks every lesson'],
              ['₦0', 'cost — free forever'],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="text-2xl font-extrabold tracking-tight text-accent">{v}</p>
                <p className="mt-1 text-xs muted leading-relaxed">{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --------------------------------------------------------- features */}
        <section id="features" className="mx-auto max-w-6xl px-4 py-14 scroll-mt-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">What you get</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Everything you need, nothing you don&apos;t.</h2>
            <p className="muted mt-2 leading-relaxed">
              Built around how JAMB actually tests you — recall, speed and accuracy under a clock.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {features.map((f, i) => (
              <article key={f.t} className="glass p-5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-sm font-bold text-accent">{i + 1}</span>
                <h3 className="mt-3 font-bold">{f.t}</h3>
                <p className="muted mt-1.5 text-sm leading-relaxed">{f.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------- how it works */}
        <section id="how" className="border-y border-[var(--card-border)] bg-white scroll-mt-20">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">How it works</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">From sign-up to exam day in three steps.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map(s => (
                <div key={s.n} className="glass-soft p-5">
                  <p className="text-2xl font-extrabold text-accent/40">{s.n}</p>
                  <h3 className="mt-1 font-bold">{s.t}</h3>
                  <p className="muted mt-1 text-sm leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- about */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-14 scroll-mt-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">About us</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Why we built Darax.</h2>
              <div className="muted mt-4 space-y-4 leading-relaxed">
                <p>
                  Every year, more than a million Nigerian students sit the Unified Tertiary Matriculation Examination.
                  A large share of them prepare with photocopied handouts, WhatsApp PDFs and guesswork — not because they
                  aren&apos;t capable, but because good preparation has always been expensive.
                </p>
                <p>
                  <strong className="text-ink">The Official Darax Free JAMB Prep</strong> exists to close that gap. We take the
                  JAMB syllabus and turn it into something you can actually work through: short lessons, worked examples,
                  and a quiz at the end that tells you the truth about whether you understood it.
                </p>
                <p>
                  We are not JAMB, and we&apos;re careful never to pretend to be. We don&apos;t sell &quot;leaked questions&quot;
                  and we don&apos;t promise magic. What we offer is honest practice, clear explanations and the same
                  CBT interface you will meet in the exam hall — so the format never costs you marks.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ['Free, permanently', 'No paywall, no premium tier, no ad-gating.'],
                  ['Honest by default', 'Original questions, clearly labelled as practice.'],
                  ['Built for the CBT', 'The interface mirrors the real exam screen.'],
                ].map(([t, d]) => (
                  <div key={t} className="glass-soft p-4">
                    <p className="text-sm font-bold">{t}</p>
                    <p className="muted mt-1 text-xs leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="glass h-fit p-6">
              <div className="flex justify-center"><Mascot size={104} /></div>
              <h3 className="mt-3 text-center text-lg font-bold">Our promise</h3>
              <p className="muted mt-2 text-center text-sm leading-relaxed">
                No fake scores. No invented &quot;past questions&quot;. No payment step.
                Your results are graded and saved, and the leaderboards only count real attempts.
              </p>
              <div className="mt-5 border-t border-[var(--card-border)] pt-4">
                <p className="text-xs muted leading-relaxed">
                  Powered by <strong className="text-ink">Official Darax</strong>. Built for Nigerian students preparing
                  for the Unified Tertiary Matriculation Examination.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* ---------------------------------------------------------- subjects */}
        <section id="subjects" className="border-y border-[var(--card-border)] bg-white scroll-mt-20">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Coverage</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Subjects covered</h2>
            <p className="muted mt-2 max-w-2xl leading-relaxed">
              English Language is compulsory for every candidate. Then choose three from your department.
            </p>

            <div className="mt-8 space-y-8">
              {DEPARTMENTS.map(dept => {
                const ids = ['english', ...DEPARTMENT_SUBJECTS[dept.id]];
                const deptSubjects = SUBJECTS.filter(s => ids.includes(s.id));
                return (
                  <div key={dept.id}>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-bold">{dept.name}</h3>
                      <span className="text-xs muted">— {dept.tagline}</span>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                      {deptSubjects.map(s => (
                        <div key={s.id} className="glass-soft p-3">
                          <span className="mb-1.5 block h-2 w-2 rounded-full" style={{ background: s.colour }} aria-hidden="true" />
                          <p className="text-sm font-semibold leading-snug">{s.name}</p>
                          <p className="muted mt-1 text-xs leading-snug">{s.tagline}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-xs muted">
              English Language appears in every department. Lesson and question counts vary by subject.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------------- faq */}
        <section id="faq" className="mx-auto max-w-3xl px-4 py-14 scroll-mt-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Questions</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Frequently asked</h2>
          <div className="mt-6 space-y-2.5">
            {faqs.map(f => (
              <details key={f.q} className="glass group p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span className="shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden="true">＋</span>
                </summary>
                <p className="muted mt-2.5 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- final cta */}
        <section className="mx-auto max-w-6xl px-4 pb-14">
          <div className="glass flex flex-col items-center gap-5 p-8 text-center sm:p-10">
            <Mascot size={92} wave className="mascot-float" />
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Ready to excel in JAMB?</h2>
            <p className="muted max-w-xl text-sm leading-relaxed">
              Create your free account, choose your four subjects, and start your first lesson today.
              Dara will show you exactly where everything is.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/signup" className="btn-primary text-base">Create my free account</Link>
              <Link href="/login" className="btn-ghost text-base">Log in</Link>
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------------- footer */}
      <footer className="border-t border-[var(--card-border)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo />
              <p className="muted mt-3 max-w-xs text-xs leading-relaxed">
                Free, structured JAMB preparation for Science, Arts and Commercial students — powered by Official Darax.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider">Platform</p>
              <ul className="mt-2.5 space-y-1.5 text-sm">
                <li><a href="#features" className="muted hover:text-ink">Features</a></li>
                <li><a href="#how" className="muted hover:text-ink">How it works</a></li>
                <li><a href="#subjects" className="muted hover:text-ink">Subjects</a></li>
                <li><a href="#faq" className="muted hover:text-ink">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider">Account</p>
              <ul className="mt-2.5 space-y-1.5 text-sm">
                <li><Link href="/signup" className="muted hover:text-ink">Create an account</Link></li>
                <li><Link href="/login" className="muted hover:text-ink">Log in</Link></li>
                <li><Link href="/reset" className="muted hover:text-ink">Reset password</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider">Subjects</p>
              <ul className="mt-2.5 space-y-1.5 text-sm">
                {['english', 'mathematics', 'physics', 'chemistry'].map(id => (
                  <li key={id} className="muted">{getSubject(id)?.name || id}</li>
                ))}
                <li className="muted">and {subjectCount - 4} more</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-[var(--card-border)] pt-5 text-xs muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Official Darax · The Official Darax Free JAMB Prep · v{APP_VERSION}</p>
            <p className="sm:text-right">Learn. Practice. Improve. Excel.</p>
          </div>
          <p className="mt-3 text-xs muted leading-relaxed">
            Practice questions are original and written for this platform. They are not official JAMB past questions,
            and this platform is not affiliated with the Joint Admissions and Matriculation Board.
          </p>
        </div>
      </footer>
    </div>
  );
}
