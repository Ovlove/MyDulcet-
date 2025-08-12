import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

// Mock data for Articles
const articles = [
  {
    id: "1",
    title: "Latest Fashion Trends 2025",
    category: "fashion",
    teaser: "Discover the hottest styles hitting the runways this year.",
    image: "https://source.unsplash.com/800x400/?fashion,model",
  },
  {
    id: "2",
    title: "Delicious Summer Recipes",
    category: "food",
    teaser: "Tasty and easy dishes to keep you cool this summer.",
    image: "https://source.unsplash.com/800x400/?food,cooking",
  },
  {
    id: "3",
    title: "Entertainment Spotlight: Top Movies",
    category: "entertainment",
    teaser: "Must-watch movies coming out this season.",
    image: "https://source.unsplash.com/800x400/?movies,cinema",
  },
];

// Mock data for Fiction
const fiction = [
  {
    id: "f1",
    title: "A Walk Through the Silent Forest",
    teaser: "An enchanting tale of discovery and courage.",
    image: "https://source.unsplash.com/800x400/?forest,magic",
  },
  {
    id: "f2",
    title: "Midnight Whispers",
    teaser: "Secrets unravel under the moonlight.",
    image: "https://source.unsplash.com/800x400/?night,moon",
  },
  {
    id: "f3",
    title: "The Last Starship",
    teaser: "Journey beyond the known galaxy.",
    image: "https://source.unsplash.com/800x400/?spaceship,stars",
  },
];

// Trending articles/fictions (combine)
const trending = [
  ...articles.slice(0, 2),
  ...fiction.slice(0, 1)
];

// Latest posts (mix articles & fiction)
const latestPosts = [
  ...articles.slice(1),
  ...fiction.slice(1),
];

function Home() {
  return (
    <div>
      {/* Articles Carousel */}
      <section aria-label="Featured articles carousel">
        <h2 className="text-2xl font-bold mb-4 text-primary">Featured Articles</h2>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
          aria-live="polite"
        >
          {articles.map((article) => (
            <div key={article.id} className="relative rounded-lg overflow-hidden">
              <img
                src={article.image}
                alt={`${article.title} banner`}
                className="object-cover w-full h-64 md:h-96"
              />
              <div className="absolute bottom-6 left-6 bg-primary bg-opacity-80 p-4 rounded max-w-md text-white">
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="mt-1">{article.teaser}</p>
                <Link
                  to={`/article/${article.id}`}
                  className="inline-flex items-center mt-2 text-secondary hover:text-yellow-300 font-semibold"
                  aria-label={`Read more about ${article.title}`}
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Fiction Carousel */}
      <section aria-label="Featured fiction carousel" className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">Featured Fiction</h2>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={6000}
          aria-live="polite"
        >
          {fiction.map((story) => (
            <div key={story.id} className="relative rounded-lg overflow-hidden">
              <img
                src={story.image}
                alt={`${story.title} banner`}
                className="object-cover w-full h-64 md:h-96"
              />
              <div className="absolute bottom-6 left-6 bg-primary bg-opacity-80 p-4 rounded max-w-md text-white">
                <h3 className="text-xl font-semibold">{story.title}</h3>
                <p className="mt-1">{story.teaser}</p>
                <Link
                  to={`/article/${story.id}`}
                  className="inline-flex items-center mt-2 text-secondary hover:text-yellow-300 font-semibold"
                  aria-label={`Read more about ${story.title}`}
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Trending Section */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4 text-primary">Trending</h3>
        <ul className="space-y-2">
          {trending.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={`/article/${id}`}
                className="text-primary hover:underline font-medium"
                aria-label={`Read trending: ${title}`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Latest Posts Grid */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-6 text-primary">Latest Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map(({ id, title, teaser, image }) => (
            <article
              key={id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <Link to={`/article/${id}`} aria-label={`Read article: ${title}`}>
                <img
                  src={image}
                  alt={`${title} thumbnail`}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg">{title}</h4>
                  <p className="text-textPrimary mt-1 text-sm">{teaser}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section
        aria-label="Newsletter subscription"
        className="mt-16 bg-secondary p-8 rounded-lg text-center text-primary"
      >
        <h3 className="text-2xl font-semibold mb-4">
          Stay Updated with Our Newsletter
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for subscribing!");
          }}
          className="max-w-md mx-auto flex"
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            aria-label="Email address for newsletter subscription"
            className="p-3 rounded-l-md flex-grow outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-secondary px-6 rounded-r-md font-semibold hover:bg-purple-800"
          >
            Subscribe
