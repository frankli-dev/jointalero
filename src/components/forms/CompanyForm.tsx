'use client'

import { useState, FormEvent } from 'react'
import FormField, { inputClasses, inputErrorClasses } from './FormField'

type FormState = {
  company: string
  name: string
  email: string
  projectType: string
  requiredSkills: string
  teamSize: string
  timeline: string
  budget: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  company: '',
  name: '',
  email: '',
  projectType: '',
  requiredSkills: '',
  teamSize: '',
  timeline: '',
  budget: '',
  message: '',
}

const projectTypes = [
  'AI evaluation and human feedback',
  'Data annotation and labeling',
  'Data operations and quality',
  'Software development',
  'QA and testing',
  'Non-technical project support',
  'Other',
]

const teamSizes = ['1-2 people', '3-5 people', '6-10 people', '10+ people', 'Not sure yet']

const timelines = ['Under 1 month', '1-3 months', '3-6 months', '6+ months', 'Ongoing']

function validate(values: FormState): Errors {
  const errors: Errors = {}

  if (!values.company.trim()) {
    errors.company = 'Please enter your company name.'
  }

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.projectType) {
    errors.projectType = 'Please select a project type.'
  }

  if (!values.requiredSkills.trim()) {
    errors.requiredSkills = 'Please describe the skills you need.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us about your project.'
  }

  return errors
}

export default function CompanyForm() {
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
      const response = await fetch('/api/companies', {
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
        <h3 className="text-2xl font-bold mb-4">Thanks — we have your request</h3>
        <p className="text-text-secondary mb-8">
          Our team will review your requirements and follow up by email to discuss scope, skills, and
          next steps.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary">
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <FormField label="Company" htmlFor="company" required error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? 'company-error' : undefined}
            className={errors.company ? inputErrorClasses : inputClasses}
            placeholder="Company name"
          />
        </FormField>

        <FormField label="Your name" htmlFor="name" required error={errors.name}>
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
      </div>

      <FormField label="Work email" htmlFor="email" required error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => update('email', e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={errors.email ? inputErrorClasses : inputClasses}
          placeholder="you@company.com"
        />
      </FormField>

      <div className="grid md:grid-cols-2 gap-6">
        <FormField label="Project type" htmlFor="projectType" required error={errors.projectType}>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(e) => update('projectType', e.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? 'projectType-error' : undefined}
            className={errors.projectType ? inputErrorClasses : inputClasses}
          >
            <option value="">Select project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Team size needed" htmlFor="teamSize">
          <select
            id="teamSize"
            name="teamSize"
            value={values.teamSize}
            onChange={(e) => update('teamSize', e.target.value)}
            className={inputClasses}
          >
            <option value="">Select team size</option>
            {teamSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField
        label="Required skills"
        htmlFor="requiredSkills"
        required
        error={errors.requiredSkills}
        hint="List the skills or roles your project needs."
      >
        <input
          id="requiredSkills"
          name="requiredSkills"
          type="text"
          value={values.requiredSkills}
          onChange={(e) => update('requiredSkills', e.target.value)}
          aria-invalid={Boolean(errors.requiredSkills)}
          aria-describedby={errors.requiredSkills ? 'requiredSkills-error' : 'requiredSkills-hint'}
          className={errors.requiredSkills ? inputErrorClasses : inputClasses}
          placeholder="e.g. Python, data annotation, LLM evaluation"
        />
      </FormField>

      <div className="grid md:grid-cols-2 gap-6">
        <FormField label="Timeline" htmlFor="timeline">
          <select
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={(e) => update('timeline', e.target.value)}
            className={inputClasses}
          >
            <option value="">Select timeline</option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="Budget range"
          htmlFor="budget"
          hint="A rough range helps us scope the right team."
        >
          <input
            id="budget"
            name="budget"
            type="text"
            value={values.budget}
            onChange={(e) => update('budget', e.target.value)}
            aria-describedby="budget-hint"
            className={inputClasses}
            placeholder="e.g. USD 10,000-25,000"
          />
        </FormField>
      </div>

      <FormField label="Tell us about your project" htmlFor="message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${errors.message ? inputErrorClasses : inputClasses} resize-y`}
          placeholder="What are you building, and what kind of support do you need?"
        />
      </FormField>

      {status === 'error' && (
        <div
          role="alert"
          className="bg-red-500/10 border border-red-500/40 rounded-lg p-4 text-sm text-red-300"
        >
          We could not send your request. Please try again, or email us directly if the problem
          continues.
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending…' : 'Talk to our team'}
        </button>
      </div>
    </form>
  )
}
