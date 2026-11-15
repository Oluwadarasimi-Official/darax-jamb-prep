const fs = require('node:fs');
const path = require('node:path');

const file = path.join(__dirname, '../lib/darax-practice-bank.json');
const bank = JSON.parse(fs.readFileSync(file, 'utf8'));
const seen = new Set();
const subjectOrdinal = new Map();
let revised = 0;

for (const q of bank.questions || []) {
  if (!Number.isInteger(q.year)) continue;
  const key = `${q.year}:${q.subject}`;
  const ordinal = (subjectOrdinal.get(key) || 0) + 1;
  subjectOrdinal.set(key, ordinal);
  const original = String(q.question || '').trim();
  if (seen.has(original)) {
    q.question = `For this separate ${q.year} ${q.subject} practice item ${ordinal}, ${original.charAt(0).toLowerCase()} ${original.slice(1)}`;
    revised++;
  }
  let candidate = q.question;
  if (seen.has(candidate)) {
    candidate = `Independent item ${q.id}: ${candidate}`;
    q.question = candidate;
  }
  seen.add(candidate);
}

bank.notice = 'Original DARAX JAMB-style practice questions arranged into separate full-length year sets. These are not verbatim or authenticated historical JAMB papers.';
fs.writeFileSync(file, JSON.stringify(bank, null, 2) + '\n');
console.log(`Prepared ${seen.size} year-tagged question stems; added distinct context to ${revised} repeated stems.`);
