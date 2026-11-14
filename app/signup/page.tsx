'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDb } from '@/components/db-context';
import { register } from '@/lib/auth';
import { Logo } from '@/components/Logo';

export default function SignupPage() {
  const { db, setDb } = useDb();
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) { setError('Passwords do not match.'); return; }
    setError(''); setBusy(true);
    const res = await register(db, fullName, username.trim(), email.trim(), password);
    if (!res.ok) { setError(res.error || 'Registration failed.'); setBusy(false); return; }
    setDb(d => { d.profiles.push(res.user!); d.sessionUserId = res.user!.id; return d; });
    router.replace('/onboarding');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass p-7 w-full max-w-md">
        <Logo />
        <h1 className="text-2xl font-bold mt-5">Create your free account</h1>
        <p className="muted text-sm mt-1">No email confirmation needed. No payment, ever.</p>
        <form onSubmit={submit} className="mt-6 flex flex-col gap-3">
          <label className="text-sm font-medium">Full name
            <input className="glass-input mt-1" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="e.g. Adaeze Okafor" required autoComplete="name" />
          </label>
          <label className="text-sm font-medium">Username <span className="muted font-normal">(unique, 3–20 characters)</span>
            <input className="glass-input mt-1" value={username} onChange={e => setUsername(e.target.value.replace(/\s/g, ''))} placeholder="e.g. adaeze_jamb" required autoComplete="username" />
          </label>
          <label className="text-sm font-medium">Email address
            <input className="glass-input mt-1" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required autoComplete="email" />
          </label>
          <label className="text-sm font-medium">Password <span className="muted font-normal">(at least 8 characters)</span>
            <input className="glass-input mt-1" type="password" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="new-password" />
          </label>
          <label className="text-sm font-medium">Confirm password
            <input className="glass-input mt-1" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} required autoComplete="new-password" />
          </label>
          {error && <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-3 py-2">{error}</p>}
          <button className="btn-primary w-full" disabled={busy}>{busy ? 'Creating account…' : 'Create account'}</button>
        </form>
        <p className="text-sm muted mt-4 text-center">Already have an account? <Link href="/login" className="text-accent underline">Log in</Link></p>
      </div>
    </div>
  );
}
