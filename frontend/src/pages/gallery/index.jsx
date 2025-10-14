import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './gallery.css';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('fasilitas');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'fasilitas') {
      navigate('/fasilitas');
    } else if (tab === 'kegiatan') {
      navigate('/kegiatan');
    }
  };

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Galeri SMK Raden Umar Said</h1>
        <p>Dokumentasi fasilitas dan kegiatan sekolah</p>
      </div>

      <div className="gallery-tabs">
        <button 
          className={`gallery-tab ${activeTab === 'fasilitas' ? 'active' : ''}`}
          onClick={() => handleTabClick('fasilitas')}
        >
          Fasilitas
        </button>
        <button 
          className={`gallery-tab ${activeTab === 'kegiatan' ? 'active' : ''}`}
          onClick={() => handleTabClick('kegiatan')}
        >
          Kegiatan
        </button>
      </div>

      <div className="gallery-content">
        <div className="gallery-placeholder">
          <p>Klik salah satu tab di atas untuk melihat galeri</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;