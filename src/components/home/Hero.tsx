import Link from 'next/link'

import Button from '../ui/Button'
import HeroSvg from './HeroSvg'

const Hero = async () => {
  return (
    <section className="h-full hero-background w-full text-white">
      <div className=" bg-gradient-to-t from-white  dark:from-black to-transparent ">
        <div className="max-w-7xl mx-auto p-5 md:p-10 mt-10 flex justify-center items-start flex-col">
          <h1 className="text-4xl  md:text-8xl dark:text-white text-black  font-semibold ">
            Building Trust with Exceptional Web Services
          </h1>
          <p className="text-xl  md:text-4xl dark:text-white/70  text-black   max-w-3xl">
            Explore the experiences of our satisfied clients and their journey
            with Codemevel. Trust our expertise in crafting websites.
          </p>
          <div className="flex py-10 gap-5">
            <Link href="/contact">
              <Button title="Get Started" ariaLabel="Get Started" />
            </Link>
            <Link href="/contact">
              <Button title="Contact Us" ariaLabel="Contact Us" />
            </Link>
          </div>
        </div>
        <div className="overflow-hidden  md:h-[50vh] max-w-7xl md:px-10 p-5  mx-auto w-full">
          <HeroSvg />
        </div>
      </div>
    </section>
  )
}

export default Hero
