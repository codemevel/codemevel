import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full container mx-auto min-h-screen md:p-0 md:my-20 my-5 p-2 flex-col h-full flex justify-center items-center">
      <div className="max-w-7xl relative mx-auto w-full md:p-0 p-2 border-y-[0.5px] dark:border-white/30 h-full">
        <div className="md:h-20 h-10 w-10 md:w-20 absolute border-l-[0.5px] top-0 left-0 opacity-30 " />
        <div className="md:h-20 h-10 w-10 md:w-20 absolute border-r-[0.5px] bottom-0 right-0 opacity-30" />
        {children}
      </div>
    </section>
  )
}

export default Layout
