import Link from 'next/link'

import Button from '../_ui/Button'
import IntroLable from '../_ui/IntroLable'
import SubTitle from '../_ui/SubTitle'
import Title from '../_ui/Title'
import MiniHeroSvg from './MiniHeroSvg'

function Services() {
  const servicesData = [
    {
      heading: 'Tailored Solutions',
      content:
        "We understand that every business is unique. That's why we offer customized solutions that are specifically tailored to meet your individual requirements and goals.",
    },
    {
      heading: 'Web Development',
      content:
        'From conceptualization to execution, we specialize in creating visually stunning and user-friendly websites that leave a lasting impression.',
    },
    {
      heading: 'E-Commerce Solutions',
      content:
        'Empower your online business with our robust e-commerce solutions that enhance customer experience and boost sales.',
    },
    {
      heading: '(UI/UX) Design',
      content:
        'We believe in the power of seamless user experiences. Our design experts ensure that every click resonates with your audience, creating an intuitive interface.',
    },
    {
      heading: 'Hosting Solutions',
      content:
        'Secure and reliable hosting services that provide the foundation for your digital presence, ensuring seamless accessibility and performance for your website.',
    },
    {
      heading: 'Maintenance Support',
      content:
        'Our dedicated team is committed to providing ongoing technical support and maintenance to ensure that your digital platforms operate seamlessly without any glitches.',
    },
  ]
  return (
    <section className="h-full max-w-6xl mx-auto pb-10 border-y-[0.5px] dark:border-white/10 border-black/10 w-full text-white">
      <div className="w-full relative">
        <div className="md:h-20 h-10 w-10 md:w-20 border-t-[0.5px] absolute -top-3 -left-0 md:-top-20 md:-left-20 border-l-[0.5px] opacity-30" />
        <div className="md:h-20 h-10 w-10 md:w-20 border-b-[0.5px] absolute -bottom-5 -right-0 md:-bottom-20 md:-right-20 border-r-[0.5px] opacity-30" />

        <div className="flex flex-col  relative md:flex-row py-10 w-full justify-between items-center">
          <div className="p-5 w-full z-10  dot-matrix ">
            <IntroLable label="Services" />
            <Title title="What Services We Provide." />
            <SubTitle subTitle="At CodeMevel, we are dedicated to providing a comprehensive suite of services tailored to meet your digital needs." />
            <div className="flex py-5 gap-5">
              <Link href="/contact">
                <Button title="Our Services" ariaLabel="Our Services" />
              </Link>
              <Link href="/contact">
                <Button title="Contact Us" ariaLabel="Contact Us" />
              </Link>
            </div>
          </div>

          <div className="w-full  p-5">
            <MiniHeroSvg />
          </div>
        </div>
        <div className="max-w-6xl">
          <div className="px-5">
            <IntroLable label="Our expertise lies in the following areas" />
          </div>
          <ul className="gap-5 grid  dot-matrix  grid-cols-4 md:grid-cols-8 px-5 relative  pb-10">
            {servicesData.map((service, index) => (
              <li
                key={service.heading}
                className="mb-2 p-5 flex flex-col justify-between relative hover:scale-[.99]  col-span-4  bg-white/50 dark:bg-black/50  border-[0.5px] border-white/30 rounded-sm dark:text-white/50 text-black/50 hover:bg-white/10"
              >
                <div className="h-10 w-10 border-t-[0.5px] absolute top-1 left-1 border-l-[0.5px] opacity-30" />
                <div className="h-10 w-10 border-b-[0.5px] absolute bottom-1 right-1 border-r-[0.5px] opacity-30" />

                <div className="pb-5 slashed-zero font-mono">
                  <p> 0{index + 1}</p>
                </div>
                <h3 className="text-2xl  py-5 font-semibold text-white">
                  {service.heading}
                  <br />
                </h3>
                <p className="mb-5"> {service.content}</p>
                <Button
                  title="Read more ->"
                  ariaLabel={`Read more about ${service.heading}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services
