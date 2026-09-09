import type { MetadataRoute } from 'next'
import { opportunities } from '@/data/opportunities'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/opportunities',
    '/for-professionals',
    '/for-companies',
    '/services',
    '/how-it-works',
    '/about',
    '/faq',
    '/contact',
    '/terms',
    '/privacy',
    '/cookies',
  ]

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...opportunities.map((opportunity) => ({
      url: `${siteUrl}/opportunities/${opportunity.id}`,
      lastModified: new Date(opportunity.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ]
}
