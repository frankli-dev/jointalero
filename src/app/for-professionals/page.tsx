import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import RegistrationForm from '@/components/forms/RegistrationForm'
import { homePageCopy, skillsByCategory } from '@/data/config'

export const metadata: Metadata = {
  title: 'For Professionals',
  description:
    'Find AI, data, software, and non-technical opportunities that match your skills, experience, and availability. Join the talent network.',
  alternates: { canonical: '/for-professionals' },
}

export default function ForProfessionalsPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background-primary via-background-secondary to-background-primary">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="mb-6">Find work that fits your skills and your schedule.</h1>
            <p className="text-lg text-text-secondary mb-10">
              Technology projects need more than engineers. Whether you write code, evaluate content,
              translate, research, or bring deep domain knowledge, there may be an opportunity that
              fits what you already know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/opportunities" className="btn-primary">
                Explore opportunities
              </Link>
              <Link href="#join" className="btn-secondary">
                Create your profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical */}
      <section id="technical" className="section-padding bg-background-primary scroll-mt-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="text-accent-primary text-sm font-semibold uppercase tracking-wide">
                Technical professionals
              </span>
              <h2 className="mt-4 mb-6">{homePageCopy.technical.headline}</h2>
              <p className="text-text-secondary mb-8">
                Developers, engineers, QA specialists, DevOps professionals, and data engineers work
                with us on project-based engagements with defined scope and terms.
              </p>
              <Link href="/opportunities" className="btn-primary">
                {homePageCopy.technical.cta}
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {homePageCopy.technical.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="bg-background-secondary border border-background-tertiary rounded-lg p-5"
                >
                  <span className="text-accent-primary text-sm" aria-hidden="true">
                    ✓
                  </span>
                  <p className="text-text-secondary text-sm mt-2">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-background-tertiary">
            <h3 className="mb-6">Common technical skills we work with</h3>
            <div className="flex flex-wrap gap-2">
              {[...skillsByCategory.software, ...skillsByCategory.qa].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-background-secondary border border-background-tertiary rounded-lg text-sm text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Non-technical */}
      <section
        id="non-technical"
        className="section-padding bg-background-secondary scroll-mt-16"
      >
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <span className="text-accent-primary text-sm font-semibold uppercase tracking-wide">
              Non-technical professionals
            </span>
            <h2 className="mt-4 mb-6">{homePageCopy.notAnEngineer.headline}</h2>
            <p className="text-lg text-text-secondary mb-4">
              {homePageCopy.notAnEngineer.subheadline}
            </p>
            <p className="text-text-secondary">{homePageCopy.notAnEngineer.body}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {skillsByCategory['non-tech'].map((skill) => (
              <div
                key={skill}
                className="bg-background-primary border border-background-tertiary rounded-lg p-5 text-center"
              >
                <span className="text-text-secondary text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>

          <Link href="/opportunities" className="btn-primary">
            {homePageCopy.notAnEngineer.cta}
          </Link>
        </div>
      </section>

      {/* Support */}
      <section className="section-padding bg-background-primary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6">{homePageCopy.timeStrategy.headline}</h2>
            <p className="text-lg text-text-secondary mb-4">{homePageCopy.timeStrategy.body1}</p>
            <p className="text-text-secondary">{homePageCopy.timeStrategy.body2}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'We help you place your skills',
                body: 'If you are unsure where you fit, we look at your background and point you toward categories that match.',
              },
              {
                title: 'We work with your availability',
                body: 'Some projects need a few hours a week. Others need more. We filter for what is realistic for you.',
              },
              {
                title: 'We explain the terms up front',
                body: 'Requirements, workload, compensation structure, and payment terms are shared before you commit.',
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-text-tertiary text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="join" className="section-padding bg-background-secondary scroll-mt-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="mb-6">Create your profile</h2>
              <p className="text-text-secondary">
                Tell us about your skills, experience, languages, and availability. We use this to
                match you with opportunities. There is no cost to create a profile.
              </p>
            </div>

            <div className="bg-background-primary border border-background-tertiary rounded-lg p-6 md:p-10">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
