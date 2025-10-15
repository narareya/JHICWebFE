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
      image: "/images/galeri/aktifitas/isramiraj.jpeg",
      title: "Peringatan Isra Mi'raj",
      description: "Siswa-siswi memperingati Isra Mi'raj dengan penuh khidmat dengan shalawat bersama.",
    },
    {
      id: 2,
      image: "/images/galeri/aktifitas/kartini.jpeg",
      title: "Peringatan Hari Kartini",
      description: "Siswa-siswi mengenakan pakaian adat untuk memperingati Hari Kartini.",
    },
    {
      id: 3,
      image: "/images/galeri/aktifitas/Pameran.jpeg",
      title: "Pameran Karya Siswa",
      description: "pameran karya siswa yang menampilkan berbagai hasil kreativitas dan inovasi dari siswa-siswi SMK Raden Umar Said.",
    },
    {
      id: 4,
      image: "/images/galeri/aktifitas/pelantikan.jpeg",
      title: "Pelantikan Osis/MPK/Pengurus Ekstrakurikuler",
      description: "Pelantikan pengurus OSIS, MPK, dan ekstrakurikuler yang baru untuk periode 2024/2025.",
    },
    {
      id: 5,
      image: "/images/galeri/aktifitas/teater.jpeg",
      title: "Penampilan Teater",
      description: "Penampilan ekstrakurikuler teater oleh siswa-siswi SMK Raden Umar Said yang menampilkan bakat seni peran dan kreativitas mereka.",
    },
    {
      id: 6,
      image: "/images/galeri/aktifitas/upacara17.jpeg",
      title: "Upacara 17 Agustus",
      description: "Upacara bendera memperingati Hari Kemerdekaan Republik Indonesia yang ke-79 di SMK Raden Umar Said.",
    },
    {
      id: 7,
      image: "/images/galeri/aktifitas/pemilihan.jpeg",
      title: "Pemilihan Ketua Osis & MPK",
      description: "Pemilihan Ketua OSIS dan MPK di SMK Raden Umar Said.",
    },
    {
      id: 8,
      image: "/images/galeri/aktifitas/upacaraguru.jpeg",
      title: "Upcara Hari Guru",
      description: "Memperingati Hari Guru Nasional dengan upacara bendera di SMK Raden Umar Said.",
    },
    {
      id: 9,
      image: "/images/galeri/aktifitas/upacarapramuka.jpeg",
      title: "Upacra hari pramuka",
      description: "Memperingati Hari Pramuka dengan upacara bendera di SMK Raden Umar Said.",
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