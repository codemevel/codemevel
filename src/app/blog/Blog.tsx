import React from 'react'

import SubTitle from '../_ui/SubTitle'
import Title from '../_ui/Title'
import List from './List'

function Blog() {
  return (
    <section className="h-full mx-auto max-w-6xl px-10 md:px-0 py-2 md:py-10 border-b-[0.5px] dark:border-white/10 border-black/10 w-full dark:text-white text-black ">
      <Title title="Keep tabs on Codemevel." />
      <SubTitle subTitle="Here, you’ll find news about feature releases, happenings in the industry, and Codemevel announcements in general." />
      <div>
        <List />
      </div>
    </section>
  )
}

export default Blog
