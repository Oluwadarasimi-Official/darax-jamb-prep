'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDb } from '@/components/db-context';
import { hashPassword } from '@/lib/auth';
import { GlassCard } from '@/components/ui';

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
    setMsg('Name updated.'); setError(''); setName('');
  };

  const changePassword = async () => {
    setError(''); setMsg('');
    if (newPw.length < 8) { setError('New password must be at least 8 characters.'); return; }
    if (newPw !== confirmPw) { setError('New passwords do not match.'); return; }
    if (user.username === 'demo_student') {
      if (currentPw !== 'Demo1234!') { setError('Current password is incorrect.'); return; }
    } else {
      const h = await hashPassword(currentPw, user.salt);
      if (h !== user.passwordHash) { setError('Current password is incorrect.'); return; }
    }
    const nh = await hashPassword(newPw, user.salt);
    setDb(d => { const u = d.profiles.find(p => p.id === user.id)!; u.passwordHash = nh; return d; });
    setMsg('Password changed. Use your new password next time you log in.');
    setCurrentPw(''); setNewPw(''); setConfirmPw('');
  };

  const togglePref = (key: keyof typeof prefs) => {
    const next = { ...prefs, [key]: !prefs[key] };
    setPrefs(next);
    setDb(d => { const u = d.profiles.find(p => p.id === user.id)!; u.notifyPrefs = next; return d; });
  };

  const logout = () => { setDb(d => { d.sessionUserId = null; return d; }); router.replace('/login'); };
  const logoutAll = () => { logout(); setMsg('Logged out of this device. (Sessions are per-device in this build.)'); };

  return (
    <div className="flex flex-col gap-5 max-w-2xl">
      <h1 className="text-2xl font-bold">Settings</h1>
      {msg && <p className="text-sm text-emerald-300 bg-emerald-500/10 border border-emerald-400/30 rounded-lg px-3 py-2">{msg}</p>}
      {error && <p className="text-sm text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg px-3 py-2">{error}</p>}

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Profile</h2>
        <p className="text-sm muted">Full name: <strong className="text-white">{user.fullName}</strong> · Username: <strong className="text-white">@{user.username}</strong> (username cannot be changed) · Email: <strong className="text-white">{user.email}</strong></p>
        <div className="flex gap-2 mt-3">
          <input className="glass-input flex-1" value={name} onChange={e => setName(e.target.value)} placeholder="New full name" />
          <button onClick={saveName} className="btn-primary text-sm">Save name</button>
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Change password</h2>
        <div className="flex flex-col gap-2">
          <input className="glass-input" type="password" value={currentPw} onChange={e => setCurrentPw(e.target.value)} placeholder="Current password" autoComplete="current-password" />
          <input className="glass-input" type="password" value={newPw} onChange={e => setNewPw(e.target.value)} placeholder="New password (at least 8 characters)" autoComplete="new-password" />
          <input className="glass-input" type="password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} placeholder="Confirm new password" autoComplete="new-password" />
          <button onClick={changePassword} className="btn-primary self-start text-sm">Change password</button>
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
              <input type="checkbox" checked={prefs[key]} onChange={() => togglePref(key)} className="w-5 h-5 accent-emerald-400" />
            </label>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Sessions</h2>
        <p className="text-sm muted">You are signed in on this device. Sessions persist until you log out.</p>
        <div className="flex gap-2 mt-3">
          <button onClick={logout} className="btn-ghost text-sm">Log out</button>
          <button onClick={logoutAll} className="btn-ghost text-sm">Log out of all sessions</button>
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg mb-2">About this platform</h2>
        <p className="text-sm muted leading-relaxed">The Official Darax Free JAMB Prep · v1.0.0 · Powered by Official Darax. Data in this build is stored on your device (localStorage) until Supabase is connected. See the README for the Supabase migration and deploy steps.</p>
      </GlassCard>
    </div>
  );
}
