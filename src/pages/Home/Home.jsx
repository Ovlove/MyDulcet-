// src/pages/Home.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const articles = [
    { id: 1, title: "Article One", image: "/images/article1.jpg" },
    { id: 2, title: "Article Two", image: "/images/article2.jpg" },
    { id: 3, title: "Article Three", image: "/images/article3.jpg" },
    { id: 4, title: "Article Four", image: "/images/article4.jpg" },
  ];

  const fiction = [
    { id: 1, title: "Fiction One", image: "/images/fiction1.jpg" },
    { id: 2, title: "Fiction Two", image: "/images/fiction2.jpg" },
    { id: 3, title: "Fiction Three", image: "/images/fiction3.jpg" },
    { id: 4, title: "Fiction Four", image: "/images/fiction4.jpg" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to MyDulcet</h1>

      {/* Articles Carousel */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Articles</h2>
        <Slider {...settings}>
          {articles.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Fiction Carousel */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Fiction</h2>
        <Slider {...settings}>
          {fiction.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Home;
