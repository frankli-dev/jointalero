import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How this website uses cookies and similar technologies, and how to control them.',
  alternates: { canonical: '/cookies' },
}

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="How this website uses cookies and similar technologies, and how you can control them."
      lastUpdated="[DATE]"
      sections={[
        {
          heading: '1. What cookies are',
          body: [
            'Cookies are small text files stored on your device when you visit a website. They are widely used to make sites work, to remember preferences, and to collect usage information.',
          ],
        },
        {
          heading: '2. Cookies we use',
          body: [
            'This website currently sets [LIST ACTUAL COOKIES SET, OR STATE "no cookies beyond those strictly necessary to serve the site"].',
            'Strictly necessary cookies are required for the site to function and cannot be switched off in our systems.',
            '[IF ANALYTICS, ADVERTISING, OR EMBEDDED THIRD-PARTY CONTENT IS ADDED, LIST EACH PROVIDER, ITS PURPOSE, AND ITS RETENTION PERIOD HERE.]',
          ],
        },
        {
          heading: '3. Consent',
          body: [
            'Where required by law, we will ask for your consent before setting non-essential cookies, and you will be able to withdraw that consent at any time.',
            '[DESCRIBE THE CONSENT MECHANISM ONCE IMPLEMENTED — NO CONSENT BANNER IS CURRENTLY PRESENT ON THIS SITE.]',
          ],
        },
        {
          heading: '4. Controlling cookies',
          body: [
            'Most browsers let you view, delete, and block cookies through their settings. Blocking strictly necessary cookies may prevent parts of this site from working correctly.',
          ],
        },
        {
          heading: '5. Contact',
          body: [
            'Questions about this policy can be sent to [CONTACT EMAIL].',
          ],
        },
      ]}
    />
  )
}
