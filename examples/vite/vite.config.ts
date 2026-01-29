import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stylex from '@stylexjs/unplugin';
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Toggle: USE_TAILWIND=true to skip StyleX transform and use raw Tailwind CSS
const useRawTailwind = process.env.USE_TAILWIND === 'true';
const buildMode = useRawTailwind ? 'tailwind' : 'stylex';

// Import the sync wrapper from the main package
const tailwindToStylexSync = require('tailwind-to-stylex/sync').default;

export default defineConfig({
  define: {
    __VITE_BUILD_MODE__: JSON.stringify(buildMode),
  },
  plugins: useRawTailwind
    ? [
        // Raw Tailwind mode: just use React, Tailwind CSS handles the classes
        react(),
      ]
    : [
        // StyleX mode: transform Tailwind className to StyleX
        react({
          babel: {
            plugins: [tailwindToStylexSync],
          },
        }),
        // Unplugin handles StyleX compilation and CSS extraction
        stylex.vite({
          unstable_moduleResolution: {
            type: 'commonJS',
            rootDir: __dirname,
          },
        }),
      ],
});
