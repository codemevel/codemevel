import React from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Scroll from '@/components/ui/Scroll'
import ScrollToTopButton from '@/components/ui/ScrollToUp'
import { getHeaderMenu } from '@/hooks/api'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const menu = await getHeaderMenu()
  return (
    <>
      {menu && <Header menu={menu} />}
      {children}
      <Footer />
      <Scroll />
      <ScrollToTopButton />
    </>
  )
}
