// src/components/Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({slides}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <Slider{...settings}>
            {slides.map((slide, index) => (
                <div key={index}>
                    <img src={slide.image} alt={slide.title}/>
                    <p className="legend">{slide.title}</p>
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
