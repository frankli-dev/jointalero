import Link from 'next/link'
import { homePageCopy } from '@/data/config'

export default function NotAnEngineer() {
  return (
    <section className="section-padding bg-gradient-to-br from-background-secondary to-background-primary">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">{homePageCopy.notAnEngineer.headline}</h2>
          <p className="text-xl text-text-secondary mb-8">
            {homePageCopy.notAnEngineer.subheadline}
          </p>
          <p className="text-text-secondary">{homePageCopy.notAnEngineer.body}</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {homePageCopy.notAnEngineer.skills.map((skill) => (
            <div
              key={skill}
              className="bg-background-primary border border-background-tertiary rounded-lg px-4 py-5 text-center hover:border-accent-primary transition-colors"
            >
              <span className="text-text-secondary font-medium text-sm">{skill}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/opportunities?category=non-tech" className="btn-primary">
            {homePageCopy.notAnEngineer.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
