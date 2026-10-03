export type Lesson = {
  id?: string;
  slug: string;
  title: string;
  domain:
    | "Product / IT"
    | "Finance"
    | "Marketing"
    | "Cross-functional"
    | "General workplace"
    | "Customer-facing";
  level: "B2";
  duration: string;
  durationSeconds?: number;
  scenario: string;
  communicationSkill?: {
    primary: string;
    secondary?: string[];
  };
  audioUrl?: string;
  transcript?: {
    speaker: string;
    text: string;
  }[];
  question?: {
    text: string;
    options: [string, string, string, string];
    correctIndex: number;
    explanation: string;
  };
};
