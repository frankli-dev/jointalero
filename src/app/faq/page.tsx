import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Accordion from '@/components/Accordion'
import { faqSections } from '@/data/faq'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers about opportunities, eligibility, compensation, remote work, and how the talent network operates.',
  alternates: { canonical: '/faq' },
}

export default function FaqPage() {
  return (
    <main>
      <Navigation />

      <PageHero
        title="Frequently asked questions"
        description="Straight answers about how opportunities work, who they are for, and how compensation is handled."
      />

      <section className="section-padding bg-background-primary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto space-y-16">
            {faqSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl md:text-3xl mb-8">{section.title}</h2>
                <Accordion items={section.items} />
              </div>
            ))}

            <div className="bg-background-secondary border border-background-tertiary rounded-lg p-8 text-center">
              <h3 className="text-xl mb-3">Still have a question?</h3>
              <p className="text-text-secondary mb-6">
                If your question is not answered here, get in touch and we will respond directly.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
