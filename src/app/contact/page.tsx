import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { siteConfig } from '@/data/config'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch about opportunities, hiring technology talent, or anything else about the network.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main>
      <Navigation />

      <PageHero
        title="Let's work together."
        description="Whether you are looking for your next opportunity or building a team, here is where to start."
      />

      <section className="section-padding bg-background-primary">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Professionals */}
            <div className="card flex flex-col">
              <span className="text-accent-primary text-sm font-semibold uppercase tracking-wide mb-4">
                For professionals
              </span>
              <h2 className="text-2xl mb-4">Looking for your next opportunity?</h2>
              <p className="text-text-secondary mb-8">
                Create a profile with your skills, experience, and availability. We will match you
                against projects as they come up, and help you work out where your background fits.
              </p>
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Link href="/for-professionals#join" className="btn-primary text-center">
                  Join the talent network
                </Link>
                <Link href="/opportunities" className="btn-secondary text-center">
                  Browse opportunities
                </Link>
              </div>
            </div>

            {/* Companies */}
            <div className="card flex flex-col">
              <span className="text-accent-primary text-sm font-semibold uppercase tracking-wide mb-4">
                For companies
              </span>
              <h2 className="text-2xl mb-4">Looking for skilled professionals?</h2>
              <p className="text-text-secondary mb-8">
                Tell us about your project and the skills it needs. We will come back to you about
                scope, team shape, and next steps.
              </p>
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Link href="/for-companies#contact" className="btn-primary text-center">
                  Talk to our team
                </Link>
                <Link href="/services" className="btn-secondary text-center">
                  View services
                </Link>
              </div>
            </div>
          </div>

          {/* Direct contact */}
          <div className="max-w-3xl mx-auto bg-background-secondary border border-background-tertiary rounded-lg p-8 md:p-10">
            <h2 className="text-2xl mb-8">Contact details</h2>

            <dl className="grid sm:grid-cols-2 gap-8">
              <div>
                <dt className="text-xs text-text-tertiary mb-2">Email</dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-accent-primary hover:text-accent-light font-medium"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs text-text-tertiary mb-2">Response time</dt>
                <dd className="text-text-secondary">
                  We aim to respond within a few business days.
                </dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-xs text-text-tertiary mb-2">Company information</dt>
                <dd className="text-text-secondary">
                  <span className="block font-medium text-text-primary">{siteConfig.name}</span>
                  <address className="not-italic">{siteConfig.contact.address}</address>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
