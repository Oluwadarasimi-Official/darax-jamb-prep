'use client';
import { useState } from 'react';
import { useDb } from '@/components/db-context';
import { ALL_LESSONS, SUBJECTS, getSubjectLessons } from '@/lib/curriculum';
import { orderedLessons } from '@/lib/progression';
import { uid } from '@/lib/store';
import { GlassCard } from '@/components/ui';

export default function ContentStudioPage() {
  const { db, user, setDb } = useDb();
  const [subjectId, setSubjectId] = useState('mathematics');
  const [genTopic, setGenTopic] = useState('');
  const [genTitle, setGenTitle] = useState('');
  const [genObjectives, setGenObjectives] = useState('');
  const [genBusy, setGenBusy] = useState(false);
  const [genMsg, setGenMsg] = useState('');
  const [previewId, setPreviewId] = useState<string | null>(null);
  if (!user) return null;

  const lessons = orderedLessons(db, subjectId);
  const totalPublished = ALL_LESSONS.filter(l => db.publishedOverrides[l.id] !== false).length;
  const missing = SUBJECTS.flatMap(s => s.topics.filter(t => getSubjectLessons(s.id).filter(l => l.topic === t).length < 2));

  const togglePublish = (lessonId: string) => setDb(d => {
    d.publishedOverrides[lessonId] = d.publishedOverrides[lessonId] === false ? true : false;
    return d;
  });

  const move = (lessonId: string, dir: -1 | 1) => setDb(d => {
    const current = orderedLessons(d, subjectId).map(l => l.id);
    const i = current.indexOf(lessonId);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= current.length) return d;
    [current[i], current[j]] = [current[j], current[i]];
    d.lessonOrder[subjectId] = current;
    return d;
  });

  const generate = async () => {
    if (!genTopic.trim() || !genTitle.trim()) { setGenMsg('Enter a topic and a lesson title.'); return; }
    setGenBusy(true); setGenMsg('');
    try {
      const res = await fetch('/api/admin/generate-lesson', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role: user.role, subjectId,
          topic: genTopic.trim(), title: genTitle.trim(),
          objectives: genObjectives.split('\n').map(s => s.trim()).filter(Boolean),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || data.error || 'Generation failed.');
      const id = uid('draft');
      setDb(d => {
        d.drafts.push({ id, subjectId, topic: genTopic.trim(), title: genTitle.trim(), content: JSON.stringify(data.draft, null, 2), status: 'draft', createdAt: new Date().toISOString(), source: 'ai' });
        return d;
      });
      setGenMsg('Draft saved. Review it below and approve it before publishing — AI content is never published automatically.');
      setGenTopic(''); setGenTitle(''); setGenObjectives('');
    } catch (e) {
      setGenMsg(e instanceof Error ? e.message : 'Generation failed.');
    } finally { setGenBusy(false); }
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold">Content Studio</h1>
        <p className="muted text-sm mt-1">Curriculum: {ALL_LESSONS.length} lessons · {totalPublished} published · {ALL_LESSONS.length - totalPublished} unpublished. {missing.length === 0 ? 'Every topic has its full lesson set.' : `Topics needing lessons: ${missing.join(', ')}`}</p>
      </div>

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">AI lesson authoring (Groq)</h2>
        <p className="text-sm muted">Drafts are saved for review and are NEVER published automatically. An admin must approve each draft before it goes live.</p>
        <div className="grid md:grid-cols-2 gap-2 mt-3">
          <select className="glass-input" value={subjectId} onChange={e => setSubjectId(e.target.value)}>
            {SUBJECTS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <input className="glass-input" value={genTopic} onChange={e => setGenTopic(e.target.value)} placeholder="Topic (e.g. Algebraic Processes)" />
          <input className="glass-input" value={genTitle} onChange={e => setGenTitle(e.target.value)} placeholder="Lesson title" />
          <input className="glass-input" value={genObjectives} onChange={e => setGenObjectives(e.target.value)} placeholder="Objectives (separate with commas)" />
        </div>
        <button onClick={generate} disabled={genBusy} className="btn-primary mt-3 text-sm">{genBusy ? 'Generating draft…' : 'Generate lesson draft with AI'}</button>
        {genMsg && <p className="text-sm text-emerald-300 mt-3">{genMsg}</p>}
      </GlassCard>

      {db.drafts.length > 0 && (
        <GlassCard>
          <h2 className="font-bold text-lg mb-3">AI drafts awaiting review ({db.drafts.filter(d => d.status === 'draft').length} draft{db.drafts.filter(d => d.status === 'draft').length === 1 ? '' : 's'})</h2>
          <div className="flex flex-col gap-3">
            {db.drafts.map(d => (
              <div key={d.id} className="glass-soft p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold">{d.title} <span className="muted font-normal text-sm">· {d.topic} · {d.subjectId} · {d.status}</span></p>
                  <span className="flex gap-2">
                    <button onClick={() => setPreviewId(previewId === d.id ? null : d.id)} className="btn-ghost !py-1 !px-2 text-xs">{previewId === d.id ? 'Hide preview' : 'Preview'}</button>
                    {d.status === 'draft' && <button onClick={() => setDb(x => { const dr = x.drafts.find(y => y.id === d.id)!; dr.status = 'approved'; return x; })} className="btn-ghost !py-1 !px-2 text-xs">Approve</button>}
                    {d.status === 'approved' && <button onClick={() => setDb(x => { const dr = x.drafts.find(y => y.id === d.id)!; dr.status = 'published'; return x; })} className="btn-primary !py-1 !px-2 text-xs">Publish</button>}
                    <button onClick={() => setDb(x => { x.drafts = x.drafts.filter(y => y.id !== d.id); return x; })} className="btn-ghost !py-1 !px-2 text-xs">Delete</button>
                  </span>
                </div>
                {previewId === d.id && <pre className="text-xs whitespace-pre-wrap bg-black/30 rounded-lg p-3 mt-3 max-h-96 overflow-y-auto">{d.content}</pre>}
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      <GlassCard>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <h2 className="font-bold text-lg">Lessons — manage & reorder</h2>
          <select className="glass-input !w-auto" value={subjectId} onChange={e => setSubjectId(e.target.value)}>
            {SUBJECTS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          {lessons.map((l, i) => {
            const published = db.publishedOverrides[l.id] !== false;
            return (
              <div key={l.id} className="glass-soft p-3 flex flex-wrap items-center justify-between gap-2 text-sm">
                <span><strong>{i + 1}. {l.title}</strong> <span className="muted">· {l.topic} · {published ? 'Published' : 'Unpublished'}</span></span>
                <span className="flex gap-2">
                  <button onClick={() => move(l.id, -1)} disabled={i === 0} className="btn-ghost !py-1 !px-2 text-xs">↑</button>
                  <button onClick={() => move(l.id, 1)} disabled={i === lessons.length - 1} className="btn-ghost !py-1 !px-2 text-xs">↓</button>
                  <button onClick={() => togglePublish(l.id)} className="btn-ghost !py-1 !px-2 text-xs">{published ? 'Unpublish' : 'Publish'}</button>
                </span>
              </div>
            );
          })}
        </div>
        <p className="text-xs muted mt-3">Reordering changes the unlock sequence immediately. Unpublishing a lesson locks it for students until it is published again.</p>
      </GlassCard>
    </div>
  );
}
