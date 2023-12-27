'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

import Social from '../layout/Social'
import Button from '../ui/Button'
import HeroSvg from './HeroSvg'

const Hero = async () => {
  const heroData = {
    title: 'Building Trust with Exceptional Web Services',
    description:
      'Explore the experiences of our satisfied clients and their journey with Codemevel. Trust our expertise in crafting websites.',
    button1: 'Get Started',
    button2: 'Contact Us',
  }
  return (
    <section className="h-full  hero-background max-w-9xl border-x-[0.5px] dark:border-white/10 border-black/10  w-full text-white">
      <div className="flex flex-col  justify-center bg-gradient-to-t px-5 from-white   dark:from-black   to-transparent h-full w-full">
        <div className="flex justify-between items-center flex-col ">
          <div className="">
            <div className="h-28" />

            <h1 className="text-4xl  md:text-8xl dark:text-white text-black  font-semibold max-w-6xl py-5">
              {heroData.title}
            </h1>
            <p className="text-xl  md:text-4xl dark:text-white/70  text-black   max-w-3xl">
              {heroData.description}
            </p>
            <div className="flex py-10 gap-5">
              <Link href="/contact">
                <Button title={heroData.button1} ariaLabel="Get Started" />
              </Link>
              <Link href="/contact">
                <Button title={heroData.button2} ariaLabel="Contact Us" />
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
