import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-accent-primary/10 to-background-primary border-t border-background-tertiary">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Ready to Explore Your Next Opportunity?</h2>
          <p className="text-lg text-text-secondary mb-12">
            Whether you&apos;re a software engineer, researcher, writer, translator, evaluator, or
            simply someone with valuable experience, there may be an opportunity that fits your
            skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/opportunities" className="btn-primary">
              Explore Opportunities
            </Link>
            <Link href="/for-professionals" className="btn-secondary">
              Join the Talent Network
            </Link>
            <Link href="/for-companies" className="btn-secondary">
              Hire Talent
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
