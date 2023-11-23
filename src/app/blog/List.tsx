import React from 'react'

import SubTitle from '../_ui/SubTitle'
import Title from '../_ui/Title'

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
    <ul className="flex grid grid-cols-12 justify-center items-center gap-5">
      {blogData.map((data, i) => (
        <li key={i} className="border  h-96 w-96 p-3 col-span-4">
          <img src={data.imgSource} alt={`Blog ${i}`} />
          <h1 className="text-2xl py-10">{data.heading}</h1>
          <p className="text-xl">{data.content}</p>
        </li>
      ))}
    </ul>
  )
}

export default List
