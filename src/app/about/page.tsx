import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'About',
  description:
    'We connect people, projects, and technology through practical skill-based matching across AI, data, software, and non-technical work.',
  alternates: { canonical: '/about' },
}

const beliefs = [
  {
    title: 'Skills matter more than titles',
    body: 'What someone can actually do is a better signal than the job title they happen to hold.',
  },
  {
    title: 'Opportunity should be transparent',
    body: 'People should understand requirements, workload, and compensation before committing their time.',
  },
  {
    title: 'Technology needs diverse perspectives',
    body: 'AI and data work benefits from people with different languages, backgrounds, and domain knowledge.',
  },
  {
    title: 'Professionals deserve clarity',
    body: 'Vague promises waste people’s time. Clear terms let people make informed decisions.',
  },
  {
    title: 'Companies need flexible access to talent',
    body: 'Project work changes shape. Teams should be able to scale around what the work actually requires.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      <PageHero
        title="Connecting skills with global technology work."
        description="We help professionals find technology opportunities that match what they already know, and help companies build teams around the skills their projects need."
      />

      {/* Mission */}
      <section className="section-padding bg-background-primary">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="mb-6">Our mission</h2>
            <p className="text-lg text-text-secondary mb-6">
              Make global technology opportunities more accessible to people with valuable skills.
            </p>
            <p className="text-text-secondary">
              The technology industry needs far more than engineers. AI and data projects depend on
              people who can evaluate language, research topics accurately, review content carefully,
              and apply professional judgment. Those skills are widespread, but the opportunities that
              need them are often hard to find and harder to assess.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="section-padding bg-background-secondary">
        <div className="section-container">
          <div className="max-w-2xl mb-16">
            <h2 className="mb-6">What we believe</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((belief) => (
              <div
                key={belief.title}
                className="bg-background-primary border border-background-tertiary rounded-lg p-6"
              >
                <h3 className="text-lg font-bold mb-3">{belief.title}</h3>
                <p className="text-text-secondary text-sm">{belief.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-background-primary">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="mb-6">Our approach</h2>
            <p className="text-lg text-text-secondary mb-8">
              We connect people, projects, and technology through practical skill-based matching.
            </p>
            <p className="text-text-secondary mb-6">
              For professionals, that means looking at what you can do and how much time you have,
              then pointing you toward work that realistically fits. If you are unsure where your
              background applies, we help you work that out rather than leaving you to guess.
            </p>
            <p className="text-text-secondary mb-10">
              For companies, it means assembling people around the specific requirements of a project
              rather than forcing the work to fit a fixed team shape.
            </p>

            <div className="bg-background-secondary border border-background-tertiary rounded-lg p-8">
              <h3 className="text-lg font-bold mb-3">On partnerships and claims</h3>
              <p className="text-text-secondary text-sm">
                Professionals in our network have experience with a range of leading AI and technology
                platforms. We do not claim formal partnerships, certifications, or endorsements that
                have not been verified, and we do not publish testimonials or metrics we cannot
                substantiate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-accent-primary/10 to-background-primary border-t border-background-tertiary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Work with us</h2>
            <p className="text-lg text-text-secondary mb-10">
              Whether you are looking for your next project or building a team, we are glad to talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/for-professionals#join" className="btn-primary">
                Join the talent network
              </Link>
              <Link href="/for-companies#contact" className="btn-secondary">
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
