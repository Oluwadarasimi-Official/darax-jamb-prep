export interface HistoricalQuestion {
  id: string;
  subject: 'mathematics' | 'physics';
  year: 2000;
  topic: string;
  question: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explanation: string;
  sourceUrl: string;
}

// Publicly visible StudentFirst previews only. This is a partial import,
// not a representation of the complete historical papers.
export const HISTORICAL_PREVIEW_2000: HistoricalQuestion[] = [
  {
    id: 'jamb-maths-2000-001',
    subject: 'mathematics',
    year: 2000,
    topic: 'Sets',
    question: 'Let P = {1, 2, u, v, w, x}, Q = {2, 3, u, v, w, 5, 6, y} and R = {2, 3, 4, v, x, y}. Determine (P − Q) ∩ R.',
    options: ['{1, x}', '{x, y}', '{x}', '∅'],
    answer: 2,
    explanation: 'P − Q contains the elements in P that are not in Q: {1, x}. Intersecting this with R = {2, 3, 4, v, x, y} leaves only {x}.',
    sourceUrl: 'https://studentfirst.ng/jamb/mathematics/2000/objective',
  },
  {
    id: 'jamb-maths-2000-002',
    subject: 'mathematics',
    year: 2000,
    topic: 'Fractions, Decimals, Approximations and Percentages',
    question: 'If the population of a town was 240,000 in January 1998 and it increased by 2% each year, what would the population be in January 2000?',
    options: ['480,000', '249,696', '249,600', '244,800'],
    answer: 1,
    explanation: 'The increase is compounded for two years: 240,000 × 1.02² = 240,000 × 1.0404 = 249,696.',
    sourceUrl: 'https://studentfirst.ng/jamb/mathematics/2000/objective',
  },
  {
    id: 'jamb-maths-2000-003',
    subject: 'mathematics',
    year: 2000,
    topic: 'Indices, Logarithms and Surds',
    question: 'If (2√3 − √2) / (√3 + 2√2) = m + n√6, find m and n respectively.',
    options: ['1, −2', '−2, 1', '−2/5, 1', '2, 3/5'],
    answer: 1,
    explanation: 'Multiply numerator and denominator by the conjugate (√3 − 2√2). The denominator becomes 3 − 8 = −5 and the numerator becomes 10 − 5√6. Dividing gives −2 + √6, so m = −2 and n = 1.',
    sourceUrl: 'https://studentfirst.ng/jamb/mathematics/2000/objective',
  },
  {
    id: 'jamb-physics-2000-001',
    subject: 'physics',
    year: 2000,
    topic: 'Work, Energy and Power',
    question: 'A catapult used to hold a stone of mass 500 g is extended by 20 cm with an applied force F. If the stone leaves with a velocity of 40 m s⁻¹, find F.',
    options: ['4.0 × 10⁴ N', '4.0 × 10³ N', '2.0 × 10³ N', '4.0 × 10² N'],
    answer: 2,
    explanation: 'Assuming the applied work is transferred to the stone as kinetic energy: F × 0.20 = ½ × 0.50 × 40² = 400 J. Therefore F = 400 ÷ 0.20 = 2.0 × 10³ N.',
    sourceUrl: 'https://studentfirst.ng/jamb/physics/2000/objective',
  },
  {
    id: 'jamb-physics-2000-002',
    subject: 'physics',
    year: 2000,
    topic: 'Liquids at Rest',
    question: 'When a ship sails from salt water into fresh water, the fraction of its volume above the water surface will:',
    options: ['Remain the same', 'Increase', 'Decrease', 'Increase then decrease'],
    answer: 2,
    explanation: 'Fresh water is less dense than salt water. The ship must displace a greater volume of fresh water to balance its weight, so a larger fraction is submerged and a smaller fraction remains above the surface.',
    sourceUrl: 'https://studentfirst.ng/jamb/physics/2000/objective',
  },
  {
    id: 'jamb-physics-2000-003',
    subject: 'physics',
    year: 2000,
    topic: 'Friction',
    question: 'Which combination of statements is true of sliding friction? I. It is independent of the area of the surfaces in contact. II. It depends on the nature of the surfaces in contact. III. It depends on the speed of sliding. IV. It is directly proportional to the normal reaction.',
    options: ['I, II and IV', 'I, II and III', 'I, III and IV', 'II, III and IV'],
    answer: 0,
    explanation: 'In the usual school-level dry-friction model, sliding friction is approximately independent of apparent contact area, depends on the nature of the surfaces, and is proportional to the normal reaction. The standard model does not make it depend on sliding speed.',
    sourceUrl: 'https://studentfirst.ng/jamb/physics/2000/objective',
  },
];
