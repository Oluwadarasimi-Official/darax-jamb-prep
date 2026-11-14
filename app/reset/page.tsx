'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useDb } from '@/components/db-context';
import { resetWithCode } from '@/lib/auth';
import { Logo } from '@/components/Logo';

export default function ResetPage() {
  const { db, setDb } = useDb();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [pw, setPw] = useState('');
  const [step, setStep] = useState<'request' | 'reset'>('request');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const request = (e: React.FormEvent) => {
    e.preventDefault(); setError(''); setMsg('');
    const exists = db.profiles.some(p => p.email.toLowerCase() === email.trim().toLowerCase());
    if (!exists) { setError('No account uses that email address.'); return; }
    const code = String(Math.floor(100000 + Math.random() * 900000));
    const em = email.trim().toLowerCase();
    setDb(d => {
      d.resetCodes = d.resetCodes.filter(r => r.email !== em);
      d.resetCodes.push({ email: em, code, expiresAt: Date.now() + 15 * 60 * 1000 });
      return d;
    });
    setMsg(`Your reset code is ${code}. It expires in 15 minutes. (Shown here because no mail server is configured in this build — with Supabase connected, it is emailed instead.)`);
    setStep('reset');
  };

  const doReset = async (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    const res = await resetWithCode(db, email.trim(), code.trim(), pw);
    if (!res.ok) { setError(res.error || 'Reset failed.'); return; }
    setDb(d => { d.resetCodes = d.resetCodes.filter(r => r.email !== email.trim().toLowerCase()); return d; });
    setMsg('Password changed. You can now log in with your new password.');
    setStep('request');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass p-7 w-full max-w-md">
        <Logo />
        <h1 className="text-2xl font-bold mt-5">Reset your password</h1>
        <p className="muted text-sm mt-1">We will send a 6-digit reset code. It expires in 15 minutes.</p>
        {step === 'request' ? (
          <form onSubmit={request} className="mt-6 flex flex-col gap-3">
            <label className="text-sm font-medium">Email address
              <input className="glass-input mt-1" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>
            {error && <p className="text-sm text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg px-3 py-2">{error}</p>}
            {msg && <p className="text-sm text-emerald-200 bg-emerald-500/10 border border-emerald-400/30 rounded-lg px-3 py-2">{msg}</p>}
            <button className="btn-primary w-full">Send reset code</button>
          </form>
        ) : (
          <form onSubmit={doReset} className="mt-6 flex flex-col gap-3">
            {msg && <p className="text-sm text-emerald-200 bg-emerald-500/10 border border-emerald-400/30 rounded-lg px-3 py-2">{msg}</p>}
            <label className="text-sm font-medium">6-digit code
              <input className="glass-input mt-1" value={code} onChange={e => setCode(e.target.value)} required inputMode="numeric" />
            </label>
            <label className="text-sm font-medium">New password
              <input className="glass-input mt-1" type="password" value={pw} onChange={e => setPw(e.target.value)} required />
            </label>
            {error && <p className="text-sm text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg px-3 py-2">{error}</p>}
            <button className="btn-primary w-full">Change password</button>
          </form>
        )}
        <p className="text-sm muted mt-4 text-center"><Link href="/login" className="text-emerald-300 underline">Back to login</Link></p>
      </div>
    </div>
  );
}
