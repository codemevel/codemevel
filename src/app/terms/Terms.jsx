import React from 'react'

const Terms = async () => {
  return (
    <section className="h-full  max-w-9xl py-10 border-x-[0.5px] border-white/10 w-full text-white">
      <div className="h-10" />
      <div className="px-5">
        <h2 className="text-5xl  font-bold mb-4">Terms and Conditions</h2>
        <p className="text-2xl text-white/50 mb-6 max-w-4xl">
          These Terms and Conditions (hereinafter referred to as
          &quot;Terms&quot;) govern your use of CodeMevel&apos;s services and
          website. By accessing or using our services, you agree to be bound by
          these Terms. If you disagree with any part of these Terms, you may not
          access our services
        </p>

        <ul className="grid grid-cols-8 gap-5">
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Use of Services <br />
            </strong>
            <p className="max-w-4xl">
              You must be at least 18 years of age to use our services. By
              accessing or using our services, you represent and warrant that
              you are at least 18 years old.
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Intellectual Property <br />
            </strong>
            <p className="max-w-4xl">
              All content and materials available on our website, including but
              not limited to text, graphics, logos, images, and software, are
              the property of CodeMevel and are protected by applicable
              intellectual property laws.
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              User Conduct <br />
            </strong>
            <p className="max-w-4xl">
              You agree to use our services only for lawful purposes and in a
              manner that does not infringe upon the rights of, restrict, or
              inhibit the use and enjoyment of our services by any third party
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Limitation of Liability <br />
            </strong>
            <p className="max-w-4xl">
              CodeMevel shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to damages for loss of profits, data, or use, arising out
              of or in connection with the use of our services.
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Indemnification <br />
            </strong>{' '}
            <p className="max-w-4xl">
              You agree to indemnify and hold CodeMevel, its employees, and
              affiliates harmless from any claim or demand, including reasonable
              attorney&apos;s fees, made by any third party due to or arising
              out of your breach of these Terms or your violation of any law or
              the rights of a third party.
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Governing Law <br />
            </strong>{' '}
            <p className="max-w-4xl">
              These Terms shall be governed and construed in accordance with the
              laws of [Your Country], without regard to its conflict of law
              provisions.
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Changes to Terms <br />
            </strong>{' '}
            <p className="max-w-4xl">
              We reserve the right to modify or replace these Terms at any time.
              The date of the latest revision will be indicated at the top of
              this page. It is your responsibility to review these Terms
              periodically for any changes
            </p>
          </li>
          <li className="mb-2 p-5 col-span-4 border-[0.5px] border-white/30 rounded-sm text-white/50 hover:bg-white/10">
            <strong className="text-2xl font-semibold text-white">
              Contact Us <br />
            </strong>{' '}
            <p className="max-w-4xl">
              If you have any questions or concerns regarding these Terms,
              please contact us at [your contact information]. By using our
              services, you agree to the terms and conditions set forth in this
              document. Your continued use of our services after any
              modifications to these Terms constitutes your acceptance of such
              changes
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Terms
