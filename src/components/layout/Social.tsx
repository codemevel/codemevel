// eslint-disable-next-line import/no-extraneous-dependencies
import { SocialIcon } from 'react-social-icons'

const socialLinks: string[] = [
  'https://github.com/codemevel',
  'https://www.instagram.com/codemevel/',
  'https://www.facebook.com/profile.php?id=61553456875424',

  'https://twitter.com/codemevel',
  'https://www.linkedin.com/company/codemevel',
]
function Social() {
  return (
    <div className="flex justify-center items-center  h-full w-full">
      {socialLinks.map((url) => {
        return (
          <SocialIcon
            bgColor="transparent"
            fgColor="white"
            className="h-8 w-8  fill-black bg-transparent invert dark:invert-0 "
            url={url}
            target="_blank"
            key={url}
          />
        )
      })}
    </div>
  )
}

export default Social
