export interface FaqItem {
  question: string
  answer: string
}

export interface FaqSection {
  title: string
  items: FaqItem[]
}

export const faqSections: FaqSection[] = [
  {
    title: 'Getting started',
    items: [
      {
        question: 'Is this only for software developers?',
        answer:
          'No. Some opportunities are suitable for people without technical backgrounds. Projects regularly need writing, research, translation, evaluation, content review, and subject-matter expertise alongside engineering work.',
      },
      {
        question: 'Do I need programming experience?',
        answer:
          'Not necessarily. Requirements depend on the individual project. Each opportunity lists the skills and experience it needs, so you can see before applying whether it matches your background.',
      },
      {
        question: 'Can non-technical professionals participate?',
        answer:
          'Yes. Many opportunities involve language, writing, research, evaluation, content review, data review, and similar skills. If you are unsure where you fit, create a profile and we will help you identify suitable categories.',
      },
      {
        question: 'Do I have to pay to join?',
        answer:
          'Creating a profile is free. If any fees ever apply to a specific service, they will be stated clearly before you commit to anything.',
      },
    ],
  },
  {
    title: 'Working on projects',
    items: [
      {
        question: 'Do I need to work full-time?',
        answer:
          'Not necessarily. Project requirements vary. Some opportunities suit a few hours a week, others need a larger commitment. Expected workload is listed on each opportunity.',
      },
      {
        question: 'Can I work remotely?',
        answer:
          'Where a project supports remote work, this is stated in the opportunity details along with any time zone or location requirements.',
      },
      {
        question: 'What happens after I apply?',
        answer:
          'We review your background against the project requirements. If there is a match, we contact you to discuss scope and terms. Agreed terms are confirmed in writing before work begins.',
      },
    ],
  },
  {
    title: 'Compensation',
    items: [
      {
        question: 'Is income guaranteed?',
        answer:
          'No. Opportunities, availability, compensation, and eligibility vary by project. We do not guarantee earnings, placement, or ongoing work.',
      },
      {
        question: 'How is compensation determined?',
        answer:
          'Compensation depends on the specific project, role, experience, requirements, workload, and agreed terms. The structure and payment terms for each opportunity are shared before you commit your time.',
      },
      {
        question: 'When do I get paid?',
        answer:
          'Payment terms are defined per project and confirmed in writing before work begins. They are listed in the opportunity details so you know the terms up front.',
      },
    ],
  },
  {
    title: 'About the company',
    items: [
      {
        question: 'Are you an official partner of Snorkel, Outlier, or DataAnnotation?',
        answer:
          'We do not claim any formal partnership with these or other platforms. Professionals in our network have experience working with a range of leading AI and technology platforms. Any partnership we describe publicly will be one that has been formally verified.',
      },
      {
        question: 'How do you protect my information?',
        answer:
          'We collect only the information needed to match you with opportunities. See our Privacy Policy for details on what is collected, how it is used, and how to request its removal.',
      },
    ],
  },
]
