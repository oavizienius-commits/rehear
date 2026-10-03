"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import type { Lesson } from "@/content/lessons";

type Question = NonNullable<Lesson["question"]>;
type Phase = "intro" | "listening" | "practice" | "finished" | "review";
type ListeningSection = {
  start: number;
  end: number;
  note: string;
};

type LessonPracticeProps = {
  audioUrl: string;
  durationSeconds: number;
  transcript: NonNullable<Lesson["transcript"]>;
  question: Question;
};

function formatTime(seconds: number) {
  const wholeSeconds = Math.floor(seconds);
  return `${Math.floor(wholeSeconds / 60)}:${String(wholeSeconds % 60).padStart(2, "0")}`;
}

export function LessonPractice({
  audioUrl,
  durationSeconds,
  transcript,
  question,
}: LessonPracticeProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const sectionStartRef = useRef(0);
  const pausePositionRef = useRef(0);
  const replayingRef = useRef(false);
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReplaying, setIsReplaying] = useState(false);
  const [activeSection, setActiveSection] = useState<{ start: number; end: number } | null>(null);
  const [note, setNote] = useState("");
  const [sections, setSections] = useState<ListeningSection[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [audioError, setAudioError] = useState("");

  function playAudio() {
    const audio = audioRef.current;
    if (!audio) return;

    setAudioError("");
    void audio.play().catch(() => {
      setIsPlaying(false);
      setAudioError("Audio could not start. Please try again.");
    });
  }

  function handlePause() {
    const audio = audioRef.current;
    if (!audio || audio.ended || replayingRef.current || phase !== "listening") return;

    setIsPlaying(false);
    pausePositionRef.current = audio.currentTime;
    if (audio.currentTime > sectionStartRef.current + 0.1) {
      setActiveSection({ start: sectionStartRef.current, end: audio.currentTime });
      setPhase("practice");
    }
  }

  function handleTimeUpdate() {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrentTime(audio.currentTime);
    if (replayingRef.current && audio.currentTime >= pausePositionRef.current - 0.05) {
      audio.pause();
      audio.currentTime = pausePositionRef.current;
      setCurrentTime(pausePositionRef.current);
      replayingRef.current = false;
      setIsReplaying(false);
      setIsPlaying(false);
    }
  }

  function seekTo(value: number) {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = value;
    sectionStartRef.current = value;
    setActiveSection(null);
    setCurrentTime(value);
    setNote("");
  }

  function replaySection() {
    const audio = audioRef.current;
    if (!audio) return;

    replayingRef.current = true;
    setIsReplaying(true);
    audio.currentTime = sectionStartRef.current;
    setCurrentTime(sectionStartRef.current);
    playAudio();
  }

  function continueListening() {
    const completedSection = {
      start: sectionStartRef.current,
      end: pausePositionRef.current,
      note,
    };
    setSections((previous) => [
      ...previous,
      completedSection,
    ]);
    sectionStartRef.current = pausePositionRef.current;
    setActiveSection(null);
    setNote("");
    setPhase("listening");
    playAudio();
  }

  return (
    <div className="mt-10 border-t border-stone-200 pt-8">
      <audio
        ref={audioRef}
        preload="metadata"
        src={audioUrl}
        onEnded={() => {
          setIsPlaying(false);
          if (replayingRef.current) {
            replayingRef.current = false;
            setIsReplaying(false);
            setPhase("practice");
          } else {
            setPhase("finished");
          }
        }}
        onError={() => setAudioError("Audio could not be loaded.")}
        onPause={handlePause}
        onPlay={() => setIsPlaying(true)}
        onTimeUpdate={handleTimeUpdate}
      />

      {phase === "intro" && (
        <div className="rounded-2xl bg-stone-100 p-6">
          <h2 className="text-xl font-semibold text-stone-900">Before you listen</h2>
          <p className="mt-3 leading-7 text-stone-600">
            Listen at your own pace. Pause when you need to, repeat what you heard
            aloud, then write it here or in a notebook. Replay a section if needed.
          </p>
          <button
            className="mt-6 min-h-11 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            onClick={() => {
              setPhase("listening");
              playAudio();
            }}
            type="button"
          >
            Start listening
          </button>
        </div>
      )}

      {(phase === "listening" || phase === "practice") && (
        <div className="rounded-2xl bg-stone-100 p-6">
          <h2 className="text-xl font-semibold text-stone-900">Listen</h2>
          <div className="mt-5 flex items-center gap-4">
            {phase === "listening" && (
              <button
                className="min-h-11 min-w-20 rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                onClick={() => (isPlaying ? audioRef.current?.pause() : playAudio())}
                type="button"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
            )}
            <span className="text-sm tabular-nums text-stone-600">
              {formatTime(currentTime)} / {formatTime(Math.ceil(durationSeconds))}
            </span>
          </div>
          <input
            aria-label="Seek audio"
            className="mt-5 w-full accent-emerald-700"
            disabled={phase !== "listening"}
            max={durationSeconds}
            min={0}
            onChange={(event) => seekTo(Number(event.target.value))}
            step="0.1"
            type="range"
            value={Math.min(currentTime, durationSeconds)}
          />
          {isReplaying && <p className="mt-2 text-sm text-stone-600">Replaying this section…</p>}
        </div>
      )}

      {phase === "practice" && (
        <div className="mt-6 rounded-2xl border border-stone-200 p-6">
          <p className="text-sm font-medium tabular-nums text-stone-500">
            You listened from {formatTime(activeSection?.start ?? 0)} to{" "}
            {formatTime(activeSection?.end ?? 0)}
          </p>
          <h2 className="mt-4 text-xl font-semibold text-stone-900">Repeat what you heard aloud</h2>
          <p className="mt-2 text-stone-600">Say what you remember, even if you&apos;re unsure.</p>
          <label className="mt-6 block font-semibold text-stone-900" htmlFor="listening-note">
            Write what you heard
          </label>
          <p className="mt-1 text-sm text-stone-600">Type below or use pen and paper.</p>
          <textarea
            className="mt-3 min-h-28 w-full rounded-xl border border-stone-300 p-3 text-stone-900 focus:outline-2 focus:outline-offset-2 focus:outline-emerald-700"
            id="listening-note"
            onChange={(event) => setNote(event.target.value)}
            placeholder="Optional: write what you heard…"
            value={note}
          />
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              className="min-h-11 rounded-full border border-stone-300 px-5 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-100 disabled:opacity-50"
              disabled={isReplaying}
              onClick={replaySection}
              type="button"
            >
              Replay this section
            </button>
            <button
              className="min-h-11 rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
              disabled={isReplaying}
              onClick={continueListening}
              type="button"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {phase === "finished" && (
        <div className="rounded-2xl bg-stone-100 p-6">
          <h2 className="text-xl font-semibold text-stone-900">You finished the listening practice.</h2>
          <p className="mt-2 text-stone-600">Ready to check what was actually said?</p>
          <button
            className="mt-6 min-h-11 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            onClick={() => setPhase("review")}
            type="button"
          >
            Review transcript
          </button>
        </div>
      )}

      {phase === "review" && (
        <div className="space-y-8">
          {sections.some((section) => section.note.trim()) && (
            <section>
              <h2 className="text-xl font-semibold text-stone-900">Your listening notes</h2>
              {sections.filter((section) => section.note.trim()).map((section, index) => (
                <div className="mt-4 rounded-xl bg-stone-100 p-4" key={`${section.start}-${index}`}>
                  <p className="text-sm font-medium tabular-nums text-stone-500">
                    {formatTime(section.start)}–{formatTime(section.end)}
                  </p>
                  <p className="mt-2 whitespace-pre-wrap text-stone-800">{section.note}</p>
                </div>
              ))}
            </section>
          )}
          <section>
            <h2 className="text-xl font-semibold text-stone-900">Full transcript</h2>
            <p className="mt-2 text-sm text-stone-600">
              Used a notebook? Compare your writing with the transcript below.
            </p>
            <p className="mt-5 whitespace-pre-wrap leading-7 text-stone-800">
              {transcript.map(({ speaker, text }) => `${speaker}: ${text}`).join("\n\n")}
            </p>
          </section>
          <section className="border-t border-stone-200 pt-8">
            <h2 className="text-xl font-semibold text-stone-900">{question.text}</h2>
            <div className="mt-5 space-y-3">
              {question.options.map((option, index) => (
                <button
                  className={`block min-h-11 w-full rounded-xl border p-4 text-left text-sm leading-6 disabled:cursor-default ${selectedIndex === index ? "border-emerald-700 bg-emerald-50" : "border-stone-300 hover:bg-stone-50"}`}
                  disabled={selectedIndex !== null}
                  key={option}
                  onClick={() => setSelectedIndex(index)}
                  type="button"
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedIndex !== null && (
              <div aria-live="polite" className="mt-6 rounded-xl bg-stone-100 p-5">
                <p className="font-semibold text-stone-900">
                  {selectedIndex === question.correctIndex ? "Correct" : "Not quite"}
                </p>
                <p className="mt-2 leading-7 text-stone-700">{question.explanation}</p>
                <Link
                  className="mt-5 inline-flex min-h-11 items-center rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                  href="/"
                >
                  Practice another lesson
                </Link>
              </div>
            )}
          </section>
        </div>
      )}

      {audioError && <p role="alert" className="mt-4 text-sm text-red-700">{audioError}</p>}
    </div>
  );
}
