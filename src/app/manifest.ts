import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CodeMevel - Building Trust with Exceptional Web Services',
    short_name: 'Codemevel',
    description:
      'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: 'logo.svg',
        sizes: '48x48 72x72 96x96 128x128 256x256 512x512',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
