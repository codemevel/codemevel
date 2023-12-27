import {
  PortableText as PortableTextComponent,
  PortableTextComponents,
} from '@portabletext/react'
import getVideoId from 'get-video-id'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Iframe from 'react-iframe'
import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'

import { urlForImage } from '@/lib/image'

Refractor.registerLanguage(js)

interface ImageSource {
  asset?: {
    _ref?: string
  }
  alt?: string
  caption?: string
}
const components: PortableTextComponents = {
  types: {
    coverImage: ({ value }: { value: ImageSource }) => {
      return (
        <div className="dark:text-white text-black ">
          <Image
            src={urlForImage(value) as string}
            alt={value.alt || 'Image'}
            loading="lazy"
            className="dark:text-white text-black aspect-video object-cover"
            sizes="(max-width: 768px) 30vw, 33vw"
          />
          <p className="dark:text-white text-black text-left w-full">
            {value.caption}
          </p>
        </div>
      )
    },
    youtube: ({ value }) => {
      const { url, caption, height } = value
      if (!url) {
        return <p>Missing Embed URL</p>
      }
      const { id, service } = getVideoId(url)
      const isYoutubeVideo = id && service === 'youtube'
      const finalURL = isYoutubeVideo
        ? `https://www.youtube-nocookie.com/embed/${id}`
        : url
      return (
        <div className="flex justify-center items-center flex-col w-full h-full">
          <Iframe
            url={finalURL}
            width="100%"
            height={height || '350'}
            className="aspect-video h-full"
            display="block"
            position="relative"
            frameBorder={0}
            allowFullScreen
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
          />
          <p className="italic text-start capitalize w-full">{caption}</p>
        </div>
      )
    },
    table: ({
      value,
    }: {
      value: {
        rows: {
          cell: string
          cells: string[]
        }[]
      }
    }) => {
      const { rows } = value
      if (!rows) {
        return <p>No data to display.</p>
      }
      const [head, ...dataRows] = rows
      return (
        <table className="w-full text-sm text-left dark:text-white text-black">
          {head && head.cells.length > 0 && (
            <thead className="">
              <tr className="">
                {head.cells.map((cell) => (
                  <th className=" text-primary dark:text-primary" key={cell}>
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody className="w-full">
            {dataRows.map((row, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr
                className="border-b"
                // eslint-disable-next-line react/no-array-index-key
                key={row.cells.length + index}
              >
                {row.cells.map((cell) => (
                  <td
                    className="font-medium dark:text-white text-black"
                    key={cell}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
    },
    code: ({
      value,
    }: {
      value: {
        language?: string
        code: string
        highlightedLines?: number[]
      }
    }) => {
      return (
        <div className="prose-code">
          <Refractor
            language="js"
            value={value.code}
            markers={value.highlightedLines}
          />
        </div>
      )
    },
  },

  block: {
    h1: (props) => {
      return (
        <h1 id="blogH1" className=" text-primary dark:text-primary ">
          {props.children}
        </h1>
      )
    },
    h2: (props) => {
      return (
        <h2 id="blogH2" className="dark:text-white text-black ">
          {props.children}
        </h2>
      )
    },
    h3: (props) => {
      return (
        <h3 id="blogH3" className="dark:text-white text-black ">
          {props.children}
        </h3>
      )
    },
    h4: (props) => {
      return (
        <h4 id="blogH4" className="dark:text-white text-black ">
          {props.children}
        </h4>
      )
    },
    h5: (props) => {
      return (
        <h5 id="blogH5" className="dark:text-white text-black ">
          {props.children}
        </h5>
      )
    },
    h6: (props) => {
      return (
        <h6 id="blogH6" className="dark:text-white text-black ">
          {props.children}
        </h6>
      )
    },
    normal: (props) => {
      return (
        <p className="dark:text-white/80 text-base md:text-xl font-extralight text-black/80 ">
          {props.children}
        </p>
      )
    },
    blockquote: (props) => (
      <blockquote className="dark:text-white text-black border-l-4  p-5 border-primary pl-4 italic   md:mb-8 md:pl-6">
        “{props.children}”
      </blockquote>
    ),
  },
  list: {
    bullet: (props) => (
      <ul className="dark:text-white text-black list-disc">{props.children}</ul>
    ),
    number: (props) => (
      <ul className="dark:text-white text-black list-decimal">
        {props.children}
      </ul>
    ),
  },
  marks: {
    strong: (props: { children: React.ReactNode }) => (
      <strong className="dark:text-white text-black  font-bold">
        {props.children}
      </strong>
    ),
    center: (props: { children: React.ReactNode }) => (
      <p className="dark:text-white text-black text-center">{props.children}</p>
    ),
    highlight: (props: { children: React.ReactNode }) => (
      <span className="  text-primary dark:text-primary font-bold  ">
        {props.children}
      </span>
    ),
    em: ({ children }) => (
      <em className="text-primary dark:text-primary font-semibold">
        {children}
      </em>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noopener' : undefined
      const target = !value.href.startsWith('/') ? '_blank' : undefined
      return (
        <Link
          href={value.href}
          className="text-primary dark:text-primary  underline underline-offset-2"
          rel={rel}
          target={target}
        >
          {children}
        </Link>
      )
    },
    internalLink: ({ children, value }) => {
      return (
        <Link
          className="text-primary dark:text-primary underline underline-offset-2"
          href={`/blog/${value?.slug?.current}`}
        >
          {children}
        </Link>
      )
    },
  },
}

export function PortableText({ ...props }) {
  return (
    <article className="dark:text-white text-black max-w-3xl text-start prose">
      <PortableTextComponent
        // eslint-disable-next-line react/prop-types
        value={props?.value}
        components={components}
        {...props}
      />
    </article>
  )
}
