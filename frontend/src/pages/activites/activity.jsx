import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const ActivitiesPage = () => {
  const [activeTab, setActiveTab] = useState('kegiatan');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'fasilitas') {
      navigate('/fasilitas');
    } else if (tab === 'kegiatan') {
      navigate('/kegiatan');
    }
  };
  const activities = [
    {
      id: 1,
      image: "/images/kartini.jpg",
      title: "Perayaan Hari Kartini",
      description: "Siswa-siswi memperingati hari Kartini dengan berbagai kegiatan budaya dan lomba tradisional"
    },
    {
      id: 2,
      image: "/images/competition.jpg",
      title: "Lomba Kompetensi Siswa",
      description: "Siswa mengikuti berbagai lomba keahlian tingkat nasional dan regional"
    },
    {
      id: 3,
      image: "/images/graduation.jpg",
      title: "Wisuda Siswa",
      description: "Acara kelulusan siswa kelas XII yang dilaksanakan setiap tahun"
    },
    {
      id: 4,
      image: "/images/extracurricular.jpg",
      title: "Kegiatan Ekstrakurikuler",
      description: "Berbagai kegiatan pengembangan minat bakat siswa"
    },
    {
      id: 5,
      image: "/images/sports.jpg",
      title: "Kegiatan Olahraga",
      description: "Berbagai cabang olahraga yang diikuti siswa"
    },
    {
      id: 6,
      image: "/images/arts.jpg",
      title: "Kegiatan Seni",
      description: "Pengembangan bakat seni siswa melalui berbagai kegiatan"
    }
  ];

  return (
    <div className="activities-page">
      <div className="activities-header">
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
      
      <div className="activities-grid gallery-grid">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-card">
            <div className="activity-image">
              <img 
                src={activity.image} 
                alt={activity.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x250?text=No+Image';
                }}
              />
            </div>
            <div className="activity-content">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;