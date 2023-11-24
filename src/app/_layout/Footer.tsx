/* eslint-disable react/function-component-definition */
import Link from 'next/link'
import React from 'react'

import { ThemeSwitcher } from '../_ui/ThemeSwitcher'
import Logo from './Logo'
import Social from './Social'

interface FooterLink {
  title: string
  path: string
}

interface FooterLinksSectionProps {
  title: string
  links: FooterLink[]
}

const sitemapLinks: FooterLink[] = [
  { title: 'About us', path: '/about' },
  { title: 'Contact us', path: '/contact' },
  { title: 'Our Work', path: '/work' },
]

const legalLinks: FooterLink[] = [
  { title: 'Terms of Service', path: '/terms' },
  { title: 'Privacy Policy', path: '/privacy' },
  { title: 'Licence', path: '/licence' },
]

const socialLinks: FooterLink[] = [
  { title: 'Email', path: '/email' },
  { title: 'Phone Number', path: '/phone' },
  { title: 'Website', path: '/website' },
]

const FooterLinksSection: React.FC<FooterLinksSectionProps> = ({
  title,
  links,
}) => (
  <div className="col-span-4 w-full">
    <h2 className="mb-2 font-semibold text-xl text-gray-900 uppercase dark:text-white">
      {title}
    </h2>
    <ul className="col-span-4 dark:text-white/50 text-black/70 font-medium">
      {links.map((link) => (
        <li
          key={link.title}
          className="hover:underline py-1 text-xl underline-offset-2 active:scale-[.99]"
        >
          <Link href={link.path}>{link.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  return (
    <footer className=" hero-background ">
      <div className="bg-gradient-to-b   from-white   dark:from-black   to-transparent flex flex-col px-5 items-center justify-between">
        <div className="flex back py-5 max-w-6xl mx-auto w-full  md:flex-row flex-col justify-between items-start">
          <div className=" flex flex-col">
            <Link href="/">
              <button
                type="button"
                aria-label="footer logo"
                id="footerlogo"
                className="flex flex-row h-10 items-end mb-1"
              >
                <Logo />
                <p className="text-2xl font-semibold">Codemevel</p>
              </button>
            </Link>

            <p className=" w-80 mb-1">
              Building Trust with Exceptional Web Services.
            </p>
            <div className="w-full max-w-xl py-10 md:py-5 flex flex-row justify-between items-center h-10  md:hidden">
              <p>Change Theme</p>
              <ThemeSwitcher />
            </div>
          </div>

          <div className="py-5">
            <nav className="grid grid-cols-8 w-full md:grid-cols-12 gap-5 max-w-4xl">
              <FooterLinksSection title="Sitemap" links={sitemapLinks} />
              <FooterLinksSection title="Legal" links={legalLinks} />
              <FooterLinksSection title="Social" links={socialLinks} />
            </nav>
          </div>
        </div>
        <div className="flex max-w-6xl mx-auto w-full  md:flex-row flex-col-reverse justify-between py-5  border-t-[0.5px] border-black/30 dark:border-white/30">
          <div className="w-full max-w-2xl md:py-0 py-5 ">
            <p className="text-black font-semibold text-lg dark:text-white">
              &copy; {new Date().getFullYear()} -
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline underline px-1 font-semibold underline-offset-2"
              >
                Codemevel
              </Link>
              ™ | All rights reserved.
            </p>
          </div>
          <div className="max-w-2xl md:py-0 py-5 ">
            <Social />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
