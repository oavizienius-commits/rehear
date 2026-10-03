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
  transcript?: string;
  question?: {
    text: string;
    options: [string, string, string, string];
    correctIndex: number;
    explanation: string;
  };
};

export const lessons: Lesson[] = [
  {
    id: "01",
    slug: "late-delivery-risk-before-release",
    title: "Are We Still Good for Tomorrow?",
    domain: "Product / IT",
    level: "B2",
    duration: "2 min 21 sec",
    durationSeconds: 140.826062,
    scenario:
      "A Product Manager and Full-stack Engineer discuss a newly discovered testing risk one day before a planned release and decide whether to reduce scope or move the release.",
    communicationSkill: {
      primary: "risk_communication",
      secondary: [
        "scope_negotiation",
        "expectation_setting",
        "communicating_uncertainty",
      ],
    },
    audioUrl: "/audio/lesson-01-late-delivery-risk.mp3",
    transcript: `
Maya: Hey, Daniel. Are we still good for tomorrow?

Daniel: For most of it, yeah. But there's an issue with the recovery part.

Maya: At stand-up this morning you said we were still on track. What did you find?

Daniel: I ran through the full flow this afternoon. Recovery touches a few more cases than I expected.

Maya: More development work?

Daniel: A little, but that's not the main problem. I can probably finish the code. I'm more concerned about testing it properly before tomorrow.

Maya: How much more testing are we talking about?

Daniel: Hard to say exactly. That's part of the problem. I found a couple of paths I hadn't accounted for, and I don't want to assume they're the only ones.

Maya: Okay. So if we keep everything in scope, what are you recommending?

Daniel: Honestly, we'd have to move the release. I wouldn't be comfortable shipping the whole thing tomorrow.

Maya: Moving everything is going to be difficult. Sales are already preparing around this release.

Daniel: Yeah, I know.

Maya: Is recovery blocking the rest of the onboarding changes?

Daniel: No. That's the good news. We can separate them.

Maya: So we could release the main flow tomorrow and leave recovery as it is?

Daniel: Exactly. Then I can finish the recovery changes and test them properly for the next release.

Maya: Would users notice anything strange?

Daniel: Not really. The current recovery flow would stay in place. The new onboarding changes would still work.

Maya: Okay. Why didn't this come up earlier?

Daniel: I didn't see it until I tested the full path today. The individual pieces looked fine. It was only when I put the whole flow together that the extra cases showed up.

Maya: Right.

Daniel: I should've flagged the uncertainty earlier, though. I was assuming the recovery piece was more isolated than it actually is.

Maya: Fair enough. If we take recovery out, are you confident about the rest?

Daniel: Yes. The main flow is already in good shape. I'd still want tomorrow morning for final checks, but I'm comfortable with that.

Maya: And if we don't take it out?

Daniel: Then we're either rushing the testing or moving the release. I'd rather take that piece out than rush it.

Maya: Yeah, agreed.

Daniel: Okay.

Maya: Let's lock the scope there, then. Main onboarding changes tomorrow. Recovery moves to the next release.

Daniel: Works for me.

Maya: Can you update the ticket and send me a quick note on what's moving?

Daniel: Yep. I'll do that now.

Maya: Thanks. And if anything else comes up in the final checks, flag it early.

Daniel: Will do.
  `.trim(),
    question: {
      text: "What do Maya and Daniel decide to do?",
      options: [
        "Delay the entire onboarding release until the recovery changes are fully tested.",
        "Release all of the changes tomorrow and reduce the amount of testing.",
        "Release the main onboarding changes tomorrow and move the recovery changes to the next release.",
        "Remove the onboarding changes from the sprint and ask Sales to change its plans.",
      ],
      correctIndex: 2,
      explanation:
        "They keep the planned release for the main onboarding changes, but move the recovery changes to the next release so they can be tested properly.",
    },
  },
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
