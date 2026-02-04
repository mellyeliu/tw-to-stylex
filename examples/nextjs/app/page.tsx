'use client';

import { useState } from 'react';
import { Button } from '@examples/stylex-components';

const HOMEPAGE = 'https://stylexjs.com';

// Build mode - in Next.js we can detect based on class name format
// If StyleX transformed the code, classes will be atomic (x...), otherwise Tailwind
function ModeIndicator() {
  return (
    <div className="fixed top-4 right-4 z-50 px-3 py-1 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-300 dark:border-gray-600 text-sm font-medium">
      Mode: <span className="text-blue-500">{process.env.NEXT_PUBLIC_BUILD_MODE === 'tailwind' ? 'Tailwind' : 'StyleX'}</span>
    </div>
  );
}

function Card({ title, body, href }: { title: string; body: string; href: string }) {
  return (
    <a
      className="flex flex-col items-center md:items-start p-4 rounded-xl bg-gray-400/0 border border-gray-400/0 hover:bg-gray-400/10 hover:border-gray-400/10 transition-all duration-400 text-center md:text-left no-underline text-inherit"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2 className="text-[#74c0fc] text-xl font-semibold mb-3 md:mb-2">
        {title} <span className="inline-block transition-transform duration-200">→</span>
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
      <div className={isLargeNumber
        ? "text-3xl font-extralight text-[#74b816] min-w-24 text-center font-mono"
        : "text-4xl font-extralight text-[#74b816] min-w-24 text-center font-mono"
      }>
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
  const mode = process.env.NEXT_PUBLIC_BUILD_MODE === 'tailwind' ? 'Tailwind' : 'StyleX';

  return (
    <>
      <ModeIndicator />
      <main className="flex flex-col items-center justify-between min-h-screen pt-16 pb-16 md:pb-6">
        <div className="flex justify-center items-center text-sm max-w-5xl w-full z-10 font-mono">
          <p className="relative md:fixed md:top-0 md:left-0 md:right-0 flex justify-center items-center w-full m-0 px-4 py-3 md:py-4 bg-gray-200/50 dark:bg-gray-900/50 border border-gray-400/30 md:border-0 md:border-b md:border-gray-400/25 rounded-lg md:rounded-none backdrop-blur-sm">
            Get started by editing&nbsp;
            <code className="font-bold font-mono">app/page.tsx</code>
          </p>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center gap-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-center flex flex-col md:flex-row gap-4 whitespace-nowrap leading-none font-sans">
            <span>Next.js App Dir</span>
            <span className="animate-heartbeat relative">♥️</span>
            <span>{mode}</span>
          </h1>
          <Counter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl px-4 max-w-xs md:max-w-none text-center md:text-left">
          <Card body="Learn how to use StyleX to build UIs" href={`${HOMEPAGE}/docs/learn/`} title="Docs" />
          <Card body="Browse through the StyleX API reference" href={`${HOMEPAGE}/docs/api/`} title="API" />
          <Card body="Play with StyleX and look at the compile outputs" href={`${HOMEPAGE}/playground/`} title="Playground" />
          <Card body="Get started with a NextJS+StyleX project" href="https://github.com/nmn/nextjs-app-dir-stylex" title="Templates" />
        </div>

        <div className="mt-8">
          <Button variant="primary" size="sm">StyleX Component</Button>
        </div>
      </main>
    </>
  );
}
