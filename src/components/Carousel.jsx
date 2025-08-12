import React, { useState, useEffect, useRef } from 'react'

export default function Carousel({ items, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef(null)

  // Auto-play timer (4 seconds)
  useEffect(() => {
    if (isPaused) return

    timeoutRef.current = setTimeout(() => {
      nextSlide()
    }, 4000)

    return () => clearTimeout(timeoutRef.current)
  }, [currentIndex, isPaused])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  // Swipe support
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX
    handleSwipeGesture()
  }

  const handleSwipeGesture = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const swipeThreshold = 50 // Minimum distance to count as swipe

    if (distance > swipeThreshold) {
      // Swiped left
      nextSlide()
    } else if (distance < -swipeThreshold) {
      // Swiped right
      prevSlide()
    }
    // Reset refs
    touchStartX.current = null
    touchEndX.current = null
  }

  // Keyboard navigation for accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide()
    } else if (e.key === 'ArrowRight') {
      nextSlide()
    }
  }

  return (
    <section
      className="my-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0} // Make section focusable for keyboard nav
      aria-roledescription="carousel"
      aria-label={title}
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div
        className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        {items.map((item, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 'absolute inset-0 -translate-x-full'
            }`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover rounded-md"
              loading="lazy"
            />
            <div className="p-4 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{item.teaser}</p>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-pink-400 transition focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-pink-400 transition focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          ›
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-primary dark:bg-pink-400' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === currentIndex ? 'true' : 'false'}
              tabIndex={idx === currentIndex ? 0 : -1}
            />
          ))}
        </div>
      </div>
    </section>
  )
  }
