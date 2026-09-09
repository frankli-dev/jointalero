import Link from 'next/link'
import { ReactNode } from 'react'
import { homePageCopy } from '@/data/config'

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const skills = [
  {
    title: 'Language',
    description: 'Translation, localization, language evaluation',
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
      </Icon>
    ),
  },
  {
    title: 'Communication',
    description: 'Content review, customer experience, evaluation',
    icon: (
      <Icon>
        <path d="M21 12a8 8 0 0 1-8 8H6l-3 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8Z" />
        <path d="M9 11h6M9 15h3" />
      </Icon>
    ),
  },
  {
    title: 'Research',
    description: 'Research, fact checking, information analysis',
    icon: (
      <Icon>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </Icon>
    ),
  },
  {
    title: 'Writing',
    description: 'Content creation, editing, quality review',
    icon: (
      <Icon>
        <path d="M4 20h16M6 16l10.5-10.5a2.1 2.1 0 0 1 3 3L9 19l-4 1Z" />
      </Icon>
    ),
  },
  {
    title: 'Domain Expertise',
    description: 'Industry-specific knowledge and professional experience',
    icon: (
      <Icon>
        <path d="M12 3 2 8l10 5 10-5-10-5Z" />
        <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      </Icon>
    ),
  },
  {
    title: 'Analytical Thinking',
    description: 'Evaluation, categorization, data review',
    icon: (
      <Icon>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20V8" />
      </Icon>
    ),
  },
]

export default function SkillsValuable() {
  return (
    <section className="section-padding bg-gradient-to-br from-background-primary via-background-secondary to-background-primary">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">{homePageCopy.skillsValuable.headline}</h2>
          <p className="text-lg text-text-secondary">{homePageCopy.skillsValuable.body}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill) => (
            <div key={skill.title} className="card">
              <div className="w-11 h-11 rounded-lg bg-accent-primary/10 border border-accent-primary/25 text-accent-primary flex items-center justify-center mb-5">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-text-tertiary text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/for-professionals" className="btn-primary">
            Discover Where Your Skills Fit
          </Link>
        </div>
      </div>
    </section>
  )
}
