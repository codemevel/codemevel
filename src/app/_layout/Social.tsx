// eslint-disable-next-line import/no-extraneous-dependencies
import { SocialIcon } from 'react-social-icons'

const socialLinks: string[] = [
  'http://codemevel.com/',
  'https://github.com/codemevel',
  'https://www.instagram.com/codemevel/',
  'https://www.facebook.com/profile.php?id=61553456875424',
  'https://www.npmjs.com/~codemevel',
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
            fgColor="gray"
            className="h-8 w-8  fill-black bg-transparent "
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
