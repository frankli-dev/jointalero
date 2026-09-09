import { NextResponse } from 'next/server'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_TEXT_LENGTH = 2000

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string')
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

  if (!isNonEmptyString(body.name)) {
    errors.name = 'Name is required.'
  }

  if (!isNonEmptyString(body.email) || !EMAIL_PATTERN.test(body.email)) {
    errors.email = 'A valid email address is required.'
  }

  if (!isNonEmptyString(body.location)) {
    errors.location = 'Location is required.'
  }

  if (!isStringArray(body.skills) || body.skills.length === 0) {
    errors.skills = 'At least one skill is required.'
  }

  if (!isNonEmptyString(body.experience)) {
    errors.experience = 'Experience level is required.'
  }

  if (!isNonEmptyString(body.availability)) {
    errors.availability = 'Availability is required.'
  }

  if (!isStringArray(body.categories) || body.categories.length === 0) {
    errors.categories = 'At least one project category is required.'
  }

  if (isNonEmptyString(body.background) && body.background.length > MAX_TEXT_LENGTH) {
    errors.background = 'Professional background is too long.'
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 })
  }

  return NextResponse.json({ received: true }, { status: 200 })
}
