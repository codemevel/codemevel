import Link from 'next/link'
import React from 'react'

function InterLink({ link, text }: { link: string; text: string }) {
  return (
    <Link
      className="text-primary after:content-['__↗'] ... mx-2"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span> {text}</span>{' '}
    </Link>
  )
}

export default InterLink
