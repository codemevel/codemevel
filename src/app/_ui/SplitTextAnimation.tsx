'use client'

/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { ReactElement, useEffect, useRef, useState } from 'react'

const useDeviceSize = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return [width, height]
}

export default function SplitTextAnimation({
  phrase,
  className,
}: {
  phrase: string
  className?: string
}): ReactElement {
  const refs = useRef([])
  const container = useRef(null)
  const [height] = useDeviceSize()

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `bottom bottom-=${height + 100}`,
        end: `bottom bottom-=${height + 300}`,
        // markers: {
        //   startColor: 'white',
        //   endColor: 'white',
        //   fontSize: '18px',
        //   indent: 10,
        // },
      },
      opacity: 1,
      ease: 'none',
      stagger: 0.3,
    })
  }

  const splitLetters = (word: string): React.JSX.Element[] =>
    word.split(' ').map((letter, i) => (
      <span
        style={{ opacity: 0.2 }}
        ref={(el: never) => el && refs.current.push(el)}
        key={`${letter}_${i}`}
      >
        {letter}
      </span>
    ))

  const splitWords = (): React.JSX.Element[] =>
    phrase.split(' ').map((word, i) => (
      <p className="pr-1 md:pr-2" key={`${word}_${i}`}>
        {splitLetters(word)}
      </p>
    ))

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    createAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={container}
      className={`flex flex-wrap justify-start items-start flex-row ${className}`}
    >
      {splitWords()}
    </div>
  )
}
