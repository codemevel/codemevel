'use client'

import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'
import Lenis from '@studio-freight/lenis'
import { useCallback, useEffect, useRef } from 'react'

function ScrollDown({ link }: { link: string }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    lenisRef.current = new Lenis()

    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time)
      }
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const handleClick = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(link)
    }
  }, [link])

  return (
    <button
      type="button"
      id="scrollDown"
      aria-label="scroll Down"
      onClick={handleClick}
    >
      <ChevronDoubleDownIcon className="h-10 w-10 animate-bounce transition-all duration-300  fill-black dark:fill-white" />
    </button>
  )
}

export default ScrollDown
