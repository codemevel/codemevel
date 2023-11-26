import {
  PortableText as PortableTextComponent,
  PortableTextComponents,
} from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { urlForImage } from '@/lib/image'

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
  },
  block: {
    h1: (props) => {
      return <h1 className=" text-primary">{props.children}</h1>
    },
    h2: (props) => {
      return <h2 className="dark:text-white text-black ">{props.children}</h2>
    },
    h3: (props) => {
      return <h3 className="dark:text-white text-black ">{props.children}</h3>
    },
    h4: (props) => {
      return <h4 className="dark:text-white text-black ">{props.children}</h4>
    },
    h5: (props) => {
      return <h5 className="dark:text-white text-black ">{props.children}</h5>
    },
    h6: (props) => {
      return <h6 className="dark:text-white text-black ">{props.children}</h6>
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
    center: (props: { children: React.ReactNode }) => (
      <p className="dark:text-white text-black text-center">{props.children}</p>
    ),
    highlight: (props: { children: React.ReactNode }) => (
      <span className="  text-primary font-bold  ">{props.children}</span>
    ),
    em: ({ children }) => (
      <em className="text-primary font-semibold">{children}</em>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noopener' : undefined
      const target = !value.href.startsWith('/') ? '_blank' : undefined
      return (
        <Link
          href={value.href}
          className="text-primary underline underline-offset-2"
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
          className="text-primary underline underline-offset-2"
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
