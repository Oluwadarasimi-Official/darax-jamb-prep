'use client';
import { useDb } from '@/components/db-context';
import { computeScorers, computeScholars, weekKey, type ScorerRow, type ScholarRow } from '@/lib/weekly';
import { GlassCard, Avatar, EmptyState } from '@/components/ui';

export default function LeaderboardsPage() {
  const { db, user } = useDb();
  if (!user) return null;
  const wk = weekKey().week;
  const scorers = computeScorers(db, wk);
  const scholars = computeScholars(db, wk);
  const myScorer = scorers.findIndex(r => r.userId === user.id) + 1;
  const myScholar = scholars.findIndex(r => r.userId === user.id) + 1;

  const board = (title: string, expl: string, rows: (ScorerRow | ScholarRow)[], extra: (r: ScorerRow | ScholarRow) => string, myRank: number) => (
    <GlassCard>
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="muted text-sm mt-1">{expl}</p>
      <p className="text-sm mt-2">Week <strong>{wk}</strong> (Monday–Sunday, Africa/Lagos){myRank ? <> · Your position: <strong className="text-emerald-300">#{myRank}</strong></> : ' · You are not ranked this week yet.'}</p>
      {rows.length === 0 ? (
        <div className="mt-4"><EmptyState title="Not enough data yet" body="Rankings appear once enough students complete assessments this week. Keep learning — your scores count automatically." /></div>
      ) : (
        <ol className="flex flex-col gap-2 mt-4">
          {rows.map((r, i) => (
            <li key={r.userId} className={`glass-soft p-3 flex items-center gap-3 ${r.userId === user.id ? '!border-emerald-300/50 bg-emerald-400/10' : ''}`}>
              <span className="font-extrabold text-lg w-8 text-center">{i + 1}</span>
              <Avatar name={r.name} size={36} />
              <div className="min-w-0 flex-1">
                <p className="font-semibold truncate">{r.name}{r.userId === user.id ? ' (you)' : ''}</p>
                <p className="text-xs muted">{extra(r)}</p>
              </div>
              <span className="font-bold text-emerald-300 shrink-0">{r.score}%</span>
            </li>
          ))}
        </ol>
      )}
    </GlassCard>
  );

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold">Leaderboards</h1>
        <p className="muted text-sm mt-1">Two independent weekly rankings, computed only from real assessment records. Demo accounts are excluded.</p>
      </div>
      {board(
        '🏆 Weekly Top Scorers',
        'Ranked by normalised average score across assessments — not by how many questions you attempted. Minimum 3 assessments this week. Ties are broken by accuracy, then earliest completion.',
        scorers,
        r => 'assessments' in r ? `${r.assessments} assessments this week` : '',
        myScorer,
      )}
      {board(
        '🎓 Weekly Top Scholars',
        'An explainable composite: accuracy 40% + lesson completion 30% + consistency (active days) 20% + completion quality 10%. Minimum 2 assessments. Lessons finished in under 60 seconds do not count toward speed, so rushing without understanding cannot win.',
        scholars,
        r => 'detail' in r ? r.detail : '',
        myScholar,
      )}
      <GlassCard>
        <h2 className="font-bold text-lg">How weekly winners are chosen</h2>
        <p className="muted text-sm mt-1 leading-relaxed">At the end of each week (Monday–Sunday, Africa/Lagos) the system calculates both boards, saves the official results, issues a personalised Official Darax badge to each Top 10 student, and sends them a notification. The calculation is idempotent — running it twice for the same week never creates duplicate badges. Only verified assessment records count.</p>
      </GlassCard>
    </div>
  );
}
