import Link from 'next/link'
import { Opportunity } from '@/types'
import { formatCompensation } from '@/lib/format'

interface OpportunityCardProps {
  opportunity: Opportunity
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const categoryColors = {
    'ai-data': 'bg-blue-600/10 text-blue-700 dark:text-blue-400 border-blue-600/30',
    software: 'bg-purple-600/10 text-purple-700 dark:text-purple-400 border-purple-600/30',
    'non-tech': 'bg-amber-600/10 text-amber-700 dark:text-amber-400 border-amber-600/30',
    qa: 'bg-green-600/10 text-green-700 dark:text-green-400 border-green-600/30',
  }

  const colors = categoryColors[opportunity.category]

  return (
    <Link href={`/opportunities/${opportunity.id}`}>
      <div className="card h-full hover:shadow-lg hover:shadow-accent-primary/20 cursor-pointer">
        {/* Header */}
        <div className="mb-4 pb-4 border-b border-background-tertiary">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold leading-tight flex-1 pr-4">
              {opportunity.title}
            </h3>
            {opportunity.featured && (
              <span className="text-xs bg-accent-primary text-background-primary px-2 py-1 rounded-full font-semibold flex-shrink-0">
                Featured
              </span>
            )}
          </div>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${colors}`}>
            {opportunity.category === 'ai-data'
              ? 'AI & Data'
              : opportunity.category === 'non-tech'
                ? 'Non-Technical'
                : opportunity.category === 'qa'
                  ? 'QA & Testing'
                  : 'Software'}
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {opportunity.description}
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <span className="text-text-tertiary text-xs">Location</span>
            <p className="text-text-secondary font-medium">
              {opportunity.remote ? 'Remote' : opportunity.location}
            </p>
          </div>
          <div>
            <span className="text-text-tertiary text-xs">Type</span>
            <p className="text-text-secondary font-medium capitalize">{opportunity.type}</p>
          </div>
          <div>
            <span className="text-text-tertiary text-xs">Duration</span>
            <p className="text-text-secondary font-medium">{opportunity.duration}</p>
          </div>
          <div>
            <span className="text-text-tertiary text-xs">Compensation</span>
            <p className="text-text-secondary font-medium">
              {formatCompensation(opportunity.compensation)}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <div className="text-text-tertiary text-xs mb-2">Required Skills</div>
          <div className="flex flex-wrap gap-2">
            {opportunity.skills.slice(0, 2).map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-background-primary text-text-secondary text-xs rounded border border-background-tertiary"
              >
                {skill}
              </span>
            ))}
            {opportunity.skills.length > 2 && (
              <span className="px-2 py-1 bg-background-primary text-text-tertiary text-xs rounded border border-background-tertiary">
                +{opportunity.skills.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-accent-primary text-sm font-semibold">
          View Details →
        </div>
      </div>
    </Link>
  )
}
