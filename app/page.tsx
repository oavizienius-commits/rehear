import { LessonCard } from "@/components/LessonCard";
import { lessons } from "@/content/lessons";

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">Rehear</span>
          <span className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
            MVP
          </span>
        </header>

        <section className="max-w-3xl pb-12 pt-16 sm:pb-16 sm:pt-24">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Professional English listening
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-6xl">
            Learn from real workplace conversations.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
            Choose a short professional scenario and build confidence with the
            language people use at work.
          </p>
        </section>

        <section aria-labelledby="lessons-heading">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-stone-500">Lesson library</p>
              <h2
                className="mt-1 text-2xl font-semibold tracking-tight text-stone-900"
                id="lessons-heading"
              >
                Choose a scenario
              </h2>
            </div>
            <p className="text-sm text-stone-500">3 lessons</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.slug} lesson={lesson} />
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-stone-200 py-8 text-sm text-stone-500">
          Rehear is currently a small, static MVP foundation.
        </footer>
      </div>
    </main>
  );
}
