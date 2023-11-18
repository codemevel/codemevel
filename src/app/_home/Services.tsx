import SubTitle from '../_ui/SubTitle'
import Title from '../_ui/Title'
import MiniHeroSvg from './MiniHeroSvg'

function Services() {
  const servicesData = [
    {
      title: 'Tailored Solutions',
      description:
        "We understand that every business is unique. That's why we offer customized solutions that are specifically tailored to meet your individual requirements and goals.",
    },
    {
      title: 'Web Development',
      description:
        'From conceptualization to execution, we specialize in creating visually stunning and user-friendly websites that leave a lasting impression.',
    },
    {
      title: 'E-Commerce Solutions',
      description:
        'Empower your online business with our robust e-commerce solutions that enhance customer experience and boost sales.',
    },
    {
      title: '(UI/UX) Design',
      description:
        'We believe in the power of seamless user experiences. Our design experts ensure that every click resonates with your audience, creating an intuitive interface.',
    },
    {
      title: 'Hosting Solutions',
      description:
        'Secure and reliable hosting services that provide the foundation for your digital presence, ensuring seamless accessibility and performance for your website.',
    },
    {
      title: 'Maintenance Support',
      description:
        'Our dedicated team is committed to providing ongoing technical support and maintenance to ensure that your digital platforms operate seamlessly without any glitches.',
    },
  ]
  return (
    <section className="h-full max-w-6xl mx-auto py-10 border-y-[0.5px] dark:border-white/10 border-black/10 w-full text-white">
      <div className="w-full">
        <div className="flex flex-col md:flex-row py-10 w-full justify-between items-center">
          <div className="px-5 w-full">
            <Title title="What Services We Provide." />
            <SubTitle subTitle="At CodeMevel, we are dedicated to providing a comprehensive suite of services tailored to meet your digital needs. Our expertise lies in the following areas." />
          </div>
          <div className="backdrop-blur-sm w-full p-5">
            <MiniHeroSvg />
          </div>
        </div>
        <ul className="gap-5 grid grid-cols-4 md:grid-cols-12 px-5">
          {servicesData.map((service, index) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm dark:text-white/50 text-black/50 hover:bg-white/10"
            >
              <strong className="text-2xl font-semibold text-white">
                {service.title}
                <br />
              </strong>
              {service.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services
