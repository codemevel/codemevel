/* eslint-disable jsx-a11y/label-has-associated-control */

import Button from '../_ui/Button'
import Title from '../_ui/Title'

function Contact() {
  async function create(formData: FormData) {
    'use server'

    // eslint-disable-next-line no-console
    console.log(formData)
    // mutate data
    // revalidate cache
  }
  return (
    <section className="h-full p-5 mx-auto max-w-6xl py-10 border-b-[0.5px] dark:border-white/10 border-black/10  w-full text-white">
      <div className="h-20 w-full " />
      <div className="">
        <Title title="Contact" />
        <div className="">
          <form action={create} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-2xl font-medium "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="p-5 border-[0.5px] border-white/30 w-full bg-white/10"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-2xl font-medium "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="p-5 border-[0.5px] border-white/30 w-full bg-white/10"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-2xl font-medium "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="p-5 border-[0.5px] border-white/30 w-full bg-white/10"
                placeholder="Leave a comment..."
              />
            </div>
            <Button title="Submit" submit ariaLabel="submit button" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
