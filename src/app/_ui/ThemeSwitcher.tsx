'use client'

// eslint-disable-next-line import/no-extraneous-dependencies
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      type="button"
      className="border-[0.5px]  flex flex-row dark:border-white/30 border-black/30  font-semibold text-xl active:scale-[.99] px-2 py-2 rounded-full backdrop-blur-sm hover:bg-white/10"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6 fill-black dark:fill-white" />
      ) : (
        <SunIcon className="h-6 w-6 fill-black dark:fill-white" />
      )}{' '}
    </button>
  )
}
