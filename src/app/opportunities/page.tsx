import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import OpportunityGrid from '@/components/OpportunityGrid'
import { opportunities } from '@/data/opportunities'
import { OpportunityCategory } from '@/types'

export const metadata: Metadata = {
  title: 'Opportunities',
  description:
    'Explore AI, data, software development, and non-technical opportunities. Find projects that match your skills and availability.',
  alternates: { canonical: '/opportunities' },
}

const validCategories: OpportunityCategory[] = ['ai-data', 'software', 'non-tech', 'qa']

interface PageProps {
  searchParams: { category?: string }
}

export default function OpportunitiesPage({ searchParams }: PageProps) {
  const requested = searchParams.category
  const initialCategory =
    requested && validCategories.includes(requested as OpportunityCategory)
      ? (requested as OpportunityCategory)
      : 'all'

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background-primary via-background-secondary to-background-primary">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="mb-6">Explore Opportunities</h1>
            <p className="text-lg text-text-secondary">
              Browse projects across AI, data, software development, and non-technical work. Filter by
              category, experience level, and skills to find opportunities that fit your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section-padding bg-background-primary">
        <div className="section-container">
          <OpportunityGrid opportunities={opportunities} initialCategory={initialCategory} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
