import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const KaldikPage = () => {
  const [activeTab, setActiveTab] = useState('kaldik');
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="kaldik-page">
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

      <div className="kaldik-content">
        <div className="kaldik-main">
          <div className="kaldik-image-large">
            <img 
              src="/images/kaldik.jpeg" 
              alt="Kalender Akademik"
              onClick={openModal}
              style={{ cursor: 'pointer' }}
            />
            <p>Kalender</p>
          </div>

          <div className="keterangan-section">
            <h2>Keterangan</h2>
            <div className="keterangan-content">
              <p><strong>Kaldik (Kalender Pendidikan)</strong> adalah kalender yang berisi jadwal kegiatan pendidikan selama satu tahun ajaran. Kaldik mencakup berbagai informasi penting seperti:</p>
              
              <ol>
                <li><strong>Jadwal Tahun Ajaran Sekolah Tahun Ajaran:</strong> Menentukan kapan awal dan akhir kegiatan belajar mengajar dalam satu tahun pelajaran.</li>
                
                <li><strong>Jadwal Libur Sekolah:</strong> Termasuk libur semester (UTS), ujian akhir semester (UAS), dan ujian kenaikan (UN/USBN).</li>
                
                <li><strong>Hari-Hari Penting:</strong> Seperti peringatan hari besar nasional, keagamaan, dan acara-acara khusus lainnya yang diselenggarakan oleh pemerintah atau sekolah.</li>
                
                <li><strong>Jadwal Ujian:</strong> Ujian tengah semester (UTS), ujian akhir semester (UAS), dan ujian kenaikan kelas (UN/USBN).</li>
                
                <li><strong>Jadwal Pembelajaran Reguler:</strong> Waktu pembukaan bagi siswa per semester.</li>
                
                <li><strong>Hari Libur Khusus:</strong> Libur yang berkaitan dengan peringatan tertentu yang bersifat nasional maupun internasional.</li>
              </ol>
              
              <p>Kalender ini penting sebagai acuan bagi sekolah, guru, siswa, dan orang tua dalam mengatur dan mempersiapkan kegiatan belajar mengajar serta libur selama tahun ajaran.</p>
              
              <p><em>*Jadwal Sewaktu - waktu bisa berubah.</em></p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for fullscreen image */}
      {isModalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img 
              src="/images/kaldik.jpeg" 
              alt="Kalender Akademik - Fullscreen"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default KaldikPage;
