'use client'

import { Opportunity, OpportunityCategory, ExperienceLevel } from '@/types'
import OpportunityCard from './OpportunityCard'
import { useState, useMemo } from 'react'

interface OpportunityGridProps {
  opportunities: Opportunity[]
  initialCategory?: OpportunityCategory | 'all'
}

export default function OpportunityGrid({
  opportunities,
  initialCategory = 'all',
}: OpportunityGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<OpportunityCategory | 'all'>(
    initialCategory
  )
  const [selectedExperience, setSelectedExperience] = useState<ExperienceLevel | 'all'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = useMemo(() => {
    return opportunities.filter((opp) => {
      const matchesCategory = selectedCategory === 'all' || opp.category === selectedCategory
      const matchesExperience =
        selectedExperience === 'all' || opp.experienceLevel === selectedExperience
      const matchesSearch =
        opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

      return matchesCategory && matchesExperience && matchesSearch
    })
  }, [selectedCategory, selectedExperience, searchTerm, opportunities])

  const categories: { id: OpportunityCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Opportunities' },
    { id: 'ai-data', label: 'AI & Data' },
    { id: 'software', label: 'Software' },
    { id: 'non-tech', label: 'Non-Technical' },
    { id: 'qa', label: 'QA & Testing' },
  ]

  const experiences: { id: ExperienceLevel | 'all'; label: string }[] = [
    { id: 'all', label: 'All Levels' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'expert', label: 'Expert' },
  ]

  return (
    <div className="space-y-8">
      {/* Search & Filters */}
      <div className="space-y-6">
        {/* Search */}
        <div>
          <label
            htmlFor="opportunity-search"
            className="block text-text-secondary text-sm font-semibold mb-3"
          >
            Search
          </label>
          <input
            id="opportunity-search"
            type="search"
            placeholder="Search by title, skill, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-background-secondary border border-background-tertiary text-text-primary rounded-lg focus:border-accent-primary focus:outline-none transition-colors"
          />
        </div>

        {/* Category Filter */}
        <div>
          <p id="category-filter-label" className="block text-text-secondary text-sm font-semibold mb-3">
            Category
          </p>
          <div
            role="group"
            aria-labelledby="category-filter-label"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                aria-pressed={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-accent-primary text-background-primary'
                    : 'bg-background-secondary text-text-secondary hover:text-accent-primary border border-background-tertiary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Filter */}
        <div>
          <p id="experience-filter-label" className="block text-text-secondary text-sm font-semibold mb-3">
            Experience Level
          </p>
          <div
            role="group"
            aria-labelledby="experience-filter-label"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"
          >
            {experiences.map((exp) => (
              <button
                key={exp.id}
                type="button"
                aria-pressed={selectedExperience === exp.id}
                onClick={() => setSelectedExperience(exp.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  selectedExperience === exp.id
                    ? 'bg-accent-primary text-background-primary'
                    : 'bg-background-secondary text-text-secondary hover:text-accent-primary border border-background-tertiary'
                }`}
              >
                {exp.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="mb-6">
          <p className="text-text-secondary">
            Showing <span className="font-semibold text-text-primary">{filtered.length}</span> of{' '}
            <span className="font-semibold text-text-primary">{opportunities.length}</span>{' '}
            opportunities
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-tertiary mb-4">No opportunities match your criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedExperience('all')
              }}
              className="text-accent-primary hover:text-accent-light font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
