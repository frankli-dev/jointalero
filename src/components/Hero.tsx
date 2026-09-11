import Image from 'next/image'
import Link from 'next/link'
import { homePageCopy } from '@/data/config'
import { opportunities } from '@/data/opportunities'

const metrics = [
  { value: homePageCopy.metrics.projectsDelivered, label: 'Projects Delivered' },
  { value: homePageCopy.metrics.opportunities, label: 'Opportunities' },
  { value: homePageCopy.metrics.compensation, label: 'Compensation' },
  { value: homePageCopy.metrics.workType, label: 'Work Arrangements' },
]

const icons = {
  ai: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </>
  ),
  data: <path d="M4 20h16M7 16v-4M12 16V7M17 16v-7" />,
  software: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
  cloud: <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.1 9.2 4.5 4.5 0 0 0 7 18z" />,
}

type IconName = keyof typeof icons

function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

const fields: { label: string; icon: IconName; color: string }[] = [
  { label: 'AI', icon: 'ai', color: 'text-cyan-600 dark:text-cyan-300' },
  { label: 'Data', icon: 'data', color: 'text-emerald-600 dark:text-emerald-300' },
  { label: 'Software', icon: 'software', color: 'text-violet-600 dark:text-violet-300' },
  { label: 'Technology', icon: 'cloud', color: 'text-sky-600 dark:text-sky-300' },
]

// Live roles shown floating over the photo; ids refer to src/data/opportunities.ts.
const featuredRoles: { id: string; icon: IconName; tile: string }[] = [
  { id: 'opp-001', icon: 'ai', tile: 'from-indigo-500 to-violet-500' },
  { id: 'opp-002', icon: 'data', tile: 'from-emerald-400 to-teal-500' },
  { id: 'opp-004', icon: 'software', tile: 'from-blue-500 to-indigo-500' },
  { id: 'opp-010', icon: 'cloud', tile: 'from-sky-400 to-cyan-500' },
]

const roleCards = featuredRoles.flatMap((role) => {
  const opportunity = opportunities.find((o) => o.id === role.id && o.status === 'active')
  return opportunity ? [{ ...role, opportunity }] : []
})

// The source photos are 1983px wide, so there is no point requesting larger variants.
const photoSizes = '(max-width: 1983px) 100vw, 1983px'
const photoClasses =
  'object-cover object-[72%_center] lg:object-[50%_center] xl:object-[75%_center] motion-safe:animate-hero-zoom'

export default function Hero() {
  return (
    <section className="bg-background-primary">
      <div className="relative flex flex-col overflow-hidden lg:min-h-[680px] lg:justify-center">
        {/* Photo: stacked under the copy on small screens, full-bleed behind it on large ones.
            A night shot for the dark theme and a daytime shot for the light theme. */}
        <div className="relative order-last aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:absolute lg:inset-0 lg:order-none lg:aspect-auto">
          <Image
            src="/hero.jpg"
            alt="Professional smiling at a laptop in front of a glowing world map and city skyline at night"
            fill
            priority
            sizes={photoSizes}
            className={`hidden dark:block ${photoClasses}`}
          />
          <Image
            src="/hero-light.jpg"
            alt="Professional smiling at a laptop in front of a world map and a waterfront city skyline on a sunny day"
            fill
            priority
            sizes={photoSizes}
            className={`dark:hidden ${photoClasses}`}
          />
          {/* Blend the photo into the page */}
          <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-transparent to-transparent lg:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-background-primary via-background-primary/60 to-transparent lg:block lg:w-3/5" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background-primary to-transparent" />
        </div>

        {/* Copy */}
        <div className="section-container relative z-10 w-full pt-12 pb-10 md:pt-16 lg:py-24">
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <h1
              className="mb-6 text-text-primary lg:text-6xl xl:text-7xl motion-safe:animate-fade-up"
              style={{ animationDelay: '100ms' }}
            >
              Your Skills.{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-700 to-cyan-600 dark:from-cyan-300 dark:via-blue-500 dark:to-cyan-300 bg-[length:200%_auto] bg-clip-text text-transparent motion-safe:animate-gradient-x">
                Global Opportunities.
              </span>
            </h1>

            <p
              className="text-lg md:text-xl mb-8 text-text-secondary motion-safe:animate-fade-up"
              style={{ animationDelay: '250ms' }}
            >
              {homePageCopy.hero.subheadline}
            </p>

            <ul className="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start" aria-label="Fields we cover">
              {fields.map((field, i) => (
                <li
                  key={field.label}
                  className="flex items-center gap-2.5 rounded-xl border border-background-tertiary bg-background-primary/70 dark:border-white/10 dark:bg-white/5 px-4 py-2.5 text-sm font-medium text-text-primary backdrop-blur-md motion-safe:animate-fade-up"
                  style={{ animationDelay: `${400 + i * 80}ms` }}
                >
                  <Icon name={field.icon} className={`h-5 w-5 ${field.color}`} />
                  {field.label}
                </li>
              ))}
            </ul>

            <div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 motion-safe:animate-fade-up"
              style={{ animationDelay: '750ms' }}
            >
              <Link href="/opportunities" className="btn-primary text-center">
                {homePageCopy.hero.cta1}
              </Link>
              <Link
                href="/for-professionals"
                className="btn-secondary text-center bg-background-primary/70 backdrop-blur-sm"
              >
                {homePageCopy.hero.cta2}
              </Link>
            </div>
          </div>
        </div>

        {/* Floating role cards over the globe */}
        {roleCards.length > 0 && (
          <ul
            className="absolute right-[3%] top-1/2 z-10 hidden w-72 space-y-3 xl:block [transform:translateY(-50%)_perspective(1200px)_rotateY(-10deg)]"
            aria-label="Open roles"
          >
            {roleCards.map(({ opportunity, icon, tile }, i) => (
              <li
                key={opportunity.id}
                className="motion-safe:animate-slide-in-right"
                style={{ animationDelay: `${700 + i * 120}ms` }}
              >
                {/* Negative delays put each card at a different point in the float cycle */}
                <Link
                  href={`/opportunities/${opportunity.id}`}
                  className="group flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 p-3 shadow-lg shadow-slate-900/10 backdrop-blur-md transition-colors hover:border-sky-400 hover:bg-white/95 dark:border-sky-300/20 dark:bg-slate-900/60 dark:shadow-blue-950/50 dark:hover:border-sky-300/50 dark:hover:bg-slate-900/75 motion-safe:animate-float"
                  style={{ animationDelay: `-${i * 1.5}s` }}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${tile} text-white`}
                  >
                    <Icon name={icon} className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-text-primary">
                      {opportunity.title}
                    </span>
                    <span className="block text-xs text-text-tertiary">
                      {opportunity.location} · {opportunity.duration}
                    </span>
                  </span>
                  <span
                    className="text-text-tertiary transition-transform group-hover:translate-x-0.5 group-hover:text-sky-600 dark:group-hover:text-sky-300"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Trust Metrics */}
      <div className="section-container relative pb-20 md:pb-28">
        <div
          className="bg-background-secondary/50 border border-background-tertiary rounded-lg p-8 backdrop-blur-sm text-center motion-safe:animate-fade-up"
          style={{ animationDelay: '900ms' }}
        >
          <p className="text-text-tertiary text-sm mb-8">{homePageCopy.trustMessage}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-text-tertiary">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
