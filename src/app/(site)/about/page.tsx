import type { Metadata } from 'next'

import About from '@/app/(site)/about/About'

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

function Page() {
  return <About />
}

export default Page
