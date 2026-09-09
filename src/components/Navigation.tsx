'use client'

import { useState } from 'react'
import Link from 'next/link'
import { navigationLinks } from '@/data/config'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background-primary/90 border-b border-background-tertiary">
      <div className="section-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold gradient-text">TP</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-accent-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/for-professionals"
              className="text-text-secondary hover:text-accent-primary transition-colors text-sm font-medium"
            >
              Join Network
            </Link>
            <Link
              href="/for-companies"
              className="btn-primary text-sm py-2 px-4"
            >
              Hire Talent
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col space-y-1"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className={`w-6 h-0.5 bg-text-primary transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-text-primary transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-text-primary transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden pb-6 space-y-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-text-secondary hover:text-accent-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-background-tertiary space-y-3">
              <Link
                href="/for-professionals"
                className="block btn-secondary w-full text-center"
              >
                Join Network
              </Link>
              <Link
                href="/for-companies"
                className="block btn-primary text-center"
              >
                Hire Talent
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
