import React from 'react';
import PartnerCard from '../partner-card';
import './style.css';

const PartnerGrid = ({ partners, title = "Kerjasama" }) => {
  return (
    <section className="partnership-section">
      <h2>{title}</h2>
      <div className="partner-logos">
        {partners.map((partner) => (
          <PartnerCard
            key={partner.id}
            src={partner.src}
            alt={partner.alt}
            name={partner.name}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnerGrid;