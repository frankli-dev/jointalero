export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

// The server always renders the dark theme. This runs in <head> before first paint and switches to
// the visitor's saved choice, so returning light-theme visitors never see a dark flash.
export const themeInitScript = `(function () {
  try {
    if (localStorage.getItem('${THEME_STORAGE_KEY}') === 'light') {
      document.documentElement.classList.remove('dark')
    }
  } catch (e) {}
})()`

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); the theme still applies for this page.
  }
}
