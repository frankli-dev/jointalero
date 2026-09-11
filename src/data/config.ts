import { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Jointalero',
  description: 'Your Skills. Global Opportunities. Connect with AI, data, software, and technology projects from around the world.',
  tagline: 'Your Skills. Global Opportunities.',
  logo: 'jointalero',
  metrics: {
    projectsDelivered: '40+',
    opportunities: 'Global',
    compensation: 'Transparent',
    workType: 'Flexible',
  },
  contact: {
    email: 'leo@jointalero.com',
    phone: undefined,
  },
  social: {
    linkedin: undefined,
    twitter: undefined,
  },
}

export const homePageCopy = {
  hero: {
    headline: 'Your Skills. Global Opportunities.',
    subheadline:
      'Connect with AI, data, software, and technology projects that match your skills, experience, and availability.',
    cta1: 'Explore Opportunities',
    cta2: 'Join the Talent Network',
  },
  trustMessage: 'Built around skills, transparency, and real project opportunities.',
  metrics: {
    projectsDelivered: '40+',
    opportunities: 'Global',
    compensation: 'Transparent',
    workType: 'Flexible',
  },
  audiences: {
    technical: {
      title: 'Technical Professionals',
      description: 'Developers, engineers, QA specialists, DevOps professionals, and other technical experts.',
      cta: 'Explore Technical Opportunities',
    },
    nonTechnical: {
      title: 'Non-Technical Professionals',
      description:
        'Writers, researchers, translators, evaluators, reviewers, and professionals with valuable domain expertise.',
      cta: 'Explore Non-Technical Opportunities',
    },
    companies: {
      title: 'Companies',
      description: 'Organizations looking for skilled professionals and flexible project teams.',
      cta: 'Hire Talent',
    },
  },
  notAnEngineer: {
    headline: 'Not an Engineer? No Problem.',
    subheadline: 'Technology opportunities aren\'t limited to programmers.',
    body: 'Many AI and technology projects need people with strong communication, research, language, analytical, writing, evaluation, and subject-matter skills.',
    skills: [
      'Writing',
      'Research',
      'Translation',
      'Languages',
      'Evaluation',
      'Content',
      'Data review',
      'Quality assurance',
      'Communication',
      'Subject expertise',
    ],
    cta: 'Explore Non-Technical Opportunities',
  },
  timeStrategy: {
    headline: 'Don\'t Have Much Time? We\'ll Help You Build a Strategy.',
    body1: 'You don\'t need to spend every free hour searching for opportunities.',
    body2: 'We help you prioritize projects based on your skills, experience, availability, and goals.',
    cta: 'Discover Opportunities That Fit Your Schedule',
  },
  skillsValuable: {
    headline: 'Your Experience May Be More Valuable Than You Think.',
    body: 'You may already have skills that AI and technology projects need.',
  },
  technical: {
    headline: 'Build Your Next Opportunity Around Your Technical Skills.',
    benefits: [
      'Software development projects',
      'AI / ML projects',
      'Data projects',
      'QA / testing',
      'DevOps / cloud',
      'Flexible remote opportunities',
      'Clear requirements',
      'Transparent project terms',
    ],
    cta: 'Explore Technical Opportunities',
  },
  companies: {
    headline: 'Build Your Technology Workforce.',
    subheadline: 'Access skilled professionals for AI, data, software development, and technology projects.',
    cta: 'Talk to Our Team',
  },
  transparency: {
    headline: 'Transparency First.',
    body: 'We believe professionals should understand an opportunity before committing their time.',
    items: [
      'Project requirements',
      'Required skills',
      'Expected workload',
      'Compensation structure',
      'Payment terms',
      'Project duration',
      'Eligibility requirements',
    ],
    footer: 'No guaranteed earnings. No hidden promises. Just clearly defined opportunities and clearly communicated terms.',
  },
}

export const skillsByCategory = {
  'ai-data': [
    'AI Model Evaluation',
    'Data Annotation',
    'Data Labeling',
    'LLM Evaluation',
    'Data Quality',
    'Content Evaluation',
    'AI Testing',
    'Human Feedback',
  ],
  software: [
    'Full-Stack Development',
    'Frontend Development',
    'Backend Development',
    'Python',
    'JavaScript/TypeScript',
    'Java',
    'Cloud Engineering',
    'DevOps',
  ],
  'non-tech': [
    'Writing',
    'Editing',
    'Research',
    'Translation',
    'Language Evaluation',
    'Content Review',
    'Data Review',
    'Quality Assurance',
  ],
  qa: [
    'QA Testing',
    'Test Automation',
    'Manual Testing',
    'Quality Assurance',
    'Bug Reporting',
    'Test Planning',
  ],
}

export const navigationLinks = [
  { label: 'Opportunities', href: '/opportunities' },
  { label: 'For Professionals', href: '/for-professionals' },
  { label: 'For Companies', href: '/for-companies' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
]

export const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  professionals: [
    { label: 'Opportunities', href: '/opportunities' },
    { label: 'Technical Opportunities', href: '/opportunities?category=software' },
    { label: 'Non-Technical Opportunities', href: '/opportunities?category=non-tech' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'FAQ', href: '/faq' },
  ],
  companies: [
    { label: 'Hire Talent', href: '/for-companies' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}
