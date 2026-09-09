'use client'

import { useState } from 'react'

export default function HowItWorks() {
  const [view, setView] = useState<'professionals' | 'companies'>('professionals')

  const professionalSteps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Tell us about your skills, experience, languages, and availability.',
    },
    {
      number: '02',
      title: 'Discover Opportunities',
      description: 'Explore projects that match your profile and interests.',
    },
    {
      number: '03',
      title: 'Complete the Work',
      description: 'Work on approved AI, data, or software projects.',
    },
    {
      number: '04',
      title: 'Get Paid',
      description: 'Receive compensation according to the agreed project terms.',
    },
  ]

  const companySteps = [
    {
      number: '01',
      title: 'Tell Us What You Need',
      description: 'Describe your project and required skills.',
    },
    {
      number: '02',
      title: 'We Identify Talent',
      description: 'We match professionals to your requirements.',
    },
    {
      number: '03',
      title: 'Build Your Team',
      description: 'Select qualified professionals for your project.',
    },
    {
      number: '04',
      title: 'Execute the Project',
      description: 'Work with the team and monitor progress.',
    },
  ]

  const steps = view === 'professionals' ? professionalSteps : companySteps

  return (
    <section className="section-padding bg-background-secondary">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="mb-8">How It Works</h2>

          {/* Toggle */}
          <div className="inline-flex bg-background-primary border border-background-tertiary rounded-lg p-1 gap-1 mb-16">
            <button
              onClick={() => setView('professionals')}
              className={`px-6 py-2 rounded transition-colors font-medium ${
                view === 'professionals'
                  ? 'bg-accent-primary text-background-primary'
                  : 'text-text-secondary hover:text-accent-primary'
              }`}
            >
              For Professionals
            </button>
            <button
              onClick={() => setView('companies')}
              className={`px-6 py-2 rounded transition-colors font-medium ${
                view === 'companies'
                  ? 'bg-accent-primary text-background-primary'
                  : 'text-text-secondary hover:text-accent-primary'
              }`}
            >
              For Companies
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              {/* Step Card */}
              <div className="bg-background-primary border border-background-tertiary rounded-lg p-6 h-full">
                <div className="text-5xl font-bold text-accent-primary/20 mb-4">{step.number}</div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </div>

              {/* Arrow */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-8 transform -translate-y-1/2 text-accent-primary/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
