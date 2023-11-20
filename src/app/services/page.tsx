import type { Metadata } from 'next'
import React from 'react'

import Services from '../_home/Services'

const title: string =
  ' Services CodeMevel - Building Trust through Exceptional Web Development'
const description: string =
  'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites.'
export const metadata: Metadata = {
  metadataBase: new URL('https://codemevel.com/Services'),
  title,
  description,
  keywords: ['codemevel', 'Services'],
  applicationName: 'Codemevel',
}

const Page = async () => <Services />

export default Page
