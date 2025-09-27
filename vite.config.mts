import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Pet_portal/' : '/',  // Use base path only for production builds
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
}))
