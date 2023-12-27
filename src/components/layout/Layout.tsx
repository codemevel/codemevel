import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full my-10 container mx-auto min-h-screen flex-col h-full flex justify-center items-center">
      <div className="max-w-7xl relative mx-auto w-full border-y-[0.5px] dark:border-white/30 h-full">
        {children}
      </div>
    </section>
  )
}

export default Layout
