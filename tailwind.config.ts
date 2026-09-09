import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0f172a',
          secondary: '#1a2332',
          tertiary: '#2d3748',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          tertiary: '#94a3b8',
        },
        accent: {
          primary: '#10b981',
          dark: '#059669',
          light: '#6ee7b7',
        },
        category: {
          ai: '#06b6d4',
          software: '#8b5cf6',
          'non-tech': '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
export default config
