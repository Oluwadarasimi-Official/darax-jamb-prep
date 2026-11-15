import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SUBJECTS } from '@/lib/curriculum';

export default function Landing() {
  return (
    <div className="min-h-screen">
      <header className="max-w-6xl mx-auto px-4 py-5 flex flex-wrap items-center justify-between gap-2">
        <Logo />
        <div className="flex gap-2 items-center flex-wrap justify-end">
          <ThemeToggle />
          <Link href="/login" className="btn-ghost">Log in</Link>
          <Link href="/signup" className="btn-primary">Create free account</Link>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <section className="glass p-8 md:p-12 mt-4 text-center">
          <p className="chip inline-block mb-4">100% FREE · FOR SCIENCE STUDENTS · POWERED BY OFFICIAL DARAX</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">The Official Darax<br />Free JAMB Prep</h1>
          <p className="text-xl font-semibold text-accent mt-4 tracking-wide">LEARN. PRACTICE. IMPROVE. EXCEL.</p>
          <p className="muted max-w-2xl mx-auto mt-4 leading-relaxed">
            A complete JAMB preparation platform for science students: structured lessons across the
            JAMB syllabus, lesson quizzes with a 70% pass rule, timed mock examinations, a Darax AI
            tutor, weekly leaderboards and official achievement badges.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-7">
            <Link href="/signup" className="btn-primary text-base">Start learning free</Link>
            <Link href="/login" className="btn-ghost text-base">I already have an account</Link>
          </div>
          <p className="text-xs muted mt-4">No email confirmation needed · No payment · Your progress is saved on your device</p>
        </section>

        <section className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            { t: 'Structured Academy', d: '112 lessons across 8 science subjects, each with full notes, worked examples, JAMB tips and a 15-question quiz.' },
            { t: '70% unlock rule', d: 'Score at least 70% on a lesson quiz to unlock the next lesson. Retake as many times as you need — mastery first.' },
            { t: 'Darax AI Tutor', d: 'Ask questions, get step-by-step explanations in Maths, Physics, Chemistry, Biology and English.' },
            { t: 'Timed mock exams', d: 'JAMB-style timed mocks with automatic grading, explanations and per-subject analytics.' },
            { t: 'Weekly leaderboards', d: 'Top Scorers and Top Scholars, ranked every week from real assessment results — never from volume alone.' },
            { t: 'Official badges', d: 'Weekly winners receive a verifiable Official Darax achievement badge, signed by Official Darax.' },
          ].map(f => (
            <div key={f.t} className="glass p-5">
              <h3 className="font-bold text-lg">{f.t}</h3>
              <p className="muted text-sm mt-1 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Subjects covered</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SUBJECTS.map(s => (
              <div key={s.id} className="glass-soft p-4">
                <span className="inline-block w-3 h-3 rounded-full mb-2" style={{ background: s.colour }} />
                <p className="font-semibold">{s.name}</p>
                <p className="text-xs muted mt-1">{s.tagline}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-6 mt-8 text-center">
          <h2 className="text-xl font-bold">Ready to excel in JAMB?</h2>
          <p className="muted text-sm mt-1">Create your free account, pick your four science subjects, and start your first lesson today.</p>
          <Link href="/signup" className="btn-primary inline-block mt-4">Create my free account</Link>
        </section>
      </main>
      <footer className="max-w-6xl mx-auto px-4 pb-8 text-center text-xs muted">
        <p>© 2026 Official Darax · The Official Darax Free JAMB Prep · v1.0.0</p>
        <p className="mt-1">Practice questions are original and written for this platform. They are not official JAMB past questions.</p>
      </footer>
    </div>
  );
}
