'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDb } from '@/components/db-context';
import { Logo } from '@/components/Logo';
import { mirrorOnboarding } from '@/lib/sync';
import { COURSE_REQUIREMENTS, SCIENCE_SUBJECTS, SUBJECT_NAMES, validateCombination } from '@/lib/store';

export default function OnboardingPage() {
  const { user, setDb } = useDb();
  const router = useRouter();
  const [picked, setPicked] = useState<string[]>([]);
  const [course, setCourse] = useState('');
  const [error, setError] = useState('');

  if (!user) return <div className="min-h-screen flex items-center justify-center"><p className="muted">Loading…</p></div>;

  const toggle = (id: string) => {
    setError('');
    setPicked(p => p.includes(id) ? p.filter(x => x !== id) : p.length >= 3 ? p : [...p, id]);
  };

  const subjects = ['english', ...picked];
  const validation = validateCombination(subjects, course || undefined);

  const submit = () => {
    if (picked.length !== 3) { setError('Pick exactly three science subjects in addition to English Language.'); return; }
    if (course && !validation.ok) { setError(validation.message); return; }
    setDb(d => {
      const u = d.profiles.find(p => p.id === user.id)!;
      u.subjects = subjects; u.intendedCourse = course || undefined; u.onboarded = true;
      return d;
    });
    mirrorOnboarding(user.id, subjects, course || undefined);
    router.replace('/app/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass p-7 w-full max-w-2xl">
        <Logo />
        <h1 className="text-2xl font-bold mt-5">Welcome, {user.fullName.split(' ')[0]} — set up your JAMB subjects</h1>
        <p className="muted text-sm mt-1">This platform is strictly for JAMB science students. English Language is compulsory for every candidate.</p>

        <h2 className="font-semibold mt-6 mb-2">1. English Language <span className="chip">Compulsory</span></h2>
        <div className="glass-soft p-3 flex items-center justify-between">
          <span className="font-medium">English Language</span>
          <span className="text-accent text-sm font-semibold">✓ Locked in</span>
        </div>

        <h2 className="font-semibold mt-6 mb-2">2. Pick exactly three more science subjects <span className="muted font-normal">({picked.length}/3 selected)</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SCIENCE_SUBJECTS.map(id => {
            const on = picked.includes(id);
            return (
              <button key={id} onClick={() => toggle(id)} aria-pressed={on}
                className={`text-left p-3 rounded-xl border transition-colors ${on ? 'bg-accent/15 border-accent/50' : 'bg-ink/5 border-ink/10 hover:bg-ink/10'}`}>
                <span className="font-medium">{SUBJECT_NAMES[id]}</span>
                <span className="float-right">{on ? '✓' : '○'}</span>
              </button>
            );
          })}
        </div>

        <h2 className="font-semibold mt-6 mb-2">3. Intended university course <span className="muted font-normal">(optional)</span></h2>
        <select className="glass-input" value={course} onChange={e => { setCourse(e.target.value); setError(''); }}>
          <option value="">— No course selected yet —</option>
          {COURSE_REQUIREMENTS.map(c => <option key={c.course} value={c.course}>{c.course}</option>)}
        </select>
        {course && (
          <p className={`text-sm mt-2 px-3 py-2 rounded-lg border ${validation.ok ? 'text-accent bg-accent/10 border-accent/30' : 'text-warn bg-warn/10 border-warn/30'}`}>
            {validation.message}
          </p>
        )}
        {picked.length === 3 && !course && <p className="text-sm muted mt-2">{validation.message}</p>}
        {error && <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-3 py-2 mt-4">{error}</p>}
        <button onClick={submit} className="btn-primary w-full mt-6" disabled={picked.length !== 3}>
          {picked.length !== 3 ? `Pick ${3 - picked.length} more subject${3 - picked.length === 1 ? '' : 's'} to continue` : 'Save my subjects and start learning'}
        </button>
        <p className="text-xs muted mt-3 text-center">You can change your subjects later in My Profile — your completed lessons and scores are preserved.</p>
      </div>
    </div>
  );
}
