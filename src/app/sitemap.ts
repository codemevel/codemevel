import { MetadataRoute } from 'next'

const routes = [
  '',
  '/blog',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/services',
  '/work',
]
const baseUrl = process.env.NEXT_PUBLIC_URL
  ? `${process.env.NEXT_PUBLIC_URL}`
  : 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap: MetadataRoute.Sitemap = routes.map((route: string) => {
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'always',
      priority: 1,
    }
  })

  return [...routesMap]
}
