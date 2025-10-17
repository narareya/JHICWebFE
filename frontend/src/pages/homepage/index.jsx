import React from 'react';
import Carousel from '../../components/carousel';
import PartnerGrid from '../../components/partner-grid';
import { carouselImages, partners } from '../../data/homepage';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  
  const carouselImages = [
    { src: '../images/galeri/aktifitas/kartini.jpeg', alt: 'Kegiatan Dalam Kota', link: '/blog' },
    { src: '../images/galeri/aktifitas/isramiraj.jpeg', alt: 'Kegiatan Luar Kota', link: '/blog' },
    { src: '../images/galeri/aktifitas/teater.jpeg', alt: 'Kalender Pendidikan', link: '/blog' }
  ];

  const partners = [
    { id: 1, src: '/images/partners/partner1.svg', alt: 'Partner 1', name: 'Tech Partner' },
    { id: 2, src: '/images/partners/partner2.svg', alt: 'Partner 2', name: 'DUDI Partner' },
    { id: 3, src: '/images/partners/partner3.svg', alt: 'Partner 3', name: 'Industry Partner' },
    { id: 4, src: '/images/partners/partner4.svg', alt: 'Partner 4', name: 'Corporate Partner' },
    { id: 5, src: '/images/partners/partner5.svg', alt: 'Partner 5', name: 'Technology Hub' },
    { id: 6, src: '/images/partners/partner6.svg', alt: 'Partner 6', name: 'Skill Center' },
    { id: 7, src: '/images/partners/partner7.svg', alt: 'Partner 7', name: 'Learning Hub' },
    { id: 8, src: '/images/partners/partner8.svg', alt: 'Partner 8', name: 'Growth Partner' }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>AYO BERMAIN DAN BELAJAR<br />SESUAI HOBI!</h1>
            <p>Bergabunglah dengan kami untuk mengembangkan bakat dan minat Anda</p>
            <button className="cta-button" onClick={() => navigate("/ppdb")}
            >Daftar Sekarag</button>
          </div>

        </div>
      </section>

      {/* Anniversary Section */}
      <section className="anniversary-section">
        <div className="anniversary-container">
          <div className="anniversary-item">
            <div className="anniversary-number">20</div>
            <div className="anniversary-label">Tahun Berdiri</div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">1,280</div>
            <div className="stat-label">Peserta didik 2024</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">92</div>
            <div className="stat-label">Tenaga Pendidik</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100</div>
            <div className="stat-label">Kerjasama DUDI</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">16,000</div>
            <div className="stat-label">Alumni</div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <Carousel
        images={carouselImages}
        autoSlide={true}
        interval={4000}
        showIndicators={true}
        height="400px"
      />

      {/* Partnership Section */}
      <PartnerGrid partners={partners} title="Kerjasama" />


    </div>
  );
};

export default Homepage;