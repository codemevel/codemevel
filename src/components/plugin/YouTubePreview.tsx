import { Flex, Text } from '@sanity/ui'
import YouTubePlayer from 'react-player/youtube'
import type { PreviewProps } from 'sanity'

interface PreviewYouTubeProps extends PreviewProps {
  url: string
  height: number
  title: string
}

export function YouTubePreview({ title, height, url }: PreviewYouTubeProps) {
  return (
    <>
      <Flex padding={0} justify="center">
        {url ? (
          <YouTubePlayer
            styles={{
              ...(!height && { aspectRatio: '16 / 9' }),
            }}
            height={(height as number) || 320}
            allowFullScreen
            loading="lazy"
            width="100%"
            position="relative"
            display="block"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
            url={url}
          />
        ) : (
          <Text>Add a YouTube URL</Text>
        )}
      </Flex>
      <Flex padding={2} justify="center">
        <Text>{title}</Text>{' '}
      </Flex>
    </>
  )
}
