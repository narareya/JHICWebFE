import React, { useState } from 'react';
import './style.css';

const CardKos = ({ kosData }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="card-kos-container">
      {kosData.map((kos) => (
        <div 
          key={kos.id} 
          className={`dropdown-item ${expandedItems[kos.id] ? 'expanded' : ''}`}
        >
          <div 
            className="dropdown-header"
            onClick={() => toggleExpanded(kos.id)}
          >
            <div className="dropdown-title">
              <span className="kos-name">{kos.nama}</span>
            </div>
            <span className="dropdown-icon">
              {expandedItems[kos.id] ? '▲' : '▼'}
            </span>
          </div>
          
          <div className={`dropdown-content ${expandedItems[kos.id] ? 'expanded' : 'collapsed'}`}>
            <div className="kos-info">
              <p><strong>Nomor:</strong> {kos.nomor || 'Tidak tersedia'}</p>
              <p><strong>Alamat:</strong> {kos.alamat}</p>
              {kos.googleMaps && (
                <p><strong>Maps:</strong> <a href={kos.googleMaps} target="_blank" rel="noopener noreferrer">Lihat di Google Maps</a></p>
              )}
              {kos.drive && (
                <p><strong>Galeri:</strong> <a href={kos.drive} target="_blank" rel="noopener noreferrer">Lihat Foto</a></p>
              )}
              {kos.fasilitas && kos.fasilitas.length > 0 && (
                <div className="kos-fasilitas">
                  <p><strong>Fasilitas:</strong></p>
                  <ul>
                    {kos.fasilitas.map((fasilitas, index) => (
                      <li key={index}>{fasilitas}</li>
                    ))}
                  </ul>
                </div>
              )}
              {kos.harga && (
                <p><strong>Harga:</strong> {kos.harga}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardKos;