'use client'

import { applyTheme } from '@/lib/theme'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  function toggle() {
    applyTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark')
  }

  // Which icon and label show is driven by the `dark` class via CSS, so the button is correct
  // from first paint without needing to know the theme during server rendering.
  return (
    <button
      type="button"
      onClick={toggle}
      className={`flex h-10 w-10 items-center justify-center rounded-lg border border-background-tertiary text-text-secondary transition-colors hover:border-accent-primary hover:text-accent-primary ${className}`}
    >
      <span className="dark:hidden">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
        </svg>
        <span className="sr-only">Switch to dark theme</span>
      </span>
      <span className="hidden dark:inline">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
        </svg>
        <span className="sr-only">Switch to light theme</span>
      </span>
    </button>
  )
}
