import React, { useState, useEffect } from 'react';
import './Hero.css';

import shoes1 from '../Images/shoes1.png';
import shoes2 from '../Images/shoes2.jpg';
import shoes3 from '../Images/shoes3.webp';

const Hero = () => {
  const images = [shoes1, shoes2, shoes3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero__slider">

        <button
          className="hero__prev"
          onClick={handlePrev}
        >
          ‹
        </button>

        <img
          className="hero__image"
          src={images[currentIndex]}
          alt="Shoes"
        />

        <button
          className="hero__next"
          onClick={handleNext}
        >
          ›
        </button>

      </div>

      <div className="hero__dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`hero__dot ${
              currentIndex === index ? 'active' : ''
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;