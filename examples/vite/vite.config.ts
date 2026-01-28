import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stylex from '@stylexjs/unplugin';
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const tailwindToStylexSync = require('./tailwind-to-stylex-sync.cjs');

export default defineConfig({
  plugins: [
    // First: transform Tailwind className to StyleX via @vitejs/plugin-react's babel
    react({
      babel: {
        plugins: [tailwindToStylexSync],
      },
    }),
    // Second: unplugin handles StyleX compilation and CSS extraction
    stylex.vite({
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: __dirname,
      },
    }),
  ],
});
