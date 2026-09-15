import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { LegalList as List } from '@/components/LegalPage'
import { siteConfig } from '@/data/config'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern use of this website and the talent network.',
  alternates: { canonical: '/terms' },
}

const company = siteConfig.name

const privacyLink = (
  <Link href="/privacy">
    <strong>Privacy Policy</strong>
  </Link>
)

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms governing your use of this website and participation in the talent network."
      lastUpdated="September 15, 2026"
    >
      <p>
        Welcome to <strong>{company}</strong>.
      </p>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the {company}{' '}
        website, platform, and related services (collectively, the &quot;Services&quot;).
      </p>
      <p>
        By accessing or using the Services, you agree to these Terms. If you do not agree with these
        Terms, please do not use the Services.
      </p>

      <h2>1. About {company}</h2>
      <p>
        {company} provides a platform and related services that help connect professionals and
        organizations with opportunities involving:
      </p>
      <List
        items={[
          'Artificial intelligence and AI evaluation',
          'Data annotation and data quality',
          'Research and evaluation',
          'Software development',
          'Quality assurance and testing',
          'Technical consulting',
          'Language and translation services',
          'Content and research services',
          'Other project-based professional services',
        ]}
      />
      <p>
        Depending on the opportunity, {company} may act as a facilitator, talent-matching service,
        project-support provider, or service provider.
      </p>
      <p>Not every opportunity is directly provided or controlled by {company}.</p>

      <h2>2. Eligibility</h2>
      <p>You must be legally capable of entering into a binding agreement to use the Services.</p>
      <p>
        If you use the Services on behalf of a company or other organization, you represent that you
        have authority to act on behalf of that organization.
      </p>
      <p>
        You are responsible for ensuring that your use of the Services complies with the laws
        applicable to you.
      </p>

      <h2>3. Accounts and Registration</h2>
      <p>
        Certain features may require you to create an account or submit a professional or company
        profile.
      </p>
      <p>
        When creating an account, you agree to provide information that is accurate, current, and
        complete.
      </p>
      <p>You are responsible for:</p>
      <List
        items={[
          'Maintaining the accuracy of your information',
          'Keeping your login credentials secure',
          'Maintaining control of your account',
          'Not sharing your account with unauthorized individuals',
          "Not using another person's account without permission",
        ]}
      />
      <p>You should notify us promptly if you believe your account has been compromised.</p>

      <h2>4. Professional Profiles</h2>
      <p>Professionals may create profiles containing information such as:</p>
      <List
        items={[
          'Professional experience',
          'Skills',
          'Education',
          'Languages',
          'Portfolio information',
          'Work history',
          'Availability',
          'Project preferences',
          'Other information relevant to professional opportunities',
        ]}
      />
      <p>
        You are responsible for ensuring that information you submit is accurate and does not
        intentionally misrepresent your qualifications or experience.
      </p>
      <p>
        By submitting your professional information, you authorize {company} to use that
        information for purposes including evaluating and matching you with relevant opportunities.
      </p>

      <h2>5. Company and Client Information</h2>
      <p>
        Companies may provide information about their organization, projects, staffing needs, and
        other requirements.
      </p>
      <p>
        Companies are responsible for ensuring that project descriptions, requirements,
        compensation information, and other information they provide are accurate to the best of
        their knowledge.
      </p>
      <p>
        Companies must not use the Services for unlawful discrimination, fraudulent activities,
        harassment, or other prohibited purposes.
      </p>

      <h2>6. Opportunities and Project Matching</h2>
      <p>
        {company} may display or communicate opportunities based on information provided by
        professionals, companies, project providers, or third parties.
      </p>
      <p>We do not guarantee that:</p>
      <List
        items={[
          'You will be matched with an opportunity',
          'You will be selected for a project',
          'You will receive a specific number of opportunities',
          'An opportunity will remain available',
          'A project will continue for a particular period',
          'You will earn a particular amount of money',
          'A company will hire or contract with you',
        ]}
      />
      <p>
        Selection decisions may be made by {company}, a client, a project provider, or another third
        party depending on the specific opportunity.
      </p>
      <p>
        Opportunities may have their own eligibility requirements, contracts, terms, policies, and
        onboarding procedures.
      </p>

      <h2>7. Compensation</h2>
      <p>Compensation varies by project and opportunity.</p>
      <p>
        Before beginning a project, you should review the applicable compensation structure, payment
        terms, requirements, and conditions.
      </p>
      <p>
        Unless explicitly stated otherwise in a separate written agreement, {company} does not
        guarantee any minimum income, salary, number of projects, or amount of work.
      </p>
      <p>Compensation may depend on factors such as:</p>
      <List
        items={[
          'Project requirements',
          'Work completed',
          'Quality standards',
          'Client requirements',
          'Acceptance criteria',
          'Hours or units completed',
          'Applicable third-party terms',
        ]}
      />
      <p>
        Any applicable taxes, fees, or other financial obligations associated with compensation are
        generally the responsibility of the person or entity receiving the payment unless otherwise
        required by law or agreed in writing.
      </p>

      <h2>8. Third-Party Platforms and Project Providers</h2>
      <p>
        Some opportunities may involve third-party platforms, clients, technology providers, or
        project partners.
      </p>
      <p>
        Examples may include organizations that provide AI, data, software, research, or other
        project-related work.
      </p>
      <p>
        When you participate in a third-party opportunity, you may be required to create an account
        with that third party and agree to its separate terms and privacy policy.
      </p>
      <p>
        {company} is not responsible for the policies, decisions, availability, payment practices,
        or actions of independent third-party platforms unless expressly agreed otherwise in
        writing.
      </p>
      <p>You should carefully review the terms applicable to each third-party opportunity.</p>

      <h2>9. Professional Conduct</h2>
      <p>When using the Services, you agree not to:</p>
      <List
        items={[
          'Provide intentionally false or misleading information',
          'Impersonate another person or organization',
          'Create accounts for fraudulent purposes',
          'Misrepresent your professional qualifications',
          'Submit work that you did not perform when personal work is required',
          'Circumvent project rules or eligibility requirements',
          'Manipulate project results or evaluation systems',
          'Attempt to obtain unauthorized access to systems or accounts',
          'Upload malicious software or harmful code',
          'Harass, threaten, or abuse other users',
          'Use the Services for illegal activities',
          'Violate applicable laws or regulations',
        ]}
      />
      <p>Additional rules may apply to individual projects.</p>

      <h2>10. Company and Client Conduct</h2>
      <p>Companies and clients using {company} agree not to:</p>
      <List
        items={[
          'Provide intentionally misleading project information',
          'Request unlawful services',
          'Discriminate unlawfully against professionals',
          'Misuse professional information',
          'Circumvent agreed commercial arrangements',
          'Attempt to access information that they are not authorized to access',
          'Use professional information for unrelated purposes without appropriate authorization',
          'Harass or exploit professionals',
          'Use the platform for fraudulent activities',
        ]}
      />
      <p>Additional terms may apply to specific company engagements.</p>

      <h2>11. User Content</h2>
      <p>
        You may submit content to the Services, including resumes, profiles, portfolio materials,
        project information, messages, documents, and other materials (&quot;User Content&quot;).
      </p>
      <p>You retain ownership of your User Content.</p>
      <p>
        By submitting User Content, you grant {company} a limited license to use, store, process,
        reproduce, and display that content as reasonably necessary to:
      </p>
      <List
        items={[
          'Operate the Services',
          'Evaluate and match opportunities',
          'Communicate with you',
          'Provide services to clients',
          'Maintain and improve the platform',
          'Comply with legal obligations',
        ]}
      />
      <p>We will handle personal information in accordance with our {privacyLink}.</p>

      <h2>12. Intellectual Property</h2>
      <p>
        The {company} website, platform, branding, logos, designs, software, text, graphics, and
        other materials provided by {company} are owned by or licensed to {company} and are
        protected by applicable intellectual-property laws.
      </p>
      <p>Except as expressly permitted by these Terms, you may not:</p>
      <List
        items={[
          'Copy or reproduce the Services',
          'Modify or create derivative works',
          'Reverse engineer the platform',
          `Redistribute ${company} content`,
          `Use the ${company} name or branding without permission`,
          'Scrape or systematically collect information from the Services',
          'Use automated systems to interfere with the operation of the website',
        ]}
      />
      <p>
        You retain ownership of materials that you independently create and submit through the
        Services, subject to any separate agreement governing a particular project.
      </p>

      <h2>13. Confidential Information</h2>
      <p>You may receive confidential information through certain projects or interactions.</p>
      <p>
        You agree to keep confidential information confidential and use it only for the purpose for
        which it was provided.
      </p>
      <p>
        Additional confidentiality obligations may apply under a separate agreement, NDA, client
        contract, or project-specific terms.
      </p>
      <p>
        You must not disclose confidential information to unauthorized individuals or
        organizations.
      </p>

      <h2>14. Artificial Intelligence and Automated Systems</h2>
      <p>
        Some projects available through {company} may involve artificial intelligence, machine
        learning, data annotation, evaluation, model testing, or related technologies.
      </p>
      <p>Project-specific instructions may impose additional requirements regarding:</p>
      <List
        items={[
          'Confidentiality',
          'Data handling',
          'Use of AI tools',
          'Accuracy',
          'Human review',
          'Intellectual property',
          'Security',
          'Prohibited tools or activities',
        ]}
      />
      <p>You agree to follow all applicable project instructions and third-party requirements.</p>

      <h2>15. Payments and Fees</h2>
      <p>
        Where {company} directly processes payments or charges fees, the applicable fees and payment
        terms will be communicated before the relevant transaction or engagement where reasonably
        possible.
      </p>
      <p>Third-party projects may use their own payment systems and payment terms.</p>
      <p>
        {company} is not responsible for payment disputes arising solely between a professional and
        an independent third-party project provider unless {company} has expressly agreed to handle
        the payment relationship.
      </p>

      <h2>16. No Employment Relationship</h2>
      <p>
        Unless expressly agreed in a separate written employment agreement, use of the Services does
        not create an employer-employee relationship between {company} and a professional.
      </p>
      <p>
        Depending on the project, professionals may operate as independent contractors,
        freelancers, vendors, employees of another organization, or under another legally
        applicable arrangement.
      </p>
      <p>
        The legal relationship for a particular project will be determined by the applicable
        agreement and governing law.
      </p>

      <h2>17. No Guarantee of Employment or Income</h2>
      <p>{company} provides access to opportunities and professional matching services.</p>
      <p>We do not guarantee:</p>
      <List
        items={[
          'Employment',
          'Contract work',
          'Project acceptance',
          'A particular income',
          'A particular number of opportunities',
          'Continued project availability',
          'A specific career outcome',
        ]}
      />
      <p>
        Any examples, descriptions, or project information presented on our website are for
        informational purposes and should not be interpreted as a promise of future earnings or
        employment.
      </p>

      <h2>18. Availability of the Services</h2>
      <p>We may modify, suspend, or discontinue any part of the Services at any time.</p>
      <p>We do not guarantee that the website or Services will always be:</p>
      <List
        items={['Available', 'Uninterrupted', 'Error-free', 'Secure', 'Free from harmful components']}
      />
      <p>We may perform maintenance, updates, or changes that temporarily affect availability.</p>

      <h2>19. Suspension and Termination</h2>
      <p>We may suspend or terminate access to the Services if we reasonably believe that you:</p>
      <List
        items={[
          'Violated these Terms',
          'Violated applicable law',
          'Provided false or misleading information',
          'Engaged in fraudulent or abusive activity',
          'Created a security risk',
          'Misused the Services',
          'Violated project-specific requirements',
        ]}
      />
      <p>You may stop using the Services at any time.</p>
      <p>
        Certain provisions of these Terms may continue after termination, including provisions
        relating to intellectual property, confidentiality, disclaimers, limitations of liability,
        and dispute resolution.
      </p>

      <h2>20. Disclaimers</h2>
      <p>
        To the maximum extent permitted by applicable law, the Services are provided on an &quot;as
        is&quot; and &quot;as available&quot; basis.
      </p>
      <p>
        {company} does not guarantee the accuracy, completeness, reliability, or availability of
        every opportunity, third-party service, or piece of information presented through the
        Services.
      </p>
      <p>
        We are not responsible for decisions you make based on information provided through the
        Services.
      </p>
      <p>
        Nothing on the website constitutes legal, financial, tax, employment, or professional
        advice.
      </p>

      <h2>21. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, {company} and its officers, employees,
        contractors, affiliates, and service providers will not be liable for indirect, incidental,
        special, consequential, or punitive damages arising from or related to your use of the
        Services.
      </p>
      <p>This may include loss of:</p>
      <List
        items={[
          'Income',
          'Profits',
          'Business opportunities',
          'Data',
          'Reputation',
          'Expected employment or project opportunities',
        ]}
      />
      <p>
        Nothing in these Terms excludes or limits liability that cannot legally be excluded or
        limited under applicable law.
      </p>

      <h2>22. Indemnification</h2>
      <p>
        To the extent permitted by applicable law, you agree to defend, indemnify, and hold harmless{' '}
        {company} and its officers, employees, contractors, affiliates, and service providers from
        claims, liabilities, damages, losses, and expenses arising from:
      </p>
      <List
        items={[
          'Your violation of these Terms',
          'Your misuse of the Services',
          'Your violation of applicable law',
          'Your User Content',
          "Your violation of another person's rights",
        ]}
      />

      <h2>23. Third-Party Links</h2>
      <p>The Services may contain links to websites or services operated by third parties.</p>
      <p>These links are provided for convenience.</p>
      <p>
        {company} does not control and is not responsible for third-party websites, content,
        policies, security, or services.
      </p>
      <p>Your use of third-party services is subject to their own terms and policies.</p>

      <h2>24. Privacy</h2>
      <p>Our collection and use of personal information is described in our {privacyLink}.</p>
      <p>
        Our use of cookies and similar technologies is described in our{' '}
        <Link href="/cookies">
          <strong>Cookie Policy</strong>
        </Link>
        .
      </p>
      <p>
        By using the Services, you acknowledge that you have had the opportunity to review these
        policies.
      </p>

      <h2>25. Changes to These Terms</h2>
      <p>We may update these Terms from time to time.</p>
      <p>
        When we make material changes, we may provide notice through the website, email, or other
        reasonable means.
      </p>
      <p>
        The updated Terms will become effective on the date specified at the beginning of the
        updated Terms.
      </p>
      <p>
        Your continued use of the Services after the effective date constitutes acceptance of the
        updated Terms to the extent permitted by applicable law.
      </p>

      <h2>26. Governing Law</h2>
      <p>
        These Terms will be governed by the laws specified in any applicable agreement between you
        and {company}.
      </p>
      <p>
        If no separate agreement specifies governing law, the applicable governing law and
        jurisdiction will be determined based on the nature of the relationship, your location, and
        applicable law.
      </p>

      <h2>27. Severability</h2>
      <p>
        If any provision of these Terms is found to be invalid or unenforceable, the remaining
        provisions will continue in full force and effect to the extent permitted by law.
      </p>

      <h2>28. Entire Agreement</h2>
      <p>
        These Terms, together with any applicable agreements, policies, and project-specific terms,
        constitute the agreement governing your use of the Services, unless a separate written
        agreement expressly supersedes these Terms.
      </p>

      <h2>29. Contact Us</h2>
      <p>If you have questions about these Terms or the Services, please contact us:</p>
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
