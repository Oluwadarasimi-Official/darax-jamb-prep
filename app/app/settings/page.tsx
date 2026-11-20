'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDb } from '@/components/db-context';
import { changePassword, logout } from '@/lib/auth';
import { SUPABASE_CONFIGURED } from '@/lib/supabase';
import { mirrorProfile } from '@/lib/sync';
import { GlassCard } from '@/components/ui';
import { resetTour } from '@/components/MascotTour';
import { APP_VERSION } from '@/lib/version';
import { BackLink } from '@/components/BackLink';

export default function SettingsPage() {
  const { db, user, setDb } = useDb();
  const router = useRouter();
  const [name, setName] = useState('');
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [prefs, setPrefs] = useState(user?.notifyPrefs || { weekly: true, lessons: true, results: true, announcements: true });
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  if (!user) return null;

  const saveName = () => {
    if (name.trim().length < 3) { setError('Enter a full name of at least 3 characters.'); return; }
    setDb(d => { const u = d.profiles.find(p => p.id === user.id)!; u.fullName = name.trim(); return d; });
    mirrorProfile(user.id, { fullName: name.trim() });
    setMsg('Name updated.'); setError(''); setName('');
  };

  const doChangePassword = async () => {
    setError(''); setMsg('');
    if (newPw !== confirmPw) { setError('New passwords do not match.'); return; }
    const res = await changePassword(db, user, currentPw, newPw);
    if (!res.ok) { setError(res.error || 'Password change failed.'); return; }
    setMsg('Password changed. Use your new password next time you log in.');
    setCurrentPw(''); setNewPw(''); setConfirmPw('');
  };

  const togglePref = (key: keyof typeof prefs) => {
    const next = { ...prefs, [key]: !prefs[key] };
    setPrefs(next);
    setDb(d => { const u = d.profiles.find(p => p.id === user.id)!; u.notifyPrefs = next; return d; });
  };

  const doLogout = () => { logout(db).finally(() => { setDb(d => { d.sessionUserId = null; return d; }); router.replace('/login'); }); };
  const logoutAll = () => { doLogout(); setMsg('Logged out of this device. (Sessions are per-device in this build.)'); };

  return (
    <div className="flex flex-col gap-5 max-w-2xl">
      <BackLink href="/app/profile" />
      <h1 className="text-2xl font-bold">Settings</h1>
      {msg && <p className="text-sm text-accent bg-accent/10 border border-accent/30 rounded-lg px-3 py-2">{msg}</p>}
      {error && <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-3 py-2">{error}</p>}

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Profile</h2>
        <p className="text-sm muted">Full name: <strong className="text-ink">{user.fullName}</strong> · Username: <strong className="text-ink">@{user.username}</strong> (username cannot be changed) · Email: <strong className="text-ink">{user.email}</strong></p>
        <div className="flex gap-2 mt-3">
          <input className="glass-input flex-1 min-w-0" value={name} onChange={e => setName(e.target.value)} placeholder="New full name" />
          <button onClick={saveName} className="btn-primary text-sm">Save name</button>
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Change password</h2>
        <div className="flex flex-col gap-2">
          <input className="glass-input" type="password" value={currentPw} onChange={e => setCurrentPw(e.target.value)} placeholder="Current password" autoComplete="current-password" />
          <input className="glass-input" type="password" value={newPw} onChange={e => setNewPw(e.target.value)} placeholder="New password (at least 8 characters)" autoComplete="new-password" />
          <input className="glass-input" type="password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} placeholder="Confirm new password" autoComplete="new-password" />
          <button onClick={doChangePassword} className="btn-primary self-start text-sm">Change password</button>
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Notification preferences</h2>
        <div className="flex flex-col gap-2">
          {([
            ['weekly', 'Weekly leaderboard results and badges'],
            ['lessons', 'New lesson availability'],
            ['results', 'Assessment results'],
            ['announcements', 'Platform announcements'],
          ] as const).map(([key, label]) => (
            <label key={key} className="flex items-center justify-between glass-soft p-3 text-sm cursor-pointer">
              {label}
              <input type="checkbox" checked={prefs[key]} onChange={() => togglePref(key)} className="w-5 h-5 accent-brand" />
            </label>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Guided tour</h2>
        <p className="text-sm muted leading-relaxed">Dara&apos;s first-timer tour points out where to start. You can replay it any time — it will open the next time you visit your dashboard.</p>
        <button
          onClick={() => { resetTour(user.id); setMsg('Tour reset. It will play again on your next dashboard visit.'); setError(''); }}
          className="btn-ghost text-sm mt-3"
        >Replay the tutorial</button>
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Sessions</h2>
        <p className="text-sm muted">You are signed in on this device. Sessions persist until you log out.</p>
        <div className="flex gap-2 mt-3">
          <button onClick={doLogout} className="btn-ghost text-sm">Log out</button>
          <button onClick={logoutAll} className="btn-ghost text-sm">Log out of all sessions</button>
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg mb-2">About this platform</h2>
        <p className="text-sm muted leading-relaxed">The Official Darax Free JAMB Prep · v{APP_VERSION} · Powered by Official Darax. {SUPABASE_CONFIGURED ? 'Your account and learning records are stored securely in Supabase and sync across your devices.' : 'Data in this build is stored on your device (localStorage) until Supabase is connected. See the README for the Supabase migration and deploy steps.'}</p>
      </GlassCard>
    </div>
  );
}
