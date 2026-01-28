# Vite + Tailwind-to-StyleX Example

This example demonstrates using `tailwind-to-stylex` with Vite and the `@stylexjs/unplugin`.

## Setup

From this directory:

```bash
npm install
```

This will install dependencies including the local `tailwind-to-stylex` package from the parent directory.

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the result.

## How it works

1. `@stylexjs/unplugin` handles the build integration
2. The `tailwind-to-stylex-sync.cjs` Babel plugin is passed via `babelConfig` and transforms Tailwind `className` attributes to StyleX before the StyleX plugin processes them
3. StyleX CSS is extracted and injected by unplugin

## Making local changes

Since this example uses `"tailwind-to-stylex": "file:../.."` in package.json, any changes you make to the `tailwind-to-stylex` source will be reflected after rebuilding the parent package:

```bash
# From the tw-to-stylex root directory
npm run build

# Then restart the dev server in this example
npm run dev
```
