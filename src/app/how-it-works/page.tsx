import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { homePageCopy } from '@/data/config'

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'How professionals find and complete projects, and how companies describe requirements and build teams.',
  alternates: { canonical: '/how-it-works' },
}

const professionalSteps = [
  {
    number: '01',
    title: 'Create your profile',
    description: 'Tell us about your skills, experience, languages, and availability.',
    detail:
      'The more accurate your availability, the better the match. There is no advantage to overstating how much time you have.',
  },
  {
    number: '02',
    title: 'Discover opportunities',
    description: 'Explore projects that match your profile and interests.',
    detail:
      'Every opportunity lists required skills, expected workload, compensation structure, and duration before you apply.',
  },
  {
    number: '03',
    title: 'Complete the work',
    description: 'Work on approved AI, data, or software projects.',
    detail:
      'Scope and terms are confirmed in writing before you begin. If something changes, it is agreed rather than assumed.',
  },
  {
    number: '04',
    title: 'Get paid',
    description: 'Receive compensation according to the agreed project terms.',
    detail:
      'Payment terms are defined per project and stated up front. We do not guarantee earnings or ongoing work.',
  },
]

const companySteps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description: 'Describe your project, required skills, timeline, and constraints.',
    detail: 'A rough scope is enough to start. We will ask about anything that affects team shape.',
  },
  {
    number: '02',
    title: 'We identify talent',
    description: 'We match professionals in our network to your requirements.',
    detail: 'Matching is based on demonstrated skills, relevant experience, languages, and availability.',
  },
  {
    number: '03',
    title: 'Build your team',
    description: 'Review and select the professionals you want to work with.',
    detail: 'You decide who joins. Team size can change as the work develops.',
  },
  {
    number: '04',
    title: 'Execute the project',
    description: 'Work with the team, track progress, and adjust scope as needed.',
    detail: 'We stay involved to handle workforce issues so you can focus on the work itself.',
  },
]

function StepList({
  steps,
}: {
  steps: { number: string; title: string; description: string; detail: string }[]
}) {
  return (
    <ol className="space-y-6">
      {steps.map((step) => (
        <li
          key={step.number}
          className="bg-background-primary border border-background-tertiary rounded-lg p-6 md:p-8"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="text-4xl font-bold text-accent-primary/25 flex-shrink-0">
              {step.number}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-text-secondary mb-3">{step.description}</p>
              <p className="text-text-tertiary text-sm">{step.detail}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function HowItWorksPage() {
  return (
    <main>
      <Navigation />

      <PageHero
        title="How it works"
        description="Two straightforward paths: one for professionals looking for work, one for companies building a team."
      />

      {/* Professionals */}
      <section id="professionals" className="section-padding bg-background-secondary scroll-mt-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <span className="text-accent-primary text-sm font-semibold uppercase tracking-wide">
                For professionals
              </span>
              <h2 className="mt-4 mb-6">From profile to payment</h2>
            </div>

            <StepList steps={professionalSteps} />

            <div className="mt-10 text-center">
              <Link href="/for-professionals#join" className="btn-primary">
                Create your profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section id="companies" className="section-padding bg-background-primary scroll-mt-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <span className="text-accent-primary text-sm font-semibold uppercase tracking-wide">
                For companies
              </span>
              <h2 className="mt-4 mb-6">From requirements to delivery</h2>
            </div>

            <StepList steps={companySteps} />

            <div className="mt-10 text-center">
              <Link href="/for-companies#contact" className="btn-primary">
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section-padding bg-background-secondary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">{homePageCopy.transparency.headline}</h2>
            <p className="text-lg text-text-secondary mb-10">{homePageCopy.transparency.body}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {homePageCopy.transparency.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1 flex-shrink-0" aria-hidden="true">
                    ✓
                  </span>
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-background-primary border border-background-tertiary rounded-lg p-8">
              <p className="text-text-secondary">
                <span className="text-accent-light font-semibold">No guaranteed earnings.</span> No
                hidden promises. Just clearly defined opportunities and clearly communicated terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
