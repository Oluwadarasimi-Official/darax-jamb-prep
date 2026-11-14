'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDb } from '@/components/db-context';
import { login } from '@/lib/auth';
import { Logo } from '@/components/Logo';

export default function LoginPage() {
  const { db, setDb } = useDb();
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setBusy(true);
    const res = await login(db, identifier.trim(), password);
    if (!res.ok) { setError(res.error || 'Login failed.'); setBusy(false); return; }
    setDb(d => { const u = d.profiles.find(p => p.id === res.user!.id)!; u.lastActiveAt = new Date().toISOString(); d.sessionUserId = u.id; return d; });
    router.replace(res.user!.onboarded ? '/app/dashboard' : '/onboarding');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass p-7 w-full max-w-md">
        <Logo />
        <h1 className="text-2xl font-bold mt-5">Welcome back</h1>
        <p className="muted text-sm mt-1">Log in to continue your JAMB preparation.</p>
        <form onSubmit={submit} className="mt-6 flex flex-col gap-3">
          <label className="text-sm font-medium">Username or email
            <input className="glass-input mt-1" value={identifier} onChange={e => setIdentifier(e.target.value)} placeholder="e.g. demo_student" required autoComplete="username" />
          </label>
          <label className="text-sm font-medium">Password
            <input className="glass-input mt-1" type="password" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="current-password" />
          </label>
          {error && <p className="text-sm text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg px-3 py-2">{error}</p>}
          <button className="btn-primary w-full" disabled={busy}>{busy ? 'Logging in…' : 'Log in'}</button>
        </form>
        <p className="text-sm muted mt-4 text-center">
          <Link href="/reset" className="text-emerald-300 underline">Forgot your password?</Link>
          {' · '}New here? <Link href="/signup" className="text-emerald-300 underline">Create a free account</Link>
        </p>
        <div className="glass-soft p-3 mt-5 text-xs muted">
          <p className="font-semibold text-white/85">Try it instantly — demo account</p>
          <p className="mt-1">Username: <span className="text-white">demo_student</span> · Password: <span className="text-white">Demo1234!</span></p>
          <p className="mt-1">Demo data is labelled as test data and never appears on leaderboards.</p>
        </div>
      </div>
    </div>
  );
}
