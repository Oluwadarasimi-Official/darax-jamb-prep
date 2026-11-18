// Two-tier data layer, tier 1: localStorage-backed store (works NOW, per-device).
// Tier 2 (Supabase) activates only when env vars are set — see lib/supabase.ts.
// README states this plainly. Never claim Supabase is live until verified.

export type Department = 'science' | 'arts' | 'commercial';

export const DEPARTMENTS: { id: Department; name: string; tagline: string }[] = [
  { id: 'science', name: 'Science', tagline: 'Mathematics, Physics, Chemistry, Biology and more.' },
  { id: 'arts', name: 'Arts', tagline: 'Literature, Government, CRS and Yoruba.' },
  { id: 'commercial', name: 'Commercial', tagline: 'Economics, Commerce, Accounting and more.' },
];

export interface Profile {
  id: string; fullName: string; username: string; email: string;
  passwordHash: string; salt: string;
  role: 'student' | 'admin';
  department: Department;
  onboarded: boolean; subjects: string[]; intendedCourse?: string;
  createdAt: string; lastActiveAt: string; isDemo?: boolean; active: boolean;
  notifyPrefs?: { weekly: boolean; lessons: boolean; results: boolean; announcements: boolean };
}
export interface Attempt {
  id: string; userId: string; lessonId?: string; subjectId: string; department?: Department; kind: 'lesson' | 'topic' | 'subject' | 'mixed' | 'mock' | 'utme';
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

/** Admin-published lessons (created in Content Studio, stored in the local DB).
 *  Same shape as a curriculum Lesson; ids start with `custom_`. */
export interface CustomLesson {
  id: string; subjectId: string; topic: string; subtopic: string; title: string; order: number;
  introduction: string; objectives: string[];
  sections: { heading: string; body: string }[];
  definitions: { term: string; meaning: string }[];
  formulas?: string[];
  examples: { title: string; problem: string; steps: string[]; answer: string }[];
  tips: string[]; mistakes: string[]; facts: string[];
  quiz: { q: string; options: [string, string, string, string]; answer: number; explanation: string }[];
  status: 'published' | 'draft';
}

export interface DB {
  profiles: Profile[]; attempts: Attempt[]; progress: Record<string, LessonProgress[]>; // keyed by userId
  notifications: NotificationItem[]; badges: Badge[]; announcements: Announcement[];
  conversations: AiConversation[]; aiUsage: AiUsage[]; weekly: WeeklyResult[];
  drafts: DraftLesson[]; customLessons: CustomLesson[]; sessionUserId: string | null;
  resetCodes: { email: string; code: string; expiresAt: number }[];
  publishedOverrides: Record<string, boolean>; // lessonId -> published?
  lessonOrder: Record<string, string[]>; // subjectId -> ordered lesson ids (admin reorder)
}

const KEY = 'djp-db-v1';

export function emptyDB(): DB {
  return { profiles: [], attempts: [], progress: {}, notifications: [], badges: [], announcements: [], conversations: [], aiUsage: [], weekly: [], drafts: [], customLessons: [], sessionUserId: null, resetCodes: [], publishedOverrides: {}, lessonOrder: {} };
}

export function loadDB(): DB {
  if (typeof window === 'undefined') return emptyDB();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyDB();
    const db = JSON.parse(raw) as DB;
    // Backfill: accounts created before departments existed default to Science.
    db.profiles = (db.profiles || []).map(p => ({ ...p, department: p.department || 'science' }));
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
    role: 'student', department: 'science', onboarded: true,
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
    { id: uid('att'), userId: 'demo_student', lessonId: 'english-01', subjectId: 'english', kind: 'lesson', title: 'Comprehension: Reading Strategies', total: 15, correct: 12, score: 80, answers: [], startedAt: now, completedAt: now, durationSec: 300 },
    { id: uid('att'), userId: 'demo_student', lessonId: 'mathematics-01', subjectId: 'mathematics', kind: 'lesson', title: 'Indices and Logarithms', total: 15, correct: 15, score: 100, answers: [], startedAt: now, completedAt: now, durationSec: 280 },
  );
  db.notifications.push({ id: uid('ntf'), userId: 'demo_student', title: 'Welcome to Darax JAMB Prep', body: 'Your free science JAMB preparation starts here. Complete your first lesson to unlock the next one.', kind: 'announcement', link: '/app/dashboard', read: false, createdAt: now });
  db.announcements.push({ id: uid('ann'), title: 'Welcome to The Official Darax Free JAMB Prep', body: 'Learn. Practice. Improve. Excel. All lessons are free for Science, Arts and Commercial students. Score at least 70% on each lesson quiz to unlock the next lesson.', createdAt: now, author: 'Official Darax' });
  return db;
}

export const SUBJECT_NAMES: Record<string, string> = {
  english: 'English Language', mathematics: 'Mathematics', physics: 'Physics',
  chemistry: 'Chemistry', biology: 'Biology', 'agricultural-science': 'Agricultural Science',
  geography: 'Geography', 'computer-studies': 'Computer Studies',
  literature: 'Literature in English', government: 'Government', crs: 'Christian Religious Studies',
  yoruba: 'Yoruba',
  economics: 'Economics', commerce: 'Commerce', accounting: 'Accounting',
};
export const SCIENCE_SUBJECTS = ['mathematics', 'physics', 'chemistry', 'biology', 'agricultural-science', 'geography', 'computer-studies'];
/** Subjects a student may pick (besides compulsory English) per department. */
export const ARTS_SUBJECTS = ['literature', 'government', 'crs', 'yoruba'];
export const COMMERCIAL_SUBJECTS = ['economics', 'commerce', 'accounting', 'mathematics', 'geography', 'government', 'crs'];
export const DEPARTMENT_SUBJECTS: Record<Department, string[]> = {
  science: SCIENCE_SUBJECTS, arts: ARTS_SUBJECTS, commercial: COMMERCIAL_SUBJECTS,
};

/** JAMB combination validation map (course -> acceptable subject sets, English always included). */
export const COURSE_REQUIREMENTS: { course: string; dept: Department; required: string[][]; note: string }[] = [
  { course: 'Medicine and Surgery', dept: 'science', required: [['english', 'biology', 'chemistry', 'physics']], note: 'Medicine requires English, Biology, Chemistry and Physics.' },
  { course: 'Nursing Science', dept: 'science', required: [['english', 'biology', 'chemistry', 'physics']], note: 'Nursing requires English, Biology, Chemistry and Physics.' },
  { course: 'Pharmacy', dept: 'science', required: [['english', 'biology', 'chemistry', 'physics'], ['english', 'biology', 'chemistry', 'mathematics']], note: 'Pharmacy requires English, Biology, Chemistry and Physics (or Mathematics).' },
  { course: 'Engineering (all branches)', dept: 'science', required: [['english', 'mathematics', 'physics', 'chemistry']], note: 'Engineering requires English, Mathematics, Physics and Chemistry.' },
  { course: 'Architecture', dept: 'science', required: [['english', 'mathematics', 'physics', 'chemistry']], note: 'Architecture requires English, Mathematics, Physics and Chemistry.' },
  { course: 'Computer Science', dept: 'science', required: [['english', 'mathematics', 'physics', 'chemistry'], ['english', 'mathematics', 'physics', 'computer-studies']], note: 'Computer Science requires English, Mathematics, Physics and Chemistry (or Computer Studies).' },
  { course: 'Agriculture', dept: 'science', required: [['english', 'biology', 'chemistry', 'agricultural-science'], ['english', 'biology', 'chemistry', 'physics']], note: 'Agriculture requires English, Biology, Chemistry and Agricultural Science (or Physics).' },
  { course: 'Geology', dept: 'science', required: [['english', 'mathematics', 'physics', 'chemistry'], ['english', 'mathematics', 'physics', 'geography']], note: 'Geology requires English, Mathematics, Physics and Chemistry (or Geography).' },
  { course: 'Biochemistry', dept: 'science', required: [['english', 'biology', 'chemistry', 'physics'], ['english', 'biology', 'chemistry', 'mathematics']], note: 'Biochemistry requires English, Biology, Chemistry and Physics (or Mathematics).' },
  { course: 'Microbiology', dept: 'science', required: [['english', 'biology', 'chemistry', 'physics']], note: 'Microbiology requires English, Biology, Chemistry and Physics.' },
  { course: 'Mathematics', dept: 'science', required: [['english', 'mathematics', 'physics', 'chemistry']], note: 'Mathematics requires English, Mathematics, Physics and Chemistry.' },
  { course: 'Statistics', dept: 'science', required: [['english', 'mathematics', 'physics', 'chemistry'], ['english', 'mathematics', 'economics', 'physics']], note: 'Statistics requires English, Mathematics and Physics, plus Chemistry.' },
  { course: 'Law', dept: 'arts', required: [['english', 'literature', 'government', 'crs']], note: 'Law requires English, Literature in English, Government and CRS.' },
  { course: 'Mass Communication', dept: 'arts', required: [['english', 'literature', 'government', 'economics'], ['english', 'literature', 'government', 'crs']], note: 'Mass Communication requires English, Literature in English, Government and Economics (or CRS).' },
  { course: 'English Language', dept: 'arts', required: [['english', 'literature', 'government', 'crs']], note: 'English Language requires English, Literature in English, Government and CRS.' },
  { course: 'Theatre Arts', dept: 'arts', required: [['english', 'literature', 'government', 'crs']], note: 'Theatre Arts requires English, Literature in English, Government and CRS.' },
  { course: 'Linguistics', dept: 'arts', required: [['english', 'literature', 'yoruba', 'government']], note: 'Linguistics requires English, Literature in English, a Nigerian language (Yoruba) and Government.' },
  { course: 'Yoruba Language', dept: 'arts', required: [['english', 'yoruba', 'literature', 'government']], note: 'Yoruba Language requires English, Yoruba, Literature in English and Government.' },
  { course: 'Religious Studies', dept: 'arts', required: [['english', 'crs', 'government', 'literature']], note: 'Religious Studies requires English, CRS, Government and Literature in English.' },
  { course: 'Accounting', dept: 'commercial', required: [['english', 'mathematics', 'economics', 'commerce'], ['english', 'mathematics', 'economics', 'accounting']], note: 'Accounting requires English, Mathematics, Economics and Commerce (or Accounting).' },
  { course: 'Business Administration', dept: 'commercial', required: [['english', 'mathematics', 'economics', 'commerce']], note: 'Business Administration requires English, Mathematics, Economics and Commerce.' },
  { course: 'Economics', dept: 'commercial', required: [['english', 'mathematics', 'economics', 'government'], ['english', 'mathematics', 'economics', 'geography']], note: 'Economics requires English, Mathematics, Economics and Government (or Geography).' },
  { course: 'Banking and Finance', dept: 'commercial', required: [['english', 'mathematics', 'economics', 'commerce']], note: 'Banking and Finance requires English, Mathematics, Economics and Commerce.' },
  { course: 'Marketing', dept: 'commercial', required: [['english', 'mathematics', 'economics', 'commerce']], note: 'Marketing requires English, Mathematics, Economics and Commerce.' },
  { course: 'Insurance', dept: 'commercial', required: [['english', 'mathematics', 'economics', 'commerce']], note: 'Insurance requires English, Mathematics, Economics and Commerce.' },
];

export function validateCombination(subjects: string[], course?: string, dept: Department = 'science'): { ok: boolean; message: string } {
  const deptName = DEPARTMENTS.find(d => d.id === dept)?.name || 'Science';
  if (!subjects.includes('english')) return { ok: false, message: 'English Language is compulsory for every JAMB candidate.' };
  if (subjects.length !== 4) return { ok: false, message: `Select exactly four subjects: English Language plus three ${deptName} subjects.` };
  if (!course) return { ok: true, message: `Valid four-subject ${deptName} combination.` };
  const req = COURSE_REQUIREMENTS.find(c => c.course === course);
  if (!req) return { ok: true, message: `Valid four-subject ${deptName} combination.` };
  const sorted = [...subjects].sort().join(',');
  const match = req.required.some(set => [...set].sort().join(',') === sorted);
  if (match) return { ok: true, message: `${course}: your combination meets the JAMB requirement.` };
  return { ok: false, message: `${course}: ${req.note} Your current combination (${subjects.map(s => SUBJECT_NAMES[s] || s).join(', ')}) does not meet it. Change one subject to match the requirement above.` };
}
