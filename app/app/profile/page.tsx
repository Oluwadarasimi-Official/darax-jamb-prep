'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useDb } from '@/components/db-context';
import { getSubject } from '@/lib/curriculum';
import { COURSE_REQUIREMENTS, SCIENCE_SUBJECTS, SUBJECT_NAMES, validateCombination } from '@/lib/store';
import { GlassCard, Avatar, ProgressBar } from '@/components/ui';
import { overallProgress, subjectProgress } from '@/lib/progression';

export default function ProfilePage() {
  const { db, user, setDb } = useDb();
  const [editingSubjects, setEditingSubjects] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);
  const [course, setCourse] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  if (!user) return null;

  const overall = overallProgress(db, user.id, user.subjects);
  const attempts = db.attempts.filter(a => a.userId === user.id);
  const myBadges = db.badges.filter(b => b.userId === user.id);

  const startEdit = () => {
    setPicked(user.subjects.filter(s => s !== 'english'));
    setCourse(user.intendedCourse || '');
    setEditingSubjects(true); setMsg(''); setError('');
  };

  const saveSubjects = () => {
    if (picked.length !== 3) { setError('Pick exactly three science subjects in addition to English Language.'); return; }
    const subjects = ['english', ...picked];
    const v = validateCombination(subjects, course || undefined);
    if (course && !v.ok) { setError(v.message); return; }
    setDb(d => {
      const u = d.profiles.find(p => p.id === user.id)!;
      u.subjects = subjects; u.intendedCourse = course || undefined;
      return d;
    });
    setEditingSubjects(false);
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
            <p className="text-sm mt-1">Member since {new Date(user.createdAt).toLocaleDateString()} · Role: {user.role}</p>
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
            <p className="text-sm muted mb-2">English Language stays compulsory. Pick exactly three more science subjects. Your learning records are preserved.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SCIENCE_SUBJECTS.map(id => {
                const on = picked.includes(id);
                return (
                  <button key={id} onClick={() => setPicked(p => p.includes(id) ? p.filter(x => x !== id) : p.length >= 3 ? p : [...p, id])}
                    className={`text-left p-3 rounded-xl border ${on ? 'bg-emerald-400/15 border-emerald-300/50' : 'bg-white/5 border-white/12'}`}>
                    {SUBJECT_NAMES[id]} <span className="float-right">{on ? '✓' : '○'}</span>
                  </button>
                );
              })}
            </div>
            <label className="text-sm font-medium block mt-4">Intended course (optional)
              <select className="glass-input mt-1" value={course} onChange={e => setCourse(e.target.value)}>
                <option value="">— No course selected —</option>
                {COURSE_REQUIREMENTS.map(c => <option key={c.course} value={c.course}>{c.course}</option>)}
              </select>
            </label>
            {course && <p className="text-sm mt-2 px-3 py-2 rounded-lg border bg-white/5 border-white/15">{validateCombination(['english', ...picked], course).message}</p>}
            {error && <p className="text-sm text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg px-3 py-2 mt-3">{error}</p>}
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
            <p className="text-sm muted">Intended course: <strong className="text-white">{user.intendedCourse || 'Not set'}</strong></p>
            {msg && <p className="text-sm text-emerald-300">{msg}</p>}
          </div>
        )}
      </GlassCard>

      <GlassCard>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-lg">Assessment records</h2>
          <Link href="/app/assessments" className="text-sm text-emerald-300 underline">Full history</Link>
        </div>
        {attempts.length === 0 ? <p className="muted text-sm">No assessments yet.</p> : (
          <div className="flex flex-col gap-2">
            {attempts.slice(0, 5).map(a => (
              <div key={a.id} className="glass-soft p-3 flex justify-between gap-3 text-sm">
                <span className="truncate">{a.title}</span>
                <span className={`font-bold shrink-0 ${a.score >= 70 ? 'text-emerald-300' : 'text-amber-300'}`}>{a.score}%</span>
              </div>
            ))}
          </div>
        )}
      </GlassCard>

      <GlassCard>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-lg">Achievement badges</h2>
          <Link href="/app/achievements" className="text-sm text-emerald-300 underline">View all</Link>
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
