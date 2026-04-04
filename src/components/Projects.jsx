import React from 'react';
import { MarkGithubIcon } from '@primer/octicons-react';
import "../style/Project.css";

const Projects = ({ project }) => {
  return (
    <div className="project">

    <section id="projects" className='section project-section'>
      
      {/* 2. Added 'sec-title' for your global header styling */}
      <h2 className="sec-title">Projects</h2>
      
      {/*  Added the grid wrapper around mapped items */}
      <div className="projects-grid">
        {project.map((item, index) => (
          <div key={index} className="project-card">
            <img src={item.imageSrc} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            
            {/* 4. Wrapped links so flexbox pushes them to the bottom */}
            <div className="project-links">
              <a href={item.github} target="_blank" rel="noreferrer">
                <MarkGithubIcon size={24} />
              </a>
              <a href={item.link} target="_blank" rel="noreferrer">View</a>
            </div>
          </div>
        ))}
      </div>

    </section>
        </div>
  );
};

export default Projects;