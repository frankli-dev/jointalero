import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import PageHero from './PageHero'

interface LegalSection {
  heading: string
  body: string[]
}

interface LegalPageProps {
  title: string
  description: string
  lastUpdated: string
  // Pages still built from placeholders keep the template notice until their text is final.
  isTemplate?: boolean
  // Simple pages pass plain-paragraph sections; pages with lists and sub-headings pass children.
  sections?: LegalSection[]
  children?: ReactNode
}

export default function LegalPage({
  title,
  description,
  lastUpdated,
  isTemplate = false,
  sections,
  children,
}: LegalPageProps) {
  return (
    <main>
      <Navigation />

      <PageHero title={title} description={description} />

      <section className="section-padding bg-background-primary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {isTemplate && (
              <div className="bg-amber-500/10 border border-amber-500/40 rounded-lg p-6 mb-12">
                <p className="text-amber-900 dark:text-amber-200/90 text-sm">
                  <strong className="font-semibold">Template notice.</strong> This page is a
                  structural placeholder. It is not legal advice and does not yet reflect your
                  company&apos;s actual practices. Replace every bracketed placeholder and have the
                  final text reviewed by a qualified lawyer before publishing.
                </p>
              </div>
            )}

            <p className="text-text-tertiary text-sm mb-12">Last updated: {lastUpdated}</p>

            {sections && (
              <div className="space-y-10">
                {sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-xl md:text-2xl mb-4">{section.heading}</h2>
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-text-secondary mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {children && <div className="legal-prose">{children}</div>}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
