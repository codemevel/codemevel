'use client'

// eslint-disable-next-line import/no-extraneous-dependencies
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

function Scroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // duration: 0.3,
      // smoothTouch: true,
      // // smoothWheel: true,
      // // wrapper: window,
      // easing: (t) => Math.min(1, 1.001 - 3 ** (-100 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return null
}

export default Scroll
