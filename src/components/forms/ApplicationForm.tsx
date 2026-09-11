'use client'

import { useState, FormEvent } from 'react'
import FormField, { inputClasses, inputErrorClasses } from './FormField'

type FormState = {
  name: string
  email: string
  location: string
  relevantExperience: string
  availability: string
  portfolio: string
}

type Errors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: '',
  email: '',
  location: '',
  relevantExperience: '',
  availability: '',
  portfolio: '',
}

const availabilityOptions = [
  { value: 'full-time', label: 'Full-time (30+ hours/week)' },
  { value: 'part-time', label: 'Part-time (15-30 hours/week)' },
  { value: 'flexible', label: 'Flexible (varies week to week)' },
  { value: 'limited', label: 'Limited (under 15 hours/week)' },
]

function validate(values: FormState): Errors {
  const errors: Errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.location.trim()) {
    errors.location = 'Please enter your country or region.'
  }

  if (!values.relevantExperience.trim()) {
    errors.relevantExperience = 'Please describe your relevant experience.'
  }

  if (!values.availability) {
    errors.availability = 'Please select your availability.'
  }

  if (values.portfolio && !/^https?:\/\/.+/.test(values.portfolio)) {
    errors.portfolio = 'Please enter a full URL starting with http:// or https://'
  }

  return errors
}

interface ApplicationFormProps {
  opportunityId: string
  opportunityTitle: string
}

export default function ApplicationForm({
  opportunityId,
  opportunityTitle,
}: ApplicationFormProps) {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0]
      document.getElementById(firstField)?.focus()
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, opportunityId }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setStatus('success')
      setValues(initialState)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="bg-background-secondary border border-accent-primary/40 rounded-lg p-10 text-center"
      >
        <div className="text-4xl mb-4" aria-hidden="true">
          ✓
        </div>
        <h3 className="text-2xl font-bold mb-4">Application submitted</h3>
        <p className="text-text-secondary">
          We have received your application for {opportunityTitle}. If your background matches the
          project requirements, we will contact you to discuss scope and terms.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <FormField label="Full name" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={errors.name ? inputErrorClasses : inputClasses}
            placeholder="Your name"
          />
        </FormField>

        <FormField label="Email address" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={errors.email ? inputErrorClasses : inputClasses}
            placeholder="you@example.com"
          />
        </FormField>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FormField label="Country or region" htmlFor="location" required error={errors.location}>
          <input
            id="location"
            name="location"
            type="text"
            value={values.location}
            onChange={(e) => update('location', e.target.value)}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? 'location-error' : undefined}
            className={errors.location ? inputErrorClasses : inputClasses}
            placeholder="e.g. Germany"
          />
        </FormField>

        <FormField
          label="Availability"
          htmlFor="availability"
          required
          error={errors.availability}
        >
          <select
            id="availability"
            name="availability"
            value={values.availability}
            onChange={(e) => update('availability', e.target.value)}
            aria-invalid={Boolean(errors.availability)}
            aria-describedby={errors.availability ? 'availability-error' : undefined}
            className={errors.availability ? inputErrorClasses : inputClasses}
          >
            <option value="">Select availability</option>
            {availabilityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField
        label="Relevant experience"
        htmlFor="relevantExperience"
        required
        error={errors.relevantExperience}
        hint="Describe the experience that relates to this specific opportunity."
      >
        <textarea
          id="relevantExperience"
          name="relevantExperience"
          rows={6}
          value={values.relevantExperience}
          onChange={(e) => update('relevantExperience', e.target.value)}
          aria-invalid={Boolean(errors.relevantExperience)}
          aria-describedby={
            errors.relevantExperience ? 'relevantExperience-error' : 'relevantExperience-hint'
          }
          className={`${errors.relevantExperience ? inputErrorClasses : inputClasses} resize-y`}
          placeholder="What experience makes you a good fit for this project?"
        />
      </FormField>

      <FormField label="Portfolio or LinkedIn" htmlFor="portfolio" error={errors.portfolio}>
        <input
          id="portfolio"
          name="portfolio"
          type="url"
          value={values.portfolio}
          onChange={(e) => update('portfolio', e.target.value)}
          aria-invalid={Boolean(errors.portfolio)}
          aria-describedby={errors.portfolio ? 'portfolio-error' : undefined}
          className={errors.portfolio ? inputErrorClasses : inputClasses}
          placeholder="https://"
        />
      </FormField>

      {status === 'error' && (
        <div
          role="alert"
          className="bg-red-500/10 border border-red-500/40 rounded-lg p-4 text-sm text-red-700 dark:text-red-300"
        >
          We could not submit your application. Please try again, or email us directly if the problem
          continues.
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Submitting…' : 'Submit application'}
        </button>
        <p className="text-text-tertiary text-xs mt-4">
          Applying does not guarantee selection. Compensation and availability may vary by project and
          eligibility.
        </p>
      </div>
    </form>
  )
}
