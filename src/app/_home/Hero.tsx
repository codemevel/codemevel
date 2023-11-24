import Link from 'next/link'

import Button from '../_ui/Button'
import HeroSvg from './HeroSvg'

const Hero = async () => {
  return (
    <section className="h-full  hero-background max-w-9xl border-x-[0.5px] dark:border-white/10 border-black/10  w-full text-white">
      <div className="flex flex-col  justify-center bg-gradient-to-t px-5 from-white   dark:from-black   to-transparent h-full w-full">
        <div className="flex justify-between items-center flex-col ">
          <div className="">
            <div className="h-28" />

            <h1 className="text-4xl  md:text-8xl dark:text-white text-black  font-semibold max-w-6xl py-5">
              Building Trust with Exceptional Web Services
            </h1>
            <p className="text-xl  md:text-4xl dark:text-white/70  text-black/50  max-w-3xl">
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
          <div className="overflow-hidden  md:h-[50vh] max-w-6xl mx-auto w-full">
            <HeroSvg />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
