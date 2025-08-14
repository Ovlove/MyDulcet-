import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Carousel from '../../components/Carousel.jsx';
import Card from '../../components/Card.jsx';
import Tag from '../../components/Tag.jsx';
import Button from '../../components/ui/Button.jsx';
import { articlesData } from '../../data/articles.js';

export default function Category() {
  const { category } = useParams();
  const data = articlesData[category?.toLowerCase()];

  if (!data) return <div className="p-8 text-center">Category not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      {/* Hero banner */}
      <div
        className="h-48 md:h-64 rounded-lg bg-cover bg-center mb-8"
        style={{ backgroundImage: `url(${data.heroImage})` }}
        aria-label={`${category} category banner`}
      />

      {/* Featured carousel */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Articles</h2>
        <Carousel
          items={data.featured.map(item => ({
            ...item,
            content: (
              <Link to={`/articles/${item.slug}`}>
                <Card image={item.image} title={item.title} teaser={item.teaser} />
              </Link>
            )
          }))}
        />
      </section>

      {/* Main grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Latest articles */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.latest.map(item => (
            <Link key={item.slug} to={`/articles/${item.slug}`}>
              <Card image={item.image} title={item.title} teaser={item.teaser} />
            </Link>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="hidden md:block bg-gray-100 dark:bg-gray-900 p-4 rounded-md">
          <h4 className="font-semibold mb-4">Trending Tags</h4>
          <div className="flex flex-wrap gap-2">
            {data.trendingTags.map((tag, idx) => (
              <Tag
                key={idx}
                onClick={() => alert(`Tag clicked: ${tag}`)}
                className="cursor-pointer"
              >
                {tag}
              </Tag>
            ))}
          </div>

          <div className="mt-6">
            <Button onClick={() => alert('See all articles')}>See All Articles</Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
