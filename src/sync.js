/**
 * Synchronous wrapper for tailwind-to-stylex Babel plugin.
 * Uses spawnSync to compile Tailwind classes synchronously.
 * @flow strict
 */

import path from 'path';
import { spawnSync } from 'child_process';
import { optimizeCss } from './classes-to-css';
import { convertFromCssToJss } from './helpers';
import { createPlugin } from './plugin-core';

// Tailwind patterns that StyleX cannot support
const UNSUPPORTED_CLASS_PATTERNS = [
  { pattern: /^group-/, name: 'group-*', reason: 'requires parent element state' },
  { pattern: /^peer-/, name: 'peer-*', reason: 'requires sibling element state' },
  { pattern: /^\*:/, name: '*:* (child selector)', reason: 'requires descendant selectors' },
  { pattern: /^\[&/, name: '[&...] arbitrary selectors', reason: 'requires complex selectors' },
];

function warnUnsupportedClasses(classNames: string): void {
  const classes = classNames.split(' ');

  for (const cls of classes) {
    for (const { pattern, name, reason } of UNSUPPORTED_CLASS_PATTERNS) {
      if (pattern.test(cls)) {
        console.warn(
          `[TW→StyleX] Unsupported Tailwind pattern: ${name}\n` +
          `  Class: ${cls}\n` +
          `  Reason: ${reason}\n` +
          `  This class will be ignored in the StyleX output.`
        );
      }
    }
  }
}

// Cache for compiled classes
const cache: Map<string, string> = new Map();

// Get the path to the compile script - look in lib/ directory
const compileScriptPath = path.join(__dirname, 'tw-compile.cjs');

// Compile classes synchronously using a child process
function compileClassesSync(classNames: string): string | null {
  if (cache.has(classNames)) {
    return cache.get(classNames) ?? null;
  }

  const candidates = classNames.split(' ');

  try {
    const result = spawnSync('node', [compileScriptPath, JSON.stringify(candidates)], {
      encoding: 'utf-8',
      timeout: 30000,
      maxBuffer: 10 * 1024 * 1024,
    });

    if (result.error) {
      console.error('Compile error:', result.error.message);
      return null;
    }

    if (result.status !== 0) {
      console.error('Compile failed:', result.stderr);
      return null;
    }

    const css = optimizeCss(result.stdout);
    cache.set(classNames, css);
    return css;
  } catch (e) {
    console.error('Failed to compile classes:', e.message);
    return null;
  }
}

export default function tailwindToStylexSync(): mixed {
  const convertTwToJs = (classNames: string) => {
    // Warn about unsupported patterns
    warnUnsupportedClasses(classNames);

    let resultCss, resultJSS;
    try {
      resultCss = compileClassesSync(classNames);
      if (resultCss == null) {
        console.log('[TW->StyleX] CSS compile returned null for:', classNames);
        return null;
      }
      resultJSS = convertFromCssToJss(classNames, resultCss);
      return resultJSS;
    } catch (e) {
      console.log('[TW->StyleX] Error converting:', classNames);
      console.log('[TW->StyleX] Error:', e.message);
      return null;
    }
  };

  return createPlugin(convertTwToJs);
}
