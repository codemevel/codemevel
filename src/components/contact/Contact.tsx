import IntroLable from '../ui/IntroLable'
import SubTitle from '../ui/SubTitle'
import Title from '../ui/Title'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <section className=" py-20 mx-auto max-w-6xl px-2.5 md:px-5 ">
      <div className="md:py-10 py-5 border-b-[0.5px]  border-black/30 dark:border-white/30 ">
        <Title title="Contact us" />
        <SubTitle subTitle="CodeMevel is a dynamic and innovative web development startup dedicated to providing cutting-edge digital solutions for businesses of all sizes. With a team of creative minds and technical experts, we strive to transform your digital ideas into engaging and functional realities." />
      </div>
      <div className="grid md:grid-cols-8 grid-cols-4 h-full w-full pt-10 dot-matrix md:p-5 p-2.5 relative mt-20">
        <div className="md:h-20 h-10 w-10 md:w-20 border-t-[0.5px] absolute -top-3 -left-3 md:-top-20 md:-left-20 border-l-[0.5px] opacity-30" />
        <div className="md:h-20 h-10 w-10 md:w-20 border-b-[0.5px] absolute -bottom-5 -right-3 md:-bottom-20 md:-right-20 border-r-[0.5px] opacity-30" />
        <div className="col-span-4 flex flex-col justify-center items-start  gap-5">
          <IntroLable label="Connect" />
          <Title title="Power your Enterprise with Codemevel." />
          <ul className="text-2xl gap-3 list-disc list-inside">
            <li>Enterprise plugins like SSO</li>
            <li>Support SLA</li>
            <li>Shared Slack channel</li>
            <li>Development Assistance</li>
          </ul>
        </div>
        <div className="col-span-4 dark:bg-black/50 bg-white/50 border-[0.5px] border-black/30 dark:border-white/30  md:p-5 p-2.5 mt-10 md:mt-0">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
