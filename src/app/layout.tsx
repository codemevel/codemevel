/* eslint-disable sonarjs/no-duplicate-string */
import '@/styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'
// eslint-disable-next-line camelcase
import { Inter_Tight } from 'next/font/google'
import React from 'react'

import Footer from '@/app/_layout/Footer'
import Header from '@/app/_layout/Header'

import { ThemeProvider } from './_layout/ThemeProvider'
import Scroll from './_ui/Scroll'
import ScrollToTopButton from './_ui/ScrollToUp'

export const switchThemeDuration: string = 'duration-0'
const font = Inter_Tight({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  display: 'swap',
})

const title: string = 'CodeMevel - Building Trust with Exceptional Web Services'
const description: string =
  'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites.'

export const viewport: Viewport = {
  themeColor: '#ffffff',
  viewportFit: 'cover',
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
}
export const metadata: Metadata = {
  metadataBase: new URL('https://codemevel.com'),
  title,
  description,
  keywords: ['codemevel', 'CodeMevel'],
  applicationName: 'Codemevel',
  manifest: '/manifest.webmanifest.json',
  icons: [
    { rel: 'apple-touch-icon', url: '/logo.svg' },
    { rel: 'shortcut icon', url: '/favicon.ico' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title,
    startupImage: ['/logo.svg'],
  },
  openGraph: {
    title: {
      default: title,
      template: '%s - Codemevel',
    },
    description,
    emails: 'codemevel@gmail.com',
    siteName: 'CodeMevel',
    type: 'website',
    url: '/',
  },
  formatDetection: {
    telephone: true,
  },
  twitter: {
    creator: 'codemevel',
    creatorId: '@codemevel',
    site: '/',
    card: 'summary_large_image',
    title: {
      default: title,
      template: '%s - Codemevel',
    },
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
        className={`${font.className} dark:bg-black bg-white dark:dark:text-white text-black ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
          <Footer />
          <Scroll />
          <ScrollToTopButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
