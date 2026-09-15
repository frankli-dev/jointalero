export type OpportunityCategory = 'ai-data' | 'software' | 'non-tech' | 'qa'

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export type OpportunityStatus = 'active' | 'filled' | 'closed'

export interface Skill {
  id: string
  name: string
  category: OpportunityCategory
}

export interface Opportunity {
  id: string
  title: string
  description: string
  category: OpportunityCategory
  type: 'contract' | 'freelance' | 'project-based'
  skills: string[]
  experienceLevel: ExperienceLevel
  location: string
  remote: boolean
  estimatedHours?: number
  compensation: {
    currency: string
    amount: number
    period: 'hour' | 'project' | 'fixed'
  }
  duration: string
  deadline: string
  overview: string
  responsibilities: string[]
  requirements: string[]
  preferences?: string[]
  workArrangement: string
  status: OpportunityStatus
  createdAt: string
  featured?: boolean
}

export interface Professional {
  id: string
  name: string
  email: string
  location: string
  skills: string[]
  languages: string[]
  bio?: string
  experience?: string
  portfolio?: string
  linkedin?: string
  availability: 'full-time' | 'part-time' | 'flexible' | 'limited'
  preferredCategories: OpportunityCategory[]
  createdAt: string
}

export interface Company {
  id: string
  name: string
  email: string
  website?: string
  industry?: string
  size?: string
  message?: string
  projectType: string
  requiredSkills: string[]
  createdAt: string
}

export interface SiteConfig {
  name: string
  description: string
  tagline: string
  logo: string
  metrics: {
    projectsDelivered: string | number
    opportunities: string
    compensation: string
    workType: string
  }
  contact: {
    email: string
    phone?: string
    address: string
  }
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}
