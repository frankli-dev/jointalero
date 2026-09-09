import { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  hint?: string
  children: ReactNode
}

export default function FormField({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-text-primary mb-2">
        {label}
        {required && (
          <span className="text-accent-primary ml-1" aria-hidden="true">
            *
          </span>
        )}
        {!required && <span className="text-text-tertiary font-normal ml-2">(optional)</span>}
      </label>

      {hint && (
        <p id={`${htmlFor}-hint`} className="text-xs text-text-tertiary mb-2">
          {hint}
        </p>
      )}

      {children}

      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="text-sm text-red-400 mt-2">
          {error}
        </p>
      )}
    </div>
  )
}

export const inputClasses =
  'w-full px-4 py-3 bg-background-primary border border-background-tertiary text-text-primary rounded-lg focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary transition-colors placeholder:text-text-tertiary'

export const inputErrorClasses =
  'w-full px-4 py-3 bg-background-primary border border-red-500 text-text-primary rounded-lg focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400 transition-colors placeholder:text-text-tertiary'
