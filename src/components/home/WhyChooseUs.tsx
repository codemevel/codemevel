import Layout from '../layout/Layout'
import SubLayout from '../layout/SubLayout'
import Card from '../ui/Card'
import IntroLable from '../ui/IntroLable'
import SubTitle from '../ui/SubTitle'
import Title from '../ui/Title'

const sections = [
  {
    link: '/blog',
    heading: 'Tailored Solutions',
    content: `We understand that every business is unique. That's why we offer customized solutions that are specifically tailored to meet your individual requirements and goals.`,
  },
  {
    link: '/blog',
    heading: 'Creative Expertise',
    content: `Our team of creative minds is passionate about bringing your vision to life. We combine innovative ideas with the latest technology to create visually stunning and functional digital experiences.`,
  },
  {
    link: '/blog',
    heading: 'Customer-Centric Approach',
    content: `Your satisfaction is our top priority. We strive to build strong and lasting relationships with our clients by providing exceptional customer service and support at every stage of the development process.`,
  },
  {
    link: '/blog',
    heading: 'Proven Track Record',
    content: `With years of experience in the industry, we have successfully delivered numerous projects across various sectors. Our track record speaks for our commitment to excellence and quality.`,
  },
  {
    link: '/blog',
    heading: 'Transparent Communication',
    content: `We believe in transparent and open communication with our clients. You can expect regular updates, clear timelines, and honest feedback throughout our collaboration.`,
  },
  {
    link: '/blog',
    heading: 'Reliability and Security',
    content: `Your data and digital assets are safe with us. We prioritize the security and reliability of our services, ensuring that your online presence remains protected and operational at all times.`,
  },
]

function WhyChooseUs() {
  return (
    <Layout>
      <>
        <SubLayout>
          <IntroLable label="Really " />
          <Title title="Why Choose CodeMevel?" />
          <SubTitle subTitle="Choose CodeMevel as your digital partner, and let's embark on a journey to elevate your online presence and achieve your digital goals together." />
        </SubLayout>

        <ul className="grid p-5 dot-matrix md:p-10 md:grid-cols-8 grid-col-8 gap-5">
          {sections.map(({ heading, content, link }, index) => (
            <Card
              content={content}
              heading={heading}
              key={heading}
              index={index}
              link={link}
            />
          ))}
        </ul>
      </>
    </Layout>
  )
}

export default WhyChooseUs
