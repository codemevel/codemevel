import SubTitle from '@/components/ui/SubTitle'
import Title from '@/components/ui/Title'
import { IPrivacy } from '@/types'

const Privacy = async ({ privacy }: { privacy: IPrivacy }) => {
  // const privacyData = [
  //   {
  //     title: ' Personal Information',
  //     description:
  //       ' We may collect personal information, such as your name, email address, phone number, and other contact information when you voluntarily provide it.',
  //   },
  //   {
  //     title: ' Non-Personal Information',
  //     description:
  //       'We may collect non-personal information, such as browser information, operating system, IP address, and usage data when you interact with our website.',
  //   },
  //   {
  //     title: ' Disclosure of Your Information',
  //     description:
  //       ' We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share your information with trusted third parties who assist us in operating our website and providing our services.',
  //   },
  //   {
  //     title: 'Security',
  //     description:
  //       ' We use reasonable security measures to protect your personal information. However, no data transmission or storage is completely secure, and we cannot guarantee the security of your  data. However, no data transmission',
  //   },
  //   {
  //     title: ' Your Choices',
  //     description:
  //       ' You may choose not to provide us with certain personal information, but this may limit your ability to use our services or access certain features of our website.',
  //   },
  //   {
  //     title: ' Changes to this Privacy Policy',
  //     description:
  //       ' We may update this Privacy Policy from time to time. The date of the latest revision will be indicated at the top of this page. It is your responsibility to review this Privacy Policy periodically  to stay informed about how we are protecting your information.',
  //   },
  //   {
  //     title: '  Contact Us',
  //     description:
  //       '  If you have any questions or concerns regarding this Privacy  Policy, please contact us at [your contact information]. By using our services and website, you agree to the terms and conditions of this Privacy Policy. Your continued use of our services after any  changes to this Privacy Policy will constitute your acceptance of such changes.',
  //   },
  // ]
  const { title, description, privacyDetails } = privacy
  return (
    <section className="h-full  max-w-6xl mx-auto py-10 border-y-[0.5px] dark:border-white/10 border-black/10  w-full dark:text-white text-black">
      <div className="h-10" />
      <div className="px-5">
        <Title title={title || 'Privacy Policy'} />
        <SubTitle
          subTitle={
            description ||
            ' CodeMevel is committed to protecting the privacy of our users. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information when you use our services and  website. By using our services or accessing our website, you consent to the practices described in this Privacy Policy.'
          }
        />
      </div>
      <div className="py-10">
        <h3 className="text-3xl  font-bold mb-4">Information We Collect</h3>
        <ul className="grid md:grid-cols-8 grid-cols-4 gap-5">
          {privacyDetails?.map(({ title: T, description: D }) => {
            return (
              <li className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border-black/30 rounded-sm dark:text-white/50  text-black/50  dark:hover:bg-white/10 hover:bg-black/10">
                <strong className="text-2xl font-semibold dark:text-white text-black">
                  {T} <br />
                </strong>
                {D && <p className="max-w-4xl">{D}</p>}
              </li>
            )
          })}
          {/* <li className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border-black/30 rounded-sm dark:text-white/50  text-black/50  dark:hover:bg-white/10 hover:bg-black/10">
              <strong className="text-2xl font-semibold dark:text-white text-black">
                Personal Information <br />
              </strong>
              <p className="max-w-4xl">
                We may collect personal information, such as your name, email
                address, phone number, and other contact information when you
                voluntarily provide it.
              </p>
            </li>
            <li className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border-black/30 rounded-sm dark:text-white/50  text-black/50  dark:hover:bg-white/10 hover:bg-black/10">
              <strong className="text-2xl font-semibold dark:text-white text-black">
                Non-Personal Information
                <br />
              </strong>
              <p className="max-w-4xl">
                We may collect non-personal information, such as browser
                information, operating system, IP address, and usage data when
                you interact with our website.
              </p>
            </li>
          </ul>
        </div>
        <div className="pb-10">
          <h3 className="text-3xl  font-bold mb-4">
            How We Use Your Information
          </h3>
          <p className="text-xl dark:text-white/50  text-black/50  mb-6 max-w-4xl">
            We may use your information for the following purposes:
          </p>
          <ul className="grid md:grid-cols-8 grid-cols-4  gap-5 list-disc px-5">
            <li className="mb-1 col-span-4 rounded-sm dark:text-white/50  text-black/50  text-lg dark:hover:bg-white/10 hover:bg-black/10">
              <p className="max-w-4xl">To provide and maintain our services.</p>
            </li>
            <li className="mb-1 col-span-4 rounded-sm dark:text-white/50  text-black/50  text-lg dark:hover:bg-white/10 hover:bg-black/10">
              <p className="max-w-4xl">
                To notify you about changes to our services.
              </p>
            </li>
            <li className="mb-1 col-span-4 rounded-sm dark:text-white/50  text-black/50  text-lg dark:hover:bg-white/10 hover:bg-black/10">
              <p className="max-w-4xl">
                To respond to your requests, comments, or questions.
              </p>
            </li>
            <li className="mb-1 col-span-4 rounded-sm dark:text-white/50  text-black/50  text-lg dark:hover:bg-white/10 hover:bg-black/10">
              <p className="max-w-4xl">
                To send you promotional or informational content based on your
                preferences
              </p>
            </li>
            <li className="mb-1 col-span-4 rounded-sm dark:text-white/50  text-black/50  text-lg dark:hover:bg-white/10 hover:bg-black/10">
              <p className="max-w-4xl">
                To monitor and analyze usage patterns and trends to improve our
                website and services.
              </p>
            </li>
          </ul>
        </div>

        <ul className="grid md:grid-cols-8 grid-cols-4 gap-5">
          <li className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border-black/30 rounded-sm dark:text-white/50  text-black/50  dark:hover:bg-white/10 hover:bg-black/10">
            <strong className="text-2xl font-semibold dark:text-white text-black">
              Disclosure of Your Information
              <br />
            </strong>
            <p className="max-w-4xl">
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties. However, we may share your
              information with trusted third parties who assist us in operating
              our website and providing our services.
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border-black/30 rounded-sm dark:text-white/50  text-black/50  dark:hover:bg-white/10 hover:bg-black/10">
            <strong className="text-2xl font-semibold dark:text-white text-black">
              Security <br />
            </strong>
            <p className="max-w-4xl">
              We use reasonable security measures to protect your personal
              information. However, no data transmission or storage is
              completely secure, and we cannot guarantee the security of your
              data. However, no data transmission
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border-black/30 rounded-sm dark:text-white/50  text-black/50  dark:hover:bg-white/10 hover:bg-black/10">
            <strong className="text-2xl font-semibold dark:text-white text-black">
              Your Choices <br />
            </strong>
            <p className="max-w-4xl">
              You may choose not to provide us with certain personal
              information, but this may limit your ability to use our services
              or access certain features of our website.
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border-black/30 rounded-sm dark:text-white/50  text-black/50  dark:hover:bg-white/10 hover:bg-black/10">
            <strong className="text-2xl font-semibold dark:text-white text-black">
              Changes to this Privacy Policy <br />
            </strong>
            <p className="max-w-4xl">
              We may update this Privacy Policy from time to time. The date of
              the latest revision will be indicated at the top of this page. It
              is your responsibility to review this Privacy Policy periodically
              to stay informed about how we are protecting your information.
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border-black/30 rounded-sm dark:text-white/50  text-black/50  dark:hover:bg-white/10 hover:bg-black/10">
            <strong className="text-2xl font-semibold dark:text-white text-black">
              Contact Us <br />
            </strong>{' '}
            <p className="max-w-4xl">
              If you have any questions or concerns regarding this Privacy
              Policy, please contact us at [your contact information]. By using
              our services and website, you agree to the terms and conditions of
              this Privacy Policy. Your continued use of our services after any
              changes to this Privacy Policy will constitute your acceptance of
              such changes.
            </p>
          </li> */}
        </ul>
      </div>
    </section>
  )
}

export default Privacy
