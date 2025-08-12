import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel.jsx'

const categoryData = {
  fashion: {
    heroImage: 'https://via.placeholder.com/1200x300?text=Fashion+Category',
    featured: [
      {
        image: 'https://via.placeholder.com/800x400?text=Fashion+Featured+1',
        title: 'Spring Collection 2025',
        teaser: 'Discover the latest trends in fashion this spring...',
      },
      {
        image: 'https://via.placeholder.com/800x400?text=Fashion+Featured+2',
        title: 'Sustainable Fashion Brands',
        teaser: 'Learn about eco-friendly fashion choices.',
      },
    ],
    latest: [
      {
        image: 'https://via.placeholder.com/400x250?text=Fashion+Latest+1',
        title: 'Vintage Styles Revival',
        teaser: 'How retro fashion is making a comeback.',
      },
      {
        image: 'https://via.placeholder.com/400x250?text=Fashion+Latest+2',
        title: 'Accessorizing Like a Pro',
        teaser: 'Tips to elevate your look with accessories.',
      },
      // Add more latest posts as needed
    ],
    trendingTags: ['Runway', 'Designers', 'Sustainability', 'Streetwear'],
  },

  food: {
    heroImage: 'https://via.placeholder.com/1200x300?text=Food+Category',
    featured: [
      {
        image: 'https://via.placeholder.com/800x400?text=Food+Featured+1',
        title: 'Easy Summer Recipes',
        teaser: 'Quick and delicious meals for hot days.',
      },
      {
        image: 'https://via.placeholder.com/800x400?text=Food+Featured+2',
        title: 'Vegan Baking Tips',
        teaser: 'How to make your desserts vegan-friendly.',
      },
    ],
    latest: [
      {
        image: 'https://via.placeholder.com/400x250?text=Food+Latest+1',
        title: 'Homemade Pasta',
        teaser: 'Step-by-step guide to fresh pasta.',
      },
      {
        image: 'https://via.placeholder.com/400x250?text=Food+Latest+2',
        title: 'Exotic Spices',
        teaser: 'Add new flavors to your cooking.',
      },
    ],
    trendingTags: ['Recipes', 'Vegan', 'Quick Meals', 'Desserts'],
  },

  entertainment: {
    heroImage: 'https://via.placeholder.com/1200x300?text=Entertainment+Category',
    featured: [
      {
        image: 'https://via.placeholder.com/800x400?text=Entertainment+Featured+1',
        title: 'Top Movies This Month',
        teaser: 'Must-watch films in theaters now.',
      },
      {
        image: 'https://via.placeholder.com/800x400?text=Entertainment+Featured+2',
        title: 'Celebrity Interviews',
        teaser: 'Exclusive talks with your favorite stars.',
      },
    ],
    latest: [
      {
        image: 'https://via.placeholder.com/400x250?text=Entertainment+Latest+1',
        title: 'Award Show Highlights',
        teaser: 'Best moments from the latest awards.',
      },
      {
        image: 'https://via.placeholder.com/400x250?text=Entertainment+Latest+2',
        title: 'Upcoming Concerts',
        teaser: 'Don’t miss these live performances.',
      },
    ],
    trendingTags: ['Movies', 'Music', 'Celebrities', 'TV Shows'],
  },

  sports: {
    heroImage: 'https://via.placeholder.com/1200x300?text=Sports+Category',
    featured: [
      {
        image: 'https://via.placeholder.com/800x400?text=Sports+Featured+1',
        title: 'Championship Recap',
        teaser: 'Highlights from the latest games.',
      },
      {
        image: 'https://via.placeholder.com/800x400?text=Sports+Featured+2',
        title: 'Athlete Profiles',
        teaser: 'Get to know the top players.',
      },
    ],
    latest: [
      {
        image: 'https://via.placeholder.com/400x250?text=Sports+Latest+1',
        title: 'Training Tips',
        teaser: 'Improve your skills with these exercises.',
      },
      {
        image: 'https://via.placeholder.com/400x250?text=Sports+Latest+2',
        title: 'Upcoming Matches',
        teaser: 'Mark your calendar for big events.',
      },
    ],
    trendingTags: ['Football', 'Basketball', 'Olympics', 'Fitness'],
  },

  tech: {
    heroImage: 'https://via.placeholder.com/1200x300?text=Tech+Category',
    featured: [
      {
        image: 'https://via.placeholder.com/800x400?text=Tech+Featured+1',
        title: 'Latest Gadgets 2025',
        teaser: 'New tech releases you should know about.',
      },
      {
        image: 'https://via.placeholder.com/800x400?text=Tech+Featured+2',
        title: 'AI Innovations',
        teaser: 'How AI is changing the world.',
      },
    ],
    latest: [
      {
        image: 'https://via.placeholder.com/400x250?text=Tech+Latest+1',
        title: 'Smart Home Tips',
        teaser: 'Make your house smarter easily.',
      },
      {
        image: 'https://via.placeholder.com/400x250?text=Tech+Latest+2',
        title: 'Programming Trends',
        teaser: 'What’s hot in coding this year.',
      },
    ],
    trendingTags: ['Gadgets', 'AI', 'Software', 'Reviews'],
  },

  fiction: {
    heroImage: 'https://via.placeholder.com/1200x300?text=Fiction+Category',
    featured: [
      {
        image: 'https://via.placeholder.com/800x400?text=Fiction+Featured+1',
        title: 'Mystery Short Story',
        teaser: 'A thrilling tale to keep you guessing.',
      },
      {
        image: 'https://via.placeholder.com/800x400?text=Fiction+Featured+2',
        title: 'Romantic Novella',
        teaser: 'A love story that touches the heart.',
      },
    ],
    latest: [
      {
        image: 'https://via.placeholder.com/400x250?text=Fiction+Latest+1',
        title: 'Fantasy Excerpt',
        teaser: 'Dive into a magical world.',
      },
      {
        image: 'https://via.placeholder.com/400x250?text=Fiction+Latest+2',
        title: 'Sci-Fi Chapter',
        teaser: 'Explore the future of humanity.',
      },
    ],
    trendingTags: ['Mystery', 'Romance', 'Fantasy', 'Sci-Fi'],
  },
}

export default function Category() {
  const { category } = useParams()
  const data = categoryData[category.toLowerCase()]

  if (!data) {
    return <div className="p-8 text-center">Category not found.</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      {/* Hero banner */}
      <div
        className="h-48 md:h-64 rounded-lg bg-cover bg-center mb-8"
        style={{ backgroundImage: `url(${data.heroImage})` }}
        aria-label={`${category} category banner`}
      ></div>

      {/* Featured Articles Carousel */}
      <Carousel items={data.featured} title="Featured Articles" />

      {/* Main content grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Latest articles grid */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.latest.map((item, idx) => (
            <article
              key={idx}
              className="border rounded-md overflow-hidden bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.teaser}</p>
              </div>
            </article>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="hidden md:block bg-gray-100 dark:bg-gray-900 p-4 rounded-md">
          <h4 className="font-semibold mb-4">Trending Tags</h4>
          <div className="flex flex-wrap gap-2">
            {data.trendingTags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-primary text-white px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-pink-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
        }
