import SubTitle from '@/components/ui/SubTitle'
import Title from '@/components/ui/Title'
import { ITerm } from '@/types'

const Terms = async ({ terms }: { terms: ITerm }) => {
  // const termData = [
  //   {
  //     title: 'Use of Services',
  //     description:
  //       'You must be at least 18 years of age to use our services. By accessing or using our services, you represent and warrant that  you are at least 18 years old.',
  //   },
  //   {
  //     title: 'Intellectual Property',
  //     description:
  //       'All content and materials available on our website, including but not limited to text, graphics, logos, images, and software, are the property of CodeMevel and are protected by applicable  intellectual property laws.',
  //   },
  //   {
  //     title: 'User Conduct',
  //     description:
  //       'You agree to use our services only for lawful purposes and in a  manner that does not infringe upon the rights of, restrict, or inhibit the use and enjoyment of our services by any third party',
  //   },
  //   {
  //     title: ' Limitation of Liability',
  //     description:
  //       ' CodeMevel shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to damages for loss of profits, data, or use, arising out of or in connection with the use of our services.',
  //   },
  //   {
  //     title: 'Indemnification',
  //     description:
  //       'You agree to indemnify and hold CodeMevel, its employees, and affiliates harmless from any claim or demand, including reasonable attorney&apos;s fees, made by any third party due to or arising out of your breach of these Terms or your violation of any law or the rights of a third party.',
  //   },
  //   {
  //     title: 'Governing Law',
  //     description:
  //       'These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law  provisions.',
  //   },
  //   {
  //     title: 'Changes to Terms',
  //     description:
  //       ' We reserve the right to modify or replace these Terms at any time. The date of the latest revision will be indicated at the top of this page. It is your responsibility to review these Terms periodically for any changes',
  //   },
  //   {
  //     title: 'Contact Us',
  //     description:
  //       'If you have any questions or concerns regarding these Terms,  please contact us at [your contact information]. By using our services, you agree to the terms and conditions set forth in this  document. Your continued use of our services after any modifications to these Terms constitutes your acceptance of such changes',
  //   },
  // ]
  const { title, description, termsDetails } = terms
  return (
    <section className="h-full  max-w-6xl mx-auto py-10 border-y-[0.5px] dark:border-white/10 border-black/10  w-full dark:text-white text-black">
      <div className="h-10" />
      <div className="px-5">
        <Title title={title || 'Terms'} />
        <SubTitle
          subTitle={
            description ||
            ' These Terms and Conditions (hereinafter referred to as"Terms") govern your use of CodeMevel&apos;s services and website. By accessing or using our services, you agree to be bound by  these Terms. If you disagree with any part of these Terms, you may not access our services'
          }
        />

        <ul className="grid md:grid-cols-8 grid-cols-4 gap-5">
          {termsDetails?.map(({ title: T, description: D }) => {
            return (
              <li
                key={T + D}
                className="mb-2 p-5 col-span-4 border-[0.5px] dark:border-white/30 border-black/30 rounded-sm dark:text-white/50  text-black/50  dark:hover:bg-white/10 hover:bg-black/10"
              >
                {T && (
                  <p>
                    <strong className="text-2xl font-semibold dark:text-white text-black">
                      {T} <br />
                    </strong>
                    {D && <p className="max-w-4xl">{D}</p>}
                  </p>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Terms
