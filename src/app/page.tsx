import React from 'react'

import About from '@/components/about/About'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import WhyChooseUs from '@/components/home/WhyChooseUs'

const Page = async () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
    </>
  )
}

export default Page
