'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDb } from '@/components/db-context';
import { Logo } from '@/components/Logo';
import { Mascot } from '@/components/Mascot';
import { register } from '@/lib/auth';
import { mirrorOnboarding } from '@/lib/sync';
import { getSubject } from '@/lib/curriculum';
import { getPendingSignup, clearPendingSignup } from '@/lib/pending-signup';
import { COURSE_REQUIREMENTS, DEPARTMENTS, DEPARTMENT_SUBJECTS, SUBJECT_NAMES, validateCombination, type Department } from '@/lib/store';

const STEP_LABELS = ['Your details', 'Department', 'Subjects', 'Course'] as const;

/** Suggest a valid, unused username from the sign-up email. */
function suggestUsername(email: string, taken: string[], selfUsername?: string): string {
  const local = (email.split('@')[0] || 'student').toLowerCase();
  let base = local.replace(/[^a-z0-9_]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '').slice(0, 16);
  if (base.length < 3) base = `${base}jamb`.slice(0, 16);
  if (base.length < 3) base = 'student';
  const isTaken = (name: string) => name.toLowerCase() !== (selfUsername || '').toLowerCase()
    && taken.some(t => t.toLowerCase() === name.toLowerCase());
  if (!isTaken(base)) return base;
  for (let n = 1; n < 1000; n++) {
    const candidate = `${base}${n}`.slice(0, 20);
    if (!isTaken(candidate)) return candidate;
  }
  return base;
}

export default function OnboardingPage() {
  const { db, user, setDb } = useDb();
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [department, setDepartment] = useState<Department>('science');
  const [picked, setPicked] = useState<string[]>([]);
  const [course, setCourse] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [fatal, setFatal] = useState('');

  // Prefill from the signed-in profile, or from the short sign-up form.
  useEffect(() => {
    const pending = getPendingSignup();
    if (user) {
      setEmail(user.email);
      setFullName(user.fullName || '');
      setUsername(user.username || '');
      setDepartment(user.department || 'science');
    } else if (pending) {
      setEmail(pending.email);
      setUsername(suggestUsername(pending.email, db.profiles.map(p => p.username)));
      setDepartment(pending.department || 'science');
    } else {
      setFatal('Your sign-up session has ended. Please create your account again — it only takes a moment.');
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user?.onboarded) router.replace('/app/dashboard');
  }, [user, router]);

  const deptName = DEPARTMENTS.find(d => d.id === department)?.name || 'Science';
  const deptSubjects = DEPARTMENT_SUBJECTS[department];
  const deptCourses = COURSE_REQUIREMENTS.filter(c => c.dept === department);
  const subjects = ['english', ...picked];

  const toggleSubject = (id: string) => {
    setError('');
    setPicked(p => p.includes(id) ? p.filter(x => x !== id) : p.length >= 3 ? p : [...p, id]);
  };
  const pickDepartment = (d: Department) => {
    if (d === department) return; // re-tapping the current choice must not wipe the picks
    setDepartment(d); setPicked([]); setCourse(''); setError('');
  };

  const validateStep = (at: number): string => {
    if (at === 0) {
      if (fullName.trim().length < 3) return 'Enter your full name (at least 3 characters).';
      if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) return 'Username must be 3–20 letters, numbers or underscores.';
      const clash = db.profiles.some(p => p.username.toLowerCase() === username.toLowerCase() && p.id !== user?.id);
      if (clash) return 'That username is already taken. Choose another.';
      return '';
    }
    if (at === 2 && picked.length !== 3) return `Pick exactly three ${deptName} subjects in addition to English Language.`;
    if (at === 3 && course) {
      const v = validateCombination(subjects, course, department);
      if (!v.ok) return v.message;
    }
    return '';
  };

  const goNext = () => {
    const problem = validateStep(step);
    if (problem) { setError(problem); return; }
    setError(''); setStep(s => Math.min(STEP_LABELS.length - 1, s + 1));
  };
  const goBack = () => { setError(''); setStep(s => Math.max(0, s - 1)); };

  const finish = async () => {
    const problem = validateStep(0) || validateStep(2) || validateStep(3);
    if (problem) { setError(problem); return; }
    setError(''); setBusy(true);
    try {
      let activeId = user?.id || '';
      if (!user) {
        const pending = getPendingSignup();
        if (!pending) { setFatal('Your sign-up session has ended. Please create your account again.'); return; }
        const res = await register(db, fullName, username, pending.email, pending.password, department);
        if (!res.ok || !res.user) { setError(res.error || 'Could not create your account.'); return; }
        activeId = res.user.id;
        clearPendingSignup();
      }
      const finalName = fullName.trim();
      setDb(d => {
        const u = d.profiles.find(p => p.id === activeId);
        if (u) {
          u.fullName = finalName;
          u.username = username;
          u.department = department;
          u.subjects = subjects;
          u.intendedCourse = course || undefined;
          u.onboarded = true;
        }
        d.sessionUserId = activeId;
        return d;
      });
      mirrorOnboarding(activeId, subjects, course || undefined, department);
      router.replace('/app/dashboard');
    } finally {
      setBusy(false);
    }
  };

  // ---------------------------------------------------------------- guards
  if (!hydrated) {
    return <div className="min-h-screen flex items-center justify-center"><p className="muted text-sm">Loading…</p></div>;
  }
  if (fatal) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass p-7 w-full max-w-md text-center">
          <Logo />
          <p className="muted text-sm mt-5 leading-relaxed">{fatal}</p>
          <Link href="/signup" className="btn-primary inline-block mt-4">Create my account</Link>
        </div>
      </div>
    );
  }

  const courseValidation = course && picked.length === 3 ? validateCombination(subjects, course, department) : null;

  return (
    <div className="min-h-screen">
      <header className="mx-auto w-full max-w-3xl px-4 py-5 flex items-center justify-between">
        <Logo />
        <span className="chip">Step {step + 1} of {STEP_LABELS.length}</span>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 pb-16">
        {/* progress */}
        <ol className="flex items-center gap-2 mb-5" aria-label="Onboarding progress">
          {STEP_LABELS.map((label, i) => (
            <li key={label} className="flex-1">
              <div className={'h-1.5 rounded-full ' + (i <= step ? 'bg-accent' : 'bg-ink/15')} />
              <span className={'mt-1.5 block text-[11px] font-semibold ' + (i === step ? 'text-ink' : 'muted')}>{label}</span>
            </li>
          ))}
        </ol>

        <div className="glass p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <Mascot size={56} className="shrink-0" />
            <div className="min-w-0">
              <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                {step === 0 && 'Welcome to Darax — who are you?'}
                {step === 1 && 'Which department are you in?'}
                {step === 2 && `Pick three ${deptName} subjects`}
                {step === 3 && 'What are you aiming for?'}
              </h1>
              <p className="muted text-sm mt-1 leading-relaxed">
                {step === 0 && 'This is how you will appear on leaderboards and your achievement badges.'}
                {step === 1 && 'Your subjects, lessons and mock exams follow your department. You can change it later in My Profile.'}
                {step === 2 && 'English Language is compulsory for every JAMB candidate. Choose three more — you can change these later.'}
                {step === 3 && 'Optional, but it lets us check that your four-subject combination meets the JAMB requirement for your course.'}
              </p>
            </div>
          </div>

          <div className="mt-6">
            {/* ---------------------------------------------------- step 1: details */}
            {step === 0 && (
              <div className="grid gap-4">
                <div className="glass-soft flex items-center justify-between gap-3 p-3">
                  <span className="text-sm muted">Signing up with</span>
                  <span className="text-sm font-semibold break-all text-right">{email}</span>
                </div>

                <label className="text-sm font-medium">Full name
                  <input
                    className="glass-input mt-1"
                    value={fullName}
                    onChange={e => { setFullName(e.target.value); setError(''); }}
                    placeholder="e.g. Adaeze Okafor"
                    autoComplete="name"
                    autoFocus
                  />
                  <span className="mt-1 block text-xs muted font-normal">As you want it printed on your achievement badges.</span>
                </label>

                <label className="text-sm font-medium">Username
                  <input
                    className="glass-input mt-1"
                    value={username}
                    onChange={e => { setUsername(e.target.value.replace(/\s/g, '')); setError(''); }}
                    placeholder="e.g. adaeze_jamb"
                    autoComplete="username"
                  />
                  <span className="mt-1 block text-xs muted font-normal">3–20 letters, numbers or underscores. Used to log in and shown on leaderboards.</span>
                </label>
              </div>
            )}

            {/* ------------------------------------------------- step 2: department */}
            {step === 1 && (
              <div className="grid gap-2.5" role="radiogroup" aria-label="Department">
                {DEPARTMENTS.map(d => {
                  const on = department === d.id;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      role="radio"
                      aria-checked={on}
                      onClick={() => pickDepartment(d.id)}
                      className={'flex items-center gap-3 rounded-xl border p-4 text-left transition ' + (on ? 'border-accent bg-accent/10 ring-1 ring-accent/30' : 'border-ink/15 bg-white hover:border-accent/50 hover:bg-accent/5')}
                    >
                      <span className={'grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold ' + (on ? 'bg-accent text-white' : 'bg-ink/5 text-ink/60')}>
                        {d.name[0]}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-sm">{d.name}</span>
                        <span className="block text-xs muted mt-0.5 leading-snug">{d.tagline}</span>
                      </span>
                      <span className={'h-5 w-5 shrink-0 rounded-full border ' + (on ? 'border-accent bg-accent' : 'border-ink/25')} aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            )}

            {/* --------------------------------------------------- step 3: subjects */}
            {step === 2 && (
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <p className="text-sm font-semibold">Your four subjects</p>
                  <span className="chip">{picked.length}/3 chosen</span>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-xl border border-accent/40 bg-accent/10 p-3">
                  <span className="flex items-center gap-2 font-medium">English Language</span>
                  <span className="text-xs font-semibold text-accent">Compulsory ✓</span>
                </div>

                <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2" role="group" aria-label={`${deptName} subjects`}>
                  {deptSubjects.map(id => {
                    const on = picked.includes(id);
                    const subject = getSubject(id);
                    return (
                      <button
                        key={id}
                        type="button"
                        aria-pressed={on}
                        onClick={() => toggleSubject(id)}
                        className={'flex items-center gap-2.5 rounded-xl border p-3 text-left transition ' + (on ? 'border-accent bg-accent/10 ring-1 ring-accent/30' : 'border-ink/15 bg-white hover:border-accent/50 hover:bg-accent/5')}
                      >
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: subject?.colour || '#006633' }} aria-hidden="true" />
                        <span className="min-w-0 flex-1 text-sm font-medium">{SUBJECT_NAMES[id] || id}</span>
                        <span className={'grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[10px] font-bold ' + (on ? 'border-accent bg-accent text-white' : 'border-ink/25 text-transparent')}>✓</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ----------------------------------------------------- step 4: course */}
            {step === 3 && (
              <div className="grid gap-4">
                <div>
                  <h2 className="text-sm font-semibold mb-2">Your combination</h2>
                  <div className="grid gap-1.5 sm:grid-cols-2">
                    {subjects.map(id => (
                      <div key={id} className="glass-soft flex items-center gap-2 p-2.5 text-sm">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: getSubject(id)?.colour || '#006633' }} aria-hidden="true" />
                        {SUBJECT_NAMES[id] || id}
                      </div>
                    ))}
                  </div>
                </div>

                <label className="text-sm font-medium block">Intended university course <span className="muted font-normal">(optional)</span>
                  <select className="glass-input mt-1" value={course} onChange={e => { setCourse(e.target.value); setError(''); }}>
                    <option value="">— No course selected yet —</option>
                    {deptCourses.map(c => <option key={c.course} value={c.course}>{c.course}</option>)}
                  </select>
                </label>

                {courseValidation && (
                  <p className={`text-sm px-3 py-2 rounded-lg border ${courseValidation.ok ? 'text-accent bg-accent/10 border-accent/30' : 'text-warn bg-warn/10 border-warn/30'}`}>
                    {courseValidation.message}
                  </p>
                )}
                {!course && <p className="text-xs muted">You can add or change this later in My Profile.</p>}
              </div>
            )}
          </div>

          {error && (
            <p role="alert" className="text-sm text-danger bg-danger/10 border border-danger/25 rounded-lg px-3 py-2 mt-4">{error}</p>
          )}

          <div className="mt-6 flex items-center justify-between gap-3">
            {step > 0
              ? <button type="button" onClick={goBack} className="btn-ghost text-sm" disabled={busy}>← Back</button>
              : <Link href="/signup" className="btn-ghost text-sm">← Sign up</Link>}

            {step < STEP_LABELS.length - 1 ? (
              <button type="button" onClick={goNext} className="btn-primary text-sm">Continue →</button>
            ) : (
              <button type="button" onClick={finish} className="btn-primary text-sm" disabled={busy}>
                {busy ? 'Creating your account…' : 'Finish and start learning'}
              </button>
            )}
          </div>
        </div>

        <p className="text-xs muted mt-4 text-center">
          Your completed lessons, scores and badges stay safe if you change subjects later.
        </p>
      </main>
    </div>
  );
}
