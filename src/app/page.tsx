import Hero from '@/app/_home/Hero'
import Services from '@/app/_home/Services'
import WhyChooseUs from '@/app/_home/WhyChooseUs'
import About from '@/app/about/About'

import GetStarted from './_cta/GetStarted'
import Faq from './_home/Faq'

const Page = async () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Faq />
      <GetStarted />
    </>
  )
}

export default Page
