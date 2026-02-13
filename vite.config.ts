import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',   // ROOT for custom domain
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
