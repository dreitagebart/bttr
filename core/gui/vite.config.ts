import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'main.html'),
        splash: resolve(__dirname, 'splash.html'),
        logon: resolve(__dirname, 'logon.html')
      }
    }
  },
  plugins: [react()],
  clearScreen: false,
  server: {
    port: 4200,
    strictPort: true
  },
  envPrefix: [
    'VITE_',
    'TAURI_PLATFORM',
    'TAURI_ARCH',
    'TAURI_FAMILY',
    'TAURI_PLATFORM_VERSION',
    'TAURI_PLATFORM_TYPE',
    'TAURI_DEBUG'
  ]
  // build: {
  //   // Tauri uses Chromium on Windows and WebKit on macOS and Linux
  //   target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
  //   // don't minify for debug builds
  //   minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
  //   // produce sourcemaps for debug builds
  //   sourcemap: !!process.env.TAURI_DEBUG
  // }
}))
