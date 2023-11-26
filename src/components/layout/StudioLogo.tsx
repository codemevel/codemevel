import React from 'react'

import Logo from './Logo'

function StudioLogo() {
  return (
    <button
      type="button"
      aria-label="Header logo"
      id="headerlogo"
      className="flex flex-row h-10 active:scale-[.99] cursor-pointer items-end justify-center"
    >
      <Logo />
      <p className="text-xl text-white font-semibold">Codemevel</p>
    </button>
  )
}

export default StudioLogo
