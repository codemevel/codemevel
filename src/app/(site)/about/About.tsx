import Button from '@/components/ui/Button'
import { IAbout } from '@/types'

import Layout from '../../../components/layout/Layout'
import SubLayout from '../../../components/layout/SubLayout'
import IntroLable from '../../../components/ui/IntroLable'
import SubTitle from '../../../components/ui/SubTitle'
import Title from '../../../components/ui/Title'

const About = async ({ about }: { about: IAbout }) => {
  const { title, description, aboutObject } = about

  return (
    <Layout>
      <>
        <SubLayout>
          <IntroLable label="About us" />
          <Title title={title || 'An intro to Codemevel'} />
          <SubTitle
            subTitle={
              description ||
              'CodeMevel is a dynamic and innovative web development startup dedicated to providing cutting-edge digital solutions for businesses of all sizes. With a team of creative minds and technical experts, we strive to transform your digital ideas into engaging and functional realities.'
            }
          />
        </SubLayout>

        {aboutObject?.map(({ title: T, description: D, aboutDetails }) => (
          <div
            key={T + D}
            className="dot-matrix md:mb-5 mb-3 border-l-[0.5px] border-black/30 dark:border-white/30 md:p-10 sm:p-5 p-3"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white text-black">
              {T}
            </h3>
            {D && (
              <p className="text-sm md:text-lg dark:text-white/70 text-black/70 mb-6 max-w-4xl">
                {D}
              </p>
            )}
            {aboutDetails && (
              <ul className="grid md:grid-cols-12 grid-col-8 gap-5">
                {aboutDetails?.map(({ title: t, description: d }, i) => (
                  <li
                    key={t + d}
                    className="mb-2 md:p-5 p-2 relative hover:scale-[.99]  col-span-4  bg-white/50 dark:bg-black/50 border-[0.5px] border-white/30 rounded-sm dark:text-white/50 text-black/50 hover:bg-white/10"
                  >
                    <div className="h-10 w-10 border-t-[0.5px] absolute top-1 left-1 border-l-[0.5px] opacity-30" />
                    <div className="h-10 w-10 border-b-[0.5px] absolute bottom-1 right-1 border-r-[0.5px] opacity-30" />

                    <div className="pb-5 slashed-zero text-primary font-mono">
                      <p> 0{i + 1}</p>
                    </div>
                    <h3 className="text-2xl py-5 font-semibold text-white">
                      {t}
                      <br />
                    </h3>
                    <p className="mb-5"> {d}</p>
                    <Button title="Read more ->" ariaLabel="read more" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </>
    </Layout>
  )
}

export default About
