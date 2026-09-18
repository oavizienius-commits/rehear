export type Lesson = {
  slug: string;
  title: string;
  domain: "Product" | "Finance" | "Marketing";
  level: "B2";
  duration: string;
  scenario: string;
};

export const lessons: Lesson[] = [
  {
    slug: "should-we-delay-the-release",
    title: "Should We Delay the Release?",
    domain: "Product",
    level: "B2",
    duration: "3 min",
    scenario:
      "A product manager and engineer discuss whether a software release should be delayed.",
  },
  {
    slug: "why-did-revenue-miss-the-forecast",
    title: "Why Did Revenue Miss the Forecast?",
    domain: "Finance",
    level: "B2",
    duration: "3 min",
    scenario:
      "A finance manager and analyst discuss why quarterly revenue came in below forecast.",
  },
  {
    slug: "why-isnt-the-campaign-converting",
    title: "Why Isn’t the Campaign Converting?",
    domain: "Marketing",
    level: "B2",
    duration: "3 min",
    scenario:
      "A marketing lead and performance marketer discuss strong traffic but weak trial conversion.",
  },
];

export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
