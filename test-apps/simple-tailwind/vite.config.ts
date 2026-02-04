import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import stylexPlugin from '@stylexjs/babel-plugin'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            stylexPlugin,
            {
              dev: true,
              unstable_moduleResolution: {
                type: 'commonJS',
                rootDir: process.cwd(),
              },
            },
          ],
        ],
      },
    }),
    tailwindcss(),
  ],
  server: {
    port: 4001
  }
})
