import About from '@/app/(site)/about/About'
import Faq from '@/components/home/Faq'
import GetStarted from '@/components/home/GetStarted'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Testimonials from '@/components/home/Testimonials'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import InfinteTextScroll from '@/components/ui/InfinteTextScroll'

const Page = async () => {
  return (
    <>
      <Hero />
      <InfinteTextScroll text="Codemevel Here -" />
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
