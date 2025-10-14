import React from 'react';
import './styles.css';

const Card = ({ image, title, description }) => {
  return (
    <div className="facility-card">
      <img src={image} alt={title} className="facility-image" />
      <div className="facility-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;