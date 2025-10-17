import React from 'react';
import './style.css';

const PartnerCard = ({ src, alt, name }) => {
  return (
    <div className="partner-logo">
      <img src={src} alt={alt} />
      {/* {name && <span className="partner-name">{name}</span>} */}
    </div>
  );
};

export default PartnerCard;