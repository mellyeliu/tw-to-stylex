# Tailwind to StyleX Migration Guide

This guide focuses on patterns that are non-obvious or easy to get wrong. It assumes familiarity with both Tailwind and StyleX basics.

---

## Table of Contents

1. [Project Setup](#project-setup)
2. [Theming](#theming)
3. [Group and Peer Modifiers](#group-and-peer-modifiers)
4. [Keyframe Animations](#keyframe-animations)
5. [Pseudo-classes and Media Queries](#pseudo-classes-and-media-queries)
6. [Arbitrary Values](#arbitrary-values)
7. [Anti-patterns to Avoid](#anti-patterns-to-avoid)

---

## Project Setup

### Dependencies

```bash
npm uninstall tailwindcss postcss autoprefixer
npm install @stylexjs/stylex
npm install -D @stylexjs/babel-plugin @stylexjs/unplugin
```

### Delete Tailwind Config Files

- `tailwind.config.js`
- `postcss.config.js`

### Vite Config

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import styleXUnplugin from '@stylexjs/unplugin';

export default defineConfig({
  plugins: [
    react(),
    styleXUnplugin.vite({
      dev: true,
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: process.cwd()
      }
    })
  ],
});
```

### Update index.css

Remove Tailwind directives, keep a CSS reset:

```css
/* Remove: @tailwind base/components/utilities */

*, ::after, ::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

---

## Theming

Tailwind 4 uses CSS custom properties for theming. StyleX has a similar approach with `defineVars` (runtime CSS variables) and `defineConsts` (build-time constants).

### Migrating Tailwind Theme Config

**Tailwind 4 approach (CSS variables):**
```css
@theme {
  --color-primary: #3b82f6;
  --color-gray-800: #1f2937;
  --spacing-4: 1rem;
  --font-size-lg: 1.125rem;
}
```

**StyleX approach - preserving Tailwind variable names:**

Use the CSS variable name as the key to maintain the exact names from Tailwind:

```ts
// tokens.stylex.ts
import * as stylex from '@stylexjs/stylex';

export const vars = stylex.defineVars({
  '--color-primary': '#3b82f6',
  '--color-gray-800': '#1f2937',
  '--spacing-4': '1rem',
  '--font-size-lg': '1.125rem',
  // ... etc
});
```

```ts
// Breakpoints - use defineConsts
export const breakpoints = stylex.defineConsts({
  sm: '@media (min-width: 640px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 1024px)',
  xl: '@media (min-width: 1280px)',
});
```

**Usage:**

```tsx
import { colors, spacing, fontSize, breakpoints } from './tokens.stylex';

const styles = stylex.create({
  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    fontSize: fontSize.base,
    paddingInline: {
      default: spacing.md,
      [breakpoints.md]: spacing.lg,
    },
  },
});
```

### `defineVars` vs `defineConsts`

| | `defineVars` | `defineConsts` |
|---|---|---|
| Output | CSS custom properties | Inlined at build time |
| Themeable | Yes (via `createTheme`) | No |
| Use for | Colors, spacing, typography | Media queries, selectors |
| File extension | `.stylex.ts` required | `.stylex.ts` required |

### Dark Mode / Theme Variants

```ts
// themes.ts
import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const darkTheme = stylex.createTheme(colors, {
  primary: '#60a5fa',
  primaryHover: '#93c5fd',
  textPrimary: '#f9fafb',
  textSecondary: '#d1d5db',
  background: '#111827',
  surface: '#1f2937',
  border: '#374151',
});

// Can create multiple themes
export const highContrastTheme = stylex.createTheme(colors, {
  primary: '#000000',
  textPrimary: '#000000',
  background: '#ffffff',
  // ...
});
```

**Apply theme at root:**

```tsx
function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <div {...stylex.props(theme === 'dark' && darkTheme)}>
      {/* All children using colors.* will get themed values */}
    </div>
  );
}
```

**IMPORTANT:**
- `defineVars`/`defineConsts` files MUST have `.stylex.ts` extension
- MUST use named exports, not default exports
- No other exports allowed in the same file

---

## Group and Peer Modifiers

### Tailwind Approach
```tsx
<div className="group">
  <span className="group-hover:text-blue-500">Hover parent</span>
</div>
```

### StyleX Approach: Use `stylex.when.ancestor()`

```tsx
import * as stylex from '@stylexjs/stylex';

// IMPORTANT: Define styles at module level, not inside components
const styles = stylex.create({
  card: {
    padding: 16,
  },
  title: {
    color: {
      default: '#374151',
      [stylex.when.ancestor(':hover')]: '#3b82f6',
    },
  },
});

function Card() {
  return (
    // Parent MUST include stylex.defaultMarker()
    <div {...stylex.props(stylex.defaultMarker(), styles.card)}>
      <span {...stylex.props(styles.title)}>Hover parent</span>
    </div>
  );
}
```

**IMPORTANT:**
- Requires `@stylexjs/stylex` version 0.17.5+
- Styles using `stylex.when.*` MUST be defined at module level
- Parent element MUST include `stylex.defaultMarker()` in `stylex.props()`

**For peer modifiers (`peer-hover:`, `peer-focus:`):**

Use `stylex.when.anySibling()`:

```tsx
const styles = stylex.create({
  label: {
    color: {
      default: 'gray',
      [stylex.when.anySibling(':focus')]: 'blue',
    },
  },
});
```

**Available `stylex.when` selectors:**
- `stylex.when.self(selector)` - matches own element state (`:hover`, `[data-state="open"]`, etc.)
- `stylex.when.ancestor(selector)` - matches any ancestor (like Tailwind's `group-*`)
- `stylex.when.anySibling(selector)` - matches any sibling (like Tailwind's `peer-*`)
- `stylex.when.siblingBefore(selector)` - matches preceding sibling only
- `stylex.when.siblingAfter(selector)` - matches following sibling only

### Combining with Conditional Styles

**Tailwind Approach:**
```tsx
function Button({ isActive, isDisabled, textColor }) {
  return (
    <button
      className={`p-4 ${isActive ? 'bg-blue-500' : ''} ${isDisabled ? 'opacity-50' : ''}`}
      style={{ color: textColor }}
    >
      Click me
    </button>
  );
}
```

**StyleX Approach:**
```tsx
const styles = stylex.create({
  base: { padding: 16 },
  active: { backgroundColor: 'blue' },
  disabled: { opacity: 0.5 },
  customColor: (color: string) => ({ color }),
});

function Button({ isActive, isDisabled, textColor }) {
  return (
    <button {...stylex.props(
      styles.base,
      isActive && styles.active,
      isDisabled && styles.disabled,
      textColor && styles.customColor(textColor)
    )}>
      Click me
    </button>
  );
}
```

### When to Use Dynamic vs Static Styles

```tsx
const styles = stylex.create({
  card: {
    backgroundColor: {
      default: 'white',
      ':hover': 'gray',
    },
  },
  // Dynamic - for runtime values
  customPadding: (padding: number) => ({
    padding,
  }),
});
```

---

## Keyframe Animations

### Tailwind Approach
```tsx
// tailwind.config.js
animation: { 'fade-in': 'fadeIn 0.3s ease-out' },
keyframes: { fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } }

// Usage
<div className="animate-fade-in">
```

### StyleX Approach: Use `stylex.keyframes()`

```tsx
const fadeIn = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const styles = stylex.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '0.3s',
    animationTimingFunction: 'ease-out',
  },
});
```

**Conditional animations (e.g., animate on hover):**

```tsx
const shimmer = stylex.keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

const styles = stylex.create({
  card: {
    animationName: {
      default: null,
      [stylex.when.ancestor(':hover')]: shimmer,
    },
    animationDuration: '2s',
    animationIterationCount: 'infinite',
  },
});
```

---

**Use `defineConsts` for reusable breakpoints:**

```ts
// breakpoints.stylex.ts
export const breakpoints = stylex.defineConsts({
  sm: '@media (min-width: 640px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 1024px)',
});

// Usage
const styles = stylex.create({
  container: {
    padding: {
      default: 16,
      [breakpoints.md]: 32,
    },
  },
});
```

---

## Arbitrary Values

### Tailwind Approach
```tsx
<div className="w-[200px] h-[calc(100vh-64px)] top-[10%] grid-cols-[1fr_2fr]">
```

### StyleX Approach

StyleX uses standard CSS values directly:

```tsx
const styles = stylex.create({
  element: {
    width: 200,                           // w-[200px] - numbers default to px
    height: 'calc(100vh - 64px)',         // h-[calc(100vh-64px)]
    top: '10%',                           // top-[10%]
    gridTemplateColumns: '1fr 2fr',       // grid-cols-[1fr_2fr]
  },
});
```

**Gradient translation:**

```tsx
// Tailwind: bg-gradient-to-br from-blue-500 to-cyan-500
const styles = stylex.create({
  gradient: {
    backgroundImage: 'linear-gradient(to bottom right, #3b82f6, #06b6d4)',
  },
});
```

---

## Anti-patterns to Avoid

### 1. Top-level pseudo-classes/media queries

```tsx
// WRONG
{ ':hover': { color: 'blue' } }

// CORRECT
{ color: { default: 'gray', ':hover': 'blue' } }
```

### 2. Importing non-StyleX constants

```tsx
// WRONG
import { PADDING } from './constants';
const styles = stylex.create({ box: { padding: PADDING } });

// CORRECT - use defineConsts
import { spacing } from './tokens.stylex';
const styles = stylex.create({ box: { padding: spacing.md } });
```

### 3. Missing `default` in conditional objects

```tsx
// WRONG
{ fontSize: { '@media (min-width: 768px)': 18 } }

// CORRECT
{ fontSize: { default: 14, '@media (min-width: 768px)': 18 } }
```

### 4. Wrong file extension for defineVars/defineConsts

```tsx
// WRONG - tokens.ts
export const colors = stylex.defineVars({ ... });

// CORRECT - tokens.stylex.ts
export const colors = stylex.defineVars({ ... });
```

### 5. Defining styles inside components

```tsx
// WRONG - styles inside component won't work with stylex.when
function Card() {
  const styles = stylex.create({ ... }); // Bad!
  return <div {...stylex.props(styles.card)} />;
}

// CORRECT - styles at module level
const styles = stylex.create({ ... });
function Card() {
  return <div {...stylex.props(styles.card)} />;
}
```
