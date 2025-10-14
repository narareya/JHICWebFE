import React from 'react';
import './styles.css';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button 
        className={`tab ${activeTab === 'fasilitas' ? 'active' : ''}`}
        onClick={() => setActiveTab('fasilitas')}
      >
        Fasilitas
      </button>
      <button 
        className={`tab ${activeTab === 'keaktifan' ? 'active' : ''}`}
        onClick={() => setActiveTab('keaktifan')}
      >
        Keaktifan
      </button>
    </div>
  );
};

export default Tabs;