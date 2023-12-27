// 'use client'

// import SplitTextAnimation from './SplitTextAnimation'

function SubTitle({ subTitle }: { subTitle: string }) {
  return (
    <div className="text-lg  md:text-4xl font-extralight dark:text-white/70 text-black mb-5 max-w-7xl">
      {/* <SplitTextAnimation phrase={subTitle} /> */} {subTitle}
    </div>
  )
}

export default SubTitle
