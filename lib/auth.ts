// Auth helpers: SHA-256 via WebCrypto for local accounts (Supabase Auth handles
// hashing when Supabase is connected — see lib/supabase.ts).
import { loadDB, saveDB, seedDemo, type DB, type Profile } from './store';

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

export async function register(db: DB, fullName: string, username: string, email: string, password: string): Promise<{ ok: boolean; error?: string; user?: Profile }> {
  if (fullName.trim().length < 3) return { ok: false, error: 'Enter your full name.' };
  if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) return { ok: false, error: 'Username must be 3–20 letters, numbers or underscores.' };
  if (db.profiles.some(p => p.username.toLowerCase() === username.toLowerCase())) return { ok: false, error: 'That username is already taken. Choose another.' };
  if (db.profiles.some(p => p.email.toLowerCase() === email.toLowerCase())) return { ok: false, error: 'An account with this email already exists. Log in instead.' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'Enter a valid email address.' };
  if (password.length < 8) return { ok: false, error: 'Password must be at least 8 characters.' };
  const salt = Math.random().toString(36).slice(2, 14);
  const user: Profile = {
    id: `u_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`,
    fullName: fullName.trim(), username, email: email.toLowerCase(),
    passwordHash: await hashPassword(password, salt), salt,
    role: 'student', onboarded: false, subjects: [],
    createdAt: new Date().toISOString(), lastActiveAt: new Date().toISOString(), active: true,
    notifyPrefs: { weekly: true, lessons: true, results: true, announcements: true },
  };
  db.profiles.push(user);
  db.sessionUserId = user.id;
  return { ok: true, user };
}

export async function login(db: DB, identifier: string, password: string): Promise<{ ok: boolean; error?: string; user?: Profile }> {
  const user = db.profiles.find(p => (p.username.toLowerCase() === identifier.toLowerCase() || p.email.toLowerCase() === identifier.toLowerCase()) && p.active);
  if (!user) return { ok: false, error: 'No account matches that username or email.' };
  // Demo seed account: password Demo1234!
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

export function logout(db: DB) { db.sessionUserId = null; }

/** Local reset-code flow (used only when Supabase is not connected). */
export function requestResetCode(db: DB, email: string): { ok: boolean; code?: string; error?: string } {
  const user = db.profiles.find(p => p.email.toLowerCase() === email.toLowerCase());
  if (!user) return { ok: false, error: 'No account uses that email address.' };
  const code = String(Math.floor(100000 + Math.random() * 900000));
  db.resetCodes = db.resetCodes.filter(r => r.email !== email.toLowerCase());
  db.resetCodes.push({ email: email.toLowerCase(), code, expiresAt: Date.now() + 15 * 60 * 1000 });
  // In production this code is emailed; in the local build it is shown once on screen
  // (there is no mail server configured) — never stored in plain sight elsewhere.
  return { ok: true, code };
}

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

export function loadSeededDB(): DB {
  const db = seedDemo(loadDB());
  saveDB(db);
  return db;
}
