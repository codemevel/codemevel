'use client'

/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react'

import { createContact } from '@/hooks/api'

import Button from '../../../components/ui/Button'

function ContactForm() {
  const initialPayload = {
    _type: 'contact',
    email: '',
    subject: '',
    message: '',
  }

  const [payload, setPayload] = useState(initialPayload)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const resetForm = () => {
    setPayload(initialPayload)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form fields
    if (!payload.email || !payload.subject || !payload.message) {
      setError('Please fill in all fields.')
      return
    }

    setLoading(true)
    try {
      const res = await createContact(payload)
      console.log(res)
      resetForm()
      // Optionally, display a success message or redirect the user
    } catch (err) {
      setError('There was an error submitting the form. Please try again.')
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && <div className="text-red-500">{error}</div>}
      <div>
        <label htmlFor="email" className="block mb-2 text-2xl font-medium ">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="p-5 border-[0.5px] dark:border-white/30 border-black/30 w-full dark:bg-white/10 bg-black/10"
          placeholder="name@codemevel.com"
          value={payload.email}
          onChange={(e) =>
            setPayload((prevPayload) => ({
              ...prevPayload,
              email: e.target.value,
            }))
          }
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
          value={payload.subject}
          onChange={(e) =>
            setPayload((prevPayload) => ({
              ...prevPayload,
              subject: e.target.value,
            }))
          }
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
          value={payload.message}
          onChange={(e) =>
            setPayload((prevPayload) => ({
              ...prevPayload,
              message: e.target.value,
            }))
          }
          required
        />
      </div>
      <Button
        title="Submit"
        submit
        ariaLabel="submit button"
        disabled={loading}
      />
    </form>
  )
}

export default ContactForm
