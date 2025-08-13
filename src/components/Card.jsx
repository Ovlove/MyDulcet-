import React, { useCallback } from 'react';

export default function Card({ image, title, teaser, onClick, className = '', children }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (onClick && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick();
      }
    },
    [onClick]
  );

  const isInteractive = !!onClick;

  return (
    <article
      className={`border rounded-md overflow-hidden bg-white dark:bg-gray-800 shadow hover:shadow-lg transition cursor-pointer ${className}`}
      onClick={isInteractive ? onClick : undefined}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={handleKeyDown}
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
        {children}
      </div>
    </article>
  );
      }
