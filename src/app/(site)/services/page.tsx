import type { Metadata } from 'next'

import Services from '../../../components/home/Services'

const title: string =
  'Services CodeMevel - Building Trust with Exceptional Web Services'
const description: string =
  'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites.'
export const metadata: Metadata = {
  metadataBase: new URL('https://codemevel.com/Services'),
  title,
  description,
  keywords: ['codemevel', 'Services'],
  applicationName: 'Codemevel',
}

const Page = async () => {
  return (
    <>
      <div className="h-40" />
      <Services />
    </>
  )
}

export default Page
