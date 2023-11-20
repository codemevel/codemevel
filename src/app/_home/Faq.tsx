'use client'

import Title from '../_ui/Title'

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
    <section className="h-full p-5 max-w-6xl mx-auto py-10 border-y-[0.5px] dark:border-white/10 border-black/10 w-full text-white">
      <Title title="Frequently Asked Questions" />
      <ul className="grid grid-cols-8  gap-5 list-inside">
        {faqData.map((item, index) => (
          <li
            key={item.question}
            className="flex flex-row justify-start items-start p-2 col-span-4 border-black/30 dark:border-white/30 border-[0.5px]  rounded-sm dark:text-white/50 text-black/50 hover:bg-white/10"
          >
            <div className="p-2">
              <h3 className="text-lg pb-2 md:text-xl text-white">
                {`Q${index + 1}. ${item.question}`}
                <br />
              </h3>
              <p className="max-w-4xl">{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Faq
