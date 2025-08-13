import React from 'react';

export default function Card({ image, title, teaser }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{teaser}</p>
      </div>
    </div>
  );
}
