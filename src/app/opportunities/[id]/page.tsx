import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { opportunities } from '@/data/opportunities'
import { capitalize, formatCompensation } from '@/lib/format'

interface PageProps {
  params: { id: string }
}

export function generateStaticParams() {
  return opportunities.map((opportunity) => ({ id: opportunity.id }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const opportunity = opportunities.find((o) => o.id === params.id)

  if (!opportunity) {
    return { title: 'Opportunity Not Found' }
  }

  return {
    title: opportunity.title,
    description: opportunity.description,
    alternates: { canonical: `/opportunities/${opportunity.id}` },
    openGraph: {
      title: opportunity.title,
      description: opportunity.description,
      type: 'website',
    },
  }
}

const categoryLabels: Record<string, string> = {
  'ai-data': 'AI & Data',
  software: 'Software Development',
  'non-tech': 'Non-Technical',
  qa: 'QA & Testing',
}

export default function OpportunityDetailPage({ params }: PageProps) {
  const opportunity = opportunities.find((o) => o.id === params.id)

  if (!opportunity) {
    notFound()
  }

  const relatedOpportunities = opportunities
    .filter((o) => o.category === opportunity.category && o.id !== opportunity.id)
    .slice(0, 3)

  const details = [
    { label: 'Work arrangement', value: opportunity.workArrangement },
    { label: 'Location', value: opportunity.remote ? 'Remote' : opportunity.location },
    { label: 'Engagement type', value: capitalize(opportunity.type) },
    { label: 'Experience level', value: capitalize(opportunity.experienceLevel) },
    { label: 'Duration', value: opportunity.duration },
    {
      label: 'Expected workload',
      value: opportunity.estimatedHours ? `~${opportunity.estimatedHours} hours total` : 'Varies by project',
    },
    { label: 'Compensation', value: formatCompensation(opportunity.compensation) },
    { label: 'Application deadline', value: opportunity.deadline },
  ]

  return (
    <main>
      <Navigation />

      {/* Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary">
        <div className="section-container">
          <Link
            href="/opportunities"
            className="inline-block text-text-tertiary hover:text-accent-primary text-sm mb-8"
          >
            ← Back to all opportunities
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold border border-accent-primary/30 bg-accent-primary/10 text-accent-light">
                {categoryLabels[opportunity.category]}
              </span>
              {opportunity.remote && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold border border-background-tertiary text-text-secondary">
                  Remote
                </span>
              )}
              <span className="px-3 py-1 rounded-full text-xs font-semibold border border-background-tertiary text-text-secondary capitalize">
                {opportunity.status}
              </span>
            </div>

            <h1 className="mb-6">{opportunity.title}</h1>
            <p className="text-lg text-text-secondary">{opportunity.overview}</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-padding bg-background-primary">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl mb-6">Responsibilities</h2>
                <ul className="space-y-3">
                  {opportunity.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-accent-primary mt-1 flex-shrink-0">✓</span>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl mb-6">Required skills</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {opportunity.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-background-secondary border border-background-tertiary rounded-lg text-sm text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3">
                  {opportunity.requirements.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-accent-primary mt-1 flex-shrink-0">✓</span>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {opportunity.preferences && opportunity.preferences.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl mb-6">Preferred qualifications</h2>
                  <ul className="space-y-3">
                    {opportunity.preferences.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-text-tertiary mt-1 flex-shrink-0">+</span>
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="text-2xl md:text-3xl mb-6">Application process</h2>
                <ol className="space-y-4">
                  {[
                    'Submit your application with your profile and relevant experience.',
                    'We review your background against the project requirements.',
                    'Qualified candidates are contacted to discuss scope and terms.',
                    'Agreed terms are confirmed in writing before work begins.',
                  ].map((step, index) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-background-secondary border border-background-tertiary flex items-center justify-center text-sm font-semibold text-accent-primary">
                        {index + 1}
                      </span>
                      <span className="text-text-secondary pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-background-secondary border border-background-tertiary rounded-lg p-6">
                <p className="text-text-tertiary text-sm">
                  Compensation and availability may vary by project and eligibility. Final terms are
                  confirmed in writing before any work begins.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-background-secondary border border-background-tertiary rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-6">Opportunity details</h3>
                  <dl className="space-y-4">
                    {details.map((detail) => (
                      <div key={detail.label}>
                        <dt className="text-xs text-text-tertiary mb-1">{detail.label}</dt>
                        <dd className="text-sm text-text-secondary font-medium">{detail.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <Link
                    href={`/apply?opportunity=${opportunity.id}`}
                    className="btn-primary w-full text-center block mt-8"
                  >
                    Apply for this opportunity
                  </Link>
                </div>

                <div className="bg-background-secondary border border-background-tertiary rounded-lg p-6">
                  <h3 className="text-base font-bold mb-3">Not sure if you qualify?</h3>
                  <p className="text-text-tertiary text-sm mb-4">
                    Requirements vary by project. If you are unsure whether your background fits, join
                    the network and we will help you find suitable opportunities.
                  </p>
                  <Link
                    href="/for-professionals"
                    className="text-accent-primary hover:text-accent-light text-sm font-semibold"
                  >
                    Join the talent network →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedOpportunities.length > 0 && (
        <section className="section-padding bg-background-secondary">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl mb-10">Similar opportunities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedOpportunities.map((related) => (
                <Link
                  key={related.id}
                  href={`/opportunities/${related.id}`}
                  className="bg-background-primary border border-background-tertiary rounded-lg p-6 hover:border-accent-primary transition-colors"
                >
                  <h3 className="text-lg font-bold mb-3">{related.title}</h3>
                  <p className="text-text-tertiary text-sm mb-4">{related.description}</p>
                  <span className="text-accent-primary text-sm font-semibold">View details →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
