import Link from 'next/link'
import { homePageCopy } from '@/data/config'

const metrics = [
  { value: homePageCopy.metrics.projectsDelivered, label: 'Projects Delivered' },
  { value: homePageCopy.metrics.opportunities, label: 'Opportunities' },
  { value: homePageCopy.metrics.compensation, label: 'Compensation' },
  { value: homePageCopy.metrics.workType, label: 'Work Arrangements' },
]

export default function Hero() {
  return (
    <section className="flex items-center justify-center bg-gradient-to-br from-background-primary via-background-secondary to-background-primary pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="mb-8 inline-block">
            <span className="px-4 py-1.5 bg-background-secondary border border-accent-primary/30 rounded-full text-sm font-medium text-accent-light">
              ✓ Built around transparency and real opportunities
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-text-primary">
            Your Skills. <span className="gradient-text">Global Opportunities.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            {homePageCopy.hero.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link href="/opportunities" className="btn-primary">
              {homePageCopy.hero.cta1}
            </Link>
            <Link href="/for-professionals" className="btn-secondary">
              {homePageCopy.hero.cta2}
            </Link>
          </div>

          {/* Trust Metrics */}
          <div className="bg-background-secondary/50 border border-background-tertiary rounded-lg p-8 backdrop-blur-sm">
            <p className="text-text-tertiary text-sm mb-8">{homePageCopy.trustMessage}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-text-tertiary">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
