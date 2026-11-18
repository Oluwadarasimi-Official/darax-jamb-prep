// Supabase tier — real client (supabase-js), active when env vars are set.
// Project: darax-jamb-prep — https://uvhdpzfylbwrnbtnuruk.supabase.co
// All access here uses the ANON (publishable) key only. There is no service-role
// key in this codebase: writes go through Row Level Security as the signed-in
// user, so students can only ever touch their own rows. Until the env vars are
// set the localStorage store (lib/store.ts) is the persistence layer.
import { createClient, type SupabaseClient, type User } from '@supabase/supabase-js';

export const SUPABASE_CONFIGURED =
  typeof process !== 'undefined' &&
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let client: SupabaseClient | null = null;

export function getSb(): SupabaseClient | null {
  if (!SUPABASE_CONFIGURED) return null;
  if (!client) {
    client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        // Keep the same default Supabase storage key so existing sessions remain valid.
        storage: typeof window !== 'undefined' ? window.localStorage : undefined,
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }
  return client;
}

export type { User };

// ---------------------------------------------------------------- row shapes
export interface SbProfileRow {
  id: string; auth_id: string; full_name: string; username: string; email: string;
  role: 'student' | 'admin'; department: 'science' | 'arts' | 'commercial';
  onboarded: boolean; intended_course: string | null;
  is_demo: boolean; active: boolean; created_at: string; last_active_at: string;
}
export interface SbProgressRow {
  user_id: string; lesson_id: string; completed: boolean; best_score: number;
  attempts: number; time_spent_sec: number; completed_at: string | null;
}
export interface SbAttemptRow {
  id: string; user_id: string; lesson_id: string | null; subject_id: string | null;
  kind: string; title: string; total: number; correct: number; score: number;
  duration_sec: number; started_at: string; completed_at: string;
}
export interface SbNotificationRow {
  id: string; user_id: string; title: string; body: string; kind: string;
  link: string | null; read: boolean; created_at: string;
}

// ---------------------------------------------------------------- reads
export async function sbProfileByAuthId(authId: string): Promise<SbProfileRow | null> {
  const sb = getSb();
  if (!sb) return null;
  const { data, error } = await sb.from('djp_profiles').select('*').eq('auth_id', authId).maybeSingle();
  if (error) throw new Error(error.message);
  return (data as SbProfileRow | null) || null;
}

export async function sbSubjectsFor(profileId: string): Promise<string[]> {
  const sb = getSb();
  if (!sb) return [];
  const { data, error } = await sb.from('djp_student_subjects').select('subject_id').eq('user_id', profileId);
  if (error) throw new Error(error.message);
  return (data || []).map((r: { subject_id: string }) => r.subject_id);
}

export async function sbProgressFor(profileId: string): Promise<SbProgressRow[]> {
  const sb = getSb();
  if (!sb) return [];
  const { data, error } = await sb.from('djp_lesson_progress').select('*').eq('user_id', profileId);
  if (error) throw new Error(error.message);
  return (data || []) as SbProgressRow[];
}

export async function sbAttemptsFor(profileId: string): Promise<SbAttemptRow[]> {
  const sb = getSb();
  if (!sb) return [];
  const { data, error } = await sb.from('djp_assessment_attempts').select('*').eq('user_id', profileId).order('completed_at', { ascending: false }).limit(200);
  if (error) throw new Error(error.message);
  return (data || []) as SbAttemptRow[];
}

export async function sbNotificationsFor(profileId: string): Promise<SbNotificationRow[]> {
  const sb = getSb();
  if (!sb) return [];
  const { data, error } = await sb.from('djp_notifications').select('*').eq('user_id', profileId).order('created_at', { ascending: false }).limit(100);
  if (error) throw new Error(error.message);
  return (data || []) as SbNotificationRow[];
}

// ---------------------------------------------------------------- writes
export async function sbInsertProfile(input: { auth_id: string; full_name: string; username: string; email: string; department?: 'science' | 'arts' | 'commercial' }): Promise<SbProfileRow> {
  const sb = getSb();
  if (!sb) throw new Error('Supabase is not configured.');
  const { data, error } = await sb.from('djp_profiles').insert({
    auth_id: input.auth_id, full_name: input.full_name, username: input.username, email: input.email,
    department: input.department || 'science',
  }).select().single();
  if (error) throw error;
  return data as SbProfileRow;
}

export async function sbUpdateProfile(profileId: string, patch: Partial<Pick<SbProfileRow, 'full_name' | 'role' | 'department' | 'onboarded' | 'intended_course' | 'active' | 'last_active_at'>>): Promise<void> {
  const sb = getSb();
  if (!sb) return;
  const { error } = await sb.from('djp_profiles').update(patch).eq('id', profileId);
  if (error) throw new Error(error.message);
}

/** Replace the student's subject enrolment with exactly `subjects`. */
export async function sbSetSubjects(profileId: string, subjects: string[]): Promise<void> {
  const sb = getSb();
  if (!sb) return;
  const { error: delErr } = await sb.from('djp_student_subjects').delete().eq('user_id', profileId);
  if (delErr) throw new Error(delErr.message);
  if (subjects.length === 0) return;
  const { error } = await sb.from('djp_student_subjects').insert(
    subjects.map(s => ({ user_id: profileId, subject_id: s })),
  );
  if (error) throw new Error(error.message);
}

export async function sbUpsertProgress(profileId: string, p: { lessonId: string; completed: boolean; bestScore: number; attempts: number; timeSpentSec: number; completedAt?: string }): Promise<void> {
  const sb = getSb();
  if (!sb) return;
  const { error } = await sb.from('djp_lesson_progress').upsert({
    user_id: profileId, lesson_id: p.lessonId, completed: p.completed,
    best_score: p.bestScore, attempts: p.attempts, time_spent_sec: p.timeSpentSec,
    completed_at: p.completedAt || null,
  }, { onConflict: 'user_id,lesson_id' });
  if (error) throw new Error(error.message);
}

export async function sbInsertAttempt(profileId: string, a: {
  lessonId?: string; subjectId: string; kind: string; title: string; total: number;
  correct: number; score: number; durationSec: number; startedAt: string; completedAt: string;
}): Promise<string | null> {
  const sb = getSb();
  if (!sb) return null;
  const { data, error } = await sb.from('djp_assessment_attempts').insert({
    user_id: profileId, lesson_id: a.lessonId || null, subject_id: a.subjectId, kind: a.kind,
    title: a.title, total: a.total, correct: a.correct, score: a.score,
    duration_sec: a.durationSec, started_at: a.startedAt, completed_at: a.completedAt,
  }).select('id').single();
  if (error) throw new Error(error.message);
  return (data as { id: string } | null)?.id || null;
}

export async function sbInsertNotification(profileId: string, n: { title: string; body: string; kind: string; link?: string }): Promise<void> {
  const sb = getSb();
  if (!sb) return;
  const { error } = await sb.from('djp_notifications').insert({
    user_id: profileId, title: n.title, body: n.body, kind: n.kind, link: n.link || null,
  });
  if (error) throw new Error(error.message);
}

export async function sbMarkNotificationsRead(profileId: string, ids?: string[]): Promise<void> {
  const sb = getSb();
  if (!sb) return;
  let q = sb.from('djp_notifications').update({ read: true }).eq('user_id', profileId).eq('read', false);
  if (ids && ids.length > 0) q = q.in('id', ids);
  const { error } = await q;
  if (error) throw new Error(error.message);
}

/** Minimal REST client kept for diagnostics (used only when configured). */
export async function supabaseFetch(path: string, init?: RequestInit) {
  if (!SUPABASE_CONFIGURED) throw new Error('Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...init,
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}`, 'Content-Type': 'application/json', ...(init?.headers || {}) },
  });
  if (!res.ok) throw new Error(`Supabase request failed: ${res.status}`);
  return res.json();
}
