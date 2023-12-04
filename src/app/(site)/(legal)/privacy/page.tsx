import type { Metadata } from 'next'

import Privacy from './Privacy'

const title: string =
  ' Privacy Policy | CodeMevel - Building Trust with Exceptional Web Services'
const description: string =
  'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites.'
export const metadata: Metadata = {
  metadataBase: new URL('https://codemevel.com/privacy'),
  title,
  description,
  keywords: ['codemevel', 'Privacy Policy'],
  applicationName: 'Codemevel',
}

const Page = async () => <Privacy />

export default Page
