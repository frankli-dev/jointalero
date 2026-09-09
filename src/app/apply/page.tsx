import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ApplicationForm from '@/components/forms/ApplicationForm'
import { opportunities } from '@/data/opportunities'

export const metadata: Metadata = {
  title: 'Apply',
  description: 'Apply for an opportunity that matches your skills, experience, and availability.',
  alternates: { canonical: '/apply' },
}

interface PageProps {
  searchParams: { opportunity?: string }
}

export default function ApplyPage({ searchParams }: PageProps) {
  const opportunity = opportunities.find((o) => o.id === searchParams.opportunity)

  return (
    <main>
      <Navigation />

      <section className="section-padding bg-gradient-to-br from-background-primary via-background-secondary to-background-primary">
        <div className="section-container">
          <div className="max-w-3xl">
            {opportunity ? (
              <>
                <Link
                  href={`/opportunities/${opportunity.id}`}
                  className="inline-block text-text-tertiary hover:text-accent-primary text-sm mb-8"
                >
                  ← Back to opportunity
                </Link>
                <h1 className="mb-6">Apply: {opportunity.title}</h1>
                <p className="text-lg text-text-secondary">{opportunity.description}</p>
              </>
            ) : (
              <>
                <h1 className="mb-6">Apply for an opportunity</h1>
                <p className="text-lg text-text-secondary">
                  Choose an opportunity to apply for, or create a general profile and we will match
                  you with suitable projects.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-primary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {opportunity ? (
              <div className="bg-background-secondary border border-background-tertiary rounded-lg p-6 md:p-10">
                <ApplicationForm
                  opportunityId={opportunity.id}
                  opportunityTitle={opportunity.title}
                />
              </div>
            ) : (
              <div className="bg-background-secondary border border-background-tertiary rounded-lg p-10 text-center">
                <h2 className="text-2xl mb-4">No opportunity selected</h2>
                <p className="text-text-secondary mb-8">
                  Browse open opportunities to find one that fits your skills, or join the talent
                  network and we will help you find a match.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/opportunities" className="btn-primary">
                    Browse opportunities
                  </Link>
                  <Link href="/for-professionals#join" className="btn-secondary">
                    Create your profile
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
