import { NextResponse } from 'next/server'
import { sendFormEmail } from '@/lib/email'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_MESSAGE_LENGTH = 5000

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

export async function POST(request: Request) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  if (typeof payload !== 'object' || payload === null) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const body = payload as Record<string, unknown>
  const errors: Record<string, string> = {}

  if (!isNonEmptyString(body.company)) {
    errors.company = 'Company name is required.'
  }

  if (!isNonEmptyString(body.name)) {
    errors.name = 'Name is required.'
  }

  if (!isNonEmptyString(body.email) || !EMAIL_PATTERN.test(body.email)) {
    errors.email = 'A valid email address is required.'
  }

  if (!isNonEmptyString(body.projectType)) {
    errors.projectType = 'Project type is required.'
  }

  if (!isNonEmptyString(body.requiredSkills)) {
    errors.requiredSkills = 'Required skills are required.'
  }

  if (!isNonEmptyString(body.message)) {
    errors.message = 'A project description is required.'
  } else if (body.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = 'Project description is too long.'
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 })
  }

  try {
    await sendFormEmail({
      subject: `New company enquiry: ${body.company}`,
      replyTo: typeof body.email === 'string' ? body.email : undefined,
      fields: [
        { label: 'Company', value: body.company },
        { label: 'Contact name', value: body.name },
        { label: 'Email', value: body.email },
        { label: 'Project type', value: body.projectType },
        { label: 'Team size', value: body.teamSize },
        { label: 'Required skills', value: body.requiredSkills },
        { label: 'Timeline', value: body.timeline },
        { label: 'Budget', value: body.budget },
        { label: 'Project description', value: body.message },
      ],
    })
  } catch (error) {
    console.error('Failed to email company enquiry submission', error)
    return NextResponse.json(
      { error: 'We could not send your submission. Please try again shortly.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ received: true }, { status: 200 })
}
