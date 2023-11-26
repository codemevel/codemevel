'use client'

import { gsap } from 'gsap'
import { ReactNode, useRef } from 'react'

import Button from '../ui/Button'
import IntroLable from '../ui/IntroLable'

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

function LayoutScroll({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLUListElement>(null)

  // Register a custom ease with GSAP

  const handleScroll = (scrollOffset: number) => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        duration: 0.3, // Adjust animation duration as needed
        scrollLeft: containerRef.current.scrollLeft + scrollOffset,
      })
    }
  }
  return (
    <section className="min-h-screen w-full  flex flex-col md:flex-row justify-center items-center  md:py-20 p-5 ">
      <div className=" w-80 md:p-10 p-0">
        <IntroLable label="Testimonials" />
        <div className=" py-5 gap-x-5 flex">
          <Button
            title="<-"
            ariaLabel="Scroll Left"
            onClick={() => handleScroll(-800)} // Adjust the scroll distance as needed
          />
          <Button
            title="->"
            ariaLabel="Scroll Right"
            onClick={() => handleScroll(800)} // Adjust the scroll distance as needed
          />
        </div>
      </div>
      <ul
        ref={containerRef}
        style={{ scrollBehavior: 'smooth' }} // Add smooth scrolling behavior for older browsers
        className="max-w-6xl h-full w-full md:p-10 dot-matrix grid  grid-flow-col gap-5 gap-x-10 p-5 overflow-hidden overflow-x-auto"
      >
        {children}
      </ul>
    </section>
  )
}

function Testimonials() {
  return (
    <LayoutScroll>
      {servicesData.map((service) => {
        return (
          <li
            key={service.heading}
            className="mb-2 p-5 flex flex-col justify-center relative hover:scale-[.99]  md:w-[40vw] md:h-[70vh] h-80 w-80 bg-white/90 dark:bg-black/90  border-[0.5px] dark:border-white/30 border-black/30 rounded-sm dark:text-white/50 text-black/50 dark:hover:bg-white/10 hover:bg-black/10"
          >
            <div className="h-10 w-10 border-t-[0.5px] absolute top-1 left-1 border-l-[0.5px] opacity-30" />
            <div className="h-10 w-10 border-b-[0.5px] absolute bottom-1 right-1 border-r-[0.5px] opacity-30" />

            <h3 className="text-4xl  py-5 font-semibold dark:text-white text-black ">
              {service.heading}
              <br />
            </h3>
            <p className="mb-5 text-xl"> {service.content}</p>
          </li>
        )
      })}
    </LayoutScroll>
  )
}

export default Testimonials
