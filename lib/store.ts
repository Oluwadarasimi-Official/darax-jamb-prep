// Two-tier data layer, tier 1: localStorage-backed store (works NOW, per-device).
// Tier 2 (Supabase) activates only when env vars are set — see lib/supabase.ts.
// README states this plainly. Never claim Supabase is live until verified.

export interface Profile {
  id: string; fullName: string; username: string; email: string;
  passwordHash: string; salt: string;
  role: 'student' | 'admin';
  onboarded: boolean; subjects: string[]; intendedCourse?: string;
  createdAt: string; lastActiveAt: string; isDemo?: boolean; active: boolean;
  notifyPrefs?: { weekly: boolean; lessons: boolean; results: boolean; announcements: boolean };
}
export interface Attempt {
  id: string; userId: string; lessonId?: string; subjectId: string; kind: 'lesson' | 'topic' | 'subject' | 'mixed' | 'mock';
  title: string; total: number; correct: number; score: number; // percent
  answers: { q: string; chosen: number; correct: number }[];
  startedAt: string; completedAt: string; durationSec: number;
}
export interface LessonProgress { lessonId: string; completed: boolean; bestScore: number; attempts: number; completedAt?: string; timeSpentSec: number; }
export interface NotificationItem { id: string; userId: string; title: string; body: string; kind: string; link?: string; read: boolean; createdAt: string; }
export interface Badge {
  id: string; userId: string; fullName: string; title: 'Weekly Top Scorer' | 'Weekly Top Scholar';
  position: number; week: string; year: number; issueDate: string; verified: true;
}
export interface Announcement { id: string; title: string; body: string; createdAt: string; author: string; }
export interface AiConversation { id: string; userId: string; subject: string; title: string; createdAt: string; messages: { role: 'user' | 'assistant'; text: string; at: string }[]; }
export interface AiUsage { id: string; userId: string; at: string; subject: string; ok: boolean; }
export interface WeeklyResult { week: string; year: number; computedAt: string; scorers: { userId: string; name: string; score: number; assessments: number; accuracy: number }[]; scholars: { userId: string; name: string; score: number; detail: string }[]; }
export interface DraftLesson { id: string; subjectId: string; topic: string; title: string; content: string; status: 'draft' | 'approved' | 'published'; createdAt: string; source: 'ai' | 'manual'; }

export interface DB {
  profiles: Profile[]; attempts: Attempt[]; progress: Record<string, LessonProgress[]>; // keyed by userId
  notifications: NotificationItem[]; badges: Badge[]; announcements: Announcement[];
  conversations: AiConversation[]; aiUsage: AiUsage[]; weekly: WeeklyResult[];
  drafts: DraftLesson[]; sessionUserId: string | null;
  resetCodes: { email: string; code: string; expiresAt: number }[];
  publishedOverrides: Record<string, boolean>; // lessonId -> published?
  lessonOrder: Record<string, string[]>; // subjectId -> ordered lesson ids (admin reorder)
}

const KEY = 'djp-db-v1';

export function emptyDB(): DB {
  return { profiles: [], attempts: [], progress: {}, notifications: [], badges: [], announcements: [], conversations: [], aiUsage: [], weekly: [], drafts: [], sessionUserId: null, resetCodes: [], publishedOverrides: {}, lessonOrder: {} };
}

export function loadDB(): DB {
  if (typeof window === 'undefined') return emptyDB();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyDB();
    const db = JSON.parse(raw) as DB;
    return { ...emptyDB(), ...db };
  } catch { return emptyDB(); }
}

export function saveDB(db: DB) {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(KEY, JSON.stringify(db)); } catch { /* storage full — ignore */ }
}

export function uid(prefix = 'id'): string {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function notify(db: DB, userId: string, title: string, body: string, kind: string, link?: string) {
  db.notifications.unshift({ id: uid('ntf'), userId, title, body, kind, link, read: false, createdAt: new Date().toISOString() });
}

/** Seed the demo student once (flagged is_demo, excluded from leaderboards). */
export function seedDemo(db: DB): DB {
  if (db.profiles.some(p => p.username === 'demo_student')) return db;
  const now = new Date().toISOString();
  const demo: Profile = {
    id: 'demo_student', fullName: 'Demo Student', username: 'demo_student',
    email: 'demo@darax.example', passwordHash: '', salt: 'demo',
    role: 'student', onboarded: true,
    subjects: ['english', 'mathematics', 'physics', 'chemistry'],
    intendedCourse: 'Engineering', createdAt: now, lastActiveAt: now, isDemo: true, active: true,
    notifyPrefs: { weekly: true, lessons: true, results: true, announcements: true },
  };
  // Password is Demo1234! — hashed at first login attempt via auth (demo shortcut below).
  demo.passwordHash = 'demo-seeded';
  db.profiles.push(demo);
  db.progress['demo_student'] = [
    { lessonId: 'english-01', completed: true, bestScore: 80, attempts: 1, completedAt: now, timeSpentSec: 420 },
    { lessonId: 'mathematics-01', completed: true, bestScore: 100, attempts: 1, completedAt: now, timeSpentSec: 380 },
    { lessonId: 'physics-01', completed: true, bestScore: 75, attempts: 2, completedAt: now, timeSpentSec: 500 },
  ];
  db.attempts.push(
    { id: uid('att'), userId: 'demo_student', lessonId: 'english-01', subjectId: 'english', kind: 'lesson', title: 'Comprehension: Reading Strategies', total: 5, correct: 4, score: 80, answers: [], startedAt: now, completedAt: now, durationSec: 300 },
    { id: uid('att'), userId: 'demo_student', lessonId: 'mathematics-01', subjectId: 'mathematics', kind: 'lesson', title: 'Indices and Logarithms', total: 5, correct: 5, score: 100, answers: [], startedAt: now, completedAt: now, durationSec: 280 },
  );
  db.notifications.push({ id: uid('ntf'), userId: 'demo_student', title: 'Welcome to Darax JAMB Prep', body: 'Your free science JAMB preparation starts here. Complete your first lesson to unlock the next one.', kind: 'announcement', link: '/app/dashboard', read: false, createdAt: now });
  db.announcements.push({ id: uid('ann'), title: 'Welcome to The Official Darax Free JAMB Prep', body: 'Learn. Practice. Improve. Excel. All lessons are free for science students. Score at least 70% on each lesson quiz to unlock the next lesson.', createdAt: now, author: 'Official Darax' });
  return db;
}

export const SUBJECT_NAMES: Record<string, string> = {
  english: 'English Language', mathematics: 'Mathematics', physics: 'Physics',
  chemistry: 'Chemistry', biology: 'Biology', 'agricultural-science': 'Agricultural Science',
  geography: 'Geography', 'computer-studies': 'Computer Studies',
};
export const SCIENCE_SUBJECTS = ['mathematics', 'physics', 'chemistry', 'biology', 'agricultural-science', 'geography', 'computer-studies'];

/** JAMB combination validation map (course -> acceptable subject sets, English always included). */
export const COURSE_REQUIREMENTS: { course: string; required: string[][]; note: string }[] = [
  { course: 'Medicine and Surgery', required: [['english', 'biology', 'chemistry', 'physics']], note: 'Medicine requires English, Biology, Chemistry and Physics.' },
  { course: 'Nursing Science', required: [['english', 'biology', 'chemistry', 'physics']], note: 'Nursing requires English, Biology, Chemistry and Physics.' },
  { course: 'Pharmacy', required: [['english', 'biology', 'chemistry', 'physics'], ['english', 'biology', 'chemistry', 'mathematics']], note: 'Pharmacy requires English, Biology, Chemistry and Physics (or Mathematics).' },
  { course: 'Engineering (all branches)', required: [['english', 'mathematics', 'physics', 'chemistry']], note: 'Engineering requires English, Mathematics, Physics and Chemistry.' },
  { course: 'Architecture', required: [['english', 'mathematics', 'physics', 'chemistry']], note: 'Architecture requires English, Mathematics, Physics and Chemistry.' },
  { course: 'Computer Science', required: [['english', 'mathematics', 'physics', 'chemistry'], ['english', 'mathematics', 'physics', 'computer-studies']], note: 'Computer Science requires English, Mathematics, Physics and Chemistry (or Computer Studies).' },
  { course: 'Agriculture', required: [['english', 'biology', 'chemistry', 'agricultural-science'], ['english', 'biology', 'chemistry', 'physics']], note: 'Agriculture requires English, Biology, Chemistry and Agricultural Science (or Physics).' },
  { course: 'Geology', required: [['english', 'mathematics', 'physics', 'chemistry'], ['english', 'mathematics', 'physics', 'geography']], note: 'Geology requires English, Mathematics, Physics and Chemistry (or Geography).' },
  { course: 'Biochemistry', required: [['english', 'biology', 'chemistry', 'physics'], ['english', 'biology', 'chemistry', 'mathematics']], note: 'Biochemistry requires English, Biology, Chemistry and Physics (or Mathematics).' },
  { course: 'Microbiology', required: [['english', 'biology', 'chemistry', 'physics']], note: 'Microbiology requires English, Biology, Chemistry and Physics.' },
  { course: 'Mathematics', required: [['english', 'mathematics', 'physics', 'chemistry']], note: 'Mathematics requires English, Mathematics, Physics and Chemistry.' },
  { course: 'Statistics', required: [['english', 'mathematics', 'physics', 'chemistry'], ['english', 'mathematics', 'economics', 'physics']], note: 'Statistics requires English, Mathematics and Physics, plus Chemistry.' },
];

export function validateCombination(subjects: string[], course?: string): { ok: boolean; message: string } {
  if (!subjects.includes('english')) return { ok: false, message: 'English Language is compulsory for every JAMB candidate.' };
  if (subjects.length !== 4) return { ok: false, message: 'Select exactly four subjects: English Language plus three science subjects.' };
  if (!course) return { ok: true, message: 'Valid four-subject science combination.' };
  const req = COURSE_REQUIREMENTS.find(c => c.course === course);
  if (!req) return { ok: true, message: 'Valid four-subject science combination.' };
  const sorted = [...subjects].sort().join(',');
  const match = req.required.some(set => [...set].sort().join(',') === sorted);
  if (match) return { ok: true, message: `${course}: your combination meets the JAMB requirement.` };
  return { ok: false, message: `${course}: ${req.note} Your current combination (${subjects.map(s => SUBJECT_NAMES[s] || s).join(', ')}) does not meet it. Change one subject to match the requirement above.` };
}
