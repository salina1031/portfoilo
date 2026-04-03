import React from "react";
import "../style/Education.css";

function Education({ edu }) {
  return (
    <section id="education">
      <h2>Academic Journey</h2>
      <div className="timeline">
        {edu.map((item, index) => (
          <div key={index} className="timeline-item">
            <span className="timeline-year">{item.year}</span>
            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <p className="college">{item.college}</p>
              <p className="details">{item.description}</p>
              
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;