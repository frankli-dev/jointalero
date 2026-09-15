import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { siteConfig } from '@/data/config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What personal information we collect, why we collect it, and your rights over it.',
  alternates: { canonical: '/privacy' },
}

const company = siteConfig.name

function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="What information we collect, why we collect it, how long we keep it, and the rights you have over it."
      lastUpdated="September 15, 2026"
    >
      <p>
        At <strong>{company}</strong>, we respect your privacy and are committed to protecting the
        personal information you provide to us.
      </p>
      <p>
        This Privacy Policy explains how we collect, use, disclose, and protect information when you
        visit our website, create an account, apply for opportunities, contact us, or use our
        services.
      </p>
      <p>
        By using the {company} website or services, you acknowledge the practices described in this
        Privacy Policy.
      </p>

      <h2>1. About {company}</h2>
      <p>
        {company} connects professionals and organizations with opportunities in areas such as AI,
        data, software development, research, evaluation, and other project-based services.
      </p>
      <p>Depending on how you use our services, you may interact with us as a:</p>
      <List
        items={[
          'Professional, freelancer, contractor, or candidate',
          'Company or client',
          'Website visitor',
          'Business contact or partner',
        ]}
      />

      <h2>2. Information We Collect</h2>
      <p>We may collect information that you voluntarily provide to us, including:</p>

      <h3>For Professionals</h3>
      <p>Depending on the service you use, this may include:</p>
      <List
        items={[
          'Name',
          'Email address',
          'Phone number',
          'Location or country',
          'Professional experience',
          'Skills and technical expertise',
          'Languages',
          'Education and certifications',
          'Resume or CV',
          'Portfolio and professional profiles',
          'Availability',
          'Project preferences',
          'Application information',
          `Communications with ${company}`,
          'Payment-related information where necessary to process compensation',
        ]}
      />

      <h3>For Companies</h3>
      <p>We may collect:</p>
      <List
        items={[
          'Name',
          'Company name',
          'Business email',
          'Phone number',
          'Job title',
          'Company information',
          'Project requirements',
          'Hiring or staffing requirements',
          `Communications with ${company}`,
        ]}
      />

      <h3>Information Collected Automatically</h3>
      <p>
        When you use our website, we may automatically collect certain technical information, such
        as:
      </p>
      <List
        items={[
          'IP address',
          'Browser type',
          'Device type',
          'Operating system',
          'Pages visited',
          'Referring website',
          'Approximate geographic information',
          'Date and time of website activity',
          'Cookies and similar technologies',
        ]}
      />

      <h2>3. How We Use Your Information</h2>
      <p>We may use personal information to:</p>
      <List
        items={[
          'Provide and operate our services',
          'Create and manage professional profiles',
          'Match professionals with relevant opportunities',
          'Evaluate applications and project suitability',
          'Connect companies with suitable professionals',
          'Communicate about opportunities, projects, and services',
          'Respond to inquiries and support requests',
          'Process payments where applicable',
          'Improve our website and services',
          'Analyze website usage and performance',
          'Prevent fraud, abuse, and unauthorized activity',
          'Maintain security',
          'Comply with applicable laws and legal obligations',
        ]}
      />
      <p>
        We will use your information only for legitimate business purposes and in accordance with
        applicable privacy laws.
      </p>

      <h2>4. Professional Profiles and Opportunity Matching</h2>
      <p>
        If you create a professional profile or submit information for an opportunity, certain
        information may be reviewed by {company} and, where appropriate, shared with relevant clients
        or project partners for the purpose of evaluating your suitability.
      </p>
      <p>
        We will not represent that you are selected for a project unless the relevant client or
        project provider has actually confirmed the opportunity.
      </p>
      <p>
        Project availability, compensation, requirements, and selection decisions may vary by
        opportunity.
      </p>

      <h2>5. Information Sharing</h2>
      <p>
        We may share personal information with third parties when reasonably necessary to provide
        our services.
      </p>
      <p>These parties may include:</p>
      <List
        items={[
          'Clients or companies requesting professional services',
          'Project partners and service providers',
          'Payment processors',
          'Cloud hosting and infrastructure providers',
          'Analytics and technology providers',
          'Communication and customer-support providers',
          'Professional advisers',
          'Government authorities or law enforcement when legally required',
        ]}
      />
      <p>We do not sell your personal information as a product to third parties.</p>
      <p>
        When we work with service providers, we seek to use appropriate contractual and technical
        safeguards to protect personal information.
      </p>

      <h2>6. AI and Technology Services</h2>
      <p>
        {company} may work with companies and platforms involved in artificial intelligence, data,
        software development, evaluation, research, and related services.
      </p>
      <p>
        Where third-party platforms or project providers are involved, information submitted to
        those platforms may also be subject to their own privacy policies and terms.
      </p>
      <p>
        Before submitting information to a third-party platform, you should review the applicable
        terms and privacy policy of that platform.
      </p>

      <h2>7. Cookies and Similar Technologies</h2>
      <p>We may use cookies and similar technologies to:</p>
      <List
        items={[
          'Keep our website functioning properly',
          'Remember preferences',
          'Understand website usage',
          'Improve website performance',
          'Analyze traffic and engagement',
          'Support security',
        ]}
      />
      <p>
        You may be able to control cookies through your browser settings. Disabling certain cookies
        may affect some website functionality.
      </p>

      <h2>8. Data Security</h2>
      <p>
        We take reasonable administrative, technical, and organizational measures to protect
        personal information against unauthorized access, loss, misuse, alteration, or disclosure.
      </p>
      <p>
        However, no internet transmission or electronic storage system can be guaranteed to be
        completely secure.
      </p>
      <p>
        You are responsible for maintaining the security of your account credentials and should
        notify us if you believe your account has been accessed without authorization.
      </p>

      <h2>9. Data Retention</h2>
      <p>
        We retain personal information only for as long as reasonably necessary for the purposes
        described in this Privacy Policy, including providing services, maintaining business
        records, resolving disputes, enforcing agreements, and complying with legal obligations.
      </p>
      <p>
        Retention periods may vary depending on the type of information and the purpose for which
        it was collected.
      </p>

      <h2>10. Your Privacy Rights</h2>
      <p>
        Depending on your location and applicable law, you may have rights regarding your personal
        information, including the right to:
      </p>
      <List
        items={[
          'Request access to personal information we hold about you',
          'Request correction of inaccurate information',
          'Request deletion of certain information',
          'Request restriction of certain processing',
          'Object to certain uses of your information',
          'Request a copy of your information',
          'Withdraw consent where processing is based on consent',
        ]}
      />
      <p>Some rights may be subject to legal limitations or exceptions.</p>
      <p>
        To exercise applicable privacy rights, please contact us using the information provided
        below.
      </p>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        Our services are not intended for children under the age required by applicable law to use
        the services independently.
      </p>
      <p>
        We do not knowingly collect personal information from children in violation of applicable
        laws.
      </p>
      <p>
        If you believe that a child has provided us with personal information, please contact us so
        that we can take appropriate action.
      </p>

      <h2>12. International Data Transfers</h2>
      <p>
        {company} may operate internationally and may use service providers located in different
        countries.
      </p>
      <p>
        As a result, your information may be processed or stored outside the country where you
        live.
      </p>
      <p>
        Where required by applicable law, we will take appropriate measures to protect personal
        information when it is transferred internationally.
      </p>

      <h2>13. Third-Party Websites and Services</h2>
      <p>Our website may contain links to third-party websites, platforms, or services.</p>
      <p>
        We are not responsible for the privacy practices, security, or content of third-party
        websites.
      </p>
      <p>
        We encourage you to review the privacy policies of third-party services before providing
        them with personal information.
      </p>

      <h2>14. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes to our services,
        technology, legal requirements, or business practices.
      </p>
      <p>
        When we make changes, we will update the &quot;Last Updated&quot; date at the top of this
        page.
      </p>
      <p>
        Your continued use of our services after an updated Privacy Policy becomes effective means
        that you acknowledge the updated policy, to the extent permitted by applicable law.
      </p>

      <h2>15. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or want to exercise an applicable privacy
        right, please contact us:
      </p>
      <p>
        <strong>{company}</strong>
        <br />
        Address: {siteConfig.contact.address}
        <br />
        Email: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        <br />
        Website: <a href="https://jointalero.com">jointalero.com</a>
      </p>
    </LegalPage>
  )
}
