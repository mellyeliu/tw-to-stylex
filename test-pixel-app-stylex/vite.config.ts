import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import styleX from '@stylexjs/unplugin';
import path from 'path';
export default defineConfig({
  plugins: [styleX.vite({
    useCSSLayers: false,
    dev: process.env.NODE_ENV === 'development',
    runtimeInjection: false
  }), react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    target: 'esnext',
    outDir: 'build'
  },
  server: {
    port: 3001,
    open: true
  }
});