import React from 'react'

import Button from '../_ui/Button'
import IntroLable from '../_ui/IntroLable'
import SubTitle from '../_ui/SubTitle'
import Title from '../_ui/Title'

function GetStarted() {
  return (
    <section className="dark:bg-black bg-white h-screen flex justify-center items-center w-full  py-20 ">
      <div className="grid grid-cols-8 h-full w-full dark:bg-white/5 bg-black/5 max-w-6xl mx-auto relative ">
        <div className="md:h-20 h-10 w-10 md:w-20 border-t-[0.5px] absolute -top-3 -left-0 md:top-10 md:left-10 border-l-[0.5px] opacity-30" />
        <div className="md:h-20 h-10 w-10 md:w-20 border-b-[0.5px] absolute -bottom-5 -right-0 md:bottom-10 md:right-10 border-r-[0.5px] opacity-30" />

        <div className="col-span-4 flex flex-col justify-center items-start p-20">
          <IntroLable label="Deploy in minuts" />
          <Title title="Get started with codemevel" />
          <SubTitle subTitle="Create a cloud account, connect your GitHub account and deploy in minutes." />
        </div>
        <div className="col-span-4 p-20">
          <div className="dot-matrix h-full w-full flex justify-center items-center  ">
            <div className="h-auto w-auto dark:bg-black/50 bg-white/50 p-20 py-10">
              <Button ariaLabel="Get Strated" title="Get Started ->" />{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
