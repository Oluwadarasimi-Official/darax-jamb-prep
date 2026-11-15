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
if (errors.length) {
  console.error(`Question-bank validation failed (${errors.length} issue(s)):\n${errors.join('\n')}`);
  process.exit(1);
}
console.log(`Question-bank validation passed: ${lessons} lessons, ${questions} original practice questions; four unique options, valid keys and explanations.`);
