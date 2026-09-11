import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { siteConfig } from '@/data/config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What personal information we collect, why we collect it, and your rights over it.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="What information we collect, why we collect it, how long we keep it, and the rights you have over it."
      lastUpdated="[DATE]"
      sections={[
        {
          heading: '1. Data controller',
          body: [
            `The controller of your personal data is [COMPANY LEGAL NAME], [REGISTERED ADDRESS]. You can contact us at ${siteConfig.contact.email}, or our data protection contact at [DPO / PRIVACY CONTACT].`,
          ],
        },
        {
          heading: '2. Information we collect',
          body: [
            'When you create a professional profile we collect the information you submit: name, email address, country or region, skills, experience level, languages, availability, preferred project categories, and any professional background, portfolio, or profile links you choose to add.',
            'When you submit a company enquiry we collect your name, company name, work email address, and the project details you provide.',
            'We also collect limited technical information such as IP address and browser type. [CONFIRM AND LIST ANY ANALYTICS OR TRACKING ACTUALLY IN USE].',
          ],
        },
        {
          heading: '3. Why we use it',
          body: [
            'We use profile information to match professionals with relevant opportunities and to contact you about them. We use company enquiry information to respond to your request and scope potential work.',
            'Our legal bases are [SELECT AND CONFIRM: consent / performance of a contract / legitimate interests], as applicable under the law of [JURISDICTION].',
          ],
        },
        {
          heading: '4. Who we share it with',
          body: [
            'Where you apply or are matched to a project, relevant profile information may be shared with the client organisation for that project.',
            'We use service providers for [HOSTING / EMAIL / OTHER — LIST ACTUAL PROCESSORS]. We do not sell personal data.',
            '[DESCRIBE ANY INTERNATIONAL TRANSFERS AND THE SAFEGUARDS APPLIED].',
          ],
        },
        {
          heading: '5. How long we keep it',
          body: [
            'We retain profile information for [RETENTION PERIOD] after your last activity, unless you ask us to remove it sooner. Enquiry records are kept for [RETENTION PERIOD].',
          ],
        },
        {
          heading: '6. Your rights',
          body: [
            'Depending on your jurisdiction you may have the right to access, correct, delete, or port your data, to object to or restrict processing, and to withdraw consent.',
            `To exercise any of these rights, contact ${siteConfig.contact.email}. You may also lodge a complaint with your local supervisory authority.`,
          ],
        },
        {
          heading: '7. Security',
          body: [
            'We apply technical and organisational measures appropriate to the risk. [DESCRIBE ACTUAL MEASURES — ENCRYPTION IN TRANSIT, ACCESS CONTROLS, ETC.]',
            'No system is completely secure, and we cannot guarantee absolute security of information transmitted to us.',
          ],
        },
      ]}
    />
  )
}
