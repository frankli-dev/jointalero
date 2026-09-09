import { Opportunity } from '@/types'

const periodLabels: Record<Opportunity['compensation']['period'], string> = {
  hour: 'per hour',
  project: 'per project',
  fixed: 'fixed',
}

export function formatCompensation(compensation: Opportunity['compensation']) {
  const { currency, amount, period } = compensation
  return `${currency} ${amount.toLocaleString('en-US')} ${periodLabels[period]}`
}

export function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
