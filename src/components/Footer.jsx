import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><Link to="/" className="hover:text-primary dark:hover:text-pink-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary dark:hover:text-pink-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary dark:hover:text-pink-300">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-primary dark:hover:text-pink-300">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary dark:hover:text-pink-300">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div id="newsletter">
          <h3 className="text-lg font-semibold mb-4">Newsletter Signup</h3>
          <form
            onSubmit={e => {
              e.preventDefault()
              alert('Thank you for subscribing! (Demo only)')
            }}
            className="flex flex-col space-y-3"
          >
            <input
              type="email"
              placeholder="Your email"
              required
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="bg-primary hover:bg-pink-400 text-white py-2 rounded transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary dark:hover:text-pink-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 16.99 22 12z" />
              </svg>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary dark:hover:text-pink-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 11-4.73-4.73 4 4 0 014.73 4.73z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary dark:hover:text-pink-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.07 2c-2.5 0-4.52 2.03-4.52 4.52 0 .35.04.7.11 1.03-3.76-.19-7.1-1.99-9.33-4.74a4.43 4.43 0 00-.61 2.27c0 1.56.79 2.94 2.01 3.74a4.5 4.5 0 01-2.05-.57v.06c0 2.2 1.56 4.03 3.63 4.44a4.6 4.6 0 01-2.03.08 4.53 4.53 0 004.22 3.13A9.07 9.07 0 013 19.57 12.9 12.9 0 009 21c7.54 0 11.67-6.25 11.67-11.66 0-.18-.01-.35-.02-.53A8.18 8.18 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} MyDulcet. All rights reserved.
      </div>
    </footer>
  )
}
