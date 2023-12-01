'use client'

import Layout from '../layout/Layout'
import SubLayout from '../layout/SubLayout'
import IntroLable from '../ui/IntroLable'
import SubTitle from '../ui/SubTitle'
import Title from '../ui/Title'
import AccordionItem from './AccordionItem'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What services does CodeMevel offer?',
    answer:
      'CodeMevel specializes in a range of digital services, including web development, e-commerce solutions, UI/UX design, hosting services, and technical support and maintenance.',
  },
  {
    question:
      'How long does it take to complete a typical web development project?',
    answer:
      'The duration of a project varies depending on its complexity and specific requirements. We work closely with our clients to establish realistic timelines and ensure timely project delivery.',
  },
  {
    question: 'What sets CodeMevel apart from other web development companies?',
    answer:
      'At CodeMevel, we take a personalized approach to each project, ensuring that our solutions are tailored to the unique needs and goals of our clients. We also prioritize transparent communication, innovative designs, and reliable technical support.',
  },
  {
    question: 'Can you provide examples of your previous work?',
    answer:
      'Certainly! Please visit our Portfolio section to explore some of our previous projects and success stories.',
  },
  {
    question: 'How do I get in touch with your team?',
    answer:
      'You can reach out to us via the Contact Us page on our website, where you will find our contact information and a convenient contact form. Alternatively, you can also email us directly at [insert email address] or give us a call at [insert phone number].',
  },
  {
    question: 'Do you offer ongoing maintenance services for websites?',
    answer:
      'Yes, we provide comprehensive technical support and maintenance services to ensure that your website operates smoothly and remains up-to-date with the latest security measures and technological advancements.',
  },
  {
    question: 'What is your approach to ensuring the security of websites?',
    answer:
      "We prioritize the security of our client's websites by implementing robust security measures, regular updates, and reliable hosting services. Additionally, we conduct thorough security checks and follow industry best practices to protect your digital assets from potential threats.",
  },
]

function Faq() {
  return (
    <Layout>
      <>
        <SubLayout>
          <IntroLable label="FAQ" />
          <Title title="Frequently Asked Questions" />
          <SubTitle subTitle="Choose CodeMevel as your digital partner, and let's embark on a journey to elevate your online presence and achieve your digital goals together." />
        </SubLayout>
        <ul className="grid pb-28 grid-cols-4 py-5 dot-matrix md:grid-cols-4 gap-5 list-inside">
          {faqData.map((item, index) => (
            <AccordionItem
              key={item.question}
              index={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </ul>
      </>
    </Layout>
  )
}

export default Faq
