import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import AboutUs from './pages/About/AboutUs.jsx'
import Contact from './pages/Contact/Contact.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="font-bold text-xl">
              MyDulcet
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="hover:text-primary dark:hover:text-pink-400">
                Home
              </Link>
              <Link to="/fashion" className="hover:text-primary dark:hover:text-pink-400">
                Fashion
              </Link>
              <Link to="/food" className="hover:text-primary dark:hover:text-pink-400">
                Food
              </Link>
              <Link to="/entertainment" className="hover:text-primary dark:hover:text-pink-400">
                Entertainment
              </Link>
              <Link to="/sports" className="hover:text-primary dark:hover:text-pink-400">
                Sports
              </Link>
              <Link to="/tech" className="hover:text-primary dark:hover:text-pink-400">
                Tech
              </Link>
              <Link to="/fiction" className="hover:text-primary dark:hover:text-pink-400">
                Fiction
              </Link>
              <Link to="/about" className="hover:text-primary dark:hover:text-pink-400">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-primary dark:hover:text-pink-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Right controls */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="focus:outline-none"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>

            {/* Hamburger menu for mobile */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="md:hidden focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 px-4 pt-2 pb-4 space-y-1">
            <Link to="/" className="block py-1 hover:text-primary dark:hover:text-pink-400" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/fashion" className="block py-1 hover:text-primary dark:hover:text-pink-400" onClick={() => setMenuOpen(false)}>
              Fashion
            </Link>
            <Link to="/food" className="block py-1 hover:text-primary dark:hover:text-pink-400" onClick={() => setMenuOpen(false)}>
              Food
            </Link>
            <Link to="/entertainment" className="block py-1 hover:text-primary dark:hover:text-pink-400" onClick={() => setMenuOpen(false)}>
              Entertainment
            </Link>
            <Link to="/sports" className="block py-1 hover:text-primary dark:hover:text-pink-400" onClick={() => setMenuOpen(false)}>
              Sports
            </Link>
            <Link to="/tech" className="block py-1 hover:text-primary dark:hover:text-pink-400" onClick={() => setMenuOpen(false)}>
              Tech
            </Link>
            <Link to="/fiction" className="block py-1 hover:text-primary dark:hover:text-pink-400" onClick={() => setMenuOpen(false)}>
              Fiction
            </Link>
            <Link to="/about" className="block py-1 hover:text-primary dark:hover:text-pink-400" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="block py-1 hover:text-primary dark:hover:text-pink-400" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}

      </nav>

      <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
          }
