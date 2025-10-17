import React from 'react';
import './style.css';

const CareerCard = ({ career }) => {
  // Find specific detail values
  const getDetailValue = (label) => {
    const detail = career.details.find(d => d.label === label);
    return detail ? detail.value : 'N/A';
  };

  // Get skills as array
  const getSkillsList = () => {
    const skills = getDetailValue('Job Title');
    if (skills === 'N/A') return [];
    return skills.split(',').map(skill => skill.trim());
  };

  return (
    <div className="career-card">
      <div className="career-content">
        <div className="career-main">
          <h3 className="career-title">{career.title}</h3>
        </div>
        <div className="career-details">
          <div className="career-info">
            <h4>Job-title:</h4>
            <ul className="skills-list">
              {getSkillsList().map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;