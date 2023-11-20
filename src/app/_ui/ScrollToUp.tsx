'use client'

import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

import Button from './Button'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add a scroll event listener to check if the button should be visible
    const handleScroll = () => {
      const { scrollY } = window
      const threshold = 300 // Adjust the threshold as needed

      setIsVisible(scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    // Smooth scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="fixed bottom-4 right-4  text-white font-bold py-2 px-4 rounded-full">
      {isVisible && (
        <Button
          ariaLabel="scroll up"
          title={
            <ChevronDoubleUpIcon className="h-6  fill-black dark:fill-white" />
          }
          onClick={scrollToTop}
        />
      )}
    </div>
  )
}

export default ScrollToTopButton
