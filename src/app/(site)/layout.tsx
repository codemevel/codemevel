import React from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Scroll from '@/components/ui/Scroll'
import ScrollToTopButton from '@/components/ui/ScrollToUp'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Scroll />
      <ScrollToTopButton />
    </>
  )
}
