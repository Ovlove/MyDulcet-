import React from 'react'

export default function Card({ image, title, teaser, onClick }) {
  return (
    <article
      className="border rounded-md overflow-hidden bg-white dark:bg-gray-800 shadow hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={e => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          onClick()
        }
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{teaser}</p>
      </div>
    </article>
  )
      }
