import Link from 'next/link'

import { IService } from '@/types'

import Layout from '../layout/Layout'
import SubLayout from '../layout/SubLayout'
import Button from '../ui/Button'
import IntroLable from '../ui/IntroLable'
import SubTitle from '../ui/SubTitle'
import Title from '../ui/Title'
import MiniHeroSvg from './MiniHeroSvg'

function Services({ services }: { services: IService }) {
  // const servicesData = [
  //   {
  //     heading: 'Tailored Solutions',
  //     content:
  //       "We understand that every business is unique. That's why we offer customized solutions that are specifically tailored to meet your individual requirements and goals.",
  //   },
  //   {
  //     heading: 'Web Development',
  //     content:
  //       'From conceptualization to execution, we specialize in creating visually stunning and user-friendly websites that leave a lasting impression.',
  //   },
  //   {
  //     heading: 'E-Commerce Solutions',
  //     content:
  //       'Empower your online business with our robust e-commerce solutions that enhance customer experience and boost sales.',
  //   },
  //   {
  //     heading: '(UI/UX) Design',
  //     content:
  //       'We believe in the power of seamless user experiences. Our design experts ensure that every click resonates with your audience, creating an intuitive interface.',
  //   },
  //   {
  //     heading: 'Hosting Solutions',
  //     content:
  //       'Secure and reliable hosting services that provide the foundation for your digital presence, ensuring seamless accessibility and performance for your website.',
  //   },
  //   {
  //     heading: 'Maintenance Support',
  //     content:
  //       'Our dedicated team is committed to providing ongoing technical support and maintenance to ensure that your digital platforms operate seamlessly without any glitches.',
  //   },
  // ]
  const { title, description, serviceDetails } = services
  return (
    <Layout>
      <>
        <div className="flex flex-col relative md:flex-row w-full justify-between items-center">
          <SubLayout>
            <IntroLable label="Services" />
            {title ? (
              <Title title={title} />
            ) : (
              <Title title="What Services We Provide." />
            )}
            <SubTitle
              subTitle={
                description ||
                'At CodeMevel, we are dedicated to providing a comprehensive suite of services tailored to meet your digital needs.'
              }
            />
            <div className="flex pt-5 gap-5">
              <Link href="/contact">
                <Button title="Our Services" ariaLabel="Our Services" />
              </Link>
              <Link href="/contact">
                <Button title="Contact Us" ariaLabel="Contact Us" />
              </Link>
            </div>
          </SubLayout>
          <div className="w-full p-5 md:p-10">
            <MiniHeroSvg />
          </div>
        </div>
        <div className=" mt-20 dot-matrix  ">
          <SubLayout>
            <IntroLable label="Our expertise lies in the following areas" />
            <ul className="gap-5 grid grid-cols-4 md:grid-cols-8 relative ">
              {serviceDetails?.map(({ title: T, description: D }, index) => (
                <li
                  key={T + D}
                  className="mb-2 p-5 flex flex-col justify-between relative hover:scale-[.99]  col-span-4  bg-white/50 dark:bg-black/50  border-[0.5px] border-white/30 rounded-sm dark:text-white/50 text-black/50 hover:bg-white/10"
                >
                  <div className="h-10 w-10 border-t-[0.5px] absolute top-1 left-1 border-l-[0.5px] opacity-30" />
                  <div className="h-10 w-10 border-b-[0.5px] absolute bottom-1 right-1 border-r-[0.5px] opacity-30" />

                  <div className="pb-5 slashed-zero text-primary font-mono">
                    <p> 0{index + 1}</p>
                  </div>
                  <h3 className="text-2xl  py-5 font-semibold text-white">
                    {T}
                    <br />
                  </h3>
                  <p className="mb-5"> {D}</p>
                  <Button
                    title="Read more ->"
                    ariaLabel={`Read more about ${T}`}
                  />
                </li>
              ))}
            </ul>
          </SubLayout>
        </div>
      </>
    </Layout>
  )
}

export default Services
