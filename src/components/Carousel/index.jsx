import React, { useState, useEffect } from 'react';
import { CarouselContainer, SliderItem, SliderBg, SliderReveal } from './styled';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <CarouselContainer>
      <div className="carousel">
        {slides.map((slide, index) => (
          <SliderItem key={index} active={index === currentSlide}>
            <SliderBg active={index === currentSlide}>
              <img src={slide.image} alt={`Slide ${index + 1}`} className="img-cover" />
            </SliderBg>
            <SliderReveal>
              <h1 className="slider-reveal">{slide.title}</h1>
              <p className="slider-reveal">{slide.description}</p>
            </SliderReveal>
          </SliderItem>
        ))}
      </div>
    </CarouselContainer>
  );
};

export default Carousel;

