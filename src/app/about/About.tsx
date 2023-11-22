import React from 'react'

import Button from '../_ui/Button'
import IntroLable from '../_ui/IntroLable'
import SubTitle from '../_ui/SubTitle'
import Title from '../_ui/Title'

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
    items: [
      {
        heading: 'Innovation',
        content:
          'We are committed to continuous innovation and the exploration of new technologies to deliver unique and creative solutions for our clients.',
      },
      {
        heading: 'Integrity',
        content:
          'We uphold the highest standards of integrity, honesty, and transparency in all our interactions with clients, partners, and stakeholders.',
      },
      {
        heading: 'Excellence',
        content:
          'We strive for excellence in every project we undertake, ensuring that our clients receive the best possible solutions that align with their goals and aspirations.',
      },
      {
        heading: 'Collaboration',
        content:
          'We believe in the power of collaboration and teamwork, working closely with our clients to understand their needs and provide them with the best possible solutions.',
      },
      {
        heading: 'Customer Satisfaction',
        content:
          'Your satisfaction is our priority. We go the extra mile to ensure that our clients are not just happy with the end results but also with the overall experience of working with us.',
      },
    ],
  },
]

const About = async () => {
  return (
    <section className="h-full mx-auto max-w-6xl px-5 md:px-0 py-2 md:py-10 border-b-[0.5px] dark:border-white/10 border-black/10 w-full dark:text-white text-black">
      <div className="md:h-40 h-28 w-full" />

      <div className="relative">
        <div className="md:h-20 h-10 w-10 md:w-20 border-t-[0.5px] absolute -top-3 -left-3 md:-top-20 md:-left-20 border-l-[0.5px] opacity-30 " />
        <div className="md:h-20 h-10 w-10 md:w-20 border-b-[0.5px] absolute -bottom-5 -right-3 md:-bottom-20 md:-right-20 border-r-[0.5px] opacity-30" />
        <IntroLable label="About us" />
        <div className="md:py-10 py-5">
          <Title title="An intro to Codemevel" />
          <SubTitle
            subTitle=" CodeMevel is a dynamic and innovative web development startup
          dedicated to providing cutting-edge digital solutions for businesses
          of all sizes. With a team of creative minds and technical experts, we
          strive to transform your digital ideas into engaging and functional
          realities."
          />
        </div>
        {aboutData.map((section) => (
          <div
            key={section.title}
            className="dot-matrix border-l-[0.5px] border-black/30 dark:border-white/30 mb-5 p-5"
          >
            <h3 className="text-3xl font-bold mb-4 dark:text-white text-black">
              {section.title}
            </h3>
            {section.content && (
              <p className="text-base dark:text-white/50 text-black/50 mb-6 max-w-4xl">
                {section.content}
              </p>
            )}
            {section.items && (
              <ul className="grid md:grid-cols-12 grid-col-8 gap-5">
                {section.items.map((service, i) => (
                  <li
                    key={service.heading}
                    className="mb-2 p-5 relative hover:scale-[.99]  col-span-4  bg-white/50 dark:bg-black/50 border-[0.5px] border-white/30 rounded-sm dark:text-white/50 text-black/50 hover:bg-white/10"
                  >
                    <div className="h-10 w-10 border-t-[0.5px] absolute top-1 left-1 border-l-[0.5px] opacity-30" />
                    <div className="h-10 w-10 border-b-[0.5px] absolute bottom-1 right-1 border-r-[0.5px] opacity-30" />

                    <div className="pb-5 slashed-zero font-mono">
                      <p> 0{i + 1}</p>
                    </div>
                    <h3 className="text-2xl py-5 font-semibold text-white">
                      {service.heading}
                      <br />
                    </h3>
                    <p className="mb-5"> {service.content}</p>
                    <Button title="Read more ->" ariaLabel="read more" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="h-20 w-full" />
    </section>
  )
}

export default About
