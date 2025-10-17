import React from 'react';
import './Timeline.css';

const Timeline = ({ timeline, title }) => {
  return (
    <div className="timeline-section">
      <h2 className="timeline-title">{title}</h2>
      <div className="timeline-container">
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <span className="semester-number">{item.semester}</span>
            </div>
            <div className="timeline-content">
              <h4>Semester {item.semester}</h4>
              <p>{item.materi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;