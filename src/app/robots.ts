import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_URL
  ? `https://${process.env.NEXT_PUBLIC_URL}`
  : 'http://localhost:3000'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
