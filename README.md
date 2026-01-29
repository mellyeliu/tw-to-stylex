# tailwind-to-stylex

A Babel plugin that transforms Tailwind CSS class names to StyleX at build time.

Write familiar Tailwind syntax, get optimized StyleX output.

## Installation

```bash
npm install tailwind-to-stylex
```

## Usage

### Vite

```js
// vite.config.ts
import react from '@vitejs/plugin-react';
import stylex from '@stylexjs/unplugin';
import tailwindToStylexSync from 'tailwind-to-stylex/sync';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [tailwindToStylexSync],
      },
    }),
    stylex.vite({
      unstable_moduleResolution: { type: 'commonJS', rootDir: __dirname },
    }),
  ],
});
```

### Next.js

```js
// babel.config.js
const tailwindToStylexSync = require('tailwind-to-stylex/sync').default;

module.exports = {
  presets: ['next/babel'],
  plugins: [
    tailwindToStylexSync,
    ['@stylexjs/babel-plugin', { dev: process.env.NODE_ENV !== 'production' }],
  ],
};
```

## What It Does

Transforms this:
```jsx
<div className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100">
```

Into this:
```jsx
import * as _stylex from "@stylexjs/stylex";

<div {..._stylex.props(styles.$1)} />

const styles = _stylex.create({
  $1: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    backgroundColor: { default: null, ":hover": "#f3f4f6" },
  },
});
```

## Supported Tailwind Features

### ✅ Fully Supported

| Feature | Example | Notes |
|---------|---------|-------|
| **Utility classes** | `flex`, `p-4`, `text-red-500` | All standard utilities |
| **Responsive prefixes** | `md:flex`, `lg:hidden` | All breakpoints |
| **Pseudo-classes** | `hover:`, `focus:`, `active:` | Standard pseudo-classes |
| **Pseudo-elements** | `before:`, `after:`, `placeholder:` | Via StyleX pseudo syntax |
| **Dark mode** | `dark:bg-gray-900` | Via media query |
| **Arbitrary values** | `w-[200px]`, `text-[#1a2b3c]` | Bracket notation |
| **Negative values** | `-mt-4`, `-translate-x-1/2` | Negative prefix |
| **Opacity modifiers** | `bg-black/50`, `text-white/75` | Color opacity |
| **CSS variables** | `text-[var(--my-color)]` | Custom properties |
| **Conditional classes** | `{cond ? 'flex' : 'hidden'}` | Ternary in className |
| **Logical expressions** | `{isActive && 'bg-blue-500'}` | && operator |
| **cn()/twMerge()** | `cn('base', props.className)` | Class merging utilities |
| **Template literals** | `` `flex ${cond ? 'a' : 'b'}` `` | With conditionals |

### ⚠️ Partial Support (Requires Workarounds)

| Feature | Tailwind | StyleX Equivalent | Status |
|---------|----------|-------------------|--------|
| **Group hover** | `group-hover:text-blue-500` | `stylex.when.ancestor(':hover')` | Needs marker |
| **Peer states** | `peer-checked:bg-blue-500` | `stylex.when.siblingBefore(':checked')` | Needs marker |
| **Container queries** | `@container`, `@lg:flex` | Supported via `@container` at-rule | Manual setup |
| **Motion preferences** | `motion-reduce:`, `motion-safe:` | `@media (prefers-reduced-motion)` | Manual |
| **Print styles** | `print:hidden` | `@media print` | Manual |
| **Portrait/Landscape** | `portrait:`, `landscape:` | `@media (orientation: ...)` | Manual |

### ❌ Not Supported (StyleX Limitations)

| Feature | Tailwind | Why Not Supported |
|---------|----------|-------------------|
| **!important** | `!text-red-500` | StyleX intentionally doesn't support !important |
| **Direct child selector** | `[&>*]:p-2` | StyleX atomic CSS doesn't support element relationships |
| **Descendant selector** | `[&_.child]:text-red` | Same - no descendant selectors in atomic CSS |
| **Sibling combinator** | `[&+div]:mt-4` | No adjacent sibling selectors |
| **:has() selector** | `has-[img]:p-0` | Limited browser support, not in StyleX |
| **:where()/:is()** | `[&:where(.foo)]:` | Not supported in StyleX |
| **Arbitrary variants** | `[@supports(...)]:` | Use manual `@supports` in StyleX |
| **Attribute selectors** | `[&[data-active]]:` | Use `stylex.when.*` with markers instead |

## Interop: Tailwind → StyleX Patterns

### Group/Peer → stylex.when.*

**Tailwind:**
```jsx
<div className="group">
  <span className="group-hover:text-blue-500">Hover parent</span>
</div>
```

**StyleX equivalent:**
```jsx
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  child: {
    color: {
      default: 'black',
      [stylex.when.ancestor(':hover')]: 'blue',
    },
  },
});

<div {...stylex.props(stylex.defaultMarker())}>
  <span {...stylex.props(styles.child)}>Hover parent</span>
</div>
```

### Arbitrary Selectors → Manual Styles

**Tailwind (not supported):**
```jsx
<ul className="[&>li]:p-2 [&>li:first-child]:pt-0">
```

**StyleX approach:**
```jsx
// Style the children directly instead
<ul>
  <li {...stylex.props(styles.listItem, isFirst && styles.firstItem)}>
```

### Keyframe Animations

**Tailwind:**
```jsx
<div className="animate-pulse" />
```

**StyleX:**
```jsx
const pulse = stylex.keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.5 },
});

const styles = stylex.create({
  pulse: {
    animationName: pulse,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
  },
});
```

## Examples

See the `/examples` directory for working setups:

- **Vite**: `examples/vite/`
- **Next.js**: `examples/nextjs/`

### Compare StyleX vs Tailwind Output

Both examples support toggling between StyleX and raw Tailwind:

```bash
# StyleX mode (default)
npm run dev

# Raw Tailwind mode (for comparison)
npm run dev:tailwind

# Run both side-by-side
npm run dev:compare
```

## Roadmap / TODOs

### High Priority

- [x] **CLI codemod tool** - One-time migration of existing Tailwind codebases
  ```bash
  npx tailwind-to-stylex migrate ./src
  ```
- [ ] **Test suite** - Comprehensive tests for all Tailwind utilities
- [ ] **!important handling** - Warn or strip `!` prefix with helpful error

### Medium Priority

- [ ] **`group-*` / `peer-*` auto-conversion** - Detect and convert to `stylex.when.*`
- [ ] **Arbitrary variant warnings** - Helpful errors for unsupported `[&...]` selectors
- [ ] **Animation/keyframes** - Auto-extract `animate-*` to `stylex.keyframes()`
- [ ] **RTL/LTR support** - Map `rtl:` / `ltr:` to StyleX logical properties

### Lower Priority

- [ ] **Custom `tw()` function** - Runtime helper similar to `stylex.atom()`
- [ ] **Babel plugin for `style:x={}`** - Alternative syntax instead of spread
- [ ] **VS Code extension** - Inline preview of StyleX output
- [ ] **Source maps** - Better debugging experience

### Known Issues

- [ ] **Shadow + ring combination** - Using both `shadow-*` and `ring-*` on the same element doesn't work correctly. Both utilities set the `box-shadow` property, so the last one wins. Tailwind 4 composes these using CSS custom properties (`--tw-shadow`, `--tw-ring-shadow`), but since StyleX generates atomic styles, only one `box-shadow` value can be applied. Workaround: use a single combined shadow value via arbitrary syntax `shadow-[...]`.
- [ ] Multiple `stylex.create` calls may be inserted if file already has one
- [ ] Template literals with dynamic expressions (not string literals) are skipped
- [ ] Some edge cases with complex nested media queries

## Architecture

```
src/
├── index.js          # Main async Babel plugin
├── sync.js           # Sync wrapper for build tools
├── plugin-core.js    # Core transformation logic
├── classes-to-css.js # Tailwind compiler integration
├── helpers.js        # CSS → JSS conversion
├── cheatsheet.js     # Tailwind class mappings
└── tw-to-stylex.js   # CLI entry point
```

## Contributing

1. Clone the repo
2. `npm install`
3. `npm run build`
4. Test with examples: `cd examples/vite && npm install && npm run dev`

## License

MIT
