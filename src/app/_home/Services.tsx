import Link from 'next/link'

import Button from '../_ui/Button'
import DotMatrixSVG from '../_ui/DotMatrix'
import IntroLable from '../_ui/IntroLable'
import SubTitle from '../_ui/SubTitle'
import Title from '../_ui/Title'
import MiniHeroSvg from './MiniHeroSvg'

function Services() {
  const servicesData = [
    {
      title: 'Tailored Solutions',
      description:
        "We understand that every business is unique. That's why we offer customized solutions that are specifically tailored to meet your individual requirements and goals.",
    },
    {
      title: 'Web Development',
      description:
        'From conceptualization to execution, we specialize in creating visually stunning and user-friendly websites that leave a lasting impression.',
    },
    {
      title: 'E-Commerce Solutions',
      description:
        'Empower your online business with our robust e-commerce solutions that enhance customer experience and boost sales.',
    },
    {
      title: '(UI/UX) Design',
      description:
        'We believe in the power of seamless user experiences. Our design experts ensure that every click resonates with your audience, creating an intuitive interface.',
    },
    {
      title: 'Hosting Solutions',
      description:
        'Secure and reliable hosting services that provide the foundation for your digital presence, ensuring seamless accessibility and performance for your website.',
    },
    {
      title: 'Maintenance Support',
      description:
        'Our dedicated team is committed to providing ongoing technical support and maintenance to ensure that your digital platforms operate seamlessly without any glitches.',
    },
  ]
  return (
    <section className="h-full overflow-hidden  max-w-6xl mx-auto py-10 border-y-[0.5px] dark:border-white/10 border-black/10 w-full text-white">
      <div className="w-full">
        <div className="flex flex-col  relative md:flex-row py-10 w-full justify-between items-center">
          <div className="absolute -right-60 ">
            <div className="absolute bg-gradient-to-r from-white via-transparent dark:from-black h-full w-full" />
            <DotMatrixSVG width={1000} height={500} />
          </div>

          <div className="absolute top-16 -left-20 opacity-70">
            <DotMatrixSVG width={200} height={400} />
          </div>
          <div className="px-5 w-full z-10   ">
            <IntroLable label="Services" />
            <Title title="What Services We Provide." />
            <SubTitle subTitle="At CodeMevel, we are dedicated to providing a comprehensive suite of services tailored to meet your digital needs." />
            <div className="flex py-5 gap-5">
              <Link href="/contact">
                <Button title="Our Services" />
              </Link>
              <Link href="/contact">
                <Button title="Contact Us" />
              </Link>
            </div>
          </div>

          <div className="w-full p-5">
            <MiniHeroSvg />
          </div>
        </div>
        <div className="max-w-6xl">
          <div className="px-5">
            <IntroLable label="Our expertise lies in the following areas" />
          </div>
          <ul className="gap-5 grid grid-cols-4 md:grid-cols-8 px-5 relative  pb-10">
            <div className="absolute top-5 -left-20 opacity-90">
              <DotMatrixSVG width={1200} height={1200} />
            </div>
            {servicesData.map((service, index) => (
              <li
                key={service.title}
                className="mb-2 p-5 relative hover:scale-[.99]  col-span-4 backdrop-blur-sm border-[0.5px] border-white/30 rounded-sm dark:text-white/50 text-black/50 hover:bg-white/10"
              >
                <div className="h-10 w-10 border-t-[0.5px] absolute top-1 left-1 border-l-[0.5px] opacity-30" />
                <div className="h-10 w-10 border-b-[0.5px] absolute bottom-1 right-1 border-r-[0.5px] opacity-30" />

                <div className="pb-5 slashed-zero font-mono">
                  <p> 0{index + 1}</p>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                  <br />
                </h3>
                <p className="mb-5"> {service.description}</p>
                <Button title="Read more ->" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services
