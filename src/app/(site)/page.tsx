// import About from '@/app/(site)/about/About'
import ChallengeBenefit from '@/components/home/ChallengeBenefit'
import Earn from '@/components/home/Earn'
import Faq from '@/components/home/Faq'
import GetStarted from '@/components/home/GetStarted'
import Hero from '@/components/home/Hero'
import Marketing from '@/components/home/Marketing'
import Owner from '@/components/home/Owner'
import Process from '@/components/home/Process'
// import Services from '@/components/home/Services'
import Testimonials from '@/components/home/Testimonials'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import InfinteTextScroll from '@/components/ui/InfinteTextScroll'

const Page = async () => {
  // const about = await getAbout()
  // if (!about) return null
  return (
    <>
      <Hero />
      <InfinteTextScroll text="Codemevel Here -" />
      {/* <About /> */}
      <Marketing />
      <Owner />
      {/* <Services /> */}
      <ChallengeBenefit />
      <Testimonials />
      <WhyChooseUs />
      <Process />
      <Earn />
      <Faq />
      <GetStarted />
    </>
  )
}

export default Page
