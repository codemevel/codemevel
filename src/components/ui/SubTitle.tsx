'use client'

import SplitTextAnimation from './SplitTextAnimation'

function SubTitle({ subTitle }: { subTitle: string }) {
  return (
    <div className="text-lg  font-medium md:text-3xl dark:text-white  text-black  mb-5 max-w-4xl">
      <SplitTextAnimation phrase={subTitle} />
    </div>
  )
}

export default SubTitle
