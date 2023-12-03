import Link from 'next/link'

import Layout from '../layout/Layout'
import SubLayout from '../layout/SubLayout'
import Button from '../ui/Button'
import Card from '../ui/Card'
import IntroLable from '../ui/IntroLable'
import SubTitle from '../ui/SubTitle'
import Title from '../ui/Title'
import MiniHeroSvg from './MiniHeroSvg'

function Services() {
  const servicesData = [
    {
      link: '/blog',
      heading: 'Tailored Solutions',
      content:
        "We understand that every business is unique. That's why we offer customized solutions that are specifically tailored to meet your individual requirements and goals.",
    },
    {
      link: '/blog',
      heading: 'Web Development',
      content:
        'From conceptualization to execution, we specialize in creating visually stunning and user-friendly websites that leave a lasting impression.',
    },
    {
      link: '/blog',
      heading: 'E-Commerce Solutions',
      content:
        'Empower your online business with our robust e-commerce solutions that enhance customer experience and boost sales.',
    },
    {
      link: '/blog',
      heading: '(UI/UX) Design',
      content:
        'We believe in the power of seamless user experiences. Our design experts ensure that every click resonates with your audience, creating an intuitive interface.',
    },
    {
      link: '/blog',
      heading: 'Hosting Solutions',
      content:
        'Secure and reliable hosting services that provide the foundation for your digital presence, ensuring seamless accessibility and performance for your website.',
    },
    {
      link: '/blog',
      heading: 'Maintenance Support',
      content:
        'Our dedicated team is committed to providing ongoing technical support and maintenance to ensure that your digital platforms operate seamlessly without any glitches.',
    },
  ]
  return (
    <Layout>
      <>
        <div className="flex flex-col relative md:flex-row w-full justify-between items-center">
          <SubLayout>
            <IntroLable label="Services" />
            <Title title="What Services We Provide." />
            <SubTitle subTitle="At CodeMevel, we are dedicated to providing a comprehensive suite of services tailored to meet your digital needs." />
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
        <div className=" mt-10 dot-matrix  ">
          <SubLayout>
            <IntroLable label="Our expertise lies in the following areas" />
          </SubLayout>
          <ul className="grid p-5  md:p-10 md:grid-cols-4 grid-col-8 gap-5">
            {servicesData.map(({ heading, content, link }, index) => (
              <Card
                content={content}
                heading={heading}
                key={heading}
                index={index}
                link={link}
              />
            ))}
          </ul>
        </div>
      </>
    </Layout>
  )
}

export default Services
