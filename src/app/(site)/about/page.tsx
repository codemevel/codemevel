import type { Metadata } from 'next'

import About from '@/app/(site)/about/About'
import { getAbout } from '@/hooks/api'

const title: string =
  ' About CodeMevel - Building Trust with Exceptional Web Services'
const description: string =
  'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites.'
export const metadata: Metadata = {
  metadataBase: new URL('https://codemevel.com/about'),
  title,
  description,
  keywords: ['codemevel', 'About'],
  applicationName: 'Codemevel',
}

async function Page() {
  const about = await getAbout()
  if (!about) return null
  return <About about={about} />
}

export default Page
