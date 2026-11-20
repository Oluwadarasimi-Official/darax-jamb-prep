'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDb } from '@/components/db-context';
import { getSubject } from '@/lib/curriculum';
import { mirrorOnboarding } from '@/lib/sync';
import { COURSE_REQUIREMENTS, DEPARTMENTS, DEPARTMENT_SUBJECTS, SUBJECT_NAMES, validateCombination, type Department } from '@/lib/store';
import { GlassCard, Avatar, ProgressBar } from '@/components/ui';
import { overallProgress, subjectProgress } from '@/lib/progression';

export default function ProfilePage() {
  const { db, user, setDb } = useDb();
  const router = useRouter();
  const [editingSubjects, setEditingSubjects] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);
  const [department, setDepartment] = useState<Department>('science');
  const [course, setCourse] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  if (!user) return null;

  const overall = overallProgress(db, user.id, user.subjects);
  const attempts = db.attempts.filter(a => a.userId === user.id);
  const myBadges = db.badges.filter(b => b.userId === user.id);
  const deptName = DEPARTMENTS.find(d => d.id === (user.department || 'science'))?.name || 'Science';

  const startEdit = () => {
    setDepartment(user.department || 'science');
    setPicked(user.subjects.filter(s => s !== 'english'));
    setCourse(user.intendedCourse || '');
    setEditingSubjects(true); setMsg(''); setError('');
  };

  const pickDept = (d: Department) => {
    setDepartment(d); setPicked([]); setCourse(''); setError('');
  };

  const saveSubjects = () => {
    if (picked.length !== 3) { setError(`Pick exactly three ${DEPARTMENTS.find(d => d.id === department)?.name || ''} subjects in addition to English Language.`); return; }
    const subjects = ['english', ...picked];
    const v = validateCombination(subjects, course || undefined, department);
    if (course && !v.ok) { setError(v.message); return; }
    const deptChanged = department !== (user.department || 'science');
    setDb(d => {
      const u = d.profiles.find(p => p.id === user.id)!;
      u.department = department; u.subjects = subjects; u.intendedCourse = course || undefined;
      // Changing department resets the enrolment to that department's onboarding.
      if (deptChanged) { u.onboarded = false; u.subjects = ['english']; }
      return d;
    });
    mirrorOnboarding(user.id, deptChanged ? ['english'] : subjects, deptChanged ? undefined : course || undefined, department, !deptChanged);
    setEditingSubjects(false);
    if (deptChanged) { router.replace('/onboarding'); return; }
    setMsg('Subjects updated. Your completed lessons, scores and badges are preserved.');
  };

  return (
    <div className="flex flex-col gap-5">
      <GlassCard>
        <div className="flex items-center gap-4 flex-wrap">
          <Avatar name={user.fullName} size={64} />
          <div>
            <h1 className="text-2xl font-bold">{user.fullName}</h1>
            <p className="muted text-sm">@{user.username} · {user.email}{user.isDemo ? ' · Demo account (test data)' : ''}</p>
            <p className="text-sm mt-1">Member since {new Date(user.createdAt).toLocaleDateString()} · Role: {user.role} · Department: {deptName}</p>
          </div>
          <Link href="/app/settings" className="btn-ghost ml-auto text-sm">Edit profile →</Link>
        </div>
      </GlassCard>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Overall progress', value: `${overall.percent}%` },
          { label: 'Lessons completed', value: String(overall.done) },
          { label: 'Assessments taken', value: String(attempts.length) },
          { label: 'Badges earned', value: String(myBadges.length) },
        ].map(s => (
          <GlassCard key={s.label} className="!p-4"><p className="text-2xl font-extrabold">{s.value}</p><p className="text-xs muted mt-0.5">{s.label}</p></GlassCard>
        ))}
      </div>

      <GlassCard>
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 className="font-bold text-lg">My subjects</h2>
          {!editingSubjects && <button onClick={startEdit} className="btn-ghost text-sm">Change subjects</button>}
        </div>
        {editingSubjects ? (
          <div className="mt-3">
            <p className="text-sm muted mb-2">English Language stays compulsory. Pick exactly three more {DEPARTMENTS.find(d => d.id === department)?.name} subjects. Changing your department resets your enrolment — you will pick your new subjects again, and your old progress stays in your records but no longer counts toward your new department.</p>
            <div className="text-sm font-medium block mb-3">
              <span className="block">Department</span>
              <div className="grid grid-cols-3 gap-2 mt-1" role="radiogroup" aria-label="Department">
                {DEPARTMENTS.map(d => {
                  const on = department === d.id;
                  return (
                    <button key={d.id} type="button" role="radio" aria-checked={on} onClick={() => pickDept(d.id)}
                      className={`p-3 rounded-xl border text-left transition-colors ${on ? 'bg-accent/15 border-accent/50' : 'bg-ink/5 border-ink/10 hover:bg-ink/10'}`}>
                      <span className="block font-semibold text-sm">{d.name}</span>
                      <span className="block text-xs muted mt-1 leading-snug">{d.tagline}</span>
                      <span className="block text-right text-sm mt-1">{on ? '✓' : '○'}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {DEPARTMENT_SUBJECTS[department].map(id => {
                const on = picked.includes(id);
                return (
                  <button key={id} onClick={() => setPicked(p => p.includes(id) ? p.filter(x => x !== id) : p.length >= 3 ? p : [...p, id])}
                    className={`text-left p-3 rounded-xl border ${on ? 'bg-accent/15 border-accent/50' : 'bg-ink/5 border-ink/10'}`}>
                    {SUBJECT_NAMES[id]} <span className="float-right">{on ? '✓' : '○'}</span>
                  </button>
                );
              })}
            </div>
            <label className="text-sm font-medium block mt-4">Intended course (optional)
              <select className="glass-input mt-1" value={course} onChange={e => setCourse(e.target.value)}>
                <option value="">— No course selected —</option>
                {COURSE_REQUIREMENTS.filter(c => c.dept === department).map(c => <option key={c.course} value={c.course}>{c.course}</option>)}
              </select>
            </label>
            {course && <p className="text-sm mt-2 px-3 py-2 rounded-lg border bg-ink/5 border-ink/15">{validateCombination(['english', ...picked], course, department).message}</p>}
            {error && <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-3 py-2 mt-3">{error}</p>}
            <div className="flex gap-2 mt-4">
              <button onClick={saveSubjects} className="btn-primary text-sm">Save subjects</button>
              <button onClick={() => setEditingSubjects(false)} className="btn-ghost text-sm">Cancel</button>
            </div>
          </div>
        ) : (
          <div className="mt-3 flex flex-col gap-2">
            {user.subjects.map(id => {
              const p = subjectProgress(db, user.id, id);
              return (
                <div key={id} className="glass-soft p-3">
                  <div className="flex justify-between text-sm"><span className="font-medium">{getSubject(id)?.name || id}</span><span className="muted">{p.completed}/{p.total} · {p.percent}%</span></div>
                  <ProgressBar value={p.percent} className="mt-2" />
                </div>
              );
            })}
            <p className="text-sm muted">Intended course: <strong className="text-ink">{user.intendedCourse || 'Not set'}</strong></p>
            {msg && <p className="text-sm text-accent">{msg}</p>}
          </div>
        )}
      </GlassCard>

      <GlassCard>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-lg">Assessment records</h2>
          <Link href="/app/assessments" className="text-sm text-accent underline">Full history</Link>
        </div>
        {attempts.length === 0 ? <p className="muted text-sm">No assessments yet.</p> : (
          <div className="flex flex-col gap-2">
            {attempts.slice(0, 5).map(a => (
              <div key={a.id} className="glass-soft p-3 flex justify-between gap-3 text-sm">
                <span className="truncate">{a.title}</span>
                <span className={`font-bold shrink-0 ${a.score >= 70 ? 'text-accent' : 'text-warn'}`}>{a.score}%</span>
              </div>
            ))}
          </div>
        )}
      </GlassCard>

      <GlassCard>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-lg">Achievement badges</h2>
          <Link href="/app/achievements" className="text-sm text-accent underline">View all</Link>
        </div>
        {myBadges.length === 0 ? <p className="muted text-sm">No badges yet — finish in a weekly Top 10 to earn one.</p> : (
          <div className="flex flex-wrap gap-2">
            {myBadges.map(b => <Link key={b.id} href={`/app/achievements/${b.id}`} className="chip !py-1.5 !px-3">★ {b.title} · #{b.position} · {b.week}</Link>)}
          </div>
        )}
      </GlassCard>
    </div>
  );
}
