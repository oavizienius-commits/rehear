# Rehear

Rehear is a browser-based learning product for professionals who want to improve real-world English listening comprehension. It uses short, realistic workplace scenarios to expose learners to natural professional language and plausible ways of handling common work situations.

## Current MVP scope

This repository currently provides the smallest working product foundation:

- a responsive lesson library homepage
- static placeholder lessons for Product, Finance, and Marketing
- lesson cards with title, domain, CEFR level, duration, and scenario
- a placeholder route for each lesson at `/lesson/[slug]`

Audio playback, pause/replay practice, notes, transcript review, comprehension questions, authentication, persistence, backend services, AI, and analytics are intentionally out of scope for this setup phase.

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
