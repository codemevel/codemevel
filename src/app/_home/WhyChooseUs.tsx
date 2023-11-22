import SubTitle from '../_ui/SubTitle'
import Title from '../_ui/Title'

const sections = [
  {
    title: 'Tailored Solutions',
    content: `We understand that every business is unique. That's why we offer customized solutions that are specifically tailored to meet your individual requirements and goals.`,
  },
  {
    title: 'Creative Expertise',
    content: `Our team of creative minds is passionate about bringing your vision to life. We combine innovative ideas with the latest technology to create visually stunning and functional digital experiences.`,
  },
  {
    title: 'Customer-Centric Approach',
    content: `Your satisfaction is our top priority. We strive to build strong and lasting relationships with our clients by providing exceptional customer service and support at every stage of the development process.`,
  },
  {
    title: 'Proven Track Record',
    content: `With years of experience in the industry, we have successfully delivered numerous projects across various sectors. Our track record speaks for our commitment to excellence and quality.`,
  },
  {
    title: 'Transparent Communication',
    content: `We believe in transparent and open communication with our clients. You can expect regular updates, clear timelines, and honest feedback throughout our collaboration.`,
  },
  {
    title: 'Reliability and Security',
    content: `Your data and digital assets are safe with us. We prioritize the security and reliability of our services, ensuring that your online presence remains protected and operational at all times.`,
  },
]

function WhyChooseUs() {
  return (
    <section className="h-full max-w-6xl mx-auto py-10 border-y-[0.5px] dark:border-white/10 border-black/10 md:mt-20 mt-10  w-full text-white">
      <div className="">
        <div className="px-5">
          <Title title="Why Choose CodeMevel?" />
          <SubTitle subTitle="Choose CodeMevel as your digital partner, and let's embark on a journey to elevate your online presence and achieve your digital goals together." />
        </div>

        <ul className="gap-5 grid grid-cols-4 md:grid-cols-12 px-5">
          {sections.map((section) => (
            <li
              key={section.title}
              className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm dark:text-white/50 text-black/50 hover:bg-white/10"
            >
              <strong className="text-2xl font-semibold text-white">
                {section.title}
                <br />
              </strong>
              {section.content}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhyChooseUs
