export interface Flashcard {
  term: string;
  definition: string;
}

export interface DialogLine {
  speaker: string;
  text: string;
}

export interface GrammarRow {
  subject: string;
  verb: string;
  example: string;
}

export interface GrammarTable {
  title: string;
  rows: GrammarRow[];
  rules?: string[];
}

export interface ContentSection {
  type: "text" | "dialog" | "imagePrompt" | "grammar" | "list" | "reading";
  title?: string;
  body?: string;
  lines?: DialogLine[];
  alt?: string;
  imageSrc?: string;
  grammar?: GrammarTable;
  items?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  objectives?: string[];
  vocabulary?: {
    flashcards: Flashcard[];
  };
  content: ContentSection[];
  activities?: string[];
}

export interface Question {
  id: string;
  type: "mcq" | "truefalse";
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Test {
  title: string;
  description: string;
  questions: Question[];
}

export interface Unit {
  id: string;
  title: string;
  lessons: Lesson[];
  preTest: Test;
  postTest: Test;
}

export interface Stage {
  id: string;
  name: string;
  subject: string;
  description: string;
  units: Unit[];
}
