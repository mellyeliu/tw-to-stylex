import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import stylexPlugin from '@stylexjs/babel-plugin'

export default defineConfig({
  plugins: [react({ babel: { plugins: [[stylexPlugin, { dev: true, unstable_moduleResolution: { type: 'commonJS', rootDir: process.cwd() } }]] } })],
  server: { port: 4013 }
})
