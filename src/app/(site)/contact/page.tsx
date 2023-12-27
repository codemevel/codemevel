import type { Metadata } from 'next'

import Contact from '../../../components/contact/Contact'

const title: string =
  ' Contact CodeMevel - Building Trust with Exceptional Web Services'
const description: string =
  'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites.'
export const metadata: Metadata = {
  metadataBase: new URL('https://codemevel.com/contact'),
  title,
  description,
  keywords: ['codemevel', 'Contact Us'],
  applicationName: 'Codemevel',
}

const Page = async () => <Contact />
export default Page
