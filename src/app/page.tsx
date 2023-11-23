import Hero from '@/app/_home/Hero'
import Services from '@/app/_home/Services'
import WhyChooseUs from '@/app/_home/WhyChooseUs'
import About from '@/app/about/About'

import GetStarted from './_cta/GetStarted'
import Faq from './_home/Faq'
import Testimonials from './_home/Testimonials'
import Blog from './blog/Blog'

const Page = async () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <Faq />
      <GetStarted />
    </>
  )
}

export default Page
