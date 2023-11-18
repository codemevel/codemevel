'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { MenuSwitcher } from '../_ui/Menu'
import { ThemeSwitcher } from '../_ui/ThemeSwitcher'
import Logo from './Logo'

function Header() {
  const router = usePathname()

  const [open, setOpen] = useState(false)

  const nonactive: string =
    'hover:underline hover:text-black hover:dark:text-white underline-offset-2'

  const active: string =
    'active:scale-[.99] dark:text-white text-black underline'

  return (
    <header className="bg-gradient-to-b z-50 from-white to-transparent dark:from-black dark:to-transparent border-b-[0.5px] border-black/10 dark:border-white/10 fixed backdrop-blur-sm w-full">
      <div className="max-w-6xl mx-auto w-full flex flex-row py-2 px-5 justify-between">
        <div className="flex flex-row h-10 active:scale-[.99] cursor-pointer items-end justify-center">
          <Logo />
          <Link href="/">
            <p className="text-2xl font-semibold">Codemevel</p>
          </Link>
        </div>

        <div
          className={`${
            open ? ' ' : 'hidden'
          } absolute md:relative md:h-full  md:block md:w-full z-50 md:top-0 top-16 left-0 h-screen w-screen bg-white md:bg-transparent dark:bg-black`}
        >
          <nav>
            <ul className="text-black/50 dark:text-white/50 text-black font-medium justify-center w-full flex md:flex-row flex-col gap-5 md:items-center items-start md:h-10 h-full p-10 md:p-0 text-xl">
              <li className={`${nonactive} ${router === '/' ? active : ''}`}>
                <Link href="/">Home</Link>
              </li>
              <li
                className={`${nonactive} ${router === '/about' ? active : ''}`}
              >
                <Link href="/about">About</Link>
              </li>
              <li
                className={`${nonactive} ${
                  router === '/contact' ? active : ''
                }`}
              >
                <Link href="/contact">Contact</Link>
              </li>
              <li
                className={`${nonactive} ${router === '/work' ? active : ''}`}
              >
                <Link href="/work">Our Work</Link>
              </li>
              <li className="w-full md:hidden block">
                <div className="w-full flex flex-row justify-between items-center h-10  md:hidden">
                  <p>Change Theme</p>
                  <ThemeSwitcher />
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:block">
          <ThemeSwitcher />
        </div>
        <div className="block md:hidden">
          <MenuSwitcher open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  )
}

export default Header
