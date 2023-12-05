'use client'

/* eslint-disable react/function-component-definition */
import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'

const CustomMouse: React.FC = () => {
  const ease = 'power2.out'
  const mouseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mouse = mouseRef.current

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      gsap.to(mouse, {
        left: clientX,
        top: clientY,
        ease,
        scale: 1,
      })
    }

    const onMouseEnterLink = (event: MouseEvent) => {
      const { clientX, clientY } = event
      gsap.to(mouse, {
        left: clientX,
        top: clientY,
        scale: 4,
        ease,
      })
    }

    const onMouseEnterButton = (event: MouseEvent) => {
      const { clientX, clientY } = event
      gsap.to(mouse, {
        left: clientX,
        scale: 10,
        top: clientY,
        ease,
      })
    }

    const onMouseLeave = () => {
      gsap.to(mouse, {
        scale: 1,
        ease,
      })
    }

    const links = document.querySelectorAll('a')
    const btns = document.querySelectorAll('button')

    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeave)
    })

    btns.forEach((button) => {
      button.addEventListener('mouseenter', onMouseEnterButton)
      button.addEventListener('mouseleave', onMouseLeave)
    })

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)

      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink)
        link.removeEventListener('mouseleave', onMouseLeave)
      })

      btns.forEach((button) => {
        button.removeEventListener('mouseenter', onMouseEnterButton)
        button.removeEventListener('mouseleave', onMouseLeave)
      })
    }
  }, [])

  return <div ref={mouseRef} className="custom-mouse" id="custom-mouse" />
}

export default CustomMouse
