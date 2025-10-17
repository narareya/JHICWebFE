import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardKos from '../../../components/card-kos';
import { kosData } from '../../../data/kos';
import './style.css';

const KosPage = () => {
  const [activeTab, setActiveTab] = useState('kos');
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

  // Data kos - bisa dipindah ke file terpisah atau API


  return (
    <div className="kos-page">
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

      <div className="kos-content">
        <div className="kos-dropdown-section">
          <CardKos kosData={kosData} />
        </div>
      </div>
    </div>
  );
};

export default KosPage;
