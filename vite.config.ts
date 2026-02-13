import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    base: '/cloudpointsolution/',   //  VERY IMPORTANT for GitHub Pages
    
    plugins: [react()],
    
    server: {
      port: 3000,
      host: '0.0.0.0',
      strictPort: false,
    },
    
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'esbuild',
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
    
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
  }
})
