'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDb } from '@/components/db-context';
import { hasRecoverySession, requestResetCode, resetPasswordViaSession, resetWithCode } from '@/lib/auth';
import { SUPABASE_CONFIGURED } from '@/lib/supabase';
import { Logo } from '@/components/Logo';

export default function ResetPage() {
  const { db, setDb } = useDb();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [pw, setPw] = useState('');
  const [step, setStep] = useState<'request' | 'reset' | 'recovery'>('request');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  // Supabase recovery link (?code=... or #access_token=...) lands here.
  useEffect(() => {
    if (!SUPABASE_CONFIGURED) return;
    hasRecoverySession().then(ok => { if (ok) { setStep('recovery'); setMsg('Reset link confirmed — set your new password below.'); } });
  }, []);

  const request = async (e: React.FormEvent) => {
    e.preventDefault(); setError(''); setMsg(''); setBusy(true);
    try {
      if (SUPABASE_CONFIGURED) {
        const res = await requestResetCode(db, email.trim());
        if (!res.ok) { setError(res.error || 'Could not send the reset email.'); return; }
        setMsg('If an account uses that email address, a password-reset link is on its way. It expires in 1 hour.');
        return;
      }
      const exists = db.profiles.some(p => p.email.toLowerCase() === email.trim().toLowerCase());
      if (!exists) { setError('No account uses that email address.'); return; }
      const res = await requestResetCode(db, email.trim());
      if (!res.ok || !res.code) { setError(res.error || 'Could not create a reset code.'); return; }
      setMsg(`Your reset code is ${res.code}. It expires in 15 minutes. (Shown here because no mail server is configured in this build — with Supabase connected, it is emailed instead.)`);
      setStep('reset');
    } finally { setBusy(false); }
  };

  const doReset = async (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    const res = await resetWithCode(db, email.trim(), code.trim(), pw);
    if (!res.ok) { setError(res.error || 'Reset failed.'); return; }
    setDb(d => { d.resetCodes = d.resetCodes.filter(r => r.email !== email.trim().toLowerCase()); return d; });
    setMsg('Password changed. You can now log in with your new password.');
    setStep('request');
  };

  const doRecoveryReset = async (e: React.FormEvent) => {
    e.preventDefault(); setError(''); setBusy(true);
    try {
      const res = await resetPasswordViaSession(pw);
      if (!res.ok) { setError(res.error || 'Reset failed. The link may have expired — request a new one.'); return; }
      setMsg('Password changed. You can now log in with your new password.');
      setStep('request');
    } finally { setBusy(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass p-7 w-full max-w-md">
        <Logo />
        <h1 className="text-2xl font-bold mt-5">Reset your password</h1>
        <p className="muted text-sm mt-1">{SUPABASE_CONFIGURED ? 'We will email you a password-reset link. It expires in 1 hour.' : 'We will send a 6-digit reset code. It expires in 15 minutes.'}</p>
        {step === 'recovery' ? (
          <form onSubmit={doRecoveryReset} className="mt-6 flex flex-col gap-3">
            {msg && <p className="text-sm text-accent bg-accent/10 border border-accent/30 rounded-lg px-3 py-2">{msg}</p>}
            <label className="text-sm font-medium">New password
              <input className="glass-input mt-1" type="password" value={pw} onChange={e => setPw(e.target.value)} required autoComplete="new-password" />
            </label>
            {error && <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-3 py-2">{error}</p>}
            <button className="btn-primary w-full" disabled={busy}>{busy ? 'Saving…' : 'Change password'}</button>
          </form>
        ) : step === 'request' ? (
          <form onSubmit={request} className="mt-6 flex flex-col gap-3">
            <label className="text-sm font-medium">Email address
              <input className="glass-input mt-1" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>
            {error && <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-3 py-2">{error}</p>}
            {msg && <p className="text-sm text-accent bg-accent/10 border border-accent/30 rounded-lg px-3 py-2">{msg}</p>}
            <button className="btn-primary w-full" disabled={busy}>{busy ? 'Sending…' : 'Send reset link'}</button>
          </form>
        ) : (
          <form onSubmit={doReset} className="mt-6 flex flex-col gap-3">
            {msg && <p className="text-sm text-accent bg-accent/10 border border-accent/30 rounded-lg px-3 py-2">{msg}</p>}
            <label className="text-sm font-medium">6-digit code
              <input className="glass-input mt-1" value={code} onChange={e => setCode(e.target.value)} required inputMode="numeric" />
            </label>
            <label className="text-sm font-medium">New password
              <input className="glass-input mt-1" type="password" value={pw} onChange={e => setPw(e.target.value)} required />
            </label>
            {error && <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-3 py-2">{error}</p>}
            <button className="btn-primary w-full">Change password</button>
          </form>
        )}
        <p className="text-sm muted mt-4 text-center"><Link href="/login" className="text-accent underline">Back to login</Link></p>
      </div>
    </div>
  );
}
