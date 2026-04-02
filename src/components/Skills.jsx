import React from 'react'
import "../style/Skills.css"

const Skills = ({ skill }) => {
  return (
    <div className="skill-section" id="skills">
      <h2>Skills</h2>
      <ul>{skill.map((skilldata, index) => (
        <li key={index}>{skilldata}</li>
      ))}</ul>
    </div>
  )
}

export default Skills