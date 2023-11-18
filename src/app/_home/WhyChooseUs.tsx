import SubTitle from '../_ui/SubTitle'
import Title from '../_ui/Title'

const WhyChooseUs = async () => {
  return (
    <section className="h-full max-w-6xl mx-auto py-10 border-y-[0.5px] dark:border-white/10 border-black/10  w-full text-white">
      <div className="">
        <div className="px-5">
          <Title title="Why Choose CodeMevel?" />
          <SubTitle
            subTitle=" Choose CodeMevel as your digital partner, and let's embark on a
            journey to elevate your online presence and achieve your digital
            goals together."
          />
        </div>

        <ul className="gap-5 grid grid-cols-12 px-5">
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm dark:text-white/50  text-black/50  hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Tailored Solutions
              <br />
            </strong>
            We understand that every business is unique. That&apos;s why we
            offer customized solutions that are specifically tailored to meet
            your individual requirements and goals.
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm dark:text-white/50  text-black/50  hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Creative Expertise
              <br />
            </strong>
            Our team of creative minds is passionate about bringing your vision
            to life. We combine innovative ideas with the latest technology to
            create visually stunning and functional digital experiences.
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm dark:text-white/50  text-black/50  hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Customer-Centric Approach
              <br />
            </strong>
            Your satisfaction is our top priority. We strive to build strong and
            lasting relationships with our clients by providing exceptional
            customer service and support at every stage of the development
            process.
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm dark:text-white/50  text-black/50  hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Proven Track Record
              <br />
            </strong>
            With years of experience in the industry, we have successfully
            delivered numerous projects across various sectors. Our track record
            speaks for our commitment to excellence and quality.
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm dark:text-white/50  text-black/50  hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Transparent Communication
              <br />
            </strong>
            We believe in transparent and open communication with our clients.
            You can expect regular updates, clear timelines, and honest feedback
            throughout our collaboration.
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm dark:text-white/50  text-black/50  hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Reliability and Security
              <br />
            </strong>
            Your data and digital assets are safe with us. We prioritize the
            security and reliability of our services, ensuring that your online
            presence remains protected and operational at all times.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default WhyChooseUs
