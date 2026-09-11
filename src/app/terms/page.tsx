import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { siteConfig } from '@/data/config'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern use of this website and the talent network.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms governing your use of this website and participation in the talent network."
      lastUpdated="[DATE]"
      sections={[
        {
          heading: '1. Who we are',
          body: [
            'This website is operated by [COMPANY LEGAL NAME], registered at [REGISTERED ADDRESS] under registration number [REGISTRATION NUMBER] ("we", "us").',
            `You can contact us at ${siteConfig.contact.email}.`,
          ],
        },
        {
          heading: '2. Acceptance of these terms',
          body: [
            'By accessing this website or submitting a profile, application, or enquiry, you agree to these terms. If you do not agree, please do not use the site.',
            'We may update these terms. Material changes will be reflected in the "last updated" date above, and where required by law we will notify affected users.',
          ],
        },
        {
          heading: '3. What we provide',
          body: [
            'We operate a network that matches professionals with technology projects and helps companies find people for that work.',
            'We do not guarantee that any opportunity will be available to you, that you will be selected for any project, or that any particular level of work or compensation will result from creating a profile or submitting an application.',
          ],
        },
        {
          heading: '4. Eligibility and your information',
          body: [
            'You must be at least [MINIMUM AGE] years old and legally able to enter into contracts in your jurisdiction.',
            'You agree that the information you provide is accurate and that you will keep it up to date. Submitting materially misleading information may result in removal from the network.',
          ],
        },
        {
          heading: '5. Project terms and compensation',
          body: [
            'Each project is governed by its own agreement. Scope, workload, compensation structure, and payment terms are confirmed in writing before work begins.',
            'Compensation and availability vary by project and eligibility. Nothing on this website constitutes an offer of employment or a guarantee of income.',
          ],
        },
        {
          heading: '6. Acceptable use',
          body: [
            'You agree not to misuse this website, including by attempting to gain unauthorised access, disrupting its operation, scraping content at scale, or submitting unlawful or infringing material.',
          ],
        },
        {
          heading: '7. Intellectual property',
          body: [
            'Content on this website is owned by us or our licensors and may not be reproduced without permission, except as permitted by law.',
            'Ownership of work product created during a project is governed by the applicable project agreement. [DESCRIBE DEFAULT IP POSITION].',
          ],
        },
        {
          heading: '8. Liability',
          body: [
            'To the extent permitted by law, we are not liable for indirect or consequential loss arising from use of this website. [INSERT JURISDICTION-SPECIFIC LIABILITY LANGUAGE REVIEWED BY COUNSEL].',
            'Nothing in these terms limits liability that cannot lawfully be limited.',
          ],
        },
        {
          heading: '9. Governing law',
          body: [
            'These terms are governed by the laws of [JURISDICTION], and disputes are subject to the exclusive jurisdiction of the courts of [JURISDICTION].',
          ],
        },
      ]}
    />
  )
}
