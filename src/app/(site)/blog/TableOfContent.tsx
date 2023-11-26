'use client'

/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unused-prop-types */

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    const articleElement = document.querySelector('article')

    if (articleElement) {
      const headingElements = Array.from(
        articleElement.querySelectorAll('h1, h2, h3, h4, h5, h6')
      )

      const headingsData: Heading[] = headingElements.map((heading) => ({
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1), 10),
      }))

      setHeadings(headingsData)
    }
  }, [content])

  const renderNestedHeadings = (
    // eslint-disable-next-line no-shadow
    headings: Heading[],
    level: number = 1
  ): React.JSX.Element | null => {
    const filteredHeadings = headings.filter(
      (heading) => heading.level === level
    )

    if (filteredHeadings.length === 0) {
      return null
    }

    return (
      <ul className={`pl-${level - 1}`} key={`level-${level}`}>
        {filteredHeadings.map((heading) => (
          <li
            key={heading.id}
            className="border-l-[0.5px] border-opacity-30 mb-1 hover:border-primary slashed-zero dark:text-white/90 hover:text-primary hover:dark:text-primary text-black/90 bg-white/50 p-1 dark:bg-black/50 pl-2 font-medium text-xs md:text-base"
          >
            <Link href={`#${heading.id}`}>{heading.text}</Link>
            {renderNestedHeadings(headings, level + 1)}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div
      data-lenis-prevent
      className="md:sticky static top-20 w-full md:w-80 h-auto md:max-h-[80vh] overscroll-none md:overflow-y-auto"
    >
      <h2 className="mb-4 sticky top-0 text-3xl text-semibold dark:bg-black">
        Table of Contents
      </h2>
      {renderNestedHeadings(headings)}
    </div>
  )
}

export default TableOfContents
