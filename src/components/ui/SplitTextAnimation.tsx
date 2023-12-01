'use client'

/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { ReactElement, useEffect, useRef } from 'react'

import useDeviceSize from '@/lib/useDeviceSize'

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
        trigger: container?.current,
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
      y: -5,
      opacity: 1,
      ease: 'none',
      color: '#ffffff',
      stagger: 0.4,
    })
  }

  const splitLetters = (word: string): React.JSX.Element[] =>
    word.split(' ').map((letter, i) => (
      <span
        style={{ opacity: 0.7, display: 'inline-block', color: '#f77317' }}
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
    if (container.current) {
      createAnimation()
    }

    return () => {
      // Clean up ScrollTrigger when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // No dependencies
  return (
    <div
      id="textAnimate"
      ref={container}
      className={`flex flex-wrap justify-start items-start flex-row ${className}`}
    >
      {splitWords()}
    </div>
  )
}
