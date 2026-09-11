import Link from 'next/link'
import { homePageCopy } from '@/data/config'

export default function AudienceCards() {
  const audiences = [
    {
      title: homePageCopy.audiences.technical.title,
      description: homePageCopy.audiences.technical.description,
      cta: homePageCopy.audiences.technical.cta,
      href: '/for-professionals#technical',
      color: 'from-blue-600/20 to-blue-400/10',
      accent: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: homePageCopy.audiences.nonTechnical.title,
      description: homePageCopy.audiences.nonTechnical.description,
      cta: homePageCopy.audiences.nonTechnical.cta,
      href: '/for-professionals#non-technical',
      color: 'from-amber-600/20 to-amber-400/10',
      accent: 'text-amber-700 dark:text-amber-400',
    },
    {
      title: homePageCopy.audiences.companies.title,
      description: homePageCopy.audiences.companies.description,
      cta: homePageCopy.audiences.companies.cta,
      href: '/for-companies',
      color: 'from-purple-600/20 to-purple-400/10',
      accent: 'text-purple-600 dark:text-purple-400',
    },
  ]

  return (
    <section className="section-padding bg-background-primary">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="mb-4">Who Is This For?</h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            We serve professionals and companies across every skill level and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className={`card bg-gradient-to-br ${audience.color} flex flex-col`}
            >
              <h3 className={`${audience.accent} mb-4`}>{audience.title}</h3>
              <p className="text-text-secondary mb-6">{audience.description}</p>
              <Link
                href={audience.href}
                className="mt-auto inline-block text-accent-primary hover:text-accent-light transition-colors font-semibold"
              >
                {audience.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
