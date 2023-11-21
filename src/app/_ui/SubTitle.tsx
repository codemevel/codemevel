'use client'

import SplitTextAnimation from './SplitTextAnimation'

function SubTitle({ subTitle }: { subTitle: string }) {
  return (
    <div className="text-lg  font-medium md:text-2xl dark:text-white/70  text-black/70  mb-5 max-w-3xl">
      <SplitTextAnimation phrase={subTitle} />
    </div>
  )
}

export default SubTitle
