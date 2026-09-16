import { siteConfig } from '@/data/config'

// Form submissions are emailed through Resend's HTTPS API (https://resend.com/docs).
// Required environment variables in production:
//   RESEND_API_KEY  — API key from the Resend dashboard
//   EMAIL_FROM      — sender on a domain verified in Resend, e.g. "Jointalero <website@jointalero.com>"
const RESEND_ENDPOINT = 'https://api.resend.com/emails'
const FALLBACK_FROM = 'Jointalero <onboarding@resend.dev>'
const MAX_FIELD_LENGTH = 2000

export type EmailField = { label: string; value: unknown }

function formatValue(value: unknown) {
  const text = Array.isArray(value) ? value.join(', ') : String(value ?? '')
  return text.length > MAX_FIELD_LENGTH ? `${text.slice(0, MAX_FIELD_LENGTH)}… (truncated)` : text
}

function filledFields(fields: EmailField[]) {
  return fields.filter((field) => {
    const value = field.value
    return Array.isArray(value) ? value.length > 0 : typeof value === 'string' && value.trim() !== ''
  })
}

export function formatFields(fields: EmailField[]) {
  return filledFields(fields)
    .map((field) => `${field.label}:\n${formatValue(field.value)}`)
    .join('\n\n')
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Same content as the plain-text body, with the field labels in bold. */
export function formatFieldsHtml(fields: EmailField[]) {
  return filledFields(fields)
    .map((field) => {
      const value = escapeHtml(formatValue(field.value)).replace(/\n/g, '<br>')
      return `<p style="margin:0 0 16px"><strong>${escapeHtml(field.label)}:</strong><br>${value}</p>`
    })
    .join('\n')
}

interface SendFormEmailOptions {
  subject: string
  fields: EmailField[]
  // The submitter's address, so replying in the inbox goes straight back to them.
  replyTo?: string
}

/**
 * Sends a form submission to the site contact address.
 * Throws if the message could not be sent, so the route can tell the visitor to try again.
 */
export async function sendFormEmail({ subject, fields, replyTo }: SendFormEmailOptions) {
  const apiKey = process.env.RESEND_API_KEY
  const submitted = new Date().toISOString()
  const body = `${formatFields(fields)}\n\nSubmitted: ${submitted}`
  const html = [
    '<div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#0f172a">',
    formatFieldsHtml(fields),
    `<p style="margin:24px 0 0;color:#64748b;font-size:13px"><strong>Submitted:</strong> ${submitted}</p>`,
    '</div>',
  ].join('\n')

  if (!apiKey) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('RESEND_API_KEY is not set, so the submission could not be emailed.')
    }
    // Local development without a key: log the message instead of dropping it silently.
    console.info(`[email] would send to ${siteConfig.contact.email}\nSubject: ${subject}\n\n${body}`)
    return { sent: false }
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM ?? FALLBACK_FROM,
      to: [siteConfig.contact.email],
      subject,
      html,
      // Plain-text alternative for clients that do not render HTML.
      text: body,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  })

  if (!response.ok) {
    throw new Error(`Resend returned ${response.status}: ${(await response.text()).slice(0, 500)}`)
  }

  return { sent: true }
}
