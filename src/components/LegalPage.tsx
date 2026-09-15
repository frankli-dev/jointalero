import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import PageHero from './PageHero'

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

interface LegalPageProps {
  title: string
  description: string
  lastUpdated: string
  // The policy text: h2/h3 headings, paragraphs and LegalList bullets, styled by .legal-prose.
  children: ReactNode
}

export default function LegalPage({ title, description, lastUpdated, children }: LegalPageProps) {
  return (
    <main>
      <Navigation />

      <PageHero title={title} description={description} />

      <section className="section-padding bg-background-primary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <p className="text-text-tertiary text-sm mb-12">Last updated: {lastUpdated}</p>

            <div className="legal-prose">{children}</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
