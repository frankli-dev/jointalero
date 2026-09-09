import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CompanyForm from '@/components/forms/CompanyForm'
import { homePageCopy } from '@/data/config'

export const metadata: Metadata = {
  title: 'Hire Talent',
  description:
    'Access skilled professionals for AI, data, software development, and technology projects. Build project-based remote teams.',
  alternates: { canonical: '/for-companies' },
}

const services = [
  {
    title: 'AI Workforce',
    description: 'AI evaluation, human feedback, and data operations run by trained professionals.',
    useCases: ['LLM evaluation', 'Human feedback collection', 'Model output review'],
  },
  {
    title: 'Software Engineering',
    description: 'Frontend, backend, full-stack, cloud, and DevOps professionals for project work.',
    useCases: ['Product development', 'Platform migration', 'Infrastructure work'],
  },
  {
    title: 'Quality & Testing',
    description: 'QA engineers and evaluators who verify quality across products and datasets.',
    useCases: ['Test automation', 'Manual QA', 'Data quality review'],
  },
  {
    title: 'Flexible Teams',
    description: 'Project-based and remote teams assembled around the skills your work needs.',
    useCases: ['Short-term surges', 'Ongoing operations', 'Specialist coverage'],
  },
]

const process = [
  {
    number: '01',
    title: 'Tell us what you need',
    description: 'Describe your project, required skills, timeline, and constraints.',
  },
  {
    number: '02',
    title: 'We identify talent',
    description: 'We match professionals in our network against your requirements.',
  },
  {
    number: '03',
    title: 'Build your team',
    description: 'Review and select the professionals you want to work with.',
  },
  {
    number: '04',
    title: 'Execute the project',
    description: 'Work with the team, track progress, and adjust scope as needed.',
  },
]

export default function ForCompaniesPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background-primary via-background-secondary to-background-primary">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="mb-6">{homePageCopy.companies.headline}</h1>
            <p className="text-lg text-text-secondary mb-10">
              {homePageCopy.companies.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary">
                {homePageCopy.companies.cta}
              </Link>
              <Link href="/services" className="btn-secondary">
                View our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background-primary">
        <div className="section-container">
          <div className="max-w-2xl mb-16">
            <h2 className="mb-6">What we can support</h2>
            <p className="text-text-secondary">
              We assemble professionals around the work you need done, whether that is a short
              engagement or ongoing operational support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card">
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-text-secondary text-sm mb-6">{service.description}</p>
                <div className="text-xs text-text-tertiary mb-3">Typical use cases</div>
                <ul className="space-y-2">
                  {service.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-accent-primary flex-shrink-0" aria-hidden="true">
                        ✓
                      </span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background-secondary">
        <div className="section-container">
          <div className="max-w-2xl mb-16">
            <h2 className="mb-6">How engagements work</h2>
            <p className="text-text-secondary">
              A straightforward process from first conversation to delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step) => (
              <div
                key={step.number}
                className="bg-background-primary border border-background-tertiary rounded-lg p-6"
              >
                <div className="text-4xl font-bold text-accent-primary/20 mb-4">{step.number}</div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-background-primary scroll-mt-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="mb-6">Talk to our team</h2>
              <p className="text-text-secondary">
                Tell us about your project and the skills you need. We will follow up by email to
                discuss scope and next steps.
              </p>
            </div>

            <div className="bg-background-secondary border border-background-tertiary rounded-lg p-6 md:p-10">
              <CompanyForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
