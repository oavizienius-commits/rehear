import lesson01Data from "./lessons/lesson-01-late-delivery-risk.json";
import type { Lesson } from "./types";

export type { Lesson } from "./types";

export const lessons: Lesson[] = [
  lesson01Data as Lesson,
  {
    slug: "should-we-delay-the-release",
    title: "Should We Delay the Release?",
    domain: "Product / IT",
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

export function formatSkillLabel(skill: string) {
  const words = skill.replaceAll("_", " ");
  return words.charAt(0).toUpperCase() + words.slice(1);
}
