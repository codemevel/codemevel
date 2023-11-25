'use client'

// Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

import Logo from '@/app/_layout/Logo'
import Button from '@/app/_ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div className="h-screen gap-5 w-full flex hero-background justify-center flex-col bg-black items-center">
      <Logo />
      <h2 className="text-3xl font-semibold">Something went wrong!</h2>
      <p className="text-xl max-w-2xl mx-auto p-5 ">
        Error recieved in requested resource, Message:{error.message}
      </p>
      <Button
        title="Try again"
        onClick={() => reset()}
        ariaLabel=" Try again"
      />
      <Link href="/">
        <Button title="Return Home" ariaLabel="Return Home" />
      </Link>
    </div>
  )
}
