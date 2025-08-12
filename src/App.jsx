import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import AboutUs from './pages/About/AboutUs.jsx'
import Contact from './pages/Contact/Contact.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

// Dark mode hook
function useDarkMode() {
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  )

  useEffect(() => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return [isDark, setIsDark]
}

function Navbar({ isDark, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary dark:text-pink-300">
          MyDulcet
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-primary dark:hover:text-pink-300">Home</Link>
          <Link to="/fashion" className="hover:text-primary dark:hover:text-pink-300">Fashion</Link>
          <Link to="/food" className="hover:text-primary dark:hover:text-pink-300">Food</Link>
          <Link to="/entertainment" className="hover:text-primary dark:hover:text-pink-300">Entertainment</Link>
          <Link to="/sports" className="hover:text-primary dark:hover:text-pink-300">Sports</Link>
          <Link to="/tech" className="hover:text-primary dark:hover:text-pink-300">Tech</Link>
          <Link to="/fiction" className="hover:text-primary dark:hover:text-pink-300">Fiction</Link>
          <Link to="/about" className="hover:text-primary dark:hover:text-pink-300">About Us</Link>
          <Link to="/contact" className="hover:text-primary dark:hover:text-pink-300">Contact</Link>
          <Link to="/advertising" className="hover:text-primary dark:hover:text-pink-300">Advertising</Link>
        </div>

        {/* Dark Mode Toggle */}
        <button 
          onClick={() => toggleDark(!isDark)} 
          aria-label="Toggle Dark Mode"
          className="ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-pink-300"
        >
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.485-9h1M3 12H2m15.364 6.364l.707.707M6.343 6.343l.707.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
          )}
        </button>

        {/* Hamburger Menu Button - Mobile */}
        <div className="md:hidden ml-4">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label="Toggle Menu"
            className="focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-pink-300"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary dark:text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <Link onClick={() => setMenuOpen(false)} to="/" className="block px-3 py-2 rounded hover:bg-primary hover:text-white dark:hover:bg-pink-400">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/fashion" className="block px-3 py-2 rounded hover:bg-primary hover:text-white dark:hover:bg-pink-400">Fashion</Link>
          <Link onClick={() => setMenuOpen(false)} to="/food" className="block px-3 py-2 rounded hover:bg-primary hover:text-white dark:hover:bg-pink-400">Food</Link>
          <Link onClick={() => setMenuOpen(false)} to="/entertainment" className="block px-3 py-2 rounded hover:bg-primary hover:text-white dark:hover:bg-pink-400">Entertainment</Link>
          <Link onClick={() => setMenuOpen(false)} to="/sports" className="block px-3 py-2 rounded hover:bg-primary hover:text-white dark:hover:bg-pink-400">Sports</Link>
          <Link onClick={() => setMenuOpen(false)} to="/tech" className="block px-3 py-2 rounded hover:bg-primary hover:text-white dark:hover:bg-pink-400">Tech</Link>
          <Link onClick={() => setMenuOpen(false)} to="/fiction" className="block px-3 py-2 rounded hover:bg-primary hover:text-white dark:hover:bg-pink-400">Fiction</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about" className="block px-3 py-2 rounded hover:bg-primary hover:text-white dark:hover:bg-pink-400">About Us</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact" className="block px-3 py-2 rounded hover:bg-primary hover:text-white dark:hover:bg-pink-400">Contact</Link>
          <Link onClick={() => setMenuOpen(false)} to="/advertising" className="block px-3 py-2 rounded hover:bg-primary hover:text-white dark:hover:bg-pink-400">Advertising</Link>
        </div>
      )}
    </nav>
  )
}

export default function App() {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar isDark={isDark} toggleDark={setIsDark} />
        <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            {/* Other routes to be added */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* Footer will be added later */}
      </div>
    </Router>
  )
        }
