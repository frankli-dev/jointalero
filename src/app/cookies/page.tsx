import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage, { LegalList as List } from '@/components/LegalPage'
import { siteConfig } from '@/data/config'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How this website uses cookies and similar technologies, and how to control them.',
  alternates: { canonical: '/cookies' },
}

const company = siteConfig.name

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="How this website uses cookies and similar technologies, and how you can control them."
      lastUpdated="September 15, 2026"
    >
      <p>
        This Cookie Policy explains how <strong>{company}</strong> (&quot;{company},&quot;
        &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar technologies
        when you visit or use our website.
      </p>
      <p>
        This policy should be read together with our{' '}
        <Link href="/privacy">
          <strong>Privacy Policy</strong>
        </Link>
        , which explains how we collect, use, and protect personal information.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>Cookies are small text files that are placed on your device when you visit a website.</p>
      <p>
        They allow websites to remember information about your visit, recognize your browser,
        maintain sessions, and understand how visitors use the website.
      </p>
      <p>
        We may also use similar technologies, such as pixels, tags, local storage, and web beacons,
        for similar purposes.
      </p>

      <h2>2. How {company} Uses Cookies</h2>
      <p>We may use cookies and similar technologies to:</p>
      <List
        items={[
          'Keep our website functioning properly',
          'Maintain user sessions',
          'Remember preferences',
          'Improve website performance',
          'Understand how visitors use our website',
          'Measure website traffic and engagement',
          'Improve our services and user experience',
          'Protect our website against fraud and unauthorized activity',
        ]}
      />
      <p>We aim to use cookies only where they are reasonably necessary for these purposes.</p>

      <h2>3. Types of Cookies We May Use</h2>

      <h3>3.1 Strictly Necessary Cookies</h3>
      <p>These cookies are required for essential website functionality.</p>
      <p>They may be used to:</p>
      <List
        items={[
          'Maintain login sessions',
          'Secure forms and accounts',
          'Remember security settings',
          'Support navigation',
          'Maintain basic website functionality',
        ]}
      />
      <p>
        Because these cookies are necessary for the operation of the website, they may not be
        available for opt-out through standard cookie preference tools.
      </p>

      <h3>3.2 Functional Cookies</h3>
      <p>
        Functional cookies allow the website to remember choices you make and provide enhanced
        functionality.
      </p>
      <p>For example, they may remember:</p>
      <List
        items={[
          'Language preferences',
          'Display preferences',
          'User interface settings',
          'Previously selected options',
        ]}
      />
      <p>These cookies may not be necessary for the basic operation of the website.</p>

      <h3>3.3 Analytics Cookies</h3>
      <p>Analytics cookies help us understand how visitors interact with our website.</p>
      <p>They may provide information such as:</p>
      <List
        items={[
          'Which pages receive the most visits',
          'How visitors navigate the website',
          'How long visitors spend on pages',
          'Whether users encounter errors',
          'General website performance information',
        ]}
      />
      <p>
        Where required by applicable law, we will request consent before placing non-essential
        analytics cookies.
      </p>

      <h3>3.4 Marketing and Advertising Cookies</h3>
      <p>If we use marketing or advertising technologies, these cookies may be used to:</p>
      <List
        items={[
          'Measure advertising performance',
          'Understand interactions with marketing campaigns',
          'Provide relevant advertisements',
          'Limit repeated advertisements',
          'Measure conversions',
        ]}
      />
      <p>
        We will seek consent where required by applicable law before using non-essential marketing
        cookies.
      </p>
      <p>
        <strong>{company} does not currently use cookies to sell your personal information.</strong>
      </p>

      <h2>4. Third-Party Cookies</h2>
      <p>
        Some cookies may be placed by third-party services that we use to operate or improve our
        website.
      </p>
      <p>These services may include providers for:</p>
      <List
        items={[
          'Website analytics',
          'Security',
          'Hosting and infrastructure',
          'Embedded content',
          'Customer support',
          'Communication',
          'Payment processing',
          'Marketing',
        ]}
      />
      <p>Third-party providers may collect information according to their own privacy policies.</p>
      <p>
        We encourage you to review the privacy policies of third-party services that you interact
        with.
      </p>

      <h2>5. Cookie Consent</h2>
      <p>
        Depending on your location and applicable law, we may display a cookie consent banner when
        you first visit our website.
      </p>
      <p>Where consent is required, you may be given options to:</p>
      <List
        items={[
          'Accept non-essential cookies',
          'Reject non-essential cookies',
          'Customize cookie preferences',
        ]}
      />
      <p>
        You can change your cookie preferences later where our website provides a cookie preference
        mechanism.
      </p>
      <p>Your browser settings may also allow you to block or delete cookies.</p>

      <h2>6. Managing Cookies Through Your Browser</h2>
      <p>Most modern web browsers allow you to control cookies through their settings.</p>
      <p>You can generally:</p>
      <List
        items={[
          'View stored cookies',
          'Delete existing cookies',
          'Block cookies',
          'Block third-party cookies',
          'Receive notifications when cookies are being used',
        ]}
      />
      <p>
        Please note that blocking or deleting certain cookies may affect the functionality of our
        website.
      </p>

      <h2>7. Do Not Track Signals</h2>
      <p>Some browsers provide a &quot;Do Not Track&quot; or similar privacy setting.</p>
      <p>
        Because there is currently no universally accepted technical standard for responding to
        these signals, our website may not respond to all browser-based Do Not Track settings.
      </p>
      <p>
        Where applicable law requires us to recognize a specific privacy signal, we will handle that
        signal in accordance with the applicable requirements.
      </p>

      <h2>8. Cookies and Personal Information</h2>
      <p>
        Some cookies may collect information that can be associated with an individual or device.
      </p>
      <p>Depending on the circumstances, this information may include:</p>
      <List
        items={[
          'IP address',
          'Device information',
          'Browser information',
          'Website activity',
          'Session information',
          'Approximate location',
          'Online identifiers',
        ]}
      />
      <p>
        We handle information collected through cookies in accordance with our{' '}
        <Link href="/privacy">
          <strong>Privacy Policy</strong>
        </Link>{' '}
        and applicable privacy laws.
      </p>

      <h2>9. How Long Cookies Remain</h2>
      <p>Cookies may be either:</p>
      <p>
        <strong>Session cookies</strong> — These are temporary cookies that are generally deleted
        when you close your browser.
      </p>
      <p>
        <strong>Persistent cookies</strong> — These remain on your device for a defined period or
        until you delete them.
      </p>
      <p>
        The length of time a cookie remains on your device depends on its purpose and configuration.
      </p>

      <h2>10. Changes to This Cookie Policy</h2>
      <p>We may update this Cookie Policy from time to time to reflect:</p>
      <List
        items={[
          'Changes to our website',
          'Changes to the technologies we use',
          'Changes to our services',
          'Changes in legal or regulatory requirements',
        ]}
      />
      <p>
        When we make changes, we will update the &quot;Last Updated&quot; date at the top of this
        page.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions about this Cookie Policy or our use of cookies, please contact us:
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
