// Sync bridge: localStorage store <-> Supabase djp_* tables.
// Supabase is the source of truth for identity when configured; the local store
// remains the working cache so every page keeps working offline and instantly.
// Mirror writes are fire-and-forget: they never block the UI and never throw
// into it — a failed mirror is logged and the local record stays correct.
import type { User } from './supabase';
import {
  SUPABASE_CONFIGURED, getSb, sbProfileByAuthId, sbSubjectsFor, sbProgressFor,
  sbAttemptsFor, sbNotificationsFor, sbInsertProfile, sbUpdateProfile,
  sbSetSubjects, sbUpsertProgress, sbInsertAttempt, sbInsertNotification, sbMarkNotificationsRead,
  type SbProfileRow,
} from './supabase';
import { uid, type Attempt, type DB, type LessonProgress, type NotificationItem, type Profile } from './store';

/** Map a djp_profiles row (+ enrolled subjects) to the local Profile shape. */
export function sbProfileToLocal(row: SbProfileRow, subjects: string[]): Profile {
  return {
    id: row.id,
    fullName: row.full_name, username: row.username, email: row.email,
    passwordHash: '', salt: '',
    role: row.role, department: row.department || 'science', onboarded: row.onboarded, subjects,
    intendedCourse: row.intended_course || undefined,
    createdAt: row.created_at, lastActiveAt: row.last_active_at,
    isDemo: row.is_demo, active: row.active,
    notifyPrefs: { weekly: true, lessons: true, results: true, announcements: true },
  };
}

function mergeProfileIntoDb(db: DB, profile: Profile): DB {
  const i = db.profiles.findIndex(p => p.id === profile.id);
  if (i >= 0) {
    // Keep the local password fields (Supabase users have none) and local prefs.
    const prev = db.profiles[i];
    db.profiles[i] = { ...profile, passwordHash: prev.passwordHash, salt: prev.salt, notifyPrefs: prev.notifyPrefs || profile.notifyPrefs };
  } else {
    db.profiles.push(profile);
  }
  db.sessionUserId = profile.id;
  return db;
}

/**
 * Pull a signed-in Supabase user's server records into the local store.
 * Creates the djp_profiles row from the Auth user metadata when it is missing
 * (e.g. signup succeeded but the profile insert raced or failed).
 * Returns the updated DB (same object, mutated) or null when not configured.
 */
export async function syncUserFromSupabase(db: DB, authUser: User): Promise<DB | null> {
  if (!SUPABASE_CONFIGURED) return null;
  try {
    let row = await sbProfileByAuthId(authUser.id);
    if (!row) {
      const meta = (authUser.user_metadata || {}) as Record<string, unknown>;
      const username = String(meta.username || authUser.email?.split('@')[0] || `user_${authUser.id.slice(0, 8)}`);
      const fullName = String(meta.full_name || username);
      const dept = (meta.department === 'arts' || meta.department === 'commercial') ? meta.department : 'science';
      row = await sbInsertProfile({
        auth_id: authUser.id, full_name: fullName,
        username: username.toLowerCase().replace(/[^a-z0-9_]/g, '_').slice(0, 20) || `user_${authUser.id.slice(0, 8)}`,
        email: (authUser.email || '').toLowerCase(), department: dept,
      });
    }
    // Record genuine account activity in the shared database, not only in this browser cache.
    if (row.active) {
      const activityTime = new Date().toISOString();
      await sbUpdateProfile(row.id, { last_active_at: activityTime });
      row.last_active_at = activityTime;
    }
    const subjects = await sbSubjectsFor(row.id);
    const local = sbProfileToLocal(row, subjects);
    mergeProfileIntoDb(db, local);
    // Server wins for this user's learning records (they are the shared truth).
    const [progress, attempts, notifications] = await Promise.all([
      sbProgressFor(row.id), sbAttemptsFor(row.id), sbNotificationsFor(row.id),
    ]);
    db.progress[row.id] = progress.map((p): LessonProgress => ({
      lessonId: p.lesson_id, completed: p.completed, bestScore: p.best_score,
      attempts: p.attempts, completedAt: p.completed_at || undefined, timeSpentSec: p.time_spent_sec,
    }));
    const localAttempts = db.attempts.filter(a => a.userId !== row!.id);
    for (const a of attempts) {
      localAttempts.push({
        id: a.id, userId: row!.id, lessonId: a.lesson_id || undefined, subjectId: a.subject_id || '',
        kind: a.kind as Attempt['kind'], title: a.title, total: a.total, correct: a.correct,
        score: a.score, answers: [], startedAt: a.started_at, completedAt: a.completed_at, durationSec: a.duration_sec,
      });
    }
    db.attempts = localAttempts;
    const localNtfs = db.notifications.filter(n => n.userId !== row!.id);
    for (const n of notifications) {
      localNtfs.push({
        id: n.id, userId: row!.id, title: n.title, body: n.body, kind: n.kind,
        link: n.link || undefined, read: n.read, createdAt: n.created_at,
      });
    }
    db.notifications = localNtfs;
    const u = db.profiles.find(p => p.id === row!.id);
    if (u) u.lastActiveAt = new Date().toISOString();
    return db;
  } catch (e) {
    console.warn('[darax-sync] sync from Supabase failed:', e instanceof Error ? e.message : e);
    return null;
  }
}

/** Fire-and-forget wrapper: log, never throw. */
function fire(p: Promise<unknown>, label: string) {
  p.catch(e => console.warn(`[darax-sync] ${label} failed:`, e instanceof Error ? e.message : e));
}

export function mirrorOnboarding(profileId: string, subjects: string[], intendedCourse?: string, department?: 'science' | 'arts' | 'commercial', onboarded = true) {
  if (!SUPABASE_CONFIGURED) return;
  fire((async () => {
    await sbUpdateProfile(profileId, { onboarded, intended_course: intendedCourse || null, ...(department ? { department } : {}) });
    await sbSetSubjects(profileId, subjects);
  })(), 'mirror onboarding');
}

export function mirrorProfile(profileId: string, patch: { fullName?: string; role?: 'student' | 'admin' }) {
  if (!SUPABASE_CONFIGURED) return;
  fire(sbUpdateProfile(profileId, {
    ...(patch.fullName ? { full_name: patch.fullName } : {}),
    ...(patch.role ? { role: patch.role } : {}),
  }), 'mirror profile');
}

export function mirrorAttempt(profileId: string, attempt: Attempt, progress: LessonProgress | null) {
  if (!SUPABASE_CONFIGURED) return;
  fire((async () => {
    await sbInsertAttempt(profileId, {
      lessonId: attempt.lessonId, subjectId: attempt.subjectId, kind: attempt.kind,
      title: attempt.title, total: attempt.total, correct: attempt.correct, score: attempt.score,
      durationSec: attempt.durationSec, startedAt: attempt.startedAt, completedAt: attempt.completedAt,
    });
    if (progress) {
      await sbUpsertProgress(profileId, {
        lessonId: progress.lessonId, completed: progress.completed, bestScore: progress.bestScore,
        attempts: progress.attempts, timeSpentSec: progress.timeSpentSec, completedAt: progress.completedAt,
      });
    }
  })(), 'mirror attempt');
}

export function mirrorNotification(profileId: string, n: NotificationItem) {
  if (!SUPABASE_CONFIGURED) return;
  fire(sbInsertNotification(profileId, { title: n.title, body: n.body, kind: n.kind, link: n.link }), 'mirror notification');
}

export function mirrorNotificationsRead(profileId: string, ids?: string[]) {
  if (!SUPABASE_CONFIGURED) return;
  fire(sbMarkNotificationsRead(profileId, ids), 'mirror notifications-read');
}

/** Restore the Supabase session (if any) and sync that user's server records. */
export async function restoreSupabaseSession(db: DB): Promise<DB | null> {
  const sb = getSb();
  if (!sb) return null;
  try {
    const { data } = await sb.auth.getSession();
    const authUser = data.session?.user;
    if (!authUser) return null;
    return await syncUserFromSupabase(db, authUser);
  } catch (e) {
    console.warn('[darax-sync] session restore failed:', e instanceof Error ? e.message : e);
    return null;
  }
}

export { uid };
