'use client'

// eslint-disable-next-line import/no-extraneous-dependencies
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

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
      className="border-[0.5px]  flex flex-row dark:border-white/50 hover:dark:border-primary border-black/30  font-semibold text-xl active:scale-[.99] px-2 py-2 rounded-full group  bg-white/50 dark:bg-black/50 hover:bg-white/10 duration-100 transition-all"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-pressed={theme === 'dark'}
    >
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6 fill-black dark:fill-white group-hover:dark:fill-primary" />
      ) : (
        <SunIcon className="h-6 w-6 fill-black dark:fill-white group-hover:dark:fill-primary" />
      )}
    </button>
  )
}
