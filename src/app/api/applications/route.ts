import { NextResponse } from 'next/server'
import { opportunities } from '@/data/opportunities'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_TEXT_LENGTH = 5000

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

  if (!isNonEmptyString(body.opportunityId) || !opportunities.some((o) => o.id === body.opportunityId)) {
    errors.opportunityId = 'A valid opportunity is required.'
  }

  if (!isNonEmptyString(body.name)) {
    errors.name = 'Name is required.'
  }

  if (!isNonEmptyString(body.email) || !EMAIL_PATTERN.test(body.email)) {
    errors.email = 'A valid email address is required.'
  }

  if (!isNonEmptyString(body.location)) {
    errors.location = 'Location is required.'
  }

  if (!isNonEmptyString(body.relevantExperience)) {
    errors.relevantExperience = 'Relevant experience is required.'
  } else if (body.relevantExperience.length > MAX_TEXT_LENGTH) {
    errors.relevantExperience = 'Relevant experience is too long.'
  }

  if (!isNonEmptyString(body.availability)) {
    errors.availability = 'Availability is required.'
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 })
  }

  return NextResponse.json({ received: true }, { status: 200 })
}
