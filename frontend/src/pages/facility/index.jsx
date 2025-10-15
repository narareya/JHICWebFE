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
      image: "/images/galeri/fasilitas/Digidraw.jpeg",
      title: "Lab Digital Drawing",
      description: "Lab Animasi"
    },
    {
      id: 2,
      image: "/images/galeri/fasilitas//DT.jpeg",
      title: "Digital Thinking",
      description: "Area santai DKV"
    },
    {
      id: 3,
      image: "/images/galeri/fasilitas/Grapos.jpeg",
      title: "Grapos",
      description: "Lab DKV teknik grafika"
    },
    {
      id: 4,
      image: "/images/galeri/fasilitas/Pacman.jpeg",
      title: "Lab Pacman",
      description: "Lab PPLG"
    },
    {
      id: 5,
      image: "/images/galeri/fasilitas/Perpus.jpeg",
      title: "Perpustakan",
      description: "Area santai"
    },
    {
      id: 6,
      image: "/images/galeri/fasilitas/Projek.jpeg",
      title: "Project",
      description: "Lab DKV"
    },
    {
      id: 7,
      image: "/images/galeri/fasilitas/StudioFotografi.jpeg",
      title: "Studio Fotografi",
      description: "Lab DKV",
    },
    {
      id: 8,
      image: "/images/galeri/fasilitas/Tribun.jpeg",
      title: "Tribun",
      description: "Area santai PPLG",
    },
    {
      id: 9,
      image: "/images/galeri/fasilitas/Vespa.jpeg",
      title: "Vespa",
      description: "Area santai PPLG",
    },
    {
      id: 10,
      image: "/images/galeri/fasilitas/VR.jpeg",
      title: "Lab VR",
      description: "Lab PPLG",
    },
    {
      id: 11,
      image: "/images/galeri/fasilitas/Konsep.jpeg",
      title: "Ruang Konsep",
      description: "Lab Animasi",
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