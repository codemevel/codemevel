import Link from 'next/link'

import Logo from '@/components/layout/Logo'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="h-screen gap-5 w-full flex  hero-background justify-center flex-col bg-black items-center">
      <Logo />
      <h2 className="text-3xl font-semibold">Not Found</h2>
      <p className="text-xl ">
        Sorry about that! Try returning to one of our main pages to find what
        you’re looking for.
      </p>
      <Link href="/">
        <Button title="Return Home" ariaLabel="Return Home" />
      </Link>
    </div>
  )
}
