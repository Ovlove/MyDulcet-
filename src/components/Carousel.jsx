import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card.jsx'

export default function Carousel({ items, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isPaused) return

    timeoutRef.current = setTimeout(() => {
      nextSlide()
    }, 4000)

    return () => clearTimeout(timeoutRef.current)
  }, [currentIndex, isPaused])

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  const nextSlide = () => setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))

  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  const handleTouchStart = (e) => { touchStartX.current = e.changedTouches[0].screenX }
  const handleTouchEnd = (e) => { touchEndX.current = e.changedTouches[0].screenX; handleSwipeGesture() }
  const handleSwipeGesture = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const swipeThreshold = 50
    if (distance > swipeThreshold) nextSlide()
    else if (distance < -swipeThreshold) prevSlide()
    touchStartX.current = null
    touchEndX.current = null
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevSlide()
    else if (e.key === 'ArrowRight') nextSlide()
  }

  return (
    <section
      className="my-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label={title}
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div
        className="relative w-full max-w-4xl mx-auto overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 'absolute inset-0 -translate-x-full'
            }`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
            aria-hidden={index !== currentIndex}
          >
            <Card
              image={item.image}
              title={item.title}
              teaser={item.teaser}
              onClick={() => navigate(`/articles/${encodeURIComponent(item.title)}`)}
            />
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
