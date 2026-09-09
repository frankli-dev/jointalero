import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/data/config'
import { siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Talent Platform - Your Skills. Global Opportunities.',
    template: '%s | Talent Platform',
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  keywords: [
    'AI talent',
    'data annotation',
    'remote jobs',
    'technology jobs',
    'freelance projects',
    'AI workforce',
    'data labeling',
    'AI evaluation',
  ],
  openGraph: {
    title: 'Talent Platform - Your Skills. Global Opportunities.',
    description: siteConfig.description,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background-primary text-text-primary">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  )
}
