import React from 'react'
import { useParams, Link } from 'react-router-dom'

// Mock data for demo purposes
const mockData = {
  article: {
    '1': {
      title: 'Breaking Tech News 2025',
      author: 'Jane Doe',
      date: '2025-08-01',
      readingTime: 6,
      images: [
        'https://via.placeholder.com/800x400?text=Tech+News+Image+1',
        'https://via.placeholder.com/800x400?text=Tech+News+Image+2',
      ],
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Praesent euismod, justo vel consequat facilisis, metus nibh...`,
      related: [
        { id: '2', title: 'AI Innovations' },
        { id: '3', title: 'Programming Trends' },
      ],
    },
  },
  fiction: {
    '10': {
      title: 'A Magical Journey',
      author: 'John Writer',
      date: '2025-07-20',
      readingTime: 12,
      images: [
        'https://via.placeholder.com/800x400?text=Fiction+Image+1',
      ],
      content: `Once upon a time, in a land far away, there was a...`,
      related: [
        { id: '11', title: 'Romantic Novella' },
        { id: '12', title: 'Mystery Short Story' },
      ],
    },
  },
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function ContentPage() {
  const { type, id } = useParams()
  const contentType = type?.toLowerCase()

  if (!['article', 'fiction'].includes(contentType)) {
    return <div className="p-8 text-center">Content type not found.</div>
  }

  const data = mockData[contentType]?.[id]

  if (!data) {
    return <div className="p-8 text-center">Content not found.</div>
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          By <span className="font-semibold">{data.author}</span> | {formatDate(data.date)} | {data.readingTime} min read
        </p>
      </header>

      {/* Image slideshow placeholder */}
      <div className="mb-8">
        {data.images.length > 1 ? (
          <div className="overflow-hidden rounded-md shadow">
            {/* Simple static slideshow placeholder: just show first image */}
            <img
              src={data.images[0]}
              alt={data.title}
              className="w-full object-cover h-64 md:h-96"
              loading="lazy"
            />
          </div>
        ) : (
          <img
            src={data.images[0]}
            alt={data.title}
            className="w-full rounded-md shadow h-64 md:h-96 object-cover"
            loading="lazy"
          />
        )}
      </div>

      {/* Content */}
      <section className="prose dark:prose-invert max-w-none mb-12">
        <p>{data.content}</p>
      </section>

      {/* Social sharing buttons (static placeholders) */}
      <section className="mb-12 flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Share on Facebook
        </button>
        <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition">
          Share on Twitter
        </button>
        <button className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition">
          Share on Instagram
        </button>
      </section>

      {/* Related content */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Related {contentType === 'article' ? 'Articles' : 'Fiction'}</h2>
        <ul className="list-disc list-inside space-y-2">
          {data.related.map((item) => (
            <li key={item.id}>
              <Link
                to={`/content/${contentType}/${item.id}`}
                className="text-primary hover:underline"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Comments placeholder */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <p className="italic text-gray-500 dark:text-gray-400">
          Comments feature coming soon!
        </p>
      </section>
    </article>
  )
      }
