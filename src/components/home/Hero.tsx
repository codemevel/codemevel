'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

import Social from '../layout/Social'
import Button from '../ui/Button'
import ScrollDown from '../ui/ScrollDown'

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  return (
    <section ref={ref} className="h-full relative w-full text-white">
      <motion.div
        style={{ y }}
        className="z-0 hero-background absolute top-0 h-full w-full"
      />
      <motion.div
        style={{ y }}
        className="z-0 bg-gradient-to-t from-black/90 via-transparent to-transparent absolute top-0 h-full w-full"
      />
      <div className="z-1 relative  ">
        <div className="max-w-7xl sm:p-5 md:p-5 min-h-screen h-full mx-auto p-5 md:px-0 md:py-10 mt-10 flex justify-center items-start flex-col">
          <h1 className="text-5xl mb-10 gap-x-5 flex flex-row flex-wrap md:text-8xl font-semibold dark:text-white text-black">
            <span className="text-primary inline">Codemevel</span>
            <span className="inline"> Provides Exceptional Web</span>
            <span className="decoration-wavy w-auto  underline md:underline decoration-2 md:decoration-4 inline   font-semibold decoration-primary">
              Solutions
            </span>
            <span> For Business</span>
          </h1>
          <p className="text-2xl md:text-4xl font-light dark:text-white/80 text-black max-w-3xl">
            Explore the experiences of our satisfied clients and their journey
            with Codemevel.
          </p>
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <div className="flex md:w-auto w-full py-10 gap-5">
              <Link href="/contact">
                <Button title="Get Started" ariaLabel="Get Started" />
              </Link>
              <Link href="/contact">
                <Button title="Contact Us" ariaLabel="Contact Us" />
              </Link>
            </div>
            <ScrollDown link="#About" />
            <div className="max-w-2xl md:block hidden md:py-0 py-5 ">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
