import type { Metadata } from 'next'
import React from 'react'

import Terms from './Terms'

const title: string = ' Terms and Conditions | CodeMevel '
const description: string =
  'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites.'
export const metadata: Metadata = {
  metadataBase: new URL('https://codemevel.com/terms'),
  title,
  description,
  keywords: ['codemevel', 'Terms and Conditions'],
  applicationName: 'Codemevel',
}

function Page() {
  return <Terms />
}

export default Page
