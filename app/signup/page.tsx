'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDb } from '@/components/db-context';
import { Logo } from '@/components/Logo';
import { Mascot } from '@/components/Mascot';
import { setPendingSignup } from '@/lib/pending-signup';

// Short sign-up: email + password + confirmation only.
// Full name, username, department, subjects and course are collected in
// onboarding, so the account is created once with the student's real details.
export default function SignupPage() {
  const { db, user, ready } = useDb();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (ready && user) router.replace(user.onboarded ? '/app/dashboard' : '/onboarding');
  }, [ready, user, router]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const clean = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) { setError('Enter a valid email address.'); return; }
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    if (password !== confirm) { setError('Passwords do not match.'); return; }
    if (db.profiles.some(p => p.email.toLowerCase() === clean)) {
      setError('An account with this email already exists. Log in instead.');
      return;
    }
    setBusy(true);
    setPendingSignup({ email: clean, password, department: 'science' });
    router.push('/onboarding');
  };

  if (!ready || user) {
    return <div className="min-h-screen flex items-center justify-center"><p className="muted text-sm">Loading…</p></div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="mx-auto w-full max-w-6xl px-4 py-5 flex items-center justify-between">
        <Logo />
        <Link href="/login" className="btn-ghost text-sm">Log in</Link>
      </header>

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 pb-14">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          {/* value panel */}
          <section className="order-2 lg:order-1 glass p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Mascot size={72} wave className="mascot-float shrink-0" />
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Two fields. That&apos;s it.</h1>
                <p className="muted mt-2 text-sm leading-relaxed">
                  Create your free account with an email and a password. We&apos;ll set up your subjects step by step
                  straight after — it takes about a minute and Dara guides you through it.
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-2.5 text-sm sm:grid-cols-2">
              {[
                ['224 lessons', 'across 22 JAMB subjects'],
                ['3,360+ questions', 'with worked explanations'],
                ['Real CBT practice', 'timed 180-question UTME'],
                ['100% free', 'no payment, ever'],
              ].map(([strong, rest]) => (
                <li key={strong} className="glass-soft flex items-start gap-2.5 p-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[11px] font-bold text-white">✓</span>
                  <span><strong className="font-semibold">{strong}</strong> <span className="muted">{rest}</span></span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs muted leading-relaxed">
              No email confirmation needed · Your progress is saved on your device in this build
            </p>
          </section>

          {/* form */}
          <section className="order-1 lg:order-2 glass p-6 sm:p-7">
            <h2 className="text-xl font-bold">Create your free account</h2>
            <p className="muted text-sm mt-1">No payment. No email confirmation.</p>

            <form onSubmit={submit} className="mt-5 flex flex-col gap-3">
              <label className="text-sm font-medium">Email address
                <input
                  className="glass-input mt-1"
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); }}
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  autoFocus
                />
              </label>

              <label className="text-sm font-medium">Password
                <input
                  className="glass-input mt-1"
                  type="password"
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(''); }}
                  placeholder="At least 8 characters"
                  required
                  autoComplete="new-password"
                />
              </label>

              <label className="text-sm font-medium">Confirm password
                <input
                  className="glass-input mt-1"
                  type="password"
                  value={confirm}
                  onChange={e => { setConfirm(e.target.value); setError(''); }}
                  placeholder="Type it again"
                  required
                  autoComplete="new-password"
                />
              </label>

              {error && (
                <p role="alert" className="text-sm text-danger bg-danger/10 border border-danger/25 rounded-lg px-3 py-2">{error}</p>
              )}

              <button className="btn-primary w-full mt-1" disabled={busy}>
                {busy ? 'Continue…' : 'Continue to set up my subjects →'}
              </button>
            </form>

            <p className="text-sm muted mt-4 text-center">
              Already have an account? <Link href="/login" className="text-accent underline">Log in</Link>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
