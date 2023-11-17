import SubTitle from '../_ui/SubTitle'
import Title from '../_ui/Title'
import MiniHeroSvg from './MiniHeroSvg'

const Services = async () => {
  return (
    <section className="h-full max-w-6xl mx-auto py-10 border-y-[0.5px] border-white/10 w-full text-white">
      <div className="w-full">
        <div className="flex flex-row py-10 w-full justify-between items-center">
          <div className="px-5 w-full">
            <Title title="What Services We Provides." />
            <SubTitle
              subTitle="At CodeMevel, we are dedicated to providing a comprehensive suite of
              services tailored to meet your digital needs. Our expertise lies in
              the following areas."
            />
          </div>
          <div className=" backdrop-blur-sm w-full">
            <MiniHeroSvg />
          </div>
        </div>
        <ul className="gap-5 grid grid-cols-12 px-5">
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Tailored Solutions
              <br />
            </strong>
            We understand that every business is unique. That&apos;s why we
            offer customized solutions that are specifically tailored to meet
            your individual requirements and goals.
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Web Development
              <br />
            </strong>
            From conceptualization to execution, we specialize in creating
            visually stunning and user-friendly websites that leave a lasting
            impression.
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              E-Commerce Solutions
              <br />
            </strong>
            Empower your online business with our robust e-commerce solutions
            that enhance customer experience and boost sales.
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              (UI/UX) Design
              <br />
            </strong>
            We believe in the power of seamless user experiences. Our design
            experts ensure that every click resonates with your audience,
            creating an intuitive interface.
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Hosting Solutions
              <br />
            </strong>
            Secure and reliable hosting services that provide the foundation for
            your digital presence, ensuring seamless accessibility and
            performance for your website.
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Maintenance Support
              <br />
            </strong>
            Our dedicated team is committed to providing ongoing technical
            support and maintenance to ensure that your digital platforms
            operate seamlessly without any glitches.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Services
