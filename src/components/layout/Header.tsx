'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { IHeaderItem } from '@/types'

import Button from '../ui/Button'
import { MenuSwitcher } from '../ui/Menu'
import RSS from '../ui/RSS'
import Title from '../ui/Title'
import Logo from './Logo'
import { ThemeSwitcher } from './ThemeSwitcher'

function Header({ menu }: { menu: IHeaderItem[] }) {
  const [open, setOpen] = useState(false)
  const router = usePathname()
  const nonactive: string =
    'hover:underline hover:text-black active:scale-[.99] hover:dark:text-white underline-offset-2'

  const active: string = 'active:scale-[.99] text-primary'

  return (
    <header className="bg-gradient-to-b py-2 z-50 from-white/0 to-transparent dark:from-black top-0 dark:to-transparent border-b-[0.5px] border-black/10 dark:border-white/30 shadow-xl fixed  bg-white backdrop-blur-sm dark:bg-black/50 w-full">
      <div className="max-w-7xl mx-auto w-full flex flex-row py-2 px-5 md:p-0  justify-between">
        <Link href="/">
          <button
            type="button"
            aria-label="Codemevel"
            id="Codemevel"
            className="flex flex-row h-10 active:scale-[.99]   items-end justify-center"
          >
            <Logo />
            <p className="text-2xl font-semibold">Codemevel</p>
          </button>
        </Link>
        <div
          className={`${
            open ? ' ' : 'hidden'
          } absolute md:static md:h-full overflow-hidden md:block md:w-full z-50 md:top-0 top-16 left-0 h-screen  w-screen bg-white md:bg-transparent dark:md:bg-transparent dark:bg-black `}
        >
          <nav className=" relative  ">
            <div className="absolute md:hidden" />
            <ul className=" text-black/50  dark:text-white/70 text-black font-medium justify-center w-full flex md:flex-row flex-col gap-x-7 md:gap-5 gap-7  md:items-center items-start md:h-10 h-full p-5 md:p-0 text-xl">
              <li className="py-2 md:hidden block">
                <Title title="Menu" />
              </li>
              {menu.map(({ link, title }) => {
                return (
                  <li
                    className={`${nonactive} ${router === link ? active : ''}`}
                  >
                    <Link onClick={() => setOpen(!open)} href={link}>
                      <>
                        <div className="md:hidden block">
                          <Button title="Home ->" ariaLabel="Home" />
                        </div>
                        <p className="md:block hidden font-light text-2xl">
                          {title}
                        </p>
                      </>
                    </Link>
                  </li>
                )
              })}

              <li className="w-full md:hidden block">
                <div className="w-full flex flex-row justify-between items-center   md:hidden">
                  <p className="px-2 text-2xl py-5">Change Theme</p>
                  <ThemeSwitcher />
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:block mx-2">
          <RSS link="/sitemap.xml" />
        </div>
        <div className="hidden md:block mx-2">
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
