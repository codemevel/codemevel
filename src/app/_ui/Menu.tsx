'use client'

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Bars3BottomRightIcon,
  Bars3CenterLeftIcon,
} from '@heroicons/react/24/solid'
import { Dispatch, SetStateAction } from 'react'

export function MenuSwitcher({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <button
      type="button"
      className="border-[0.5px] dark:border-white/10 border-black/10  font-semibold text-2xl active:scale-[.99] p-2 rounded-full backdrop-blur-sm hover:bg-white/10"
      onClick={() => setOpen(!open)}
    >
      {open ? (
        <Bars3BottomRightIcon className="h-6 w-6 " />
      ) : (
        <Bars3CenterLeftIcon className="h-6 w-6 " />
      )}
    </button>
  )
}
