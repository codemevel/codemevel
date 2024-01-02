import React from 'react'

import IntroLable from '../ui/IntroLable'
import SubTitle from '../ui/SubTitle'
import Title from '../ui/Title'

function Process() {
  return (
    <section className="h-full p-5 max-w-6xl mx-auto py-10 border-y-[0.5px] dark:border-white/10 border-black/10 w-full text-white">
      <div className="py-5">
        <IntroLable label="FAQ" />
        <Title title="Elevating Digital Strategies with CodeMevel's Web Services" />
        <SubTitle subTitle="Welcome to a world where your digital marketing strategies find their ultimate ally – CodeMevel's comprehensive web services designed to empower marketers and amplify brand visibility." />
      </div>

      <ul className="grid grid-cols-4 py-5 dot-matrix md:grid-cols-4 gap-5 list-inside">
        {/* {.map((item, index) => ( */}
        <li
          // key={item.question}
          className="flex flex-row justify-start items-start p-2 col-span-4 border-black/30 dark:border-white/30 border-[0.5px]  rounded-sm dark:text-white/50 text-black/50 hover:bg-white/10"
        >
          <div className="flex flex-row  h-full">
            {/* <div className="h-full flex justify-center items-center text-6xl text-primary w-28">{`Q${
                index + 1
              }.`}</div> */}

            <div className="p-2">
              <h3 className="text-lg pb-2 md:text-xl text-white">
                {/* {item.question} */}
              </h3>
              {/* <p className="max-w-4xl">{item.answer}</p> */}
            </div>
          </div>
        </li>
        {/* ))} */}
      </ul>
    </section>
  )
}

export default Process
