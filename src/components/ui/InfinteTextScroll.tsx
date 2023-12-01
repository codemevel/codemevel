'use client'

// Import necessary dependencies
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef, useState } from 'react'

// Import custom hook for device size
import useDeviceSize from '@/lib/useDeviceSize'

// Define the InfiniteTextScroll component
function InfinteTextScroll({ text }: { text: string }) {
  // State to manage scroll direction
  const [direction, setDirection] = useState(-1)

  // Custom hook to get device height
  const [height] = useDeviceSize()

  // Refs for DOM elements
  const slider = useRef(null)
  const firstText = useRef(null)
  const secondText = useRef(null)

  // Variables for animation control
  let xPercent = 0

  // Animation function
  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    } else if (xPercent > 0) {
      xPercent = -100
    }

    // Set GSAP properties
    gsap.set(firstText.current, { xPercent })
    gsap.set(secondText.current, { xPercent })

    // Request animation frame for continuous animation
    requestAnimationFrame(animate)

    // Update xPercent value
    xPercent += 0.1 * direction
  }

  // useEffect for component lifecycle
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // GSAP timeline configuration
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: `bottom bottom-=${height}`,
        end: `bottom bottom-=${height + 500}`,
        onUpdate: (e) => {
          setDirection(e.direction * -1)
        },
      },
    })

    // Animation to move slider horizontally
    timeline.to(slider.current, {
      x: '-500px',
    })

    // Start the infinite scroll animation
    animate()
    const firstTextRef = firstText.current
    const secondTextRef = secondText.current

    // Other code remains unchanged

    // Cleanup function when the component is unmounted
    return () => {
      // Stop GSAP animations and kill the ScrollTrigger
      gsap.killTweensOf([firstTextRef, secondTextRef])
      timeline.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Render the component
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

// Export the component
export default InfinteTextScroll
