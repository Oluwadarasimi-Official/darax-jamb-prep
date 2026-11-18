// Auth: Supabase Auth when configured, local SHA-256 accounts as fallback.
// When Supabase is configured it is the source of truth for identity:
// passwords are hashed by Supabase Auth (never stored here), sessions persist
// via Supabase, and profiles live in djp_profiles. The local store stays as a
// working cache + the full fallback when env vars are absent.
import { loadDB, saveDB, seedDemo, type DB, type Profile } from './store';
import { SUPABASE_CONFIGURED, getSb } from './supabase';
import { syncUserFromSupabase } from './sync';

export async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export function getSessionUser(db: DB): Profile | null {
  if (!db.sessionUserId) return null;
  return db.profiles.find(p => p.id === db.sessionUserId && p.active) || null;
}

export async function hashPassword(password: string, salt: string): Promise<string> {
  return sha256(`${salt}:${password}`);
}

export type RegisterResult = { ok: boolean; error?: string; code?: string; user?: Profile };

function validEmail(email: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

async function registerLocal(db: DB, fullName: string, username: string, email: string, password: string, department: 'science' | 'arts' | 'commercial' = 'science'): Promise<RegisterResult> {
  if (db.profiles.some(p => p.username.toLowerCase() === username.toLowerCase())) return { ok: false, error: 'That username is already taken. Choose another.' };
  if (db.profiles.some(p => p.email.toLowerCase() === email.toLowerCase())) return { ok: false, error: 'An account with this email already exists. Log in instead.' };
  const salt = Math.random().toString(36).slice(2, 14);
  const user: Profile = {
    id: `u_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`,
    fullName: fullName.trim(), username, email: email.toLowerCase(),
    passwordHash: await hashPassword(password, salt), salt,
    role: 'student', department, onboarded: false, subjects: [],
    createdAt: new Date().toISOString(), lastActiveAt: new Date().toISOString(), active: true,
    notifyPrefs: { weekly: true, lessons: true, results: true, announcements: true },
  };
  db.profiles.push(user);
  db.sessionUserId = user.id;
  return { ok: true, user };
}

export async function register(db: DB, fullName: string, username: string, email: string, password: string, department: 'science' | 'arts' | 'commercial' = 'science'): Promise<RegisterResult> {
  if (fullName.trim().length < 3) return { ok: false, error: 'Enter your full name.' };
  if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) return { ok: false, error: 'Username must be 3–20 letters, numbers or underscores.' };
  if (!validEmail(email)) return { ok: false, error: 'Enter a valid email address.' };
  if (password.length < 8) return { ok: false, error: 'Password must be at least 8 characters.' };

  const sb = getSb();
  if (!sb) return registerLocal(db, fullName, username, email, password, department);

  // Supabase Auth signup. No email confirmation is expected (Confirm email is
  // disabled on the project): a session must come back immediately.
  const { data, error } = await sb.auth.signUp({
    email: email.toLowerCase(), password,
    options: { data: { full_name: fullName.trim(), username, department } },
  });
  if (error) {
    const msg = error.message.toLowerCase();
    if (msg.includes('already registered') || msg.includes('already exists')) {
      return { ok: false, error: 'An account with this email already exists. Log in instead.' };
    }
    return { ok: false, error: error.message };
  }
  if (!data.session || !data.user) {
    // Email confirmation is still required on the project — do NOT work around
    // it. The platform owner must disable Confirm email in Supabase Auth
    // settings; signup stays blocked until then.
    return { ok: false, code: 'EMAIL_CONFIRM_REQUIRED', error: 'Email confirmation is still switched on for this platform, so the account could not be finished. The administrator needs to disable Confirm email in the Supabase Auth settings, then try again.' };
  }
  // Create the djp_profiles row (RLS: own-profile insert). A duplicate username
  // surfaces here as a unique-violation — the Auth account already exists, so
  // the student can log in with email and the profile is created on login.
  try {
    const { sbInsertProfile } = await import('./supabase');
    const row = await sbInsertProfile({
      auth_id: data.user.id, full_name: fullName.trim(), username, email: email.toLowerCase(), department,
    });
    const user: Profile = {
      id: row.id, fullName: row.full_name, username: row.username, email: row.email,
      passwordHash: '', salt: '', role: 'student', department: row.department || department, onboarded: false, subjects: [],
      createdAt: row.created_at, lastActiveAt: row.last_active_at, active: true,
      notifyPrefs: { weekly: true, lessons: true, results: true, announcements: true },
    };
    db.profiles.push(user);
    db.sessionUserId = user.id;
    return { ok: true, user };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    if (msg.includes('23505') || msg.toLowerCase().includes('duplicate')) {
      return { ok: false, error: 'That username is already taken. Choose another — then log in with your email (your account was created) or sign up again.' };
    }
    return { ok: false, error: `Account created, but your student profile could not be saved (${msg}). Please log in with your email — the profile is created on first login.` };
  }
}

async function loginLocal(db: DB, identifier: string, password: string): Promise<{ ok: boolean; error?: string; user?: Profile }> {
  const user = db.profiles.find(p => (p.username.toLowerCase() === identifier.toLowerCase() || p.email.toLowerCase() === identifier.toLowerCase()) && p.active);
  if (!user) return { ok: false, error: 'No account matches that username or email.' };
  if (user.username === 'demo_student') {
    if (password !== 'Demo1234!') return { ok: false, error: 'Incorrect password.' };
  } else {
    const hash = await hashPassword(password, user.salt);
    if (hash !== user.passwordHash) return { ok: false, error: 'Incorrect password.' };
  }
  db.sessionUserId = user.id;
  user.lastActiveAt = new Date().toISOString();
  return { ok: true, user };
}

export async function login(db: DB, identifier: string, password: string): Promise<{ ok: boolean; error?: string; user?: Profile }> {
  // Demo account always stays local (test data, never on Supabase).
  if (identifier.trim().toLowerCase() === 'demo_student') return loginLocal(db, identifier, password);
  const sb = getSb();
  if (!sb) return loginLocal(db, identifier, password);

  // Supabase Auth signs in with email. A username is resolved through the
  // local cache on this device; everywhere else, email login works.
  let email = identifier.trim();
  if (!email.includes('@')) {
    const cached = db.profiles.find(p => p.username.toLowerCase() === email.toLowerCase() && p.active);
    if (!cached) return { ok: false, error: 'That username is not recognised on this device. Log in with your email address instead.' };
    email = cached.email;
  }
  const { data, error } = await sb.auth.signInWithPassword({ email: email.toLowerCase(), password });
  if (error || !data.user) return { ok: false, error: 'Incorrect email or password.' };
  const synced = await syncUserFromSupabase(db, data.user);
  if (!synced) return { ok: false, error: 'Signed in, but your student profile could not be loaded. Check your connection and try again.' };
  const user = synced.profiles.find(p => p.id === synced.sessionUserId) || null;
  if (!user) return { ok: false, error: 'Signed in, but your student profile could not be loaded.' };
  return { ok: true, user };
}

export async function logout(db: DB) {
  const sb = getSb();
  if (sb) { try { await sb.auth.signOut(); } catch { /* already signed out */ } }
  db.sessionUserId = null;
}

/** Change password for the signed-in user (verifies the current password first). */
export async function changePassword(db: DB, user: Profile, currentPw: string, newPw: string): Promise<{ ok: boolean; error?: string }> {
  if (newPw.length < 8) return { ok: false, error: 'New password must be at least 8 characters.' };
  const sb = getSb();
  if (!sb || user.username === 'demo_student') {
    if (user.username === 'demo_student') {
      if (currentPw !== 'Demo1234!') return { ok: false, error: 'Current password is incorrect.' };
    } else {
      const h = await hashPassword(currentPw, user.salt);
      if (h !== user.passwordHash) return { ok: false, error: 'Current password is incorrect.' };
    }
    const nh = await hashPassword(newPw, user.salt);
    const u = db.profiles.find(p => p.id === user.id);
    if (u) u.passwordHash = nh;
    return { ok: true };
  }
  // Supabase: re-authenticate with the current password, then update.
  const { error: signInErr } = await sb.auth.signInWithPassword({ email: user.email, password: currentPw });
  if (signInErr) return { ok: false, error: 'Current password is incorrect.' };
  const { error } = await sb.auth.updateUser({ password: newPw });
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

/**
 * Supabase password reset: sends the reset email (link back to /reset).
 * Returns { emailSent: true } when configured; local reset-code flow otherwise.
 */
export async function requestResetCode(db: DB, email: string): Promise<{ ok: boolean; code?: string; emailSent?: boolean; error?: string }> {
  const sb = getSb();
  if (sb) {
    if (typeof window === 'undefined') return { ok: false, error: 'Reset is only available in the browser.' };
    const { error } = await sb.auth.resetPasswordForEmail(email.toLowerCase(), { redirectTo: `${window.location.origin}/reset` });
    if (error) return { ok: false, error: error.message };
    return { ok: true, emailSent: true };
  }
  const user = db.profiles.find(p => p.email.toLowerCase() === email.toLowerCase());
  if (!user) return { ok: false, error: 'No account uses that email address.' };
  const code = String(Math.floor(100000 + Math.random() * 900000));
  db.resetCodes = db.resetCodes.filter(r => r.email !== email.toLowerCase());
  db.resetCodes.push({ email: email.toLowerCase(), code, expiresAt: Date.now() + 15 * 60 * 1000 });
  // In production this code is emailed; in the local build it is shown once on screen
  // (there is no mail server configured) — never stored in plain sight elsewhere.
  return { ok: true, code };
}

/** Local reset-code flow (used only when Supabase is not connected). */
export async function resetWithCode(db: DB, email: string, code: string, newPassword: string): Promise<{ ok: boolean; error?: string }> {
  const rec = db.resetCodes.find(r => r.email === email.toLowerCase() && r.code === code);
  if (!rec || rec.expiresAt < Date.now()) return { ok: false, error: 'That code is invalid or expired. Request a new one.' };
  if (newPassword.length < 8) return { ok: false, error: 'Password must be at least 8 characters.' };
  const user = db.profiles.find(p => p.email.toLowerCase() === email.toLowerCase());
  if (!user) return { ok: false, error: 'Account not found.' };
  user.passwordHash = await hashPassword(newPassword, user.salt);
  db.resetCodes = db.resetCodes.filter(r => r.email !== email.toLowerCase());
  return { ok: true };
}

/** Supabase recovery flow: set a new password while a recovery session is active. */
export async function resetPasswordViaSession(newPassword: string): Promise<{ ok: boolean; error?: string }> {
  const sb = getSb();
  if (!sb) return { ok: false, error: 'Supabase is not configured.' };
  if (newPassword.length < 8) return { ok: false, error: 'Password must be at least 8 characters.' };
  const { error } = await sb.auth.updateUser({ password: newPassword });
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

/** Is there an active Supabase recovery session (from a reset-email link)? */
export async function hasRecoverySession(): Promise<boolean> {
  const sb = getSb();
  if (!sb) return false;
  try {
    // PKCE (?code=...) links need an explicit exchange; hash links are picked
    // up automatically by the client's detectSessionInUrl.
    if (typeof window !== 'undefined') {
      const code = new URLSearchParams(window.location.search).get('code');
      if (code) await sb.auth.exchangeCodeForSession(code);
    }
    const { data } = await sb.auth.getSession();
    return !!data.session?.user;
  } catch { return false; }
}

export function loadSeededDB(): DB {
  const db = seedDemo(loadDB());
  saveDB(db);
  return db;
}
