import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { allArticles } from "../Article/articleData.js"; // optional: import a shared data file

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

  // Group articles by category
  const categories = ["Fashion", "Food", "Entertainment", "Sports", "Tech", "Fiction"];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to MyDulcet</h1>

      {categories.map((cat) => {
        const catArticles = allArticles.filter((a) => a.category === cat);

        return (
          <section key={cat} className="mb-12">
            <h2 className="text-xl font-semibold mb-4">{cat}</h2>
            <Slider {...settings}>
              {catArticles.map((item) => (
                <div key={item.slug} className="px-2">
                  <Link to={`/article/${item.slug}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-200">
                      <img
                        src={item.image || "/images/placeholder.jpg"}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-medium">{item.title}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </section>
        );
      })}
    </div>
  );
};

export default Home;
