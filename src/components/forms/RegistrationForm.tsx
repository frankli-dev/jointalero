'use client'

import { useState, FormEvent } from 'react'
import FormField, { inputClasses, inputErrorClasses } from './FormField'
import { skillsByCategory } from '@/data/config'

type FormState = {
  name: string
  email: string
  location: string
  skills: string[]
  experience: string
  languages: string
  background: string
  portfolio: string
  linkedin: string
  availability: string
  categories: string[]
}

type Errors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: '',
  email: '',
  location: '',
  skills: [],
  experience: '',
  languages: '',
  background: '',
  portfolio: '',
  linkedin: '',
  availability: '',
  categories: [],
}

const availabilityOptions = [
  { value: 'full-time', label: 'Full-time (30+ hours/week)' },
  { value: 'part-time', label: 'Part-time (15-30 hours/week)' },
  { value: 'flexible', label: 'Flexible (varies week to week)' },
  { value: 'limited', label: 'Limited (under 15 hours/week)' },
]

const experienceOptions = [
  { value: 'beginner', label: 'Getting started' },
  { value: 'intermediate', label: '1-3 years' },
  { value: 'advanced', label: '4-7 years' },
  { value: 'expert', label: '8+ years' },
]

const categoryOptions = [
  { value: 'ai-data', label: 'AI & Data' },
  { value: 'software', label: 'Software Development' },
  { value: 'non-tech', label: 'Non-Technical' },
  { value: 'qa', label: 'QA & Testing' },
]

// Some skills belong to more than one category; list each only once.
const allSkills = Array.from(new Set(Object.values(skillsByCategory).flat()))

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

  if (values.skills.length === 0) {
    errors.skills = 'Please select at least one skill.'
  }

  if (!values.experience) {
    errors.experience = 'Please select your experience level.'
  }

  if (!values.availability) {
    errors.availability = 'Please select your availability.'
  }

  if (values.categories.length === 0) {
    errors.categories = 'Please select at least one project category.'
  }

  if (values.portfolio && !/^https?:\/\/.+/.test(values.portfolio)) {
    errors.portfolio = 'Please enter a full URL starting with http:// or https://'
  }

  if (values.linkedin && !/^https?:\/\/.+/.test(values.linkedin)) {
    errors.linkedin = 'Please enter a full URL starting with http:// or https://'
  }

  return errors
}

export default function RegistrationForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function toggleInArray(key: 'skills' | 'categories', value: string) {
    const current = values[key]
    update(key, current.includes(value) ? current.filter((v) => v !== value) : [...current, value])
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
      const response = await fetch('/api/professionals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
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
        <h3 className="text-2xl font-bold mb-4">Your profile has been submitted</h3>
        <p className="text-text-secondary mb-8">
          We will review your background and get in touch about opportunities that match your skills
          and availability. Response times vary depending on current project demand.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary">
          Submit another profile
        </button>
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
        <FormField
          label="Country or region"
          htmlFor="location"
          required
          error={errors.location}
          hint="Used to match you with projects that fit your time zone and eligibility."
        >
          <input
            id="location"
            name="location"
            type="text"
            value={values.location}
            onChange={(e) => update('location', e.target.value)}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? 'location-error' : 'location-hint'}
            className={errors.location ? inputErrorClasses : inputClasses}
            placeholder="e.g. Germany"
          />
        </FormField>

        <FormField
          label="Languages"
          htmlFor="languages"
          hint="Separate multiple languages with commas."
        >
          <input
            id="languages"
            name="languages"
            type="text"
            value={values.languages}
            onChange={(e) => update('languages', e.target.value)}
            aria-describedby="languages-hint"
            className={inputClasses}
            placeholder="e.g. English, Spanish"
          />
        </FormField>
      </div>

      <FormField
        label="Skills"
        htmlFor="skills"
        required
        error={errors.skills}
        hint="Select everything that applies. You can refine this later."
      >
        <div
          id="skills"
          role="group"
          aria-describedby={errors.skills ? 'skills-error' : 'skills-hint'}
          className="flex flex-wrap gap-2"
          tabIndex={-1}
        >
          {allSkills.map((skill) => {
            const selected = values.skills.includes(skill)
            return (
              <button
                key={skill}
                type="button"
                onClick={() => toggleInArray('skills', skill)}
                aria-pressed={selected}
                className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  selected
                    ? 'bg-accent-primary text-background-primary border-accent-primary'
                    : 'bg-background-primary text-text-secondary border-background-tertiary hover:border-accent-primary'
                }`}
              >
                {skill}
              </button>
            )
          })}
        </div>
      </FormField>

      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          label="Experience level"
          htmlFor="experience"
          required
          error={errors.experience}
        >
          <select
            id="experience"
            name="experience"
            value={values.experience}
            onChange={(e) => update('experience', e.target.value)}
            aria-invalid={Boolean(errors.experience)}
            aria-describedby={errors.experience ? 'experience-error' : undefined}
            className={errors.experience ? inputErrorClasses : inputClasses}
          >
            <option value="">Select experience level</option>
            {experienceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="Availability"
          htmlFor="availability"
          required
          error={errors.availability}
          hint="An honest answer helps us suggest realistic opportunities."
        >
          <select
            id="availability"
            name="availability"
            value={values.availability}
            onChange={(e) => update('availability', e.target.value)}
            aria-invalid={Boolean(errors.availability)}
            aria-describedby={errors.availability ? 'availability-error' : 'availability-hint'}
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
        label="Preferred project categories"
        htmlFor="categories"
        required
        error={errors.categories}
      >
        <div
          id="categories"
          role="group"
          aria-describedby={errors.categories ? 'categories-error' : undefined}
          className="grid sm:grid-cols-2 gap-3"
          tabIndex={-1}
        >
          {categoryOptions.map((option) => {
            const selected = values.categories.includes(option.value)
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => toggleInArray('categories', option.value)}
                aria-pressed={selected}
                className={`px-4 py-3 rounded-lg text-sm font-medium border text-left transition-colors ${
                  selected
                    ? 'bg-accent-primary text-background-primary border-accent-primary'
                    : 'bg-background-primary text-text-secondary border-background-tertiary hover:border-accent-primary'
                }`}
              >
                {option.label}
              </button>
            )
          })}
        </div>
      </FormField>

      <FormField
        label="Professional background"
        htmlFor="background"
        hint="A short summary of your experience and the kind of work you are looking for."
      >
        <textarea
          id="background"
          name="background"
          rows={5}
          value={values.background}
          onChange={(e) => update('background', e.target.value)}
          aria-describedby="background-hint"
          className={`${inputClasses} resize-y`}
          placeholder="Tell us about your experience..."
        />
      </FormField>

      <div className="grid md:grid-cols-2 gap-6">
        <FormField label="Portfolio or website" htmlFor="portfolio" error={errors.portfolio}>
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

        <FormField label="LinkedIn profile" htmlFor="linkedin" error={errors.linkedin}>
          <input
            id="linkedin"
            name="linkedin"
            type="url"
            value={values.linkedin}
            onChange={(e) => update('linkedin', e.target.value)}
            aria-invalid={Boolean(errors.linkedin)}
            aria-describedby={errors.linkedin ? 'linkedin-error' : undefined}
            className={errors.linkedin ? inputErrorClasses : inputClasses}
            placeholder="https://linkedin.com/in/"
          />
        </FormField>
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="bg-red-500/10 border border-red-500/40 rounded-lg p-4 text-sm text-red-700 dark:text-red-300"
        >
          We could not submit your profile. Please try again, or email us directly if the problem
          continues.
        </div>
      )}

      <div className="pt-2">
        <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
          {status === 'submitting' ? 'Submitting…' : 'Submit your profile'}
        </button>
        <p className="text-text-tertiary text-xs mt-4">
          Submitting a profile does not guarantee an opportunity. Availability, eligibility, and
          compensation vary by project.
        </p>
      </div>
    </form>
  )
}
