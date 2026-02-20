/**
 * @flow strict
 * PostCSS plugin to resolve Tailwind's --theme() function calls.
 *
 * Tailwind v4 uses --theme() as an internal function that gets resolved
 * during compilation. If you're using @import "tailwindcss" without
 * @tailwindcss/postcss, these functions won't be resolved.
 *
 * This plugin resolves --theme(--var-name, fallback) by looking up
 * the variable in the theme and replacing it with the actual value.
 */

import fs from "fs";
import path from "path";

type ThemeVars = Map<string, string>;

// Parse theme.css to extract all CSS variable definitions
function parseThemeFile(themePath: string): ThemeVars {
  const themeVars: ThemeVars = new Map();

  try {
    const themeContent = fs.readFileSync(themePath, "utf-8");
    // Match CSS variable definitions: --var-name: value;
    const varRegex = /^\s*(--[\w-]+):\s*([^;]+);/gm;
    let match;
    while ((match = varRegex.exec(themeContent)) !== null) {
      themeVars.set(match[1], match[2].trim());
    }
  } catch (e) {
    // Theme file not found, continue with empty vars
  }

  return themeVars;
}

// Resolve a single --theme() call
function resolveThemeCall(
  themeCall: string,
  themeVars: ThemeVars
): string {
  // Match --theme(--var-name) or --theme(--var-name, fallback)
  // The function can span multiple lines
  const match = themeCall.match(/--theme\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/s);
  if (!match) {
    return themeCall;
  }

  const varName = match[1];
  const fallback = match[2]?.trim();

  // Look up the variable in the theme
  const value = themeVars.get(varName);
  if (value) {
    // If the value itself contains var() references, we need to resolve those too
    // But for now, just return the value directly
    return value;
  }

  // Use fallback if provided
  if (fallback) {
    return fallback;
  }

  // Return 'initial' if no value found
  return 'initial';
}

// Resolve all --theme() calls in a value
function resolveAllThemeCalls(
  value: string,
  themeVars: ThemeVars
): string {
  // Match --theme(...) including nested parentheses
  // This regex handles simple cases; complex nesting might need a parser
  let result = value;
  let prevResult = '';

  // Keep resolving until no more changes (handles nested --theme calls)
  while (result !== prevResult) {
    prevResult = result;
    // Match --theme( followed by content and closing )
    // Use a simple regex that handles most cases
    result = result.replace(
      /--theme\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/gs,
      (match, varName, fallback) => {
        const value = themeVars.get(varName);
        if (value) {
          return value;
        }
        if (fallback) {
          return fallback.trim();
        }
        return 'initial';
      }
    );
  }

  return result;
}

// Default theme path
let defaultThemePath = path.join(__dirname, "../theme.css");
defaultThemePath = defaultThemePath.replace("file:", "");

// Cache for parsed theme
let cachedThemeVars: ThemeVars | null = null;
let cachedThemePath: string | null = null;

function getThemeVars(themePath: string): ThemeVars {
  if (cachedThemePath === themePath && cachedThemeVars) {
    return cachedThemeVars;
  }
  cachedThemeVars = parseThemeFile(themePath);
  cachedThemePath = themePath;
  return cachedThemeVars;
}

type PluginOptions = {
  themePath?: string,
};

/**
 * PostCSS plugin to resolve --theme() function calls
 */
const plugin = (options: PluginOptions = {}): any => {
  const themePath = options.themePath || defaultThemePath;

  return {
    postcssPlugin: 'tailwind-to-stylex-resolve-theme',

    Declaration(decl: any) {
      if (decl.value.includes('--theme(')) {
        const themeVars = getThemeVars(themePath);
        decl.value = resolveAllThemeCalls(decl.value, themeVars);
      }
    },
  };
};

plugin.postcss = true;

export default plugin;
