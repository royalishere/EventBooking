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
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <div className="carousel">
            <Slider{...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <img src={slide.image} alt={slide.name}/>
                        <div className="carousel-detail-container">
                            <p className="slide-price">Từ {slide.price}</p>
                            <a href={`/event-detail?eventId=${slide.id}`}>Xem Chi Tiết</a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
