import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Carousel from '../../components/Carousel.jsx';
import Card from '../../components/Card.jsx';
import Tag from '../../components/Tag.jsx';
import Button from '../../components/ui/Button.jsx';

const categoryData = {
  fashion: {
    heroImage: 'https://via.placeholder.com/1200x300?text=Fashion+Category',
    featured: [
      {
        image: 'https://via.placeholder.com/800x400?text=Fashion+Featured+1',
        title: 'Spring Collection 2025',
        teaser: 'Discover the latest trends in fashion this spring',
        slug: 'spring-collection-2025'
      },
      {
        image: 'https://via.placeholder.com/800x400?text=Fashion+Featured+2',
        title: 'Sustainable Fashion Brands',
        teaser: 'Learn about eco-friendly fashion choices',
        slug: 'sustainable-fashion-brands'
      },
    ],
    latest: [
      {
        image: 'https://via.placeholder.com/400x250?text=Fashion+Latest+1',
        title: 'Vintage Styles Revival',
        teaser: 'How retro fashion is making a comeback',
        slug: 'vintage-styles-revival'
      },
      {
        image: 'https://via.placeholder.com/400x250?text=Fashion+Latest+2',
        title: 'Accessorizing Like a Pro',
        teaser: 'Tips to elevate your look with accessories',
        slug: 'accessorizing-like-a-pro'
      },
    ],
    trendingTags: ['Runway', 'Designers', 'Sustainability', 'Streetwear'],
  },
  // Repeat for other categories: food, entertainment, sports, tech, fiction
};

export default function Category() {
  const { category } = useParams();
  const data = categoryData[category?.toLowerCase()];

  if (!data) {
    return <div className="p-8 text-center">Category not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      {/* Hero banner */}
      <div
        className="h-48 md:h-64 rounded-lg bg-cover bg-center mb-8"
        style={{ backgroundImage: `url(${data.heroImage})` }}
        aria-label={`${category} category banner`}
      />

      {/* Featured Articles Carousel */}
      <Carousel items={data.featured} title="Featured Articles" />

      {/* Main content grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Latest articles grid */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.latest.map((item, idx) => (
            <Link key={idx} to={`/articles/${item.slug}`}>
              <Card
                image={item.image}
                title={item.title}
                teaser={item.teaser}
              />
            </Link>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="hidden md:block bg-gray-100 dark:bg-gray-900 p-4 rounded-md">
          <h4 className="font-semibold mb-4">Trending Tags</h4>
          <div className="flex flex-wrap gap-2">
            {data.trendingTags.map((tag, idx) => (
              <Tag key={idx} onClick={() => alert(`Tag clicked: ${tag}`)}>
                {tag}
              </Tag>
            ))}
          </div>

          <div className="mt-6">
            <Button onClick={() => alert('See all articles')}>
              See All Articles
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
        }
