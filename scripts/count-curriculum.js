// Count lessons + quiz questions per subject by transpiling curriculum TS with the repo's typescript.
const ts = require('/home/hatch/workspace/darax-jamb-prep/node_modules/typescript');
const fs = require('fs'), path = require('path'), Module = require('module');
const dir = '/home/hatch/workspace/darax-jamb-prep/lib/curriculum';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'types.ts');
let totalLessons = 0, totalQ = 0; const perSubject = {};
for (const f of files) {
  const src = fs.readFileSync(path.join(dir, f), 'utf8');
  const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const m = new Module(f, null); m.filename = path.join(dir, f); m.paths = Module._nodeModulePaths(dir);
  m._compile(js, m.filename);
  const lessons = m.exports.LESSONS || [];
  const subj = (m.exports.SUBJECT || {}).id || f;
  const q = lessons.reduce((n, l) => n + ((l.quiz || []).length), 0);
  const bad = lessons.filter(l => (l.quiz || []).length !== 15).map(l => `${l.id}:${(l.quiz||[]).length}`);
  perSubject[subj] = { lessons: lessons.length, questions: q, non15: bad };
  totalLessons += lessons.length; totalQ += q;
}
console.log(JSON.stringify({ totalLessons, totalQ, perSubject }, null, 2));
