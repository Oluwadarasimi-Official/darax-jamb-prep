const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const dir = path.join(__dirname, '../lib/curriculum');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'types.ts');
const refs = new Set();
const errors = [];
let lessons = 0, questions = 0;
for (const file of files) {
  const filename = path.join(dir, file);
  const source = fs.readFileSync(filename, 'utf8');
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const loaded = new Module(filename, module);
  loaded.filename = filename;
  loaded.paths = Module._nodeModulePaths(dir);
  loaded._compile(js, filename);
  const subjectId = loaded.exports.SUBJECT?.id;
  for (const lesson of loaded.exports.LESSONS || []) {
    lessons++;
    if (lesson.subjectId !== subjectId) errors.push(`${lesson.id}: subject mismatch`);
    if (!Array.isArray(lesson.quiz) || lesson.quiz.length !== 15) errors.push(`${lesson.id}: expected 15 questions, found ${lesson.quiz?.length ?? 0}`);
    for (let i = 0; i < (lesson.quiz || []).length; i++) {
      const q = lesson.quiz[i], ref = `${lesson.id}:${i}`;
      questions++;
      if (refs.has(ref)) errors.push(`${ref}: duplicate question reference`);
      refs.add(ref);
      if (typeof q.q !== 'string' || !q.q.trim()) errors.push(`${ref}: empty question`);
      if (!Array.isArray(q.options) || q.options.length !== 4 || q.options.some(o => typeof o !== 'string' || !o.trim())) errors.push(`${ref}: requires four non-empty A-D options`);
      if (Array.isArray(q.options) && new Set(q.options.map(o => String(o).trim())).size !== 4) errors.push(`${ref}: duplicate options`);
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) errors.push(`${ref}: answer key outside A-D`);
      if (typeof q.explanation !== 'string' || !q.explanation.trim()) errors.push(`${ref}: missing explanation`);
    }
  }
}

const daraxBankPath = path.join(__dirname, '../lib/darax-practice-bank.json');
const daraxBank = JSON.parse(fs.readFileSync(daraxBankPath, 'utf8'));
const daraxIds = new Set();
const expectedSubjects = ['english', 'mathematics', 'physics', 'chemistry', 'biology'];
const subjectCounts = Object.fromEntries(expectedSubjects.map(subject => [subject, 0]));
const yearlyCounts = Object.fromEntries(Array.from({ length: 17 }, (_, i) => [2010 + i, Object.fromEntries(expectedSubjects.map(subject => [subject, 0]))]));
const yearlyQuestionTexts = new Set();
if (!Array.isArray(daraxBank.questions)) errors.push('DARAX practice bank: questions must be an array');
for (const q of daraxBank.questions || []) {
  if (!q.id || daraxIds.has(q.id)) errors.push(`DARAX ${q.id || '(missing id)'}: missing or duplicate id`);
  daraxIds.add(q.id);
  if (q.year !== undefined) {
    if (!Number.isInteger(q.year) || q.year < 2010 || q.year > 2026) errors.push(`DARAX ${q.id}: year outside 2010-2026`);
    else if (yearlyCounts[q.year] && expectedSubjects.includes(q.subject)) {
      yearlyCounts[q.year][q.subject]++;
      const text = String(q.question || '').trim().toLowerCase();
      if (yearlyQuestionTexts.has(text)) errors.push(`DARAX ${q.id}: repeated year-organised question text`);
      yearlyQuestionTexts.add(text);
    }
  }
  if (!expectedSubjects.includes(q.subject)) errors.push(`DARAX ${q.id}: invalid subject`);
  else subjectCounts[q.subject]++;
  if (typeof q.question !== 'string' || !q.question.trim()) errors.push(`DARAX ${q.id}: empty question`);
  if (!Array.isArray(q.options) || q.options.length !== 4 || q.options.some(o => typeof o !== 'string' || !o.trim())) errors.push(`DARAX ${q.id}: requires four non-empty options`);
  if (Array.isArray(q.options) && new Set(q.options).size !== 4) errors.push(`DARAX ${q.id}: duplicate options`);
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) errors.push(`DARAX ${q.id}: invalid answer index`);
  if (!q.explanation || !q.topic) errors.push(`DARAX ${q.id}: missing explanation or topic`);
}
for (const subject of expectedSubjects) if (!subjectCounts[subject]) errors.push(`DARAX bank: no questions for ${subject}`);
for (const year of Object.keys(yearlyCounts)) for (const subject of expectedSubjects) {
  const expected = subject === 'english' ? 60 : 40;
  if (yearlyCounts[year][subject] !== expected) errors.push(`DARAX ${year} ${subject}: expected ${expected} full-length questions, found ${yearlyCounts[year][subject]}`);
}
const yearQuestionTotal = Object.values(yearlyCounts).reduce((sum, row) => sum + Object.values(row).reduce((a, b) => a + b, 0), 0);
if (yearQuestionTotal !== 3740) errors.push(`DARAX year sets: expected 3740 questions, found ${yearQuestionTotal}`);

if (errors.length) {
  console.error(`Question-bank validation failed (${errors.length} issue(s)):\n${errors.join('\n')}`);
  process.exit(1);
}
console.log(`Question-bank validation passed: ${lessons} lessons, ${questions} curriculum questions, ${yearQuestionTotal} full-length year-organised questions; unique question stems, four unique options, valid keys and explanations.`);
