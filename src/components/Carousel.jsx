import React, { useState } from 'react'

export default function Carousel({ items, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
        {/* Slides */}
        {items.map((item, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 'absolute inset-0 -translate-x-full'
            }`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
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
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-pink-400 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-pink-400 transition"
        >
          ›
        </button>
      </div>
    </section>
  )
        }
