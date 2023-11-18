/* eslint-disable sonarjs/no-duplicate-string */
import '@/styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import React from 'react'

import Footer from '@/app/_layout/Footer'
import Header from '@/app/_layout/Header'

import { ThemeProvider } from './_layout/ThemeProvider'
import Scroll from './_ui/Scroll'

export const switchThemeDuration: string = 'duration-200'
const railway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const title: string =
  'CodeMevel - Building Trust through Exceptional Web Development'
const description: string =
  'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites.'

// export const viewport: Viewport = {
//   themeColor: 'black',
//   width: 'device-width',
//   initialScale: 1,
//   maximumScale: 1,
// }
export const metadata: Metadata = {
  metadataBase: new URL('https://codemevel.com'),
  title,
  description,
  keywords: ['codemevel', 'CodeMevel'],
  applicationName: 'Codemevel',

  openGraph: {
    title,
    description,
    emails: 'codemevel@gmail.com',
    siteName: 'CodeMevel',
    type: 'website',
    url: '/',
  },
  twitter: {
    creator: 'codemevel',
    creatorId: '@codemevel',
    site: '/',
    card: 'summary_large_image',
    title,
    description,
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${railway.className} dark:bg-black bg-white dark:dark:text-white  text-black text-black ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
          <Scroll />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
