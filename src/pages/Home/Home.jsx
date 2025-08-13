import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { articlesData } from "../../data/articles.js";
import Card from "../../components/Card.jsx";

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
    appendDots: (dots) => (
      <div>
        <ul className="text-primary dark:text-pink-400">{dots}</ul>
      </div>
    ),
  };

  const categories = Object.keys(articlesData);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to MyDulcet</h1>

      {categories.map((cat) => (
        <section key={cat} className="mb-16">
          <h2 className="text-xl font-semibold mb-4">
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </h2>

          {/* Featured carousel */}
          <Slider {...settings}>
            {articlesData[cat].featured.map((item) => (
              <div key={item.slug} className="px-2">
                <Link to={`/article/${item.slug}`}>
                  <Card image={item.image} title={item.title} teaser={item.teaser} />
                </Link>
              </div>
            ))}
          </Slider>

          {/* Latest articles grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {articlesData[cat].latest.map((item) => (
              <Link key={item.slug} to={`/article/${item.slug}`}>
                <Card image={item.image} title={item.title} teaser={item.teaser} />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
