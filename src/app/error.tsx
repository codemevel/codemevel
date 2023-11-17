'use client'

// Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

import Logo from '@/app/_layout/Logo'
import Button from '@/app/_ui/Button'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="h-screen gap-5 w-full flex hero-background justify-center flex-col bg-black items-center">
      <Logo />
      <h2 className="text-3xl font-semibold">Something went wrong!</h2>
      <p className="text-xl ">
        Error recieved in requested resource, Message:{error.message}
      </p>
      <Link href="/">
        <Button title="Go to Home Page" />
      </Link>
    </div>
  )
}
