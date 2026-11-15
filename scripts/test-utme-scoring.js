const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const filename = path.join(__dirname, '../lib/utme-scoring.ts');
const source = fs.readFileSync(filename, 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const loaded = new Module(filename, module);
loaded.filename = filename;
loaded._compile(js, filename);
const { calculateUtmeScore } = loaded.exports;
const subjects = ['english', 'mathematics', 'physics', 'chemistry'];
const correctCounts = { english: 60, mathematics: 32, physics: 30, chemistry: 20 };
const paper = subjects.flatMap(subjectId => Array.from({ length: subjectId === 'english' ? 60 : 40 }, (_, n) => ({
  subjectId, chosen: n < correctCounts[subjectId] ? 1 : 0, correct: 1,
})));
const result = calculateUtmeScore(paper, subjects.slice(1));
assert.equal(result.subjectScores.english.score, 100);
assert.equal(result.subjectScores.mathematics.score, 80);
assert.equal(result.subjectScores.physics.score, 75);
assert.equal(result.subjectScores.chemistry.score, 50);
assert.equal(result.utmeScore400, 305);
assert.equal(result.normalizedScore, 76.25);
assert.throws(() => calculateUtmeScore(paper.slice(1), subjects.slice(1)), /UTME structure invalid/);
assert.throws(() => calculateUtmeScore([...paper, paper[0]], subjects.slice(1)), /UTME structure invalid/);
const withBlank = paper.map((q, i) => i === 0 ? { ...q, chosen: -1 } : q);
assert.equal(calculateUtmeScore(withBlank, subjects.slice(1)).subjectScores.english.score, 98.33);
console.log('UTME scoring tests passed: format validation, equal subject weighting, blank=0, and invalid-paper rejection.');
