import React from 'react'
import "../style/Skills.css"

const Skills = ({ skill }) => {
  return (
    <div className='skill'>
        <h2>Skills</h2>
      <section className="skill-section" id="skills">

        {Object.entries(skill).map(([category, items], index) => (
          <div key={index} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
      );
};


export default Skills