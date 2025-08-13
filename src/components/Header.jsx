import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Fashion", path: "/fashion" },
  { name: "Food", path: "/food" },
  { name: "Entertainment", path: "/entertainment" },
  { name: "Sports", path: "/sports" },
  { name: "Tech", path: "/tech" },
  { name: "Fiction", path: "/fiction" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Advertising", path: "/advertising" },
]

export default function Header({ darkMode, toggleDarkMode, menuOpen, toggleMenu }) {
  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Site name / logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center gap-3">
              <span className="inline-block w-9 h-9 rounded-md bg-primary dark:bg-pink-400" aria-hidden="true" />
              <span className="text-xl font-bold text-primary dark:text-pink-200">MyDulcet</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-primary dark:hover:text-pink-300 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: dark toggle + mobile button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a.75.75 0 01.75.75V4a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM10 16a.75.75 0 01.75.75V18a.75.75 0 01-1.5 0v-1.25A.75.75 0 0110 16zM4.22 4.22a.75.75 0 011.06 0L6.34 5.28a.75.75 0 11-1.06 1.06L4.22 5.28a.75.75 0 010-1.06zM13.66 13.66a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM2 10a.75.75 0 01.75-.75H4a.75.75 0 010 1.5H2.75A.75.75 0 012 10zM16 10a.75.75 0 01.75-.75H18a.75.75 0 010 1.5h-1.25A.75.75 0 0116 10zM4.22 15.78a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zM13.66 6.34a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06L14.72 6.34a.75.75 0 01-1.06 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900 dark:text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293a8 8 0 11-10.586-10.586 7 7 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <nav className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={toggleMenu}
                className="block px-3 py-2 rounded text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
              <a href="#newsletter" className="block px-3 py-2 text-sm text-primary dark:text-pink-300 hover:underline">
                Sign up for our newsletter
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
            }
