import Link from "next/link";

import type { Lesson } from "@/content/lessons";

type LessonCardProps = {
  lesson: Lesson;
};

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_18px_45px_-32px_rgba(24,32,29,0.45)] sm:p-7">
      <div className="mb-5 flex flex-wrap items-center gap-2 text-sm font-semibold">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
          {lesson.domain}
        </span>
        <span className="text-stone-500">{lesson.level}</span>
        <span aria-hidden="true" className="text-stone-300">
          •
        </span>
        <span className="text-stone-500">{lesson.duration}</span>
      </div>

      <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
        {lesson.title}
      </h2>
      <p className="mt-3 flex-1 text-base leading-7 text-stone-600">
        {lesson.scenario}
      </p>

      <Link
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        href={`/lesson/${lesson.slug}`}
      >
        Start practice
      </Link>
    </article>
  );
}
