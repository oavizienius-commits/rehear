# Rehear

Rehear is a browser-based tool that helps professionals improve real-world English listening and workplace communication through short, realistic work scenarios.

Lessons span different professional contexts, teams, and situations — helping learners practise natural spoken English while observing how people clarify, disagree, explain, negotiate, raise concerns, and make decisions at work.

**Listen → Pause → Repeat → Write → Replay → Review transcript → Answer one question**

## Current MVP scope

This repository uses static lesson content and currently includes:

- a responsive lesson library homepage
- Lesson 01, a Product / IT listening practice with audio, pause and replay, transcript review, and one comprehension question
- static placeholder lessons for Product / IT, Finance, and Marketing
- lesson cards with title, domain, CEFR level, duration, scenario, and a primary communication skill where available
- a route for each lesson at `/lesson/[slug]`

Practice notes stay in memory during the lesson. Authentication, persistent storage, backend services, AI, and analytics are not part of the current app.

## Project documentation

- [`MVP_SPEC_REHEAR.md`](./MVP_SPEC_REHEAR.md) — product goal, audience, MVP behaviour, and technical direction
- [`CONTENT_SYSTEM.md`](./CONTENT_SYSTEM.md) — standards for realistic professional listening content
- [`LESSON_RECIPE.md`](./LESSON_RECIPE.md) — repeatable process for producing future lessons

## Tech stack

- Next.js
- TypeScript
- React
- App Router
- Tailwind CSS
- ESLint

Lesson content is currently static and stored in `content/lessons.ts`.

## Local development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Run project checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```
