import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import jurusan from '../data/jurusan';
import './sliderImage.css';
import { useNavigate } from 'react-router-dom';

const SliderImage = ({name, logo}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/program-keahlian/${name}`);
  };


  return (
    <div className="slider-image-container">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="slider-image"
      >
        {Object.keys(jurusan).map((nama, index) => (
          <SwiperSlide key={index}>
            <div
              className="slider-bg"onClick={() => navigate(`/program-keahlian/${nama}`)}
              style={{
                backgroundImage: `url(${jurusan[nama].image})`,
              }}
            >
              <div className="overlay"></div>
              <h1 className="slider-title">{nama}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderImage;
