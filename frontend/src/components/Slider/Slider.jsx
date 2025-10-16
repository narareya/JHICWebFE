import React, {useRef, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination, Autoplay} from 'swiper/modules';
import { useNavigate, useParams } from 'react-router-dom';
import jurusan from '../../data/jurusan';
import './slider.css';

const Slider = () => {
  const navigate = useNavigate();
  const {namaJurusan} = useParams();
  const swiperRef = useRef(null);
  const jurusanList = Object.keys(jurusan);
  const activeIndex = jurusanList.indexOf(namaJurusan);

  useEffect(() => {
    if (swiperRef.current && activeIndex !== -1) {
      swiperRef.current.slideToLoop(activeIndex, 500);
    }
  }, [activeIndex]);

  const handleClick = (nama, index) => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current
    const currentIndex = swiper.realIndex
    const totalSlides = jurusanList.length

    const diff = index - currentIndex

    if (diff === 0) {
      navigate(`/program-keahlian/${nama}`);
      return
    }

    const distance = ((diff % totalSlides) + totalSlides) % totalSlides
    const moveDirection = distance <= totalSlides / 2 ? 'next' : 'prev'

    if (moveDirection === 'next') swiper.slideNext(300)
      else swiper.slidePrev(300)

    swiper.once('transitionEnd', () => {
      navigate(`/program-keahlian/${nama}`);
    })
  };

  return (
    <div className="jurusan-slider-container">
      <Swiper
      centeredSlides={true}
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={4}
        pagination={{ clickable: true }}
        autoplay={
          namaJurusan ? false : {delay: 4000, disableOnInteraction: false}
        }
        loop={true}
        allowTouchMove={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="jurusan-slider"
      >
        {jurusanList.map((nama, index) => (
          <SwiperSlide key={index}>
            <div
              className={`jurusan-slide ${nama === namaJurusan ? 'active' : ''}`}
              onClick={() => handleClick(nama, index)}
            >
              <img src={jurusan[nama].logo} alt={nama} className="jurusan-logo" />
              <p className="jurusan-name">{nama}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
