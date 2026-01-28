# Examples

This folder contains example applications demonstrating `tailwind-to-stylex` with different build tools.

## Available Examples

### [nextjs](./nextjs)

Next.js App Router example using the Babel plugin with postcss for CSS extraction.

### [vite](./vite)

Vite + React example using the Babel plugin through `@vitejs/plugin-react`.

## Getting Started

1. First, build the main `tailwind-to-stylex` package from the root:

   ```bash
   cd ..
   npm install
   npm run build
   ```

2. Then navigate to any example and install its dependencies:

   ```bash
   cd examples/nextjs  # or examples/vite
   npm install
   npm run dev
   ```

## Local Development

All examples use `"tailwind-to-stylex": "file:../.."` to reference the local package. When you make changes to `tailwind-to-stylex`:

1. Rebuild the package: `npm run build` (from root)
2. Restart the example dev server

Changes will be reflected immediately without needing to reinstall.
