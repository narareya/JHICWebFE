import React from 'react';
import './style.css';

const CareerCard = ({ career }) => {
  // Find specific detail values
  const getDetailValue = (label) => {
    const detail = career.details.find(d => d.label === label);
    return detail ? detail.value : 'N/A';
  };

  // Get job titles as array (keeping original format)
  const getJobTitlesList = () => {
    const jobTitles = getDetailValue('Job Title');
    if (jobTitles === 'N/A') return [];
    return jobTitles.split(',').map(title => title.trim());
  };

  // Get industry information
  const getIndustry = () => {
    return getDetailValue('Industry') !== 'N/A' ? getDetailValue('Industry') : 'Berbagai Industri';
  };

  return (
    <div className="career-card">
      <div className="career-content">
        <div className="career-main">
          <div className="career-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <h3 className="career-title">{career.title}</h3>
          {/* <p className="career-subtitle">{getIndustry()}</p> */}
        </div>
        <div className="career-details">
          {getJobTitlesList().length > 0 && (
            <div className="career-info">
              <i className="fas fa-briefcase"></i>
              <div>
                <span className="info-label">Job Roles:</span>
                <div className="skills-container">
                  {getJobTitlesList().slice(0, 3).map((title, index) => (
                    <span key={index} className="skill-tag">{title}</span>
                  ))}
                  {getJobTitlesList().length > 3 && (
                    <span className="skill-tag more">+{getJobTitlesList().length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerCard;