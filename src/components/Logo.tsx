import { useId } from 'react'
import { siteConfig } from '@/data/config'

type LogoProps = {
  className?: string
  showWordmark?: boolean
}

export function LogoMark({ className = 'h-9 w-auto' }: { className?: string }) {
  const id = useId()

  return (
    <svg viewBox="0 0 40 48" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-dot`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#818cf8" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id={`${id}-leaf`} x1="0.3" y1="0" x2="0.5" y2="1">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="0.55" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id={`${id}-stem`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#67e8f9" />
          <stop offset="1" stopColor="#22b8f0" />
        </linearGradient>
      </defs>
      <circle cx="27" cy="6" r="6" fill={`url(#${id}-dot)`} />
      <path
        d="M21 15C13 16.5 7 23 7 31.5C7 36.5 9 41 12.5 44C14 38.5 17 34.5 21 32.5Z"
        fill={`url(#${id}-leaf)`}
      />
      <path
        d="M21 15H31A2 2 0 0 1 33 17V32C33 39.7 26.7 46 19 46H11C16.5 46 21 41.5 21 36Z"
        fill={`url(#${id}-stem)`}
      />
    </svg>
  )
}

export default function Logo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <LogoMark />
      {showWordmark ? (
        <span className="text-2xl font-semibold tracking-tight text-text-primary">{siteConfig.logo}</span>
      ) : (
        <span className="sr-only">{siteConfig.logo}</span>
      )}
    </span>
  )
}
