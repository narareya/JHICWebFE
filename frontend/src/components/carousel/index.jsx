import React, { useState, useEffect } from 'react';
import './style.css';

const Carousel = ({ 
  images, 
  autoSlide = true, 
  interval = 4000, 
  showIndicators = true,
  height = "400px",
  className = ""
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoSlide || images.length <= 1) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [autoSlide, interval, images.length]);

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  if (!images || images.length === 0) {
    return <div className="carousel-empty">No images to display</div>;
  }

  return (
    <section className={`carousel-section ${className}`}>
      <div className="carousel-container">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
          >
            <img 
              src={image.src || image} 
              alt={image.alt || `Slide ${index + 1}`}
              style={{ height }}
            />
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span 
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>
      )}
    </section>
  );
};

export default Carousel;