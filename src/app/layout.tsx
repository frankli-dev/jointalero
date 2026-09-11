import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/data/config'
import { siteUrl } from '@/lib/site'
import { themeInitScript } from '@/lib/theme'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
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
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // The init script may remove `dark` before hydration, hence suppressHydrationWarning.
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-background-primary text-text-primary">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  )
}
