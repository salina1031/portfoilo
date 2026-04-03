import React from 'react'
import "../style/Project.css"
const Projects = ({project}) => {
  return (
    <section id="projects" className='project-section' >
      
      <h2>Projects</h2>
      {project.map((project,index)=>(
        <div key={index} className="project-card">
           <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noreferrer">View</a>
        </div>
      ))}
    </section>
  )
}

export default Projects