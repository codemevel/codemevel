'use client'

import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

import Button from './Button'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window
      const threshold = 300
      setIsVisible(scrollY > threshold)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <Button
          ariaLabel="scroll up"
          title={
            <ChevronDoubleUpIcon className="h-6  fill-black dark:fill-white" />
          }
          onClick={() => scrollToTop()}
        />
      )}
    </div>
  )
}

export default ScrollToTopButton
