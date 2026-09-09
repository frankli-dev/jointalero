import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI and data operations, software development, quality and evaluation, talent matching, workforce support, and remote project teams.',
  alternates: { canonical: '/services' },
}

const services = [
  {
    title: 'AI & Data',
    description:
      'Human input for AI systems: evaluating model output, collecting feedback, annotating and labelling data, and checking dataset quality at scale.',
    useCases: ['LLM and model evaluation', 'Data annotation and labelling', 'Human feedback collection'],
    skills: ['AI model evaluation', 'Data annotation', 'Content evaluation', 'Data quality'],
  },
  {
    title: 'Software Development',
    description:
      'Engineers for product and platform work across the stack, from a single specialist to a full project team.',
    useCases: ['Product development', 'Platform and migration work', 'Automation and integrations'],
    skills: ['Frontend', 'Backend', 'Full-stack', 'Cloud', 'DevOps'],
  },
  {
    title: 'Quality & Evaluation',
    description:
      'Verification across products and datasets, covering both traditional QA and evaluation of AI-generated output.',
    useCases: ['Test automation', 'Manual QA', 'Dataset quality review'],
    skills: ['QA testing', 'Test automation', 'Quality assurance', 'Bug reporting'],
  },
  {
    title: 'Talent Matching',
    description:
      'Matching professionals to project requirements based on demonstrated skills, experience, languages, and availability.',
    useCases: ['Specialist sourcing', 'Role-specific matching', 'Skill gap coverage'],
    skills: ['Technical talent', 'Non-technical talent', 'Domain specialists'],
  },
  {
    title: 'Workforce Support',
    description:
      'Ongoing operational capacity for work that runs continuously rather than as a fixed-length project.',
    useCases: ['Ongoing data operations', 'Content review pipelines', 'Sustained evaluation work'],
    skills: ['Data review', 'Content review', 'Process consistency'],
  },
  {
    title: 'Remote Teams',
    description:
      'Distributed project teams assembled around the skills a piece of work needs, coordinated across time zones.',
    useCases: ['Short-term capacity surges', 'Project-based teams', 'Distributed delivery'],
    skills: ['Project coordination', 'Remote collaboration', 'Async communication'],
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Navigation />

      <PageHero
        title="Services"
        description="We support technology work that needs people: AI and data operations, software engineering, quality and evaluation, and the teams to run them."
      />

      <section className="section-padding bg-background-primary">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card flex flex-col">
                <h2 className="text-2xl mb-4">{service.title}</h2>
                <p className="text-text-secondary text-sm mb-6">{service.description}</p>

                <div className="mb-6">
                  <div className="text-xs text-text-tertiary mb-3">Typical use cases</div>
                  <ul className="space-y-2">
                    {service.useCases.map((useCase) => (
                      <li
                        key={useCase}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="text-accent-primary flex-shrink-0" aria-hidden="true">
                          ✓
                        </span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-xs text-text-tertiary mb-3">Skills involved</div>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-background-primary border border-background-tertiary rounded text-xs text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/for-companies#contact"
                  className="mt-auto text-accent-primary hover:text-accent-light text-sm font-semibold"
                >
                  Discuss this service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-secondary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Not sure which fits your project?</h2>
            <p className="text-lg text-text-secondary mb-10">
              Describe what you are trying to do and we will tell you what kind of team it needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/for-companies#contact" className="btn-primary">
                Talk to our team
              </Link>
              <Link href="/opportunities" className="btn-secondary">
                Browse opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
