import React from 'react'

import Title from '../_ui/Title'

function Faq() {
  return (
    <section className="h-full max-w-6xl mx-auto py-10 border-y-[0.5px] border-white/10 w-full text-white">
      <div>
        <Title title="Frequently Asked Questions" />
      </div>
      <ul className="grid grid-cols-4 ">
        <li className=" p-5 col-span-4 border-y-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
          <strong className="text-2xl font-semibold text-white">
            1. What services does CodeMevel offer? <br />
          </strong>
          <p className="max-w-4xl">
            CodeMevel specializes in a range of digital services, including web
            development, e-commerce solutions, UI/UX design, hosting services,
            and technical support and maintenance.
          </p>
        </li>
        <li className=" p-5 col-span-4 border-y-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
          <strong className="text-2xl font-semibold text-white">
            2. How long does it take to complete a typical web development
            project? <br />
          </strong>
          <p className="max-w-4xl">
            The duration of a project varies depending on its complexity and
            specific requirements. We work closely with our clients to establish
            realistic timelines and ensure timely project delivery.
          </p>
        </li>
        <li className=" p-5 col-span-4 border-y-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
          <strong className="text-2xl font-semibold text-white">
            3. What sets CodeMevel apart from other web development companies?{' '}
            <br />
          </strong>
          <p className="max-w-4xl">
            At CodeMevel, we take a personalized approach to each project,
            ensuring that our solutions are tailored to the unique needs and
            goals of our clients. We also prioritize transparent communication,
            innovative designs, and reliable technical suppor
          </p>
        </li>
        <li className=" p-5 col-span-4 border-y-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
          <strong className="text-2xl font-semibold text-white">
            4. Can you provide examples of your previous work?
            <br />
          </strong>
          <p className="max-w-4xl">
            Certainly! Please visit our Portfolio section to explore some of our
            previous projects and success stories.
          </p>
        </li>
        <li className=" p-5 col-span-4 border-y-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
          <strong className="text-2xl font-semibold text-white">
            5. How do I get in touch with your team? <br />
          </strong>{' '}
          <p className="max-w-4xl">
            You can reach out to us via the Contact Us page on our website,
            where you will find our contact information and a convenient contact
            form. Alternatively, you can also email us directly at [insert email
            address] or give us a call at [insert phone number].
          </p>
        </li>
        <li className=" p-5 col-span-4 border-y-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
          <strong className="text-2xl font-semibold text-white">
            6. Do you offer ongoing maintenance services for websites? <br />
          </strong>{' '}
          <p className="max-w-4xl">
            Yes, we provide comprehensive technical support and maintenance
            services to ensure that your website operates smoothly and remains
            up-to-date with the latest security measures and technological
            advancements.
          </p>
        </li>
        <li className=" p-5 col-span-4 border-y-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
          <strong className="text-2xl font-semibold text-white">
            7. What is your approach to ensuring the security of websites?
            <br />
          </strong>{' '}
          <p className="max-w-4xl">
            We prioritize the security of our client&apos;s websites by
            implementing robust security measures, regular updates, and reliable
            hosting services. Additionally, we conduct thorough security checks
            and follow industry best practices to protect your digital assets
            from potential threats.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Faq
