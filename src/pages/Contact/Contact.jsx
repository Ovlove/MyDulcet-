import React, { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Placeholder for form submission logic
    setSubmitted(true)
  }

  return (
    <section className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      {submitted ? (
        <p className="text-green-600 dark:text-green-400">Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Name</span>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Email</span>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Message</span>
            <textarea
              name="message"
              required
              rows="4"
              className="mt-1 block w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </label>

          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded hover:bg-pink-400 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  )
    }
