import { ReactNode } from 'react'

interface PageHeroProps {
  title: string
  description?: string
  children?: ReactNode
}

export default function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="pt-14 pb-12 md:pt-20 md:pb-14 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="mb-6">{title}</h1>
          {description && <p className="text-lg text-text-secondary">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
