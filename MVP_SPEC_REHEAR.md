# Rehear — MVP Specification

## 1. Product Goal

Build **Rehear**, a free, browser-based MVP that helps professionals improve real-world English listening comprehension while also learning how common workplace situations can be handled through short, realistic professional scenarios.

The MVP is designed to validate one core learning behaviour:

**Listen → Pause → Repeat aloud → Write what was heard → Replay/Continue → Review transcript → Answer one comprehension question**

The learner controls when to pause.

Rehear should feel like guided intensive listening practice combined with exposure to realistic workplace communication — not a traditional language course.

---

## 2. Core Hypothesis

The MVP should test:

> Will professionals find a guided listening + repetition + writing + transcript-review loop useful enough to complete and repeat regularly?

The MVP is not intended to prove:
- AI tutoring quality
- pronunciation scoring
- adaptive learning
- YouTube ingestion
- long-term retention
- monetisation

Those are later questions.

---

## 3. Target User

Primary MVP audience:

- junior to mid-level professionals
- already have basic knowledge of their domain
- can generally read English
- struggle more with natural spoken English and real-time comprehension
- want to communicate more confidently at work

Default language level:

**B2**

The product may later support:
- B1
- C1
- senior professionals
- leads
- managers
- stakeholder-facing roles

For MVP, keep the audience narrow.

---

## 4. Product Positioning

Working brand:

**Rehear**

Core brand idea:

> **Rehear — learn from real workplace conversations.**

The MVP should be explainable in one sentence:

> Choose a short professional scenario, listen at your own pace, pause to repeat and write what you heard, then check yourself against the transcript while observing how the situation is handled.

Rehear has two connected layers of value:

- **Language layer:** understand natural professional English, repeat it, reconstruct it, and review what was actually said.
- **Workplace layer:** observe how professionals clarify, disagree, explain, raise concerns, negotiate, give feedback, and make decisions in realistic situations.

The product should not imply that one workplace response is universally correct. Lessons model plausible professional approaches while exposing the learner to the language used in those situations.

The product is not positioned as:
- a grammar course
- a vocabulary app
- a pronunciation trainer
- a general AI tutor
- a dictation test

The learning method includes writing, but writing is only one part of the practice loop. The broader goal is to help learners understand both **how professional English sounds** and **how workplace interactions unfold**.

---

## 5. MVP Lesson Structure

Each lesson contains:

- title
- professional domain
- short scenario description
- CEFR level
- 2–4 minute audio
- full transcript
- one multiple-choice comprehension question
- four answer options
- one correct answer
- short explanation

Preferred lesson duration:

**2:30–3:30**

Initial domains:

- Product / IT
- Finance
- Marketing

Initial implementation may use placeholder lessons before real content is generated.

---

## 6. End-to-End User Flow

### Step 1 — Choose Lesson

User lands on the lesson library.

Each lesson card shows:

- title
- domain
- level
- duration
- short scenario description

Example:

> **Should We Delay the Release?**  
> Product · B2 · 3 min  
> A product manager and engineer discuss whether a release should be delayed.

Primary action:

**Start practice**

No signup is required.

---

### Step 2 — Lesson Introduction

Before audio starts, show a short explanation:

> Listen normally.  
> Pause whenever you need to.  
> Repeat what you heard aloud.  
> Write what you heard — here or in your notebook.  
> Replay if needed.

Primary action:

**Start listening**

Do not overload this screen with instructions.

---

### Step 3 — Normal Listening State

The main lesson screen contains:

- lesson title
- audio timeline
- current time
- duration
- Play / Pause
- optional notes area
- progress through the recording

The audio is one continuous recording.

The system does **not** pre-chunk the audio.

The learner chooses when to pause.

---

### Step 4 — User Pauses

When the learner pauses:

- remember the start position of the current listening section
- remember the pause position
- enter the practice state

Example:

> You listened from 0:22 to 0:37

Then show:

### 1. Repeat what you heard aloud

> Say what you remember, even if you're unsure.

No microphone is required.

No recording is required.

No speech scoring is required.

### 2. Write what you heard

> Type below or use pen & paper.

Text area:

**Optional: write what you heard...**

The user may leave the field empty.

Available actions:

- **Replay this section**
- **Continue**

---

## 7. Writing Behaviour

Writing remains part of the learning method, but the browser must not force typing.

The UI should clearly support both:

- typing in the browser
- writing in a notebook

Preferred wording:

> **Write what you heard**  
> Type below or use pen & paper.

Do not create a separate mode-selection screen.

Do not ask:

> Do you want to type or use paper?

That adds unnecessary decision-making.

Do not block Continue when the text field is empty.

The browser guides the method but does not need to contain every part of the practice.

---

## 8. Repeat-Aloud Behaviour

Speaking is encouraged before writing.

Preferred order:

**Listen → Pause → Repeat aloud → Write → Replay/Continue**

Reason:

- keeps the learner in auditory mode
- encourages immediate recall
- reduces the risk of turning the whole session into typing/dictation

For MVP:

- no microphone
- no recording
- no pronunciation scoring
- no speech-to-text
- no explicit "Done speaking" step

The instruction itself is sufficient.

---

## 9. Replay Behaviour

Replay must repeat only the section the learner just listened to.

Example:

- section start: 22.4 seconds
- pause position: 37.8 seconds

When the learner presses:

**Replay this section**

The app should:

1. seek to 22.4
2. start playback automatically
3. stop automatically at 37.8
4. return to the same practice state
5. allow unlimited replays
6. increase replay count

Replay must not accidentally create a new practice segment.

---

## 10. Continue Behaviour

When the learner presses:

**Continue**

The app should:

- save the current segment start time
- save the segment end time
- save typed notes, if any
- save replay count
- set the next listening start position
- resume normal playback

The cycle repeats until the audio ends.

---

## 11. Manual Pause Principle

Do not automatically pause every 10 or 15 seconds in MVP.

The learner decides when to pause.

This is intentional because actual user behaviour is still unknown.

The MVP should help observe:

- how often users pause
- how long their listening sections are
- whether they replay
- whether they type
- whether they likely prefer notebook use

The product should shape behaviour later based on evidence.

---

## 12. Seeking

The learner may use the audio timeline.

If the user manually seeks to another position:

- treat the new position as the start of the next listening section
- reset the active segment boundary safely

Do not build complex seeking logic in MVP.

The learner controls the session.

---

## 13. Audio Completion

When the recording ends:

Do not automatically reveal the transcript.

Show:

> **You finished the listening practice.**
>
> Ready to check what was actually said?

Primary action:

**Review transcript**

This creates a clear transition from practice to feedback.

---

## 14. Transcript Review

After the learner chooses to review:

Show:

### Your listening notes

For typed users, display saved notes grouped by listening section.

Example:

> **0:00–0:18**  
> learner note

> **0:18–0:34**  
> learner note

Then show:

### Full transcript

Display the exact transcript of the final spoken audio.

For notebook users, include:

> Used a notebook? Compare your writing with the transcript below.

Do not calculate accuracy in MVP.

Do not highlight spelling errors.

Do not produce a percentage score.

Reason:

- spelling is not the same as listening comprehension
- handwritten users cannot use automatic comparison
- scoring adds complexity before the method is validated

---

## 15. Final Comprehension Question

Each lesson contains exactly one multiple-choice question.

The question should test the central meaning or outcome.

Example:

> Why did the engineer want to delay the release?

Answer options:

- Marketing was not ready
- A reliability issue could affect customers
- The client changed the deadline
- The team needed another designer

Only one answer is correct.

After selection, show immediate feedback:

**Correct**

or

**Not quite**

Then show a short explanation.

Do not use AI-generated evaluation in MVP.

---

## 16. Completion State

After the comprehension question, show:

> **Practice complete**

Optional summary:

- lesson title
- audio duration
- number of pauses
- total replays

Primary action:

**Practice another lesson**

Do not add:

- scores
- streaks
- badges
- leaderboards
- achievements

---

## 17. Placeholder Lessons for Initial Build

Before real AI-generated content is ready, use three placeholder lessons.

### Product

**Should We Delay the Release?**

Scenario:
A product manager and engineer discuss whether a software release should be delayed.

### Finance

**Why Did Revenue Miss the Forecast?**

Scenario:
A finance manager and analyst discuss why quarterly revenue came in below forecast.

### Marketing

**Why Isn't the Campaign Converting?**

Scenario:
A marketing lead and performance marketer discuss strong traffic but weak trial conversion.

These placeholders exist only to build and test the product flow.

---

## 18. Content Source

Real lesson content will later be produced using:

- `CONTENT_SYSTEM.md`
- `LESSON_RECIPE.md`

The app should not depend on how content was created.

Each lesson should ultimately provide:

- metadata
- audio file
- transcript
- comprehension question

AI generation is a content-production process, not part of the learner-facing MVP.

---

## 19. Technical Stack

Recommended MVP stack:

- Next.js
- TypeScript
- Tailwind CSS
- GitHub
- Vercel

Use:

- Next.js App Router
- static lesson data
- local MP3 files
- browser `localStorage`

Do not add a database initially.

Do not add authentication initially.

Do not add a backend unless later required.

---

## 20. Suggested Repository Structure

```text
professional-listening-mvp/
│
├── app/
│   ├── page.tsx
│   ├── lesson/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── globals.css
│
├── components/
│   ├── LessonCard.tsx
│   ├── LessonPlayer.tsx
│   ├── AudioPlayer.tsx
│   ├── PracticePanel.tsx
│   ├── NotesInput.tsx
│   ├── TranscriptReview.tsx
│   ├── FinalQuestion.tsx
│   └── CompletionScreen.tsx
│
├── content/
│   ├── lessons.ts
│   └── types.ts
│
├── public/
│   └── audio/
│
├── lib/
│   ├── lesson-storage.ts
│   └── audio-utils.ts
│
├── CONTENT_SYSTEM.md
├── LESSON_RECIPE.md
├── MVP_SPEC.md
└── README.md
```

---

## 21. Lesson Data Model

Initial TypeScript model:

```ts
export type Lesson = {
  id: string
  slug: string

  title: string
  domain: "Product" | "Finance" | "Marketing"

  level: "B1" | "B2" | "C1"

  durationSeconds: number

  scenario: string

  audioUrl: string

  transcript: string

  question: {
    text: string
    options: string[]
    correctIndex: number
    explanation: string
  }
}
```

This may later be replaced or extended by a machine-readable lesson schema.

---

## 22. Practice Session Data

Store session state locally in the browser.

Example:

```ts
type PracticeSegment = {
  startTime: number
  endTime: number
  note: string
  replayCount: number
}

type LessonSession = {
  lessonId: string
  startedAt: string
  completed: boolean
  segments: PracticeSegment[]
  totalReplays: number
  finalAnswer?: number
}
```

No server persistence is required for MVP.

---

## 23. Local Persistence

Use `localStorage` to preserve reasonable progress.

Store:

- lesson id
- current playback position
- practice segments
- typed notes
- replay counts
- completion state
- final answer, if already submitted

If stored data is invalid or outdated, fail safely and start a fresh session.

---

## 24. Audio Requirements

The audio player must support:

- play
- pause
- seek
- current time
- duration
- replay range
- ended event

The player should use a custom interface rather than relying only on native browser audio controls.

Audio position must not be lost when the learner types.

---

## 25. Mobile Requirements

The MVP must work well in a mobile browser.

Design mobile-first.

Minimum expectations:

- usable around 375px width
- large touch targets
- readable text
- no horizontal scrolling
- transcript review stacks vertically
- note field is comfortable to use
- audio controls remain visible and usable

Mobile is not optional.

---

## 26. Accessibility Requirements

At minimum:

- keyboard-accessible controls
- semantic buttons
- visible focus states
- proper form labels
- sufficient contrast
- no colour-only success/error communication
- audio controls usable without mouse

---

## 27. Error and Edge Cases

Handle the following safely:

### Audio fails to load
Show a clear retry/error state.

### User presses Replay repeatedly
Do not create duplicate segments.

### User pauses during replay
Return safely to practice state.

### User seeks during normal playback
Reset the active section start safely.

### User refreshes
Restore reasonable session progress from localStorage.

### User leaves notes empty
Allow Continue.

### User uses paper
All lesson functionality must still work.

### Audio ends while a state transition is happening
Avoid duplicate completion states.

### Rapid button clicks
Prevent accidental duplicate state updates.

---

## 28. Explicit Non-Goals

Do not implement in MVP:

- signup
- login
- user accounts
- database
- subscriptions
- payments
- user profiles
- social features
- streaks
- leaderboards
- badges
- pronunciation scoring
- microphone recording
- speech recognition
- speech-to-text
- AI tutor
- AI learner feedback
- automatic word-level transcript comparison
- vocabulary quizzes
- grammar exercises
- YouTube imports
- uploaded learner audio
- uploaded learner content
- automatic audio chunking
- adaptive difficulty
- recommendations
- native mobile app
- CMS
- admin dashboard
- automated content generation inside the app

If a feature does not directly support the core loop, it is probably outside MVP scope.

---

## 29. Acceptance Criteria

The MVP is functionally complete when:

### Library
- user can see available lessons
- lesson metadata is visible
- user can start a lesson

### Listening
- audio plays reliably
- user can pause manually
- user can seek
- playback position is visible

### Practice
- pausing opens the practice state
- repeat-aloud instruction is visible
- writing field is optional
- notebook option is clearly communicated

### Replay
- the previous listening section replays accurately
- replay stops at the correct end position
- replay can be repeated multiple times
- replay does not create a new segment

### Continue
- typed note is saved
- segment timestamps are saved
- normal playback resumes correctly

### Review
- transcript is hidden during practice
- transcript appears only after review is chosen
- typed notes remain available
- notebook users can still use the review

### Question
- one multiple-choice question appears
- answer can be submitted
- correct/incorrect feedback works
- explanation appears

### Completion
- lesson can be completed
- user can return to lesson library
- basic practice counts are available

### Mobile
- complete flow works comfortably on mobile browser

---

## 30. Implementation Milestones

### Milestone 0 — Project Setup

- create GitHub repository
- initialize Next.js
- TypeScript
- Tailwind
- connect to Vercel
- verify deployment

### Milestone 1 — Lesson Library

- create placeholder lesson data
- lesson cards
- lesson routing

### Milestone 2 — Audio Player

- play
- pause
- seek
- current time
- duration

### Milestone 3 — Practice State

- pause triggers practice panel
- repeat-aloud prompt
- optional writing field
- notebook guidance

### Milestone 4 — Replay Section

- track section start/end
- replay exact interval
- stop automatically
- replay count

### Milestone 5 — Continue and Notes

- save segment
- save note
- save replay count
- resume playback

### Milestone 6 — Completion of Listening

- detect audio end
- transition to review prompt

### Milestone 7 — Transcript Review

- show saved notes
- show full transcript
- notebook message

### Milestone 8 — Comprehension Question

- one question
- four options
- immediate feedback
- explanation

### Milestone 9 — Completion Screen

- summary
- practice another lesson

### Milestone 10 — Local Persistence

- restore session after refresh

### Milestone 11 — Mobile and Accessibility Polish

- mobile testing
- keyboard testing
- error states
- production build

---

## 31. MVP Success Boundary

The MVP is successful as a product prototype if a real user can:

1. open the website without creating an account
2. choose a professional lesson
3. listen naturally
4. pause whenever they want
5. repeat aloud
6. write in the browser or on paper
7. replay the section they just heard
8. continue through the whole recording
9. reveal the transcript
10. compare their understanding
11. answer one comprehension question
12. finish without explanation from the creator

The next phase should focus on user behaviour and feedback, not additional features.

---

## 32. Product Principle

The MVP should remain intentionally small.

The browser's job is to:

> **guide the practice, remove friction, and provide the correct feedback moment.**

It does not need to capture, score, or automate every part of learning.
