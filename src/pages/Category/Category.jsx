import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { articlesData } from '../../data/articles.js';
import Card from '../../components/Card.jsx';

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} before:content-['▶'] before:text-primary dark:before:text-pink-400`}
      onClick={onClick}
      style={{ display: "block", right: 10, zIndex: 1, cursor: "pointer" }}
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} before:content-['◀'] before:text-primary dark:before:text-pink-400`}
      onClick={onClick}
      style={{ display: "block", left: 10, zIndex: 1, cursor: "pointer" }}
    />
  );
}

export default function Category() {
  const { category } = useParams();
  const data = articlesData[category?.toLowerCase()];

  if (!data) return <div className="p-8 text-center">Category not found.</div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="text-primary dark:text-pink-400">{dots}</ul>
      </div>
    ),
  };

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
        <h2 className="text-xl font-semibold mb-4">Featured Articles</h2>
        <Slider {...settings}>
          {data.featured.map((item) => (
            <div key={item.slug} className="px-2">
              <Link to={`/article/${item.slug}`}>
                <Card image={item.image} title={item.title} teaser={item.teaser} />
              </Link>
            </div>
          ))}
        </Slider>
      </section>

      {/* Latest articles grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.latest.map((item) => (
            <Link key={item.slug} to={`/article/${item.slug}`}>
              <Card image={item.image} title={item.title} teaser={item.teaser} />
            </Link>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="hidden md:block bg-gray-100 dark:bg-gray-900 p-4 rounded-md">
          <h4 className="font-semibold mb-4">Trending Tags</h4>
          <div className="flex flex-wrap gap-2">
            {data.trendingTags.map((tag, idx) => (
              <button
                key={idx}
                onClick={() => alert(`Tag clicked: ${tag}`)}
                className="bg-gray-300 dark:bg-gray-700 text-sm px-2 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                {tag}
              </button>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
      }
