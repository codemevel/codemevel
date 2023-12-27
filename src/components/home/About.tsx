'use client'

import { useRef } from 'react'

import Layout from '../layout/Layout'
import SubLayout from '../layout/SubLayout'
import Card from '../ui/Card'
import IntroLable from '../ui/IntroLable'
import SubTitle from '../ui/SubTitle'
import Title from '../ui/Title'

const aboutData = [
  {
    title: 'Our Mission',
    content:
      "Our mission is to empower businesses with robust and user-friendly digital platforms that not only enhance their online presence but also drive tangible results. We aim to be the driving force behind our client's digital success by delivering innovative and customized solutions that exceed their expectations.",
  },
  {
    title: 'Our Vision',
    content:
      'We envision a digital landscape where businesses can thrive through seamless and engaging online experiences. By leveraging the latest technologies and industry trends, we aspire to become a leading force in revolutionizing the way businesses interact and engage with their target audience in the digital realm.',
  },
  {
    title: 'Our Values',
    content:
      'We envision a digital landscape where businesses can thrive through seamless and engaging online experiences. By leveraging the latest technologies and industry trends, we aspire to become a leading force in revolutionizing the way businesses interact and engage with their target audience in the digital realm.',
  },
]
const items = [
  {
    link: '/blog',
    heading: 'Innovation',
    content:
      'We are committed to continuous innovation and the exploration of new technologies to deliver unique and creative solutions for our clients.',
  },
  {
    link: '/blog',
    heading: 'Integrity',
    content:
      'We uphold the highest standards of integrity, honesty, and transparency in all our interactions with clients, partners, and stakeholders.',
  },
  {
    link: '/blog',
    heading: 'Excellence',
    content:
      'We strive for excellence in every project we undertake, ensuring that our clients receive the best possible solutions that align with their goals and aspirations.',
  },
  {
    link: '/blog',
    heading: 'Collaboration',
    content:
      'We believe in the power of collaboration and teamwork, working closely with our clients to understand their needs and provide them with the best possible solutions.',
  },
  {
    link: '/blog',
    heading: 'Customer Satisfaction',
    content:
      'Your satisfaction is our priority. We go the extra mile to ensure that our clients are not just happy with the end results but also with the overall experience of working with us.',
  },
]
function About() {
  const ref = useRef(null)

  return (
    <div ref={ref} className="dot-matrix">
      <Layout>
        <div id="About">
          <div className="py-10 mt-10">
            <SubLayout>
              <IntroLable label="About us" />
              <Title title="About Codemevel" />
              <SubTitle subTitle="Codemevel is a dynamic and innovative web development startup dedicated to providing cutting-edge digital solutions for businesses of all sizes. With a team of creative minds and technical experts, we strive to transform your digital ideas into engaging and functional realities." />
            </SubLayout>
          </div>

          {aboutData.map((section) => (
            <div
              key={section.title}
              className="  md:p-10 bg-black/10  border-b-[0.5px] border-black/30 dark:border-white/30 "
            >
              <h3 className="text-2xl md:text-4xl font-semibold mb-4 dark:text-white text-black">
                {section.title}
              </h3>
              {section.content && (
                <p className="text-sm md:text-2xl font-extralight dark:text-white  text-black/80 mb-6 max-w-4xl">
                  {section.content}
                </p>
              )}
            </div>
          ))}
          {items && (
            <ul className="grid  md:grid-cols-12 grid-col-8 gap-5">
              {items.map(({ heading, content, link }, index) => (
                <Card
                  content={content}
                  heading={heading}
                  key={heading}
                  index={index}
                  link={link}
                />
              ))}
            </ul>
          )}
        </div>
      </Layout>
    </div>
  )
}

export default About
