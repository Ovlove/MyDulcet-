import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { allArticles } from '../../data/articles.js';

function NextArrow({ className, onClick }) {
  return (
    <div
      className={`${className} before:content-['▶'] before:text-primary dark:before:text-pink-400`}
      onClick={onClick}
      style={{ display: "block", right: 10, zIndex: 1, cursor: "pointer" }}
    />
  );
}

function PrevArrow({ className, onClick }) {
  return (
    <div
      className={`${className} before:content-['◀'] before:text-primary dark:before:text-pink-400`}
      onClick={onClick}
      style={{ display: "block", left: 10, zIndex: 1, cursor: "pointer" }}
    />
  );
}

const Home = () => {
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
    appendDots: dots => <ul className="text-primary dark:text-pink-400">{dots}</ul>,
  };

  const articles = allArticles.slice(0, 4);
  const fiction = allArticles.filter(a => a.category === 'Fiction').slice(0, 4);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to MyDulcet</h1>

      {/* Articles Carousel */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Articles</h2>
        <Slider {...settings}>
          {articles.map(a => (
            <div key={a.slug} className="px-2">
              <Link to={`/article/${a.slug}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
                  <img src={`/images/${a.slug}.jpg`} alt={a.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-medium">{a.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </section>

      {/* Fiction Carousel */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Fiction</h2>
        <Slider {...settings}>
          {fiction.map(a => (
            <div key={a.slug} className="px-2">
              <Link to={`/article/${a.slug}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
                  <img src={`/images/${a.slug}.jpg`} alt={a.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-medium">{a.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Home;
