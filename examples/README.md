# Examples

This folder contains example applications demonstrating `tailwind-to-stylex` with different build tools, as well as a StyleX component library that can be imported by other apps.

## Available Examples

### [stylex-components](./stylex-components)

A StyleX component library package that exports reusable UI components:
- **Button** - Primary, secondary, danger, ghost variants with sm/md/lg sizes
- **Card** - With CardHeader, CardBody, CardFooter subcomponents
- **Badge** - Blue, green, red, yellow, gray color variants
- **Input** - With label, helper text, and error states
- **Alert** - Info, success, warning, error variants
- **Spinner** - Animated loading indicator

This library can be imported by any app that has the StyleX babel plugin configured.

### [nextjs](./nextjs)

Next.js App Router example that:
- Uses the Babel plugin with postcss for CSS extraction
- Imports and uses `@examples/stylex-components`
- Demonstrates StyleX components alongside Tailwind utility classes
- Supports both StyleX mode and Tailwind mode via environment variables

### [vite](./vite)

Vite + React example using the Babel plugin through `@vitejs/plugin-react`.

### [tailwind-with-stylex-components](./tailwind-with-stylex-components)

A pure Tailwind v4 application that:
- Uses Tailwind for layout and general styling
- Imports `@examples/stylex-components` for UI components
- Has the StyleX babel plugin configured to compile component styles
- Demonstrates how Tailwind and StyleX can coexist seamlessly

## Getting Started

1. First, build the main `tailwind-to-stylex` package from the root:

   ```bash
   cd ..
   npm install
   npm run build
   ```

2. Install the StyleX components library:

   ```bash
   cd examples/stylex-components
   npm install
   ```

3. Then navigate to any example and install its dependencies:

   ```bash
   cd examples/nextjs  # or examples/vite or examples/tailwind-with-stylex-components
   npm install
   npm run dev
   ```

## Ports

- `nextjs`: http://localhost:3000 (StyleX mode) / http://localhost:3001 (Tailwind mode)
- `vite`: http://localhost:5173 (StyleX mode) / http://localhost:5174 (Tailwind mode)
- `tailwind-with-stylex-components`: http://localhost:5175

## Local Development

All examples use local file references:
- `"tailwind-to-stylex": "file:../.."` - references the main package
- `"@examples/stylex-components": "file:../stylex-components"` - references the component library

When you make changes:

1. Rebuild the package: `npm run build` (from root)
2. Restart the example dev server

Changes will be reflected immediately without needing to reinstall.
