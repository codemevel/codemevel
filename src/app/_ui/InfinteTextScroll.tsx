'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useMemo, useRef, useState } from 'react'

import useDeviceSize from '@/lib/useDeviceSize'

function InfinteTextScroll({ text }: { text: string }) {
  const [direction, setDirection] = useState(-1)
  const [height] = useDeviceSize()
  const firstText = useRef(null)
  const secondText = useRef(null)
  const slider = useRef(null)
  let xPercent = 0
  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    } else if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstText.current, { xPercent })
    gsap.set(secondText.current, { xPercent })
    requestAnimationFrame(animate)
    xPercent += 0.1 * direction
  }
  const calculateDirection = useMemo(() => {
    return (e: { direction: number }) => {
      const newDirection = e.direction * -1
      setDirection(newDirection)
    }
  }, [])
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: `bottom bottom-=${height}`,
        end: `bottom bottom-=${height + 500}`,
        // markers: {
        //   startColor: 'white',
        //   endColor: 'white',
        //   fontSize: '18px',
        //   indent: 10,
        // },
        // eslint-disable-next-line no-return-assign
        onUpdate: (e) => {
          calculateDirection(e)
        },
      },
      x: '-500px',
    })
    requestAnimationFrame(animate)
  }, [])

  return (
    <main className="relative h-full w-full flex py-10 mt-20 dot-matrix overflow-hidden">
      <div ref={slider} className="whitespace-nowrap relative -z-0">
        <p
          className="relative m-0 text-9xl md:text-[230px] font-normal pr-[50px]"
          ref={firstText}
        >
          {text}
        </p>
        <p
          className="absolute text-9xl md:text-[230px] font-normal pr-[50px] left-full top-0"
          ref={secondText}
        >
          {text}
        </p>
      </div>
      <div className=" z-1 top-0 absolute h-full w-full" />
    </main>
  )
}

export default InfinteTextScroll
