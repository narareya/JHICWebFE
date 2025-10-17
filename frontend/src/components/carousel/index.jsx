import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom'; // <--- Tambah ini

const Carousel = ({ 
  images, 
  autoSlide = true, 
  interval = 200, 
  showIndicators = true,
  height = "200px",
  className = "",
  onImageClick = null // <--- Tambah prop untuk handle click
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // <--- untuk pindah halaman

  // Debug: log images
  console.log('Carousel images:', images);

  // Ensure we have images
  if (!images || images.length === 0) {
    console.log('No images found for carousel');
    return <div className="carousel-empty">No images to display</div>;
  }

  // Auto slide effect
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

  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`carousel-wrapper ${className}`}>
      <div className="carousel-container">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            onClick={handleImageClick}
            style={{ cursor: onImageClick ? 'pointer' : 'default' }}
          >
            <img 
              src={image.src || image} 
              alt={image.alt || `Slide ${index + 1}`}
              onClick= {() => navigate("/blog")}
              style={{ height }}
            />
            {onImageClick && (
              <div className="carousel-overlay">
                <div className="carousel-overlay-content">
                  <i className="fas fa-newspaper"></i>
                  <span>Klik untuk lihat blog</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {showIndicators && images.length > 1 && (
        <div className="carousel-indicators">
          {images .map((_, index) => (
            <span 
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
