/* eslint-disable jsx-a11y/label-has-associated-control */

import Button from '../../../components/ui/Button'

function ContactForm() {
  async function create(formData: FormData) {
    'use server'

    // eslint-disable-next-line no-console
    console.log(formData)
    // mutate data
    // revalidate cache
  }
  return (
    <form action={create} className="space-y-8">
      <div>
        <label htmlFor="email" className="block mb-2 text-2xl font-medium ">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="p-5 border-[0.5px] dark:border-white/30 border-black/30 w-full dark:bg-white/10 bg-black/10"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 text-2xl font-medium ">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="p-5 border-[0.5px] dark:border-white/30 border-black/30 w-full dark:bg-white/10 bg-black/10"
          placeholder="Let us know how we can help you"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-2xl font-medium ">
          Your message
        </label>
        <textarea
          id="message"
          rows={6}
          className="p-5 border-[0.5px] dark:border-white/30 border-black/30 w-full dark:bg-white/10 bg-black/10 "
          placeholder="Leave a comment..."
        />
      </div>
      <Button title="Submit" submit ariaLabel="submit button" />
    </form>
  )
}

export default ContactForm
