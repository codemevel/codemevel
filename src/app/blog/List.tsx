import React from 'react'

import Button from '../_ui/Button'

function List() {
  const blogData = [
    {
      imgSource: '#',
      // eslint-disable-next-line sonarjs/no-duplicate-string
      heading: 'Should We Move to Next.js?',
      content:
        // eslint-disable-next-line sonarjs/no-duplicate-string
        'I gave a talk at Next.js Conf about something Ive been considering for years. This blog post is the thoughts behind my presentation.',
    },
    {
      imgSource: '#',
      heading: 'Should We Move to Next.js?',
      content:
        'I gave a talk at Next.js Conf about something Ive been considering for years. This blog post is the thoughts behind my presentation.',
    },
    {
      imgSource: '#',
      heading: 'Should We Move to Next.js?',
      content:
        'I gave a talk at Next.js Conf about something Ive been considering for years. This blog post is the thoughts behind my presentation.',
    },
    {
      imgSource: '#',
      // eslint-disable-next-line sonarjs/no-duplicate-string
      heading: 'Should We Move to Next.js?',
      content:
        // eslint-disable-next-line sonarjs/no-duplicate-string
        'I gave a talk at Next.js Conf about something Ive been considering for years. This blog post is the thoughts behind my presentation.',
    },
    {
      imgSource: '#',
      heading: 'Should We Move to Next.js?',
      content:
        'I gave a talk at Next.js Conf about something Ive been considering for years. This blog post is the thoughts behind my presentation.',
    },
    {
      imgSource: '#',
      heading: 'Should We Move to Next.js?',
      content:
        'I gave a talk at Next.js Conf about something Ive been considering for years. This blog post is the thoughts behind my presentation.',
    },
  ]

  return (
    <ul className="gap-5 grid  dot-matrix  grid-cols-4 md:grid-cols-8 px-5 relative  pb-10">
      {blogData.map((service, index) => (
        <li
          key={service.heading}
          className="mb-2 p-5 flex flex-col justify-between relative hover:scale-[.99]  col-span-4  bg-white/50 dark:bg-black/50  border-[0.5px] border-white/30 rounded-sm dark:text-white/50 text-black/50 hover:bg-white/10"
        >
          <div className="h-10 w-10 border-t-[0.5px] absolute top-1 left-1 border-l-[0.5px] opacity-30" />
          <div className="h-10 w-10 border-b-[0.5px] absolute bottom-1 right-1 border-r-[0.5px] opacity-30" />

          <div className="pb-5 slashed-zero text-primary font-mono">
            <p> 0{index + 1}</p>
          </div>
          <h3 className="text-2xl  py-5 font-semibold text-white">
            {service.heading}
            <br />
          </h3>
          <p className="mb-5"> {service.content}</p>
          <Button
            title="Read more ->"
            ariaLabel={`Read more about ${service.heading}`}
          />
        </li>
      ))}
    </ul>
  )
}

export default List
