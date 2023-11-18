import SubTitle from '../_ui/SubTitle'
import Title from '../_ui/Title'

const About = async () => {
  return (
    <section className="h-full mx-auto max-w-6xl py-10 border-b-[0.5px] dark:border-white/10 border-black/10  w-full text-white">
      <div className="h-10" />
      <div className="px-5">
        <Title title="About us" />
        <SubTitle
          subTitle=" CodeMevel is a dynamic and innovative web development startup
          dedicated to providing cutting-edge digital solutions for businesses
          of all sizes. With a team of creative minds and technical experts, we
          strive to transform your digital ideas into engaging and functional
          realities."
        />
        <div className="">
          <h3 className="text-3xl  font-bold mb-4 dark:text-white text-black">
            Our Mission
          </h3>
          <p className="text-base dark:text-white/50  text-black/50  mb-6 max-w-4xl">
            Our mission is to empower businesses with robust and user-friendly
            digital platforms that not only enhance their online presence but
            also drive tangible results. We aim to be the driving force behind
            our client&apos;s digital success by delivering innovative and
            customized solutions that exceed their expectations.
          </p>
        </div>
        <div className="">
          <h3 className="text-3xl  font-bold mb-4 dark:text-white text-black">
            Our Vision
          </h3>
          <p className="text-base dark:text-white/50  text-black   mb-6 max-w-4xl">
            We envision a digital landscape where businesses can thrive through
            seamless and engaging online experiences. By leveraging the latest
            technologies and industry trends, we aspire to become a leading
            force in revolutionizing the way businesses interact and engage with
            their target audience in the digital realm.
          </p>
        </div>

        <h3 className="text-3xl  font-bold mb-4 dark:text-white text-black">
          Our Values
        </h3>
        <ul className="grid md:grid-cols-8 grid-col-8 gap-5">
          <li className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border:black/90 rounded-sm dark:text-white/50  text-black   hover:bg-white/10">
            <strong className="text-2xl font-semibold dark:text-white text-black">
              Innovation <br />
            </strong>
            <p className="max-w-4xl">
              We are committed to continuous innovation and the exploration of
              new technologies to deliver unique and creative solutions for our
              clients.
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border:black/90 rounded-sm dark:text-white/50  text-black   hover:bg-white/10">
            <strong className="text-2xl font-semibold dark:text-white text-black">
              Integrity <br />
            </strong>
            <p className="max-w-4xl">
              We uphold the highest standards of integrity, honesty, and
              transparency in all our interactions with clients, partners, and
              stakeholders.
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border:black/90 rounded-sm dark:text-white/50  text-black   hover:bg-white/10">
            <strong className="text-2xl font-semibold dark:text-white text-black">
              Excellence <br />
            </strong>
            <p className="max-w-4xl">
              We strive for excellence in every project we undertake, ensuring
              that our clients receive the best possible solutions that align
              with their goals and aspirations.
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border:black/90 rounded-sm dark:text-white/50  text-black   hover:bg-white/10">
            <strong className="text-2xl font-semibold dark:text-white text-black">
              Collaboration <br />
            </strong>
            <p className="max-w-4xl">
              We believe in the power of collaboration and teamwork, working
              closely with our clients to understand their needs and provide
              them with the best possible solutions.
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border:black/90 rounded-sm dark:text-white/50  text-black   hover:bg-white/10">
            <strong className="text-2xl font-semibold dark:text-white text-black">
              Customer Satisfaction <br />
            </strong>{' '}
            <p className="max-w-4xl">
              Your satisfaction is our priority. We go the extra mile to ensure
              that our clients are not just happy with the end results but also
              with the overall experience of working with us.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
