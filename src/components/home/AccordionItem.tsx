'use client'

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import { gsap } from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

interface AccordionItemProps {
  question: string
  answer: string
  index: number
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const answerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.from(answerRef.current, {
      height: 0,
      duration: 0.5,
      ease: 'power3.inOut',
    })
  }, [])

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
    gsap.to(answerRef.current, {
      height: isOpen ? 0 : 'auto',
      duration: 0.5,
      ease: 'power3.inOut',
    })
  }

  return (
    <li className="flex flex-row justify-start items-start p-2 col-span-4 border-black/30 dark:border-white/30 border-[0.5px]  rounded-sm dark:text-white/50 text-black/50 hover:bg-white/10">
      <div
        className="flex flex-row h-full w-full justify-center items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="h-full flex justify-center items-center text-xl md:text-6xl text-primary w-10 md:w-28">
          {`Q${index + 1}.`}
        </div>
        <div className="md:p-5 p-2 flex flex-col w-full h-full">
          <div className="flex flex-row justify-between">
            <h3 className="text-base  md:text-3xl text-white">{question}</h3>
            <span className="ml-2">
              {isOpen ? (
                <MinusIcon className="md:h-10 md:w-10 h-8 w-8 fill-black dark:fill-white" />
              ) : (
                <PlusIcon className="md:h-10 md:w-10 h-8 w-8 fill-black dark:fill-white" />
              )}
            </span>
          </div>
          <div ref={answerRef} className="overflow-hidden">
            <p className="mt-2 text-sm md:text-xl max-w-4xl dark:text-white/80 ">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default AccordionItem
