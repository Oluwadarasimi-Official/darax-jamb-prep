const fs = require('node:fs');
const path = require('node:path');

const file = path.join(__dirname, '../lib/darax-practice-bank.json');
const bank = JSON.parse(fs.readFileSync(file, 'utf8'));
let cleaned = 0;

for (const q of bank.questions || []) {
  if (!Number.isInteger(q.year)) continue;
  const original = String(q.question || '').trim();
  const withoutGeneratedLabel = original
    .replace(/^For this separate \d{4} [a-z-]+ practice item \d+,\s*/i, '')
    .replace(/^Independent item [^:]+:\s*/i, '')
    .trim();
  if (withoutGeneratedLabel !== original) {
    q.question = withoutGeneratedLabel
      ? withoutGeneratedLabel.charAt(0).toUpperCase() + withoutGeneratedLabel.slice(1)
      : original;
    cleaned++;
  }
}

bank.notice = 'Original DARAX JAMB-style practice questions arranged into separate full-length year sets. These are not verbatim or authenticated historical JAMB papers.';
fs.writeFileSync(file, JSON.stringify(bank, null, 2) + '\n');
console.log(`Removed generated year/item labels from ${cleaned} questions.`);
