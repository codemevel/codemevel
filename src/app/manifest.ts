import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CodeMevel - Building Trust through Exceptional Web Development',
    short_name: 'Codemevel',
    description:
      'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#000',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg',
      },
    ],
  }
}
