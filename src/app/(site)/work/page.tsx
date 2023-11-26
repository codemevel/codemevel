import type { Metadata } from 'next'

import Work from './Work'

const title: string =
  ' Work CodeMevel - Building Trust with Exceptional Web Services'
const description: string =
  'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites.'
export const metadata: Metadata = {
  metadataBase: new URL('https://codemevel.com/work'),
  title,
  description,
  keywords: ['codemevel', 'Work'],
  applicationName: 'Codemevel',
}

const Page = async () => <Work />

export default Page
