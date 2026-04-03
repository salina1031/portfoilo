import React from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Education from './components/Education'
// import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import "./App.css"

const App = () => {
  const navData = ["About", "Education", "Skills", "Projects", "Contact"]

  // yo about ko lagi
 const user = {
  imageSrc: "src/assets/salina.jpeg",
  name: "Salina Bhattarai",
  role: "Web Developer & Video Editor",
  bio: "Full-Stack Web Developer from Jhapa, Nepal. Skilled in building responsive and interactive web applications using React and Node.js. Passionate about clean design, efficient code, and continuous learning through real projects. Also experienced in video editing and content creation."
};

const education = [
  {
    degree: "BIT Information Technology",
    college: "Balmiki Lincoln University",
    year: "2023-2027",
    status:"ongoing",
    field: "IT & Software Development",
    description: "Four-year IT program covering software development, networking, cybersecurity, and data management"
  },
  {
    degree: "High School",
    college: "Kanchanjunga Namuna College",
    year: "2021-2023",
    status:"Completed",
    field: "Science",
    description: "Focused on Science subjects including Physics, Chemistry, and computer science."
  },
  {
    degree: "SEE",
    college: "Kanchanjunga Namuna College",
    year: "2020",
    status:"Completed",

    description: "Completed School Leaving Certificate with general education foundation."
  }
];
 const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React.js"],
  backend: ["Node.js", "Express.js"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Video Editing"]
};

  const project=[
    {title:"expenses",
      description:"allow user to add ,remove and store their expensess digitally ",
      link:"https://salina1031.github.io/expenses/"
    }
  ]
   const footer={
    phone:"9806011838",
    email:"salinabhattarai@gmail.com",
    reserveRight:" © 2026 Copyright:salina.com"

  }
 

return (
  <>
    <Navigation data={navData} />
    <Header Data={user} />
    <Education edu={education} />
    <Skills skill={skills}/>
    <section id="projects">

    <Projects project={project}/>
    </section>
    <Footer contact={footer}/>
  </>
)
}

export default App