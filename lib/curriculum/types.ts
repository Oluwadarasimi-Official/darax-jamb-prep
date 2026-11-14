// Shared curriculum types — single source of truth for all subject files.
export interface QuizQ {
  q: string;
  options: [string, string, string, string];
  answer: number; // 0-3 index of correct option
  explanation: string;
}

export interface WorkedExample {
  title: string;
  problem: string;
  steps: string[];
  answer: string;
}

export interface LessonSection {
  heading: string;
  body: string; // one substantive paragraph (or more, separated by \n\n)
}

export type LessonStatus = 'published' | 'draft' | 'awaiting';

export interface Lesson {
  id: string; // e.g. "mathematics-01"
  subjectId: string; // e.g. "mathematics"
  topic: string;
  subtopic: string;
  title: string;
  order: number; // 1..10 within the subject (global unlock order)
  introduction: string;
  objectives: string[]; // 4-6
  sections: LessonSection[]; // 3-5 substantive sections = the lesson notes
  definitions: { term: string; meaning: string }[]; // 3-6
  formulas?: string[]; // formulas / laws / principles (Maths/Physics/Chemistry)
  examples: WorkedExample[]; // 2-3, step-by-step with real working
  tips: string[]; // JAMB tips, 3-4
  mistakes: string[]; // common mistakes, 3-4
  facts: string[]; // key facts to remember, 3-5
  quiz: QuizQ[]; // exactly 5, ORIGINAL practice questions, never labelled past questions
  status: LessonStatus;
}

export interface SubjectDef {
  id: string;
  name: string;
  short: string;
  colour: string; // hex accent
  tagline: string;
  description: string;
  topics: string[]; // 5 topic names, in order
}
