import Link from "next/link";
import { notFound } from "next/navigation";

import { getLesson, lessons } from "@/content/lessons";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lessons.map(({ slug }) => ({ slug }));
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);

  if (!lesson) {
    notFound();
  }

  return (
    <main className="min-h-screen px-5 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          className="inline-flex min-h-11 items-center text-sm font-semibold text-stone-600 hover:text-emerald-700"
          href="/"
        >
          ← Back to lessons
        </Link>

        <article className="mt-8 rounded-3xl border border-stone-200 bg-white p-7 shadow-[0_18px_45px_-32px_rgba(24,32,29,0.45)] sm:p-10">
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
              {lesson.domain}
            </span>
            <span className="text-stone-500">{lesson.level}</span>
            <span aria-hidden="true" className="text-stone-300">
              •
            </span>
            <span className="text-stone-500">{lesson.duration}</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-stone-950 sm:text-5xl">
            {lesson.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            {lesson.scenario}
          </p>

          <div className="mt-10 rounded-2xl bg-stone-100 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Foundation preview
            </p>
            <h2 className="mt-3 text-xl font-semibold text-stone-900">
              Practice experience coming next
            </h2>
            <p className="mt-2 leading-7 text-stone-600">
              This page is ready for the listening and guided practice flow. Audio,
              replay, notes, transcript review, and questions are intentionally not
              part of this foundation.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
