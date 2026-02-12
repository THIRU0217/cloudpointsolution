import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './App.tsx',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
          '950': '#020617',
        },
        orange: {
          '50': '#fef3f2',
          '100': '#fee4e2',
          '200': '#fecdca',
          '300': '#fda29b',
          '400': '#f97066',
          '500': '#f04438',
          '600': '#d92d20',
          '700': '#b42318',
          '800': '#912018',
          '900': '#55160c',
          '950': '#F26522',
        },
        blue: {
          '500': '#3b82f6',
          '600': '#2563eb',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'pulse-orange': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
