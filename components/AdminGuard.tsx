'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDb } from './db-context';
import { Logo } from './Logo';
import { mirrorProfile } from '../lib/sync';

const ADMIN_CODE = process.env.NEXT_PUBLIC_ADMIN_CODE || 'CHANGE-ME';

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user, setDb } = useDb();
  const router = useRouter();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  if (!user) return <div className="min-h-screen flex items-center justify-center"><p className="muted">Redirecting to login…</p></div>;
  if (user.role !== 'admin') {
    const claim = () => {
      if (code.trim() === ADMIN_CODE && ADMIN_CODE !== '') {
        setDb(d => { const u = d.profiles.find(p => p.id === user.id)!; u.role = 'admin'; return d; });
        mirrorProfile(user.id, { role: 'admin' });
        setError('');
      } else {
        setError('That setup code is not correct. Ask the platform owner for the admin setup code.');
      }
    };
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass p-7 w-full max-w-md">
          <Logo />
          <h1 className="text-2xl font-bold mt-5">Administrator access</h1>
          <p className="muted text-sm mt-1">This area is restricted to administrators. Your account ({user.username}) does not have the admin role. Enter the admin setup code to claim the first admin account — the code is set by the platform owner (NEXT_PUBLIC_ADMIN_CODE).</p>
          <div className="flex gap-2 mt-5">
            <input className="glass-input flex-1" type="password" value={code} onChange={e => setCode(e.target.value)} placeholder="Admin setup code" />
            <button onClick={claim} className="btn-primary">Claim admin</button>
          </div>
          {error && <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-3 py-2 mt-3">{error}</p>}
          <button onClick={() => router.replace('/app/dashboard')} className="btn-ghost w-full mt-4">Back to dashboard</button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen p-4 md:p-6 max-w-6xl mx-auto">
      <header className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <Logo />
        <nav className="flex gap-2 flex-wrap">
          <Link href="/admin" className="btn-ghost text-sm">Admin dashboard</Link>
          <Link href="/admin/content" className="btn-ghost text-sm">Content Studio</Link>
          <Link href="/app/dashboard" className="btn-ghost text-sm">← Student app</Link>
        </nav>
      </header>
      {children}
      <p className="text-xs muted text-center mt-8">Admin Panel · Official Darax Free JAMB Prep · v1.0.0</p>
    </div>
  );
}
