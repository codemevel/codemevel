import Link from 'next/link'

import Logo from './Logo'

const Header = async () => {
  return (
    <header className="bg-gradient-to-b z-50  from-black via-black  border-b-[0.5px] border-white/10 to-transparent fixed backdrop-blur-sm max-w-7xl mx-auto w-full flex flex-row py-2 px-5 justify-between">
      <div className="flex flex-row h-10 active:scale-[.99] cursor-pointer items-end justify-center">
        <Logo />
        <Link href="/">
          <p className="text-2xl font-semibold ">Codemevel</p>
        </Link>
      </div>
    </header>
  )
}

export default Header
