import React, { useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import Tabs from '../../components/Tabs';
import Card from '../../components/Card';
import './styles.css';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('fasilitas');

  const facilities = [
    {
      id: 1,
      image: "/images/vr-room.jpg",
      title: "Lab Jurusan PPLG",
      description: "Peralihan kelas OSS dan MPV"
    },
    {
      id: 2,
      image: "/images/lab-grafika.jpg",
      title: "Lab Jurusan Teknik Grafika",
      description: "Lomba Hari Guru nasional"
    },
    // ... tambahkan fasilitas lainnya
  ];

  const activities = [
    {
      id: 1,
      image: "/images/kartini.jpg",
      title: "Perayaan hari Kartini",
      description: "21 April 2024"
    },
    {
      id: 2,
      image: "/images/osis.jpg",
      title: "Pelantikan ketua OSIS",
      description: "25 November 2024"
    },
    // ... tambahkan kegiatan lainnya
  ];

  return (
    <MainLayout>
      <div className="gallery-page">
        <div className="gallery-header">
          <h1>Galeri</h1>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="gallery-grid">
          {activeTab === 'fasilitas' 
            ? facilities.map((item) => (
                <Card
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              ))
            : activities.map((item) => (
                <Card
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              ))
          }
        </div>
      </div>
    </MainLayout>
  );
};

export default GalleryPage;