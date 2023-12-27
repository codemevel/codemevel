import type { Metadata } from 'next'

import { getPrivacy } from '@/hooks/api'

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

export default async function Page() {
  const privacy = await getPrivacy()
  if (!privacy) return null
  return <Privacy privacy={privacy} />
}
