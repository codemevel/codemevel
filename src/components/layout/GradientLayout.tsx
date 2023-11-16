// GradientLayout.tsx
import React from 'react'

interface IChildren {
  children: React.ReactNode
}

const GradientLayout = async ({ children }: IChildren) => {
  return (
    <div className="bg-gradient-to-br h-full w-full from-neutral-900 via-neutral-950 to-neutral-900">
      {children}
    </div>
  )
}

export default GradientLayout
