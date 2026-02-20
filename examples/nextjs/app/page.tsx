"use client";

import { useState } from "react";

const HOMEPAGE = "https://stylexjs.com";

function ModeIndicator() {
  return (
    <div className="fixed top-4 right-4 z-50 px-3 py-1 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-300 dark:border-gray-600 text-sm font-medium">
      Mode:{" "}
      <span className="text-blue-500">
        {process.env.NEXT_PUBLIC_BUILD_MODE === "tailwind"
          ? "Tailwind"
          : "StyleX"}
      </span>
    </div>
  );
}

function Card({
  title,
  body,
  href,
}: {
  title: string;
  body: string;
  href: string;
}) {
  return (
    <a
      className="flex min-w-0 flex-col items-center md:items-start p-5 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 hover:border-[#74c0fc] transition-all duration-300 text-center md:text-left no-underline text-inherit shadow-sm"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2 className="text-[#74c0fc] text-xl font-semibold mb-3 md:mb-2">
        {title}{" "}
        <span className="inline-block transition-transform duration-200">
          →
        </span>
      </h2>
      <p className="text-sm opacity-60 leading-relaxed max-w-[30ch] text-balance m-0">
        {body}
      </p>
    </a>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const isLargeNumber = Math.abs(count) > 99;

  return (
    <div className="flex items-center justify-center flex-row rounded-lg border border-[#1c7ed6] p-1 gap-3 font-sans">
      <button
        className="flex items-center justify-center h-24 aspect-square text-[#1c7ed6] bg-[#dee2e6] hover:bg-[#ced4da] dark:bg-[#212529] dark:hover:bg-[#343a40] border-0 rounded-lg p-3 m-3 cursor-pointer text-4xl hover:scale-[1.025] active:scale-[0.975] transition-transform"
        onClick={() => setCount((c) => c - 1)}
      >
        -
      </button>
      <div
        className={
          isLargeNumber
            ? "text-3xl font-extralight text-[#74b816] min-w-24 text-center font-mono"
            : "text-4xl font-extralight text-[#74b816] min-w-24 text-center font-mono"
        }
      >
        {count}
      </div>
      <button
        className="flex items-center justify-center h-24 aspect-square text-[#1c7ed6] bg-[#dee2e6] hover:bg-[#ced4da] dark:bg-[#212529] dark:hover:bg-[#343a40] border-0 rounded-lg p-3 m-3 cursor-pointer text-4xl hover:scale-[1.025] active:scale-[0.975] transition-transform"
        onClick={() => setCount((c) => c + 1)}
      >
        +
      </button>
    </div>
  );
}

export default function Home() {
  const mode =
    process.env.NEXT_PUBLIC_BUILD_MODE === "tailwind" ? "Tailwind" : "StyleX";

  return (
    <main className="h-screen w-full overflow-hidden grid grid-rows-[auto_1fr_auto] items-center">
      <ModeIndicator />

      <div className="flex justify-center items-center text-sm font-mono px-4">
        <p className="flex justify-center items-center w-full px-4 py-3 bg-gray-200/50 dark:bg-gray-900/50 border border-gray-400/30 rounded-lg backdrop-blur-sm">
          Get started by editing&nbsp;
          <code className="font-bold font-mono">app/page.tsx</code>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-center flex flex-col md:flex-row gap-4 whitespace-nowrap leading-none font-sans">
          <span>Next.js App Dir</span>
          <span className="animate-heartbeat relative">♥️</span>
          <span>{mode}</span>
        </h1>
        <Counter />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl px-6 mx-auto pb-6">
        <Card
          body="Write Tailwind classes you already know. No new syntax to learn."
          href={`${HOMEPAGE}/docs/learn/`}
          title="Familiar Syntax"
        />
        <Card
          body="Babel plugin converts classes at build time. Zero runtime cost."
          href={`${HOMEPAGE}/docs/api/`}
          title="Build-time Transform"
        />
        <Card
          body="Generates optimized StyleX atomic styles. Smaller bundles."
          href={`${HOMEPAGE}/playground/`}
          title="Atomic CSS Output"
        />
        <Card
          body="Migrate from Tailwind to StyleX incrementally, file by file."
          href="https://github.com/mellyeliu/tw-to-stylex"
          title="Gradual Migration"
        />
      </div>
    </main>
  );
}
