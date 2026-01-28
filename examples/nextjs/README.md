# Next.js + Tailwind-to-StyleX Example

This example demonstrates using `tailwind-to-stylex` with Next.js and the Babel plugin.

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

Open [http://localhost:3000](http://localhost:3000) to see the result.

## How it works

1. The `tailwind-to-stylex-sync.js` Babel plugin transforms Tailwind `className` attributes to StyleX
2. The `@stylexjs/babel-plugin` then compiles the StyleX code
3. The `@stylexjs/postcss-plugin` extracts the CSS

## Making local changes

Since this example uses `"tailwind-to-stylex": "file:../.."` in package.json, any changes you make to the `tailwind-to-stylex` source will be reflected after rebuilding the parent package:

```bash
# From the tw-to-stylex root directory
npm run build

# Then restart the dev server in this example
npm run dev
```
