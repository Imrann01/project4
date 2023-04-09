import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AutoSlider.css";
import { Link } from 'react-router-dom';
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6  from "./Slide6";

const slides = [
  { id: 1, text: "Slide 1", component: Slide1 },
  { id: 2, text: "Slide 2", component: Slide2 },
  { id: 3, text: "Slide 3", component: Slide3 },
  { id: 4, text: "Slide 4", component: Slide4 },
  { id: 5, text: "Slide 5", component: Slide5 },
  { id: 6, text: "Slide 6", component: Slide6 },
];


const AutoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const renderSlides = () =>
    slides.map((slide) => (
      <div key={slide.id} className="slide-container">
        <h3>{slide.text}</h3>
        <Link to={`/${slide.id}`}>Learn more</Link>
      </div>
    ));

  return (
    <div>
      <Slider {...settings}>{renderSlides()}</Slider>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
      <span className="arrow-icon">&#10094;</span>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
      <span className="arrow-icon">&#10095;</span>
    </div>
  );
};

export default AutoSlider;
