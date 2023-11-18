import Link from 'next/link'

import { ThemeSwitcher } from '../_ui/ThemeSwitcher'
import Logo from './Logo'

const Footer = async () => {
  return (
    <footer className="  py-5 max-w-6xl mx-auto w-full flex flex-col px-5 items-center justify-between">
      <div className="flex md:flex-row flex-col justify-between w-full items-start">
        <div className=" flex flex-col">
          <div className="flex flex-row h-10 items-end mb-1">
            <Logo />
            <Link href="/">
              <p className="text-2xl font-semibold ">Codemevel</p>
            </Link>
          </div>
          <p className=" w-80 mb-1">
            Building Trust through Exceptional Web Development.
          </p>
          <div className="w-full max-w-xl py-10 md:py-5 flex flex-row justify-between items-center h-10  md:hidden">
            <p>Change Theme</p>
            <ThemeSwitcher />
          </div>
        </div>

        <div className="py-5">
          <nav className="grid grid-cols-8 w-full md:grid-cols-12 gap-5 w-full max-w-3xl">
            <div className="col-span-4">
              <h2 className=" mb-2 font-semibold text-gray-900 uppercase dark:text-white">
                Sitemap
              </h2>
              <ul className=" dark:text-white/50  text-black/50  font-medium">
                <li className="hover:underline underline-offset-2 active:scale-[.99] ">
                  <Link href="/about">About us</Link>
                </li>
                <li className="hover:underline underline-offset-2 active:scale-[.99] ">
                  <Link href="/contact">Contact us</Link>
                </li>
                <li className="hover:underline underline-offset-2 active:scale-[.99] ">
                  <Link href="/work">Our Work</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-4">
              <h2 className=" mb-2 font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="col-span-4 dark:text-white/50  text-black/50  font-medium">
                <li className="hover:underline underline-offset-2 active:scale-[.99] ">
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li className="hover:underline underline-offset-2 active:scale-[.99] ">
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li className="hover:underline underline-offset-2 active:scale-[.99] ">
                  <Link href="/licence">Licence</Link>
                </li>
              </ul>{' '}
            </div>
            <div className="col-span-4">
              <h2 className=" mb-2 font-semibold text-gray-900 uppercase dark:text-white">
                Social
              </h2>
              <ul className="col-span-4 dark:text-white/50  text-black/50  font-medium">
                <li className="hover:underline underline-offset-2 active:scale-[.99] ">
                  <Link href="/terms">Email</Link>
                </li>
                <li className="hover:underline underline-offset-2 active:scale-[.99] ">
                  <Link href="/privacy">Phone Number</Link>
                </li>
                <li className="hover:underline underline-offset-2 active:scale-[.99] ">
                  <Link href="/licence">Website</Link>
                </li>
              </ul>{' '}
            </div>
          </nav>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between py-5 w-full border-t-[0.5px] border-black/30 dark:border-white/30">
        <div className="">
          <p className=" w-80">
            &copy; {new Date().getFullYear()}
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline underline px-1 underline-offset-2"
            >
              Codemevel
            </Link>
            . All rights reserved.
          </p>
        </div>
        <div className="" />
      </div>
    </footer>
  )
}

export default Footer
