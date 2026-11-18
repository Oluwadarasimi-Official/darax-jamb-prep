'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDb } from '@/components/db-context';
import { ALL_LESSONS, SUBJECTS, getSubjectLessons } from '@/lib/curriculum';
import { orderedLessons } from '@/lib/progression';
import { uid, DEPARTMENTS, DEPARTMENT_SUBJECTS, type CustomLesson, type DraftLesson } from '@/lib/store';
import { GlassCard } from '@/components/ui';
import { getSb, SUPABASE_CONFIGURED } from '@/lib/supabase';

/* ------------------------------------------------------------------ */
/* Subject dropdown, grouped by department (Science / Arts / Commercial) */
/* Shared by the manual form, AI authoring and the lessons filter.     */
/* ------------------------------------------------------------------ */
function SubjectSelect({ value, onChange, className }: { value: string; onChange: (v: string) => void; className?: string }) {
  return (
    <select className={className || 'glass-input'} value={value} onChange={e => onChange(e.target.value)}>
      {DEPARTMENTS.map(dept => {
        const ids = ['english', ...DEPARTMENT_SUBJECTS[dept.id]];
        const group = SUBJECTS.filter(s => ids.includes(s.id));
        return (
          <optgroup key={dept.id} label={`${dept.name} Department`}>
            {group.map(s => <option key={`${dept.id}:${s.id}`} value={s.id}>{s.name}</option>)}
          </optgroup>
        );
      })}
    </select>
  );
}

/* ------------------------------------------------------------------ */
/* Draft validation + publishing                                       */
/* A draft is a Lesson-shaped JSON object (no id/order/status — those   */
/* are assigned at publish time). Publishing validates it strictly:    */
/* full notes + exactly 15 quiz questions, each with 4 options, a      */
/* valid answer index and an explanation. Invalid drafts can never     */
/* reach students — publish is blocked with the exact problem listed.  */
/* ------------------------------------------------------------------ */

function validateLessonData(data: unknown): string[] {
  const errs: string[] = [];
  if (!data || typeof data !== 'object') return ['Draft content is not a lesson object.'];
  const d = data as Record<string, unknown>;
  if (typeof d.title !== 'string' || !d.title.trim()) errs.push('Missing lesson title.');
  if (typeof d.topic !== 'string' || !d.topic.trim()) errs.push('Missing topic.');
  if (typeof d.introduction !== 'string' || !d.introduction.trim()) errs.push('Missing introduction.');
  if (!Array.isArray(d.objectives) || d.objectives.length < 1) errs.push('Add at least 1 learning objective.');
  if (!Array.isArray(d.sections) || d.sections.length < 1) errs.push('Add at least 1 notes section.');
  else for (const s of d.sections as Record<string, unknown>[]) {
    if (!s || typeof s.heading !== 'string' || !s.heading.trim() || typeof s.body !== 'string' || !s.body.trim()) errs.push('Every notes section needs a heading and body.');
  }
  if (!Array.isArray(d.definitions) || d.definitions.length < 1) errs.push('Add at least 1 definition.');
  if (!Array.isArray(d.examples) || d.examples.length < 1) errs.push('Add at least 1 worked example.');
  if (!Array.isArray(d.tips) || d.tips.length < 1) errs.push('Add at least 1 JAMB tip.');
  if (!Array.isArray(d.mistakes) || d.mistakes.length < 1) errs.push('Add at least 1 common mistake.');
  if (!Array.isArray(d.facts) || d.facts.length < 1) errs.push('Add at least 1 key fact.');
  if (!Array.isArray(d.quiz)) errs.push('Missing quiz.');
  else {
    if (d.quiz.length !== 15) errs.push(`Quiz has ${d.quiz.length} question(s) — exactly 15 are required.`);
    (d.quiz as Record<string, unknown>[]).forEach((q, i) => {
      if (!q || typeof q.q !== 'string' || !q.q.trim()) errs.push(`Question ${i + 1}: missing question text.`);
      if (!Array.isArray(q.options) || q.options.length !== 4 || (q.options as unknown[]).some(o => typeof o !== 'string' || !o.trim())) errs.push(`Question ${i + 1}: needs exactly 4 non-empty options.`);
      if (typeof q.answer !== 'number' || q.answer < 0 || q.answer > 3) errs.push(`Question ${i + 1}: answer must be option A–D.`);
      if (typeof q.explanation !== 'string' || !q.explanation.trim()) errs.push(`Question ${i + 1}: missing explanation.`);
    });
  }
  return errs;
}

function parseDraft(d: DraftLesson): { data: Record<string, unknown> | null; error: string } {
  try {
    const data = JSON.parse(d.content) as Record<string, unknown>;
    return { data, error: '' };
  } catch {
    return { data: null, error: 'This draft is not valid JSON and cannot be published.' };
  }
}

function DraftPreview({ draft }: { draft: DraftLesson }) {
  const { data, error } = parseDraft(draft);
  const [showJson, setShowJson] = useState(false);
  if (error || !data) return <p className="text-sm text-danger mt-3 break-words">{error}</p>;
  const quiz = (Array.isArray(data.quiz) ? data.quiz : []) as Record<string, unknown>[];
  const sections = (Array.isArray(data.sections) ? data.sections : []) as Record<string, unknown>[];
  const objectives = (Array.isArray(data.objectives) ? data.objectives : []) as string[];
  const examples = (Array.isArray(data.examples) ? data.examples : []) as Record<string, unknown>[];
  return (
    <div className="mt-3 border-t border-ink/10 pt-3">
      <p className="text-sm leading-relaxed break-words">{String(data.introduction || '')}</p>
      <div className="grid sm:grid-cols-2 gap-2 mt-3 text-sm">
        <p className="glass-soft p-2.5">Objectives: <strong>{objectives.length}</strong></p>
        <p className="glass-soft p-2.5">Notes sections: <strong>{sections.length}</strong></p>
        <p className="glass-soft p-2.5">Definitions: <strong>{Array.isArray(data.definitions) ? data.definitions.length : 0}</strong></p>
        <p className="glass-soft p-2.5">Worked examples: <strong>{examples.length}</strong></p>
        <p className="glass-soft p-2.5">JAMB tips / mistakes / facts: <strong>{(Array.isArray(data.tips) ? data.tips.length : 0)} / {(Array.isArray(data.mistakes) ? data.mistakes.length : 0)} / {(Array.isArray(data.facts) ? data.facts.length : 0)}</strong></p>
        <p className="glass-soft p-2.5">Quiz questions: <strong className={quiz.length === 15 ? 'text-accent' : 'text-danger'}>{quiz.length} / 15</strong></p>
      </div>
      {sections.length > 0 && (
        <div className="mt-3">
          <p className="font-semibold text-sm mb-1">Sections</p>
          {sections.map((s, i) => (
            <p key={i} className="text-sm muted break-words">• <strong className="text-ink">{String(s.heading || '')}</strong> — {String(s.body || '').slice(0, 120)}{String(s.body || '').length > 120 ? '…' : ''}</p>
          ))}
        </div>
      )}
      {quiz.length > 0 && (
        <div className="mt-3">
          <p className="font-semibold text-sm mb-1">Sample quiz question (Q1 of {quiz.length})</p>
          <p className="text-sm break-words">{String(quiz[0].q || '')}</p>
          <p className="text-xs muted mt-1 break-words">{((quiz[0].options as string[]) || []).map((o, i) => `${'ABCD'[i]}. ${o}`).join(' · ')}</p>
        </div>
      )}
      <button onClick={() => setShowJson(v => !v)} className="text-xs text-accent underline mt-3">{showJson ? 'Hide raw JSON' : 'Show raw JSON'}</button>
      {showJson && <pre className="text-xs whitespace-pre-wrap bg-black/30 rounded-lg p-3 mt-2 max-h-96 overflow-y-auto break-words">{draft.content}</pre>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Manual lesson form                                                  */
/* ------------------------------------------------------------------ */

interface ManualQuizQ { q: string; options: [string, string, string, string]; answer: number; explanation: string; }
interface ManualForm {
  subjectId: string; topic: string; subtopic: string; title: string; introduction: string;
  objectives: string; sections: { heading: string; body: string }[];
  definitions: { term: string; meaning: string }[]; formulas: string;
  examples: { title: string; problem: string; steps: string; answer: string }[];
  tips: string; mistakes: string; facts: string; quiz: ManualQuizQ[];
}
const emptyQuizQ = (): ManualQuizQ => ({ q: '', options: ['', '', '', ''], answer: 0, explanation: '' });
const emptyForm = (subjectId: string): ManualForm => ({
  subjectId, topic: '', subtopic: '', title: '', introduction: '',
  objectives: '', sections: [{ heading: '', body: '' }],
  definitions: [{ term: '', meaning: '' }], formulas: '',
  examples: [{ title: '', problem: '', steps: '', answer: '' }],
  tips: '', mistakes: '', facts: '',
  quiz: Array.from({ length: 15 }, () => emptyQuizQ()),
});

function ManualLessonForm({ subjectId, onSaved }: { subjectId: string; onSaved: (msg: string) => void }) {
  const { setDb } = useDb();
  const [form, setForm] = useState<ManualForm>(() => emptyForm(subjectId));
  const [formMsg, setFormMsg] = useState('');
  const [openQ, setOpenQ] = useState(0);
  const set = <K extends keyof ManualForm>(k: K, v: ManualForm[K]) => setForm(f => ({ ...f, [k]: v }));
  const lines = (s: string) => s.split('\n').map(x => x.trim()).filter(Boolean);

  const saveDraft = () => {
    const data = {
      subjectId: form.subjectId, topic: form.topic.trim(), subtopic: form.subtopic.trim() || form.topic.trim(),
      title: form.title.trim(), introduction: form.introduction.trim(),
      objectives: lines(form.objectives),
      sections: form.sections.map(s => ({ heading: s.heading.trim(), body: s.body.trim() })),
      definitions: form.definitions.map(d => ({ term: d.term.trim(), meaning: d.meaning.trim() })),
      formulas: lines(form.formulas),
      examples: form.examples.map(e => ({ title: e.title.trim(), problem: e.problem.trim(), steps: lines(e.steps), answer: e.answer.trim() })),
      tips: lines(form.tips), mistakes: lines(form.mistakes), facts: lines(form.facts),
      quiz: form.quiz.map(q => ({ q: q.q.trim(), options: [...q.options] as [string, string, string, string], answer: q.answer, explanation: q.explanation.trim() })),
    };
    const errs = validateLessonData(data);
    if (errs.length > 0) { setFormMsg(`Cannot save yet — ${errs.length} problem(s): ${errs.slice(0, 5).join(' ')}${errs.length > 5 ? ` (+${errs.length - 5} more)` : ''}`); return; }
    const id = uid('draft');
    setDb(d => {
      d.drafts.push({ id, subjectId: form.subjectId, topic: form.topic.trim(), title: form.title.trim(), content: JSON.stringify(data, null, 2), status: 'draft', createdAt: new Date().toISOString(), source: 'manual' });
      return d;
    });
    setForm(emptyForm(form.subjectId));
    setFormMsg('');
    onSaved(`Manual draft “${data.title}” saved below — preview it, approve it, then publish it to make it live for students.`);
  };

  const subject = SUBJECTS.find(s => s.id === form.subjectId);
  return (
    <div className="flex flex-col gap-3 mt-3">
      <div className="grid md:grid-cols-2 gap-2">
        <label className="text-sm font-medium">Subject
          <SubjectSelect className="glass-input mt-1" value={form.subjectId} onChange={v => set('subjectId', v)} />
        </label>
        <label className="text-sm font-medium">Topic
          <input className="glass-input mt-1" value={form.topic} onChange={e => set('topic', e.target.value)} placeholder="e.g. Algebraic Processes" list="cs-topics" />
          <datalist id="cs-topics">{subject?.topics.map(t => <option key={t} value={t} />)}</datalist>
        </label>
        <label className="text-sm font-medium">Subtopic
          <input className="glass-input mt-1" value={form.subtopic} onChange={e => set('subtopic', e.target.value)} placeholder="e.g. Indices" />
        </label>
        <label className="text-sm font-medium">Lesson title
          <input className="glass-input mt-1" value={form.title} onChange={e => set('title', e.target.value)} placeholder="e.g. Indices and Logarithms" />
        </label>
      </div>
      <label className="text-sm font-medium">Introduction
        <textarea className="glass-input mt-1" rows={3} value={form.introduction} onChange={e => set('introduction', e.target.value)} placeholder="One paragraph introducing the lesson…" />
      </label>
      <label className="text-sm font-medium">Learning objectives — one per line
        <textarea className="glass-input mt-1" rows={3} value={form.objectives} onChange={e => set('objectives', e.target.value)} placeholder={'Define…\nSolve…\nExplain…'} />
      </label>

      <div>
        <p className="text-sm font-medium mb-1">Notes sections</p>
        <div className="flex flex-col gap-2">
          {form.sections.map((s, i) => (
            <div key={i} className="glass-soft p-3 flex flex-col gap-2">
              <div className="flex gap-2">
                <input className="glass-input flex-1 min-w-0" value={s.heading} onChange={e => set('sections', form.sections.map((x, j) => j === i ? { ...x, heading: e.target.value } : x))} placeholder={`Section ${i + 1} heading`} />
                <button onClick={() => set('sections', form.sections.filter((_, j) => j !== i))} disabled={form.sections.length <= 1} className="btn-ghost !py-1 !px-2 text-xs shrink-0">Remove</button>
              </div>
              <textarea className="glass-input" rows={3} value={s.body} onChange={e => set('sections', form.sections.map((x, j) => j === i ? { ...x, body: e.target.value } : x))} placeholder="Section body (100–150 words)…" />
            </div>
          ))}
        </div>
        <button onClick={() => set('sections', [...form.sections, { heading: '', body: '' }])} className="btn-ghost text-sm mt-2">+ Add section</button>
      </div>

      <div>
        <p className="text-sm font-medium mb-1">Definitions</p>
        <div className="flex flex-col gap-2">
          {form.definitions.map((d, i) => (
            <div key={i} className="glass-soft p-3 grid sm:grid-cols-[1fr_2fr_auto] gap-2">
              <input className="glass-input min-w-0" value={d.term} onChange={e => set('definitions', form.definitions.map((x, j) => j === i ? { ...x, term: e.target.value } : x))} placeholder="Term" />
              <input className="glass-input min-w-0" value={d.meaning} onChange={e => set('definitions', form.definitions.map((x, j) => j === i ? { ...x, meaning: e.target.value } : x))} placeholder="Meaning" />
              <button onClick={() => set('definitions', form.definitions.filter((_, j) => j !== i))} disabled={form.definitions.length <= 1} className="btn-ghost !py-1 !px-2 text-xs">Remove</button>
            </div>
          ))}
        </div>
        <button onClick={() => set('definitions', [...form.definitions, { term: '', meaning: '' }])} className="btn-ghost text-sm mt-2">+ Add definition</button>
      </div>

      <label className="text-sm font-medium">Formulas / laws / principles — one per line (optional for non-Maths/Physics/Chemistry)
        <textarea className="glass-input mt-1" rows={2} value={form.formulas} onChange={e => set('formulas', e.target.value)} placeholder={'E = mc^2\nv = u + at'} />
      </label>

      <div>
        <p className="text-sm font-medium mb-1">Worked examples</p>
        <div className="flex flex-col gap-2">
          {form.examples.map((ex, i) => (
            <div key={i} className="glass-soft p-3 flex flex-col gap-2">
              <div className="flex gap-2">
                <input className="glass-input flex-1 min-w-0" value={ex.title} onChange={e => set('examples', form.examples.map((x, j) => j === i ? { ...x, title: e.target.value } : x))} placeholder={`Example ${i + 1} title`} />
                <button onClick={() => set('examples', form.examples.filter((_, j) => j !== i))} disabled={form.examples.length <= 1} className="btn-ghost !py-1 !px-2 text-xs shrink-0">Remove</button>
              </div>
              <textarea className="glass-input" rows={2} value={ex.problem} onChange={e => set('examples', form.examples.map((x, j) => j === i ? { ...x, problem: e.target.value } : x))} placeholder="The problem…" />
              <textarea className="glass-input" rows={3} value={ex.steps} onChange={e => set('examples', form.examples.map((x, j) => j === i ? { ...x, steps: e.target.value } : x))} placeholder="Working steps — one per line" />
              <input className="glass-input" value={ex.answer} onChange={e => set('examples', form.examples.map((x, j) => j === i ? { ...x, answer: e.target.value } : x))} placeholder="Final answer" />
            </div>
          ))}
        </div>
        <button onClick={() => set('examples', [...form.examples, { title: '', problem: '', steps: '', answer: '' }])} className="btn-ghost text-sm mt-2">+ Add example</button>
      </div>

      <div className="grid md:grid-cols-3 gap-2">
        <label className="text-sm font-medium">JAMB tips — one per line
          <textarea className="glass-input mt-1" rows={3} value={form.tips} onChange={e => set('tips', e.target.value)} />
        </label>
        <label className="text-sm font-medium">Common mistakes — one per line
          <textarea className="glass-input mt-1" rows={3} value={form.mistakes} onChange={e => set('mistakes', e.target.value)} />
        </label>
        <label className="text-sm font-medium">Key facts — one per line
          <textarea className="glass-input mt-1" rows={3} value={form.facts} onChange={e => set('facts', e.target.value)} />
        </label>
      </div>

      <div>
        <p className="text-sm font-medium mb-1">Lesson quiz — exactly 15 questions, 4 options each, one correct answer + explanation per question</p>
        <div className="flex flex-col gap-2">
          {form.quiz.map((q, qi) => (
            <details key={qi} open={openQ === qi} className="glass-soft p-3">
              <summary className="cursor-pointer text-sm font-semibold break-words" onClick={e => { e.preventDefault(); setOpenQ(openQ === qi ? -1 : qi); }}>Question {qi + 1}{q.q ? `: ${q.q.slice(0, 60)}${q.q.length > 60 ? '…' : ''}` : ' — empty'}</summary>
              <div className="flex flex-col gap-2 mt-3">
                <input className="glass-input" value={q.q} onChange={e => set('quiz', form.quiz.map((x, j) => j === qi ? { ...x, q: e.target.value } : x))} placeholder={`Question ${qi + 1}`} />
                {q.options.map((opt, oi) => (
                  <label key={oi} className="flex items-center gap-2 text-sm">
                    <input type="radio" name={`q-${qi}-answer`} checked={q.answer === oi} onChange={() => set('quiz', form.quiz.map((x, j) => j === qi ? { ...x, answer: oi } : x))} className="shrink-0 w-4 h-4 accent-brand" />
                    <span className="font-bold shrink-0">{'ABCD'[oi]}.</span>
                    <input className="glass-input flex-1 min-w-0 !py-2" value={opt} onChange={e => set('quiz', form.quiz.map((x, j) => j === qi ? { ...x, options: x.options.map((o, k) => k === oi ? e.target.value : o) as [string, string, string, string] } : x))} placeholder={`Option ${'ABCD'[oi]} (tick the radio for the correct one)`} />
                  </label>
                ))}
                <input className="glass-input" value={q.explanation} onChange={e => set('quiz', form.quiz.map((x, j) => j === qi ? { ...x, explanation: e.target.value } : x))} placeholder="Explanation — why the correct answer is right" />
              </div>
            </details>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          <button onClick={() => set('quiz', [...form.quiz, emptyQuizQ()])} className="btn-ghost text-sm">+ Add question</button>
          <button onClick={() => set('quiz', form.quiz.slice(0, -1))} disabled={form.quiz.length <= 1} className="btn-ghost text-sm">− Remove last question</button>
        </div>
      </div>

      {formMsg && <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-3 py-2 break-words">{formMsg}</p>}
      <div>
        <button onClick={saveDraft} className="btn-primary text-sm">Save as draft (needs approval before publishing)</button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content Studio page                                                 */
/* ------------------------------------------------------------------ */

export default function ContentStudioPage() {
  const { db, user, setDb } = useDb();
  const [subjectId, setSubjectId] = useState('mathematics');
  const [genTopic, setGenTopic] = useState('');
  const [genTitle, setGenTitle] = useState('');
  const [genObjectives, setGenObjectives] = useState('');
  const [genBusy, setGenBusy] = useState(false);
  const [genMsg, setGenMsg] = useState('');
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [publishMsg, setPublishMsg] = useState('');
  const [publishErr, setPublishErr] = useState('');
  const [showManual, setShowManual] = useState(false);
  const [platformStateReady, setPlatformStateReady] = useState(false);

  useEffect(() => {
    let alive = true;
    const hydrate = async () => {
      if (!user || !SUPABASE_CONFIGURED) { if (alive) setPlatformStateReady(true); return; }
      const sb = getSb();
      if (!sb) { if (alive) setPlatformStateReady(true); return; }
      const { data, error } = await sb.rpc('djp_admin_get_content_state');
      if (!alive) return;
      if (!error && data && typeof data === 'object') {
        setDb(d => {
          const state = data as Record<string, any>;
          d.drafts = Array.isArray(state.drafts) ? state.drafts : d.drafts;
          d.customLessons = Array.isArray(state.customLessons) ? state.customLessons : d.customLessons;
          d.publishedOverrides = state.publishedOverrides && typeof state.publishedOverrides === 'object' ? state.publishedOverrides : d.publishedOverrides;
          d.lessonOrder = state.lessonOrder && typeof state.lessonOrder === 'object' ? state.lessonOrder : d.lessonOrder;
          return d;
        });
      } else if (error) {
        console.error('[darax-admin] shared content load failed:', error.message);
      }
      setPlatformStateReady(true);
    };
    void hydrate();
    return () => { alive = false; };
  }, [user?.id]);

  useEffect(() => {
    if (!platformStateReady || !user || !SUPABASE_CONFIGURED) return;
    const sb = getSb();
    if (!sb) return;
    const state = {
      drafts: db.drafts,
      customLessons: db.customLessons || [],
      publishedOverrides: db.publishedOverrides,
      lessonOrder: db.lessonOrder,
    };
    const timer = window.setTimeout(() => {
      void sb.rpc('djp_admin_save_content_state', { p_state: state }).then(({ error }) => {
        if (error) console.error('[darax-admin] shared content save failed:', error.message);
      });
    }, 450);
    return () => window.clearTimeout(timer);
  }, [platformStateReady, user?.id, db.drafts, db.customLessons, db.publishedOverrides, db.lessonOrder]);

  if (!user) return null;

  const lessons = orderedLessons(db, subjectId);
  const draftCustoms = (db.customLessons || []).filter(l => l.subjectId === subjectId && l.status === 'draft');
  const publishedCustoms = (db.customLessons || []).filter(l => l.status === 'published');
  const totalLessons = ALL_LESSONS.length + (db.customLessons || []).length;
  const totalPublished = ALL_LESSONS.filter(l => db.publishedOverrides[l.id] !== false).length + publishedCustoms.length;
  const missing = SUBJECTS.flatMap(s => s.topics.filter(t => getSubjectLessons(s.id, db).filter(l => l.topic === t).length < 2));

  const togglePublish = (lessonId: string) => setDb(d => {
    const custom = (d.customLessons || []).find(l => l.id === lessonId);
    if (custom) { custom.status = custom.status === 'published' ? 'draft' : 'published'; return d; }
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

  /** Draft → published lesson. Assigns id + unlock order, stores it in
   *  db.customLessons, and marks the draft published. From this moment the
   *  lesson is in getSubjectLessons/getLessonById, the subject page, the
   *  dashboard, and the 70% unlock chain — immediately, no redeploy. */
  const publishDraft = (draft: DraftLesson) => {
    setPublishMsg(''); setPublishErr('');
    const { data, error } = parseDraft(draft);
    if (error || !data) { setPublishErr(error || 'Draft could not be read.'); return; }
    const errs = validateLessonData(data);
    if (errs.length > 0) {
      setPublishErr(`Cannot publish “${draft.title}” — ${errs.length} problem(s): ${errs.slice(0, 4).join(' ')}${errs.length > 4 ? ` (+${errs.length - 4} more)` : ''}`);
      return;
    }
    const sib = getSubjectLessons(draft.subjectId, db);
    const order = sib.length ? Math.max(...sib.map(l => l.order)) + 1 : 1;
    const lesson: CustomLesson = {
      id: uid('custom'),
      subjectId: draft.subjectId,
      topic: String(data.topic), subtopic: String(data.subtopic || data.topic),
      title: String(data.title), order,
      introduction: String(data.introduction),
      objectives: (data.objectives as string[]).map(String),
      sections: (data.sections as { heading: string; body: string }[]).map(s => ({ heading: String(s.heading), body: String(s.body) })),
      definitions: (data.definitions as { term: string; meaning: string }[]).map(s => ({ term: String(s.term), meaning: String(s.meaning) })),
      formulas: Array.isArray(data.formulas) ? (data.formulas as string[]).map(String) : [],
      examples: (data.examples as { title: string; problem: string; steps: string[]; answer: string }[]).map(e => ({ title: String(e.title), problem: String(e.problem), steps: (e.steps as string[]).map(String), answer: String(e.answer) })),
      tips: (data.tips as string[]).map(String),
      mistakes: (data.mistakes as string[]).map(String),
      facts: (data.facts as string[]).map(String),
      quiz: (data.quiz as { q: string; options: [string, string, string, string]; answer: number; explanation: string }[]).map(q => ({ q: String(q.q), options: [...q.options] as [string, string, string, string], answer: Number(q.answer), explanation: String(q.explanation) })),
      status: 'published',
    };
    setDb(d => {
      d.customLessons = [...(d.customLessons || []), lesson];
      const dr = d.drafts.find(x => x.id === draft.id);
      if (dr) dr.status = 'published';
      return d;
    });
    setPublishMsg(`Published “${lesson.title}” — it is now live in the Academy under ${SUBJECTS.find(s => s.id === draft.subjectId)?.name || draft.subjectId} → ${lesson.topic}, as lesson ${order} in the unlock chain. Students see it immediately.`);
  };

  const generate = async () => {
    if (!genTopic.trim() || !genTitle.trim()) { setGenMsg('Enter a topic and a lesson title.'); return; }
    setGenBusy(true); setGenMsg('');
    try {
      const sb = getSb();
      const { data: sessionData } = sb ? await sb.auth.getSession() : { data: { session: null } };
      if (!sessionData.session?.access_token) throw new Error('Your admin session has expired. Sign in again.');
      const res = await fetch('/api/admin/generate-lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${sessionData.session.access_token}` },
        body: JSON.stringify({
          subjectId,
          topic: genTopic.trim(), title: genTitle.trim(),
          objectives: genObjectives.split(',').map(s => s.trim()).filter(Boolean),
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
        <p className="muted text-sm mt-1 break-words">Curriculum: {totalLessons} lessons · {totalPublished} published · {totalLessons - totalPublished} unpublished. {missing.length === 0 ? 'Every topic has its full lesson set.' : `Topics needing lessons: ${missing.join(', ')}`}</p>
      </div>
      {publishMsg && <p className="text-sm text-accent bg-accent/10 border border-accent/30 rounded-lg px-3 py-2 break-words">{publishMsg}</p>}
      {publishErr && <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-3 py-2 break-words">{publishErr}</p>}

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">AI lesson authoring (Groq)</h2>
        <p className="text-sm muted">Drafts are saved for review and are NEVER published automatically. An admin must approve each draft before it goes live. AI drafts are generated with a full 15-question quiz.</p>
        <div className="grid md:grid-cols-2 gap-2 mt-3">
          <SubjectSelect value={subjectId} onChange={setSubjectId} />
          <input className="glass-input" value={genTopic} onChange={e => setGenTopic(e.target.value)} placeholder="Topic (e.g. Algebraic Processes)" />
          <input className="glass-input" value={genTitle} onChange={e => setGenTitle(e.target.value)} placeholder="Lesson title" />
          <input className="glass-input" value={genObjectives} onChange={e => setGenObjectives(e.target.value)} placeholder="Objectives (separate with commas)" />
        </div>
        <button onClick={generate} disabled={genBusy} className="btn-primary mt-3 text-sm">{genBusy ? 'Generating draft…' : 'Generate lesson draft with AI'}</button>
        {genMsg && <p className="text-sm text-accent mt-3 break-words">{genMsg}</p>}
      </GlassCard>

      <GlassCard>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-bold text-lg">Create a lesson manually</h2>
            <p className="text-sm muted mt-0.5">Write the full lesson yourself — notes, worked examples and a 15-question quiz. It saves as a draft first, exactly like an AI draft.</p>
          </div>
          <button onClick={() => setShowManual(v => !v)} className="btn-ghost text-sm shrink-0">{showManual ? 'Hide form' : 'Open the lesson form'}</button>
        </div>
        {showManual && <ManualLessonForm subjectId={subjectId} onSaved={m => { setPublishMsg(m); setShowManual(false); }} />}
      </GlassCard>

      {db.drafts.length > 0 && (
        <GlassCard>
          <h2 className="font-bold text-lg mb-3">Drafts awaiting review ({db.drafts.filter(d => d.status === 'draft').length} draft{db.drafts.filter(d => d.status === 'draft').length === 1 ? '' : 's'})</h2>
          <div className="flex flex-col gap-3">
            {db.drafts.map(d => (
              <div key={d.id} className="glass-soft p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold break-words min-w-0">{d.title} <span className="muted font-normal text-sm">· {d.topic} · {d.subjectId} · {d.status} · {d.source === 'ai' ? 'AI draft' : 'manual draft'}</span></p>
                  <span className="flex flex-wrap gap-2">
                    <button onClick={() => setPreviewId(previewId === d.id ? null : d.id)} className="btn-ghost !py-1 !px-2 text-xs">{previewId === d.id ? 'Hide preview' : 'Preview'}</button>
                    {d.status === 'draft' && <button onClick={() => setDb(x => { const dr = x.drafts.find(y => y.id === d.id)!; dr.status = 'approved'; return x; })} className="btn-ghost !py-1 !px-2 text-xs">Approve</button>}
                    {d.status === 'approved' && <button onClick={() => publishDraft(d)} className="btn-primary !py-1 !px-2 text-xs">Publish</button>}
                    {d.status === 'published' && <span className="text-xs text-accent self-center">✓ Live in the Academy</span>}
                    <button onClick={() => setDb(x => { x.drafts = x.drafts.filter(y => y.id !== d.id); return x; })} className="btn-ghost !py-1 !px-2 text-xs">Delete</button>
                  </span>
                </div>
                {previewId === d.id && <DraftPreview draft={d} />}
              </div>
            ))}
          </div>
          <p className="text-xs muted mt-3">Publishing validates the draft (full notes + exactly 15 quiz questions). A draft that fails validation cannot be published — fix it and try again. Published lessons appear in the Academy immediately, in the right subject/topic order and inside the 70% unlock chain.</p>
        </GlassCard>
      )}

      <GlassCard>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <h2 className="font-bold text-lg">Lessons — manage & reorder</h2>
          <SubjectSelect className="glass-input !w-auto" value={subjectId} onChange={setSubjectId} />
        </div>
        <div className="flex flex-col gap-2">
          {lessons.map((l, i) => {
            const published = db.publishedOverrides[l.id] !== false;
            const custom = (db.customLessons || []).some(c => c.id === l.id);
            return (
              <div key={l.id} className="glass-soft p-3 flex flex-wrap items-center justify-between gap-2 text-sm">
                <span className="min-w-0 break-words"><strong>{i + 1}. {l.title}</strong> <span className="muted">· {l.topic} · {published ? 'Published' : 'Unpublished'}{custom ? ' · Admin-created' : ''}</span></span>
                <span className="flex gap-2">
                  <button onClick={() => move(l.id, -1)} disabled={i === 0} className="btn-ghost !py-1 !px-2 text-xs">↑</button>
                  <button onClick={() => move(l.id, 1)} disabled={i === lessons.length - 1} className="btn-ghost !py-1 !px-2 text-xs">↓</button>
                  <Link href={`/app/learn/${l.id}`} className="btn-ghost !py-1 !px-2 text-xs">View</Link>
                  <button onClick={() => togglePublish(l.id)} className="btn-ghost !py-1 !px-2 text-xs">{published ? 'Unpublish' : 'Publish'}</button>
                </span>
              </div>
            );
          })}
          {draftCustoms.map(l => (
            <div key={l.id} className="glass-soft p-3 flex flex-wrap items-center justify-between gap-2 text-sm opacity-70">
              <span className="min-w-0 break-words"><strong>{l.title}</strong> <span className="muted">· {l.topic} · Draft — not visible to students · Admin-created</span></span>
              <button onClick={() => togglePublish(l.id)} className="btn-ghost !py-1 !px-2 text-xs">Publish</button>
            </div>
          ))}
        </div>
        <p className="text-xs muted mt-3">Reordering changes the unlock sequence immediately. Unpublishing a lesson locks it for students until it is published again. Admin-created lessons are stored on this device (local tier) — they appear for students on this device immediately after publishing.</p>
      </GlassCard>
    </div>
  );
}
