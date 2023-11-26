import React from 'react'

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return <div className="md:p-10 sm:p-5 p-3">{children}</div>
}
