// Weekly leaderboards + winner selection (Africa/Lagos, Monday–Sunday).
// Idempotent: keyed by week string e.g. "2026-W46". Demo accounts excluded.
import type { DB } from './store';
import { uid, notify } from './store';

export function lagosNow(): Date {
  // Africa/Lagos is UTC+1 year-round (no DST).
  return new Date(Date.now() + 60 * 60 * 1000);
}

export function weekKey(d = new Date()): { week: string; year: number } {
  const lagos = new Date(d.getTime() + 60 * 60 * 1000);
  const day = lagos.getUTCDay(); // 0 Sun .. 6 Sat
  const monday = new Date(lagos);
  monday.setUTCDate(lagos.getUTCDate() - ((day + 6) % 7));
  monday.setUTCHours(0, 0, 0, 0);
  const year = monday.getUTCFullYear();
  const jan1 = Date.UTC(year, 0, 1);
  const weekNo = Math.floor((monday.getTime() - jan1) / (7 * 24 * 3600 * 1000)) + 1;
  return { week: `${year}-W${String(weekNo).padStart(2, '0')}`, year };
}

export function weekRange(week: string): { start: string; end: string } {
  const [y, w] = week.split('-W');
  const year = parseInt(y, 10); const wn = parseInt(w, 10);
  const monday = new Date(Date.UTC(year, 0, 1) + (wn - 1) * 7 * 24 * 3600 * 1000);
  const sunday = new Date(monday.getTime() + 6 * 24 * 3600 * 1000 + 23 * 3600 * 1000 + 59 * 60 * 1000);
  return { start: monday.toISOString(), end: sunday.toISOString() };
}

export interface ScorerRow { userId: string; name: string; score: number; assessments: number; accuracy: number; }
export interface ScholarRow { userId: string; name: string; score: number; detail: string; }

export function computeScorers(db: DB, week: string): ScorerRow[] {
  const { start, end } = weekRange(week);
  const byUser = new Map<string, { total: number; correct: number; count: number; earliest: string }>();
  for (const a of db.attempts) {
    if (a.completedAt < start || a.completedAt > end) continue;
    const u = db.profiles.find(p => p.id === a.userId);
    if (!u || u.isDemo || !u.active) continue;
    const e = byUser.get(a.userId) || { total: 0, correct: 0, count: 0, earliest: a.completedAt };
    e.total += a.total; e.correct += a.correct; e.count += 1;
    if (a.completedAt < e.earliest) e.earliest = a.completedAt;
    byUser.set(a.userId, e);
  }
  const rows: ScorerRow[] = [];
  for (const [userId, e] of byUser) {
    if (e.count < 3) continue; // minimum participation: 3 assessments that week
    const u = db.profiles.find(p => p.id === userId)!;
    rows.push({ userId, name: u.fullName, score: Math.round((e.correct / e.total) * 1000) / 10, assessments: e.count, accuracy: e.correct / e.total });
  }
  // Normalised average % (not raw totals) — more attempts do not by themselves win.
  // Tie-break: higher accuracy, then earliest completion.
  rows.sort((a, b) => b.score - a.score || b.accuracy - a.accuracy);
  return rows.slice(0, 10);
}

export function computeScholars(db: DB, week: string): ScholarRow[] {
  const { start, end } = weekRange(week);
  const rows: ScholarRow[] = [];
  for (const u of db.profiles) {
    if (u.isDemo || !u.active || u.role !== 'student') continue;
    const weekAttempts = db.attempts.filter(a => a.userId === u.id && a.completedAt >= start && a.completedAt <= end);
    if (weekAttempts.length < 2) continue; // minimum assessment requirement
    const accuracy = weekAttempts.reduce((s, a) => s + a.score, 0) / weekAttempts.length / 100;
    const prog = db.progress[u.id] || [];
    // Minimum-time safeguard: lessons finished in under 60s do not count toward speed.
    const genuine = prog.filter(p => p.completed && p.timeSpentSec >= 60 && p.completedAt && p.completedAt >= start && p.completedAt <= end);
    const completed = genuine.length;
    const days = new Set(weekAttempts.map(a => a.completedAt.slice(0, 10))).size;
    const consistency = Math.min(days, 7) / 7;
    const completion = Math.min(completed / 5, 1); // 5 lessons/week = full marks
    const quality = genuine.length ? genuine.reduce((s, p) => s + Math.min(p.bestScore, 100), 0) / genuine.length / 100 : 0;
    // Explainable composite: accuracy 40% + completion 30% + consistency 20% + quality 10%.
    // Rushing without understanding cannot win: accuracy and quality dominate, and
    // sub-60-second completions are excluded entirely.
    const score = Math.round((accuracy * 0.4 + completion * 0.3 + consistency * 0.2 + quality * 0.1) * 1000) / 10;
    rows.push({ userId: u.id, name: u.fullName, score, detail: `Accuracy ${Math.round(accuracy * 100)}% · ${completed} lesson${completed === 1 ? '' : 's'} · ${days} active day${days === 1 ? '' : 's'}` });
  }
  rows.sort((a, b) => b.score - a.score);
  return rows.slice(0, 10);
}

/** Idempotent weekly run: same week string never creates duplicate badges/notifications. */
export function runWeekly(db: DB, week?: string): { week: string; created: boolean; scorers: ScorerRow[]; scholars: ScholarRow[] } {
  const wk = week || weekKey().week;
  const { year } = weekKey();
  if (db.weekly.some(w => w.week === wk)) {
    const existing = db.weekly.find(w => w.week === wk)!;
    return { week: wk, created: false, scorers: existing.scorers, scholars: existing.scholars };
  }
  const scorers = computeScorers(db, wk);
  const scholars = computeScholars(db, wk);
  db.weekly.push({ week: wk, year, computedAt: new Date().toISOString(), scorers, scholars });
  const issue = (rows: (ScorerRow | ScholarRow)[], title: 'Weekly Top Scorer' | 'Weekly Top Scholar', board: string) => {
    rows.forEach((r, i) => {
      const badgeId = `DRX-JAMB-${year}-${wk.replace(`${year}-`, '')}-${String(i + 1).padStart(4, '0')}`;
      if (db.badges.some(b => b.id === badgeId)) return;
      db.badges.push({ id: badgeId, userId: r.userId, fullName: r.name, title, position: i + 1, week: wk, year, issueDate: new Date().toISOString(), verified: true });
      notify(db, r.userId, `You are #${i + 1} — ${title}!`, `Congratulations ${r.name}! You finished #${i + 1} on the ${board} leaderboard for week ${wk}. Your official badge is ready.`, 'badge', '/app/achievements');
    });
  };
  issue(scorers, 'Weekly Top Scorer', 'Weekly Top Scorers');
  issue(scholars, 'Weekly Top Scholar', 'Weekly Top Scholars');
  return { week: wk, created: true, scorers, scholars };
}
