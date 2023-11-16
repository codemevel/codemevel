import { ImageResponse } from 'next/og'

import Logo from '@/components/layout/Logo'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Codemevel'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="flex flex-row h-10 items-end justify-center">
          <Logo />
          <p className="text-2xl font-semibold ">Codemevel</p>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}
