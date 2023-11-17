import Link from 'next/link'

import Button from '../_ui/Button'

const Hero = async () => {
  return (
    <section className="h-full  hero-background max-w-9xl border-x-[0.5px] border-white/10 w-full text-white">
      <div className="flex flex-col min-h-screen justify-center bg-gradient-to-t px-5 from-black to-transparent h-full w-full">
        <h1 className="text-9xl font-bold max-w-5xl"> Codemevel </h1>
        <h2 className="text-5xl  font-semibold max-w-3xl">
          Building Trust through Exceptional Web Development.
        </h2>
        <p className="text-3xl hidden">
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
    </section>
  )
}

export default Hero
