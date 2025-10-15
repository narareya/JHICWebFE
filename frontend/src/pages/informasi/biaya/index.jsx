import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const InformasiBiayaPage = () => {
  const [activeTab, setActiveTab] = useState('biaya');
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch(tab) {
      case 'kos':
        navigate('/informasi/kos');
        break;
      case 'kaldik':
        navigate('/informasi/kaldik');
        break;
      case 'biaya':
        navigate('/informasi/biaya');
        break;
    }
  };

  const openModal = (imageSrc, imageAlt) => {
    setModalImage({ src: imageSrc, alt: imageAlt });
  };

  const closeModal = () => {
    setModalImage(null);
  };



  return (
    <div className="informasi-biaya-page">
      <div className="info-tabs">
        <button 
          className={`info-tab ${activeTab === 'kos' ? 'active' : ''}`}
          onClick={() => handleTabClick('kos')}
        >
          KOS
        </button>
        <button 
          className={`info-tab ${activeTab === 'kaldik' ? 'active' : ''}`}
          onClick={() => handleTabClick('kaldik')}
        >
          Kaldik
        </button>
        <button 
          className={`info-tab ${activeTab === 'biaya' ? 'active' : ''}`}
          onClick={() => handleTabClick('biaya')}
        >
          Biaya
        </button>
      </div>

      <div className="info-content">
        <div className="info-header">
          <h2>SMK Raden Umar Said menggunakan</h2>
          <h2 className="highlight">Sistem Pembayaran Uang Sekolah Tunggal</h2>
          <p>Sistem Pembayaran Uang Sekolah Tunggal mencakup seluruh biaya operasional per siswa selama satu semester untuk masing-masing program keahlian. Dengan sistem ini, <span className="colored-text">biaya uang</span> <span className="colored-text">kuliah</span> per semester meliputi:</p>
          <ul>
            <li>✓ Iuran Komitmen Kelas</li>
            <li>✓ Iuran Kelas Industri</li>
            <li>✓ Iuran Karya Wisata</li>
            <li>✓ Iuran lainnya untuk kegiatan siswa</li>
          </ul>
        </div>
        <div className="info-images">
          <div className="info-image-large">
            <img 
              src="/images/rincian.jpeg" 
              alt="Rincian Biaya Sekolah"
              onClick={() => openModal("/images/rincian.jpeg", "Rincian Biaya Sekolah")}
              style={{ cursor: 'pointer' }}
            />
            <p>Rincian keperluan murid</p>
          </div>
          <div className="info-images-small">
            <div className="info-image-small">
              <img 
                src="/images/dalamkota.jpeg" 
                alt="Rincian dalam kota"
                onClick={() => openModal("/images/dalamkota.jpeg", "Rincian dalam kota")}
                style={{ cursor: 'pointer' }}
              />
              <p>Rincian dalam kota</p>
            </div>
            <div className="info-image-small">
              <img 
                src="/images/luarkota.jpeg" 
                alt="Rincian luar kota"
                onClick={() => openModal("/images/luarkota.jpeg", "Rincian luar kota")}
                style={{ cursor: 'pointer' }}
              />
              <p>Rincian luar kota</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for fullscreen image */}
      {modalImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img 
              src={modalImage.src} 
              alt={modalImage.alt}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InformasiBiayaPage;