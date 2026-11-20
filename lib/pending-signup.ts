// Holds the credentials from the short sign-up form until onboarding finishes.
//
// Why not create the account immediately? `register()` needs a username and a
// full name, and both are now collected in onboarding (along with department,
// subjects and course). Creating the account at the END means `register()` and
// the Supabase profile row receive the student's REAL values once — so the
// username is never created as a placeholder and then left out of sync.
//
// Kept in module memory first (survives client-side route changes) with a
// sessionStorage mirror so a refresh mid-onboarding does not lose the form.
// Cleared the moment registration succeeds.
import type { Department } from './store';

const KEY = 'darax-pending-signup';

export interface PendingSignup {
  email: string;
  password: string;
  department: Department;
}

let memory: PendingSignup | null = null;

export function setPendingSignup(p: PendingSignup): void {
  memory = p;
  try { sessionStorage.setItem(KEY, JSON.stringify(p)); } catch { /* storage unavailable */ }
}

export function getPendingSignup(): PendingSignup | null {
  if (memory) return memory;
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PendingSignup;
    if (!parsed?.email || !parsed?.password) return null;
    memory = parsed;
    return parsed;
  } catch { return null; }
}

export function clearPendingSignup(): void {
  memory = null;
  try { sessionStorage.removeItem(KEY); } catch { /* storage unavailable */ }
}
