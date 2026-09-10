import Link from 'next/link'
import { footerLinks, siteConfig } from '@/data/config'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background-secondary border-t border-background-tertiary">
      <div className="section-container py-16">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-text-tertiary text-sm">
              Your Skills. Global Opportunities. Connect with technology projects worldwide.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="font-semibold text-base mb-4 text-text-primary">Company</h2>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-tertiary hover:text-accent-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Professionals Links */}
          <div>
            <h2 className="font-semibold text-base mb-4 text-text-primary">For Professionals</h2>
            <ul className="space-y-2">
              {footerLinks.professionals.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-tertiary hover:text-accent-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies Links */}
          <div>
            <h2 className="font-semibold text-base mb-4 text-text-primary">For Companies</h2>
            <ul className="space-y-2">
              {footerLinks.companies.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-tertiary hover:text-accent-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h2 className="font-semibold text-base mb-4 text-text-primary">Legal</h2>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-tertiary hover:text-accent-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background-tertiary py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-tertiary text-sm">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            {siteConfig.social && (
              <div className="flex gap-6">
                {siteConfig.social.linkedin && (
                  <a href={siteConfig.social.linkedin} className="text-text-tertiary hover:text-accent-primary transition-colors text-sm">
                    LinkedIn
                  </a>
                )}
                {siteConfig.social.twitter && (
                  <a href={siteConfig.social.twitter} className="text-text-tertiary hover:text-accent-primary transition-colors text-sm">
                    Twitter
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
