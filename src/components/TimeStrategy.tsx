import { homePageCopy } from '@/data/config'

export default function TimeStrategy() {
  const steps = [
    { label: 'Your Available Time', description: 'Be honest about how much time you can dedicate' },
    { label: 'Your Skills', description: 'We help identify what you\'re good at' },
    { label: 'Suitable Opportunities', description: 'Find projects that actually fit' },
    { label: 'Practical Strategy', description: 'Build a realistic plan with us' },
    { label: 'Take Action', description: 'Apply to the projects that fit' },
  ]

  return (
    <section className="section-padding bg-background-primary">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">{homePageCopy.timeStrategy.headline}</h2>
          <p className="text-lg text-text-secondary mb-4">{homePageCopy.timeStrategy.body1}</p>
          <p className="text-lg text-text-secondary">{homePageCopy.timeStrategy.body2}</p>
        </div>

        {/* Timeline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div key={step.label} className="relative">
              {/* Step Card */}
              <div className="bg-background-secondary border border-background-tertiary rounded-lg p-6 h-full">
                <div className="text-accent-primary font-bold text-2xl mb-3">{idx + 1}</div>
                <h3 className="text-base font-semibold mb-2">{step.label}</h3>
                <p className="text-sm text-text-tertiary">{step.description}</p>
              </div>

              {/* Arrow */}
              {idx < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:flex absolute top-1/2 -right-6 w-6 justify-center -translate-y-1/2 text-accent-primary/50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message */}
        <div className="max-w-3xl mx-auto bg-accent-primary/10 border border-accent-primary/30 rounded-lg p-6 text-center">
          <p className="text-text-secondary">
            <span className="font-semibold text-accent-light">Work smarter.</span> Focus on
            opportunities that fit your situation.
          </p>
        </div>
      </div>
    </section>
  )
}
