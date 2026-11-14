'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useDb } from '@/components/db-context';
import { getSubject, SUBJECTS } from '@/lib/curriculum';
import { runWeekly, weekKey } from '@/lib/weekly';
import { notify, uid } from '@/lib/store';
import { GlassCard } from '@/components/ui';

export default function AdminPage() {
  const { db, user, setDb } = useDb();
  const [annTitle, setAnnTitle] = useState('');
  const [annBody, setAnnBody] = useState('');
  const [runMsg, setRunMsg] = useState('');
  const [annMsg, setAnnMsg] = useState('');
  if (!user) return null;

  const students = db.profiles.filter(p => p.role === 'student');
  const active = students.filter(p => Date.now() - new Date(p.lastActiveAt).getTime() < 7 * 24 * 3600 * 1000).length;
  const totalAttempts = db.attempts.length;
  const avgScore = totalAttempts ? Math.round(db.attempts.reduce((s, a) => s + a.score, 0) / totalAttempts) : 0;
  const totalCompleted = Object.values(db.progress).flat().filter(p => p.completed).length;
  const wk = weekKey().week;

  const enrolments: Record<string, number> = {};
  for (const s of students) for (const sub of s.subjects) enrolments[sub] = (enrolments[sub] || 0) + 1;

  const runWeeklyCalc = () => {
    const clone = structuredClone(db);
    const result = runWeekly(clone, wk);
    setDb(() => clone);
    setRunMsg(result.created ? `Week ${wk} calculated: ${result.scorers.length} scorers, ${result.scholars.length} scholars. Badges issued and notifications sent.` : `Week ${wk} was already calculated — no duplicates created (idempotent).`);
  };

  const sendAnnouncement = () => {
    if (!annTitle.trim() || !annBody.trim()) { setAnnMsg('Enter both a title and a message.'); return; }
    const id = uid('ann');
    setDb(d => {
      d.announcements.push({ id, title: annTitle.trim(), body: annBody.trim(), createdAt: new Date().toISOString(), author: user.fullName });
      for (const s of d.profiles.filter(p => p.role === 'student' && p.active)) {
        if (s.notifyPrefs?.announcements !== false) notify(d, s.id, `Announcement: ${annTitle.trim()}`, annBody.trim(), 'announcement', '/app/notifications');
      }
      return d;
    });
    setAnnMsg('Announcement published and sent to all active students.');
    setAnnTitle(''); setAnnBody('');
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold">Administrator Dashboard</h1>
        <p className="muted text-sm mt-1">Signed in as {user.fullName} (@{user.username}) · Week {wk}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Total students', value: String(students.length) },
          { label: 'Active (7 days)', value: String(active) },
          { label: 'Assessments taken', value: String(totalAttempts) },
          { label: 'Average score', value: totalAttempts ? `${avgScore}%` : '—' },
        ].map(s => (
          <GlassCard key={s.label} className="!p-4"><p className="text-2xl font-extrabold">{s.value}</p><p className="text-xs muted mt-0.5">{s.label}</p></GlassCard>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <GlassCard>
          <h2 className="font-bold text-lg mb-3">Subject enrolments</h2>
          {SUBJECTS.map(s => (
            <div key={s.id} className="flex justify-between text-sm py-1.5 border-b border-ink/5">
              <span>{s.name}</span><strong>{enrolments[s.id] || 0} students</strong>
            </div>
          ))}
          <p className="text-sm muted mt-3">Lessons completed across the platform: <strong className="text-ink">{totalCompleted}</strong></p>
          <Link href="/admin/content" className="btn-primary inline-block mt-4 text-sm">Open Content Studio →</Link>
        </GlassCard>

        <GlassCard>
          <h2 className="font-bold text-lg mb-3">Weekly leaderboard management</h2>
          <p className="text-sm muted">Current week: <strong className="text-ink">{wk}</strong> (Monday–Sunday, Africa/Lagos). Running the calculation is idempotent — a week already calculated will not create duplicate badges or notifications.</p>
          <button onClick={runWeeklyCalc} className="btn-primary mt-4 text-sm">Run weekly calculation for {wk}</button>
          {runMsg && <p className="text-sm text-accent mt-3">{runMsg}</p>}
          <div className="mt-4">
            <h3 className="font-semibold text-sm mb-2">Saved weekly results</h3>
            {db.weekly.length === 0 ? <p className="text-sm muted">No weekly results saved yet.</p> : (
              <div className="flex flex-col gap-1.5">
                {db.weekly.map(w => (
                  <p key={w.week} className="text-sm glass-soft p-2.5">{w.week} · {w.scorers.length} scorers · {w.scholars.length} scholars · {new Date(w.computedAt).toLocaleString()}</p>
                ))}
              </div>
            )}
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-sm mb-2">Badge issuance records ({db.badges.length})</h3>
            {db.badges.length === 0 ? <p className="text-sm muted">No badges issued yet.</p> : (
              <div className="flex flex-col gap-1.5 max-h-40 overflow-y-auto">
                {db.badges.slice(0, 10).map(b => <p key={b.id} className="text-xs glass-soft p-2 font-mono">{b.id} · {b.fullName} · #{b.position}</p>)}
              </div>
            )}
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Platform announcement</h2>
        <div className="flex flex-col gap-2">
          <input className="glass-input" value={annTitle} onChange={e => setAnnTitle(e.target.value)} placeholder="Announcement title" />
          <textarea className="glass-input" rows={3} value={annBody} onChange={e => setAnnBody(e.target.value)} placeholder="Message to all students…" />
          <button onClick={sendAnnouncement} className="btn-primary self-start text-sm">Publish announcement</button>
          {annMsg && <p className="text-sm text-accent">{annMsg}</p>}
        </div>
        {db.announcements.length > 0 && (
          <div className="mt-4 flex flex-col gap-1.5">
            {db.announcements.slice(0, 5).map(a => <p key={a.id} className="text-sm glass-soft p-2.5"><strong>{a.title}</strong> · {new Date(a.createdAt).toLocaleDateString()}</p>)}
          </div>
        )}
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">AI usage log</h2>
        {db.aiUsage.length === 0 ? (
          <p className="text-sm muted">No AI tutor calls yet. The tutor only calls Groq when GROQ_API_KEY is set on the server.</p>
        ) : (
          <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto">
            {db.aiUsage.slice(-20).reverse().map(u => {
              const p = db.profiles.find(x => x.id === u.userId);
              return <p key={u.id} className="text-xs glass-soft p-2">{new Date(u.at).toLocaleString()} · {p?.fullName || u.userId} · {getSubject(u.subject)?.name || u.subject} · {u.ok ? 'answered' : 'failed'}</p>;
            })}
          </div>
        )}
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">User management</h2>
        <div className="flex flex-col gap-2 max-h-80 overflow-y-auto">
          {db.profiles.map(p => (
            <div key={p.id} className="glass-soft p-3 flex flex-wrap items-center justify-between gap-2 text-sm">
              <span><strong>{p.fullName}</strong> <span className="muted">@{p.username} · {p.email} · {p.role}{p.isDemo ? ' · DEMO (test data)' : ''} · {p.active ? 'active' : 'deactivated'}</span></span>
              <span className="flex gap-2">
                <button
                  onClick={() => setDb(d => { const u = d.profiles.find(x => x.id === p.id)!; u.role = u.role === 'admin' ? 'student' : 'admin'; return d; })}
                  className="btn-ghost !py-1 !px-2 text-xs" disabled={p.id === user.id}>
                  {p.role === 'admin' ? 'Remove admin' : 'Make admin'}
                </button>
                <button
                  onClick={() => setDb(d => { const u = d.profiles.find(x => x.id === p.id)!; u.active = !u.active; return d; })}
                  className="btn-ghost !py-1 !px-2 text-xs" disabled={p.id === user.id}>
                  {p.active ? 'Deactivate' : 'Reactivate'}
                </button>
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs muted mt-3">You cannot change your own role or deactivate yourself. Demo accounts are labelled and excluded from leaderboards.</p>
      </GlassCard>
    </div>
  );
}
