import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './PhotoCarousel.css';

const PhotoCarousel = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="photo-carousel">
      <h3 className="carousel-title">{title}</h3>
      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="photo-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="photo-slide">
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoCarousel;