import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const FacilitiesPage = () => {
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
  const facilities = [
    {
      id: 1,
      image: "/images/vr-room.jpg",
      title: "Lab Jurusan PPLG",
      description: "Laboratorium lengkap untuk jurusan Pengembangan Perangkat Lunak dan Gim dengan peralatan modern"
    },
    {
      id: 2,
      image: "/images/lab-grafika.jpg",
      title: "Lab Jurusan Teknik Grafika",
      description: "Laboratorium khusus untuk jurusan Teknik Grafika dengan peralatan printing dan desain"
    },
    {
      id: 3,
      image: "/images/library.jpg",
      title: "Perpustakaan",
      description: "Fasilitas belajar dan membaca dengan koleksi buku yang lengkap dan ruang baca yang nyaman"
    },
    {
      id: 4,
      image: "/images/workshop.jpg",
      title: "Workshop Praktik",
      description: "Ruang praktik untuk berbagai jurusan dengan peralatan industri standar"
    },
    {
      id: 5,
      image: "/images/computer-lab.jpg",
      title: "Laboratorium Komputer",
      description: "Lab komputer dengan spesifikasi tinggi untuk mendukung pembelajaran teknologi"
    },
    {
      id: 6,
      image: "/images/auditorium.jpg",
      title: "Aula Serbaguna",
      description: "Ruang serbaguna untuk berbagai acara dan kegiatan sekolah"
    }
  ];

  return (
    <div className="facilities-page">
      <div className="facilities-header">
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
      
      <div className="facilities-grid">
        {facilities.map((facility) => (
          <div key={facility.id} className="facility-card">
            <div className="facility-image">
              <img 
                src={facility.image} 
                alt={facility.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x250?text=No+Image';
                }}
              />
            </div>
            <div className="facility-content">
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesPage;