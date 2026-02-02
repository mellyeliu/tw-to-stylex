# Post-Migration Cleanup Instructions

This document provides instructions for cleaning up code after running the `tailwind-to-stylex` migration tool. These instructions are designed to be followed by an LLM or developer.

## Overview

After the automated migration, the code will work but may have:
- Generic style names like `$1`, `$2`, `$3`
- Underscore-prefixed style objects (`_styles`)
- Some remaining Tailwind classes that couldn't be converted
- Suboptimal ordering in `stylex.props()` calls

Follow the steps below to clean up the migrated code.

---

## Step 1: Rename Style Keys

### Problem
The migration generates generic keys like `$1`, `$2`, `$3` for style objects.

### Solution
Rename each key to describe what element it styles. Use semantic names based on the element's purpose.

**Before:**
```jsx
<div {...stylex.props(styles.$1)}>
  <h1 {...stylex.props(styles.$2)}>Title</h1>
  <p {...stylex.props(styles.$3)}>Description</p>
</div>

const _styles = stylex.create({
  $1: { display: "flex" },
  $2: { fontSize: "2rem" },
  $3: { color: "gray" },
});
```

**After:**
```jsx
<div {...stylex.props(styles.container)}>
  <h1 {...stylex.props(styles.title)}>Title</h1>
  <p {...stylex.props(styles.description)}>Description</p>
</div>

const styles = stylex.create({
  container: { display: "flex" },
  title: { fontSize: "2rem" },
  description: { color: "gray" },
});
```

### Naming Conventions
- Use camelCase for all style names
- Name based on the element's semantic purpose, not its appearance
- Common names: `container`, `wrapper`, `header`, `title`, `subtitle`, `content`, `footer`, `button`, `link`, `icon`, `image`, `card`, `list`, `item`, `input`, `label`, `error`, `success`
- For variants, use descriptive names: `primary`, `secondary`, `active`, `disabled`, `hover`, `selected`

---

## Step 2: Rename Style Object

### Problem
The migration generates `_styles` with an underscore prefix.

### Solution
Rename `_styles` to `styles` throughout the file.

**Before:**
```jsx
import * as _stylex from "@stylexjs/stylex";
// ...
<div {..._stylex.props(_styles.container)}>

const _styles = _stylex.create({
```

**After:**
```jsx
import * as stylex from "@stylexjs/stylex";
// ...
<div {...stylex.props(styles.container)}>

const styles = stylex.create({
```

Also rename the import from `_stylex` to `stylex`.

---

## Step 3: Fix stylex.props() Ordering

### Problem
In StyleX, later styles override earlier ones in `stylex.props()`. Important/dynamic styles should come last.

### Solution
Reorder arguments so that:
1. Base styles come first
2. Conditional/variant styles come last (they override base styles)

**Before:**
```jsx
<div {...stylex.props(styles[variant], styles.base)}>
```

**After:**
```jsx
<div {...stylex.props(styles.base, styles[variant])}>
```

### Common Patterns

**Conditional styles should come last:**
```jsx
// Correct - isActive styles override base
<button {...stylex.props(styles.button, isActive && styles.active)}>

// Correct - variant overrides base
<div {...stylex.props(styles.card, styles[variant])}>

// Correct - prop-based style overrides base
<span {...stylex.props(styles.text, styles[size])}>
```

**Multiple conditions - order by specificity:**
```jsx
<button {...stylex.props(
  styles.button,           // base styles
  styles[variant],         // variant (primary, secondary, etc.)
  styles[size],            // size modifier
  isDisabled && styles.disabled,  // state (most specific, comes last)
)}>
```

---

## Step 4: Convert Remaining Tailwind Classes

### Problem
Some Tailwind classes may remain in the code, especially in:
- Template literals with complex logic
- Dynamically generated class names
- Third-party component props

### Solution
Manually convert remaining Tailwind classes to StyleX.

**Before:**
```jsx
<div className="flex items-center gap-4">
```

**After:**
```jsx
<div {...stylex.props(styles.flexRow)}>

// Add to styles:
const styles = stylex.create({
  flexRow: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
});
```

### Common Tailwind to StyleX Conversions

| Tailwind | StyleX |
|----------|--------|
| `flex` | `display: "flex"` |
| `flex-col` | `flexDirection: "column"` |
| `items-center` | `alignItems: "center"` |
| `justify-center` | `justifyContent: "center"` |
| `justify-between` | `justifyContent: "space-between"` |
| `gap-4` | `gap: "1rem"` |
| `p-4` | `padding: "1rem"` |
| `px-4` | `paddingInline: "1rem"` |
| `py-2` | `paddingBlock: "0.5rem"` |
| `m-4` | `margin: "1rem"` |
| `mx-auto` | `marginInline: "auto"` |
| `w-full` | `width: "100%"` |
| `h-screen` | `height: "100vh"` |
| `text-center` | `textAlign: "center"` |
| `text-lg` | `fontSize: "1.125rem"` |
| `font-bold` | `fontWeight: "700"` |
| `rounded-lg` | `borderRadius: "0.5rem"` |
| `shadow-md` | `boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"` |
| `bg-white` | `backgroundColor: "#fff"` |
| `text-gray-500` | `color: "#6b7280"` |
| `hover:bg-gray-100` | `backgroundColor: { default: null, ":hover": "#f3f4f6" }` |
| `transition-all` | `transitionProperty: "all"` |
| `duration-300` | `transitionDuration: "300ms"` |

---

## Step 5: Remove Unused Code

### Checklist
- [ ] Remove any unused style keys from the `stylex.create()` object
- [ ] Remove any leftover `className` props that are now empty
- [ ] Remove unused Tailwind utility functions (like `cn()` or `clsx()` if no longer needed)
- [ ] Remove Tailwind imports if present

---

## Step 6: Verify Responsive Styles

### StyleX Responsive Syntax
StyleX uses object syntax for responsive styles:

```jsx
const styles = stylex.create({
  container: {
    padding: "1rem",
    flexDirection: {
      default: "column",
      "@media (min-width: 768px)": "row",
    },
    fontSize: {
      default: "1rem",
      "@media (min-width: 1024px)": "1.25rem",
    },
  },
});
```

### Verify Media Query Format
Ensure media queries use the correct format:
- `@media (min-width: 640px)` for `sm:`
- `@media (min-width: 768px)` for `md:`
- `@media (min-width: 1024px)` for `lg:`
- `@media (min-width: 1280px)` for `xl:`
- `@media (min-width: 1536px)` for `2xl:`

---

## Step 7: Verify Pseudo-Class Styles

### StyleX Pseudo-Class Syntax
```jsx
const styles = stylex.create({
  button: {
    backgroundColor: {
      default: "#3b82f6",
      ":hover": "#2563eb",
      ":active": "#1d4ed8",
      ":focus": "#2563eb",
      ":disabled": "#9ca3af",
    },
    cursor: {
      default: "pointer",
      ":disabled": "not-allowed",
    },
  },
});
```

---

## Example: Complete Cleanup

### Before (migrated but not cleaned up):
```jsx
import * as _stylex from "@stylexjs/stylex";

export function Card({ variant, children }) {
  return (
    <div {..._stylex.props(_styles[variant], _styles.$1)}>
      <h2 {..._stylex.props(_styles.$2)}>{title}</h2>
      <p className="text-gray-500">{children}</p>
    </div>
  );
}

const _styles = _stylex.create({
  $1: {
    padding: "1.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "#fff",
  },
  $2: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  primary: {
    borderColor: "#3b82f6",
    borderWidth: "2px",
  },
  secondary: {
    borderColor: "#e5e7eb",
    borderWidth: "1px",
  },
});
```

### After (fully cleaned up):
```jsx
import * as stylex from "@stylexjs/stylex";

export function Card({ variant, children }) {
  return (
    <div {...stylex.props(styles.card, styles[variant])}>
      <h2 {...stylex.props(styles.title)}>{title}</h2>
      <p {...stylex.props(styles.description)}>{children}</p>
    </div>
  );
}

const styles = stylex.create({
  card: {
    padding: "1.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  description: {
    color: "#6b7280",
  },
  primary: {
    borderColor: "#3b82f6",
    borderWidth: "2px",
  },
  secondary: {
    borderColor: "#e5e7eb",
    borderWidth: "1px",
  },
});
```

---

## Checklist

- [ ] All `$1`, `$2`, etc. renamed to semantic names
- [ ] `_styles` renamed to `styles`
- [ ] `_stylex` renamed to `stylex`
- [ ] `stylex.props()` calls have base styles first, variants/conditionals last
- [ ] No remaining `className` props with Tailwind classes
- [ ] Responsive styles use correct `@media` syntax
- [ ] Pseudo-class styles use correct object syntax
- [ ] Unused styles removed
