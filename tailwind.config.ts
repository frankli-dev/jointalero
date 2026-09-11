import type { Config } from 'tailwindcss'

// Theme colours are CSS variables holding RGB channels (see globals.css), so they switch with the
// `dark` class on <html> and still support opacity modifiers such as bg-background-primary/90.
const themeColor = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          primary: themeColor('background-primary'),
          secondary: themeColor('background-secondary'),
          tertiary: themeColor('background-tertiary'),
        },
        text: {
          primary: themeColor('text-primary'),
          secondary: themeColor('text-secondary'),
          tertiary: themeColor('text-tertiary'),
        },
        accent: {
          primary: themeColor('accent-primary'),
          dark: themeColor('accent-dark'),
          light: themeColor('accent-light'),
        },
        category: {
          ai: themeColor('category-ai'),
          software: themeColor('category-software'),
          'non-tech': themeColor('category-non-tech'),
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
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(48px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'hero-zoom': {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-in-right': 'slide-in-right 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'hero-zoom': 'hero-zoom 2.4s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
