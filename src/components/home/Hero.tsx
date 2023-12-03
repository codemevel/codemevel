import Link from 'next/link'

import Social from '../layout/Social'
import Button from '../ui/Button'
import ScrollDown from '../ui/ScrollDown'

const Hero = async () => {
  return (
    <section className="h-full hero-background w-full text-white">
      <div className=" bg-gradient-to-t from-gray-100 dark:from-black/70 to-transparent ">
        <div className="max-w-7xl min-h-screen h-full mx-auto p-5 md:px-0 md:py-10 mt-10 flex justify-center items-start flex-col">
          <h1 className="text-5xl mb-10 md:text-8xl  dark:text-white text-black">
            <span className="text-primary">Codemevel</span> Can Provide
            Exceptional Solutions For Your Business & Need
          </h1>
          <p className="text-2xl md:text-4xl font- dark:text-white/80 text-black max-w-3xl">
            Explore the experiences of our satisfied clients and their journey
            with Codemevel. Trust our expertise in crafting websites.
          </p>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex py-10 gap-5">
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
