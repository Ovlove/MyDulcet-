import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import AboutUs from './pages/About/AboutUs.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Category from './pages/Category/Category.jsx'
import Article from './pages/Article/Article.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)
  const toggleMenu = () => setMenuOpen((open) => !open)

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />

      <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:category" element={<Category />} />
          {/* New Article Route */}
          <Route path="/article/:slug" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
      }
