// Set NEXT_PUBLIC_SITE_URL to the production origin so canonical URLs, Open Graph tags,
// and the sitemap point at the real domain rather than localhost.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
