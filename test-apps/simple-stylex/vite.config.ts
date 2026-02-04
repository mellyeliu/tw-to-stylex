import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import styleXUnplugin from '@stylexjs/unplugin';
export default defineConfig({
  plugins: [react(), styleXUnplugin.vite({
    dev: true,
    unstable_moduleResolution: {
      type: 'commonJS',
      rootDir: process.cwd()
    }
  })],
  server: {
    port: 4011
  }
});