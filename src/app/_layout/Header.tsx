import Link from 'next/link'

import Button from '../_ui/Button'
import Logo from './Logo'

const Header = async () => {
  return (
    <header className="bg-gradient-to-b z-50  from-black via-black  border-b-[0.5px] border-white/10 to-transparent fixed backdrop-blur-sm w-full">
      <div className="max-w-6xl mx-auto w-full flex flex-row py-2 px-5 justify-between">
        <div className="flex flex-row h-10 active:scale-[.99] cursor-pointer items-end justify-center">
          <Logo />
          <Link href="/">
            <p className="text-2xl font-semibold ">Codemevel</p>
          </Link>
        </div>
        <div className="">
          <nav>
            <ul className=" text-white/50 font-medium flex flex-row gap-5 items-center h-10 text-xl">
              <li className="hover:underline hover:text-white underline-offset-2 active:scale-[.99] ">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:underline hover:text-white underline-offset-2 active:scale-[.99] ">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:underline underline-offset-2  hover:text-white active:scale-[.99] ">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="hover:underline  hover:text-white underline-offset-2 active:scale-[.99] ">
                <Link href="/work">Our Work</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <Button title="Contact Us" />
        </div>
      </div>
    </header>
  )
}

export default Header
