'use client'

// import Link from 'next/link'
/* eslint-disable react/function-component-definition */
import React, { memo, useEffect, useMemo, useState } from 'react'

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<
    Array<{ id: string; text: string; level: number }>
  >([])

  useEffect(() => {
    const extractedHeadings: Array<{
      id: string
      text: string
      level: number
    }> = []
    document
      .querySelectorAll(
        'h1[id^="blogH"], h2[id^="blogH"], h3[id^="blogH"], h4[id^="blogH"], h5[id^="blogH"], h6[id^="blogH"]'
      )
      .forEach((heading) => {
        const level = parseInt(heading.tagName.charAt(1), 10)
        extractedHeadings.push({
          id: heading.id,
          text: heading.textContent || '',
          level,
        })
      })

    setHeadings(extractedHeadings)
  }, [])

  const renderHeadings = useMemo(() => {
    return headings.map((heading) => (
      <li
        key={heading.id}
        className={`ml-${
          (heading.level - 1) * 4
        } border-l-[0.5px] border-opacity-30 mb-1 hover:border-primary slashed-zero dark:text-white/90 hover:text-primary hover:dark:text-primary text-black/90 bg-white/50 p-1 dark:bg-black/50 pl-2 font-medium text-xs md:text-base`}
      >
        <a
          href={`#${heading.id}`}
          className={`
          ${heading.level === 1 && 'ml-0'}
          ${heading.level === 2 && 'ml-2'}
          ${heading.level === 3 && 'ml-4'}
          ${heading.level === 4 && 'ml-6'}
          ${heading.level === 5 && 'ml-8'}
          ${heading.level === 6 && 'ml-10'}
          `}
        >
          <span className=""> {heading.text}</span>
        </a>
      </li>
    ))
  }, [headings])

  return (
    <nav
      aria-label="Table of contents"
      data-lenis-prevent
      className="md:sticky static top-20 w-full md:w-80 h-auto md:max-h-[80vh] overscroll-none md:overflow-y-auto"
    >
      <h2 className="mb-4 sticky top-0 text-3xl text-semibold dark:bg-black">
        Table of Contents
      </h2>
      <ul className=" ">{renderHeadings}</ul>
    </nav>
  )
}

export default memo(TableOfContents)
