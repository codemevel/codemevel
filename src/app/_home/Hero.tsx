import Link from 'next/link'

import Button from '../_ui/Button'
import HeroSvg from './HeroSvg'

const Hero = async () => {
  return (
    <section className="h-full  hero-background max-w-9xl border-x-[0.5px] dark:border-white/10 border-black/10  w-full text-white">
      <div className="flex flex-col min-h-screen justify-center bg-gradient-to-t px-5 from-black via-black to-transparent h-full w-full">
        <div className="flex justify-between items-center flex-col ">
          <div className="">
            <div className="h-20" />
            <h1 className="text-9xl font-bold dark:text-white text-black  max-w-6xl">
              Codemevel{' '}
            </h1>
            <h2 className="text-6xl dark:text-white text-black  font-semibold max-w-6xl py-5">
              Building Trust through Exceptional Web Development.
            </h2>
            <p className="text-3xl dark:text-white/50  text-black/50  max-w-6xl">
              Explore the experiences of our satisfied clients and their journey
              with Codemevel. Trust our expertise in crafting websites.
            </p>
            <div className="flex py-10 gap-5">
              <Link href="/contact">
                <Button title="Get Started" />
              </Link>
              <Link href="/contact">
                <Button title="Contact Us" />
              </Link>
            </div>
          </div>
          <div className=" backdrop-blur-sm max-w-6xl mx-auto w-full">
            {/* <MiniHeroSvg /> */}
            <HeroSvg />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
