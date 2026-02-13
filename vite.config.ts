import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cloudpointsolution/',

  plugins: [react()],
  
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
