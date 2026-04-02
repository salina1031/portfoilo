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
    imageSrc: "src/assets/own.JPG",
    name: "Salina Bhattarai",
    role: "Web Development Learner",
    bio: "Curious about learning web development, React, and creating interactive websites."
  }

  const education = [

    {
      degree: "BIT Information Technology",
      college: "Balmiki  Lincoln University",
      year: "2023- 2027"
    },
    {
      degree: "High School",
      college: "Kanchanjunga Namuna College",
      year: "2021-2023"
    },{
      degree: "SEE",
      college: "Kanchanjunga Namuna College",
      year: "2020"
    }
  ]
  const skills=[
    "UI design"," video editing","listening","Solving"
  ]

  const project=[
    {title:"expenses",
      description:"allow user to add ,remove and store their expensess digitally ",
      link:"https://salina1031.github.io/expenses/"
    }
  ]
   const footer={
    phone:"9806011838",
    email:"salinabhattarai@gmail.com",
    reserveRigtht:" © 2026 Copyright:salina.com"

  }
 

return (
  <>
    <Navigation data={navData} />
    <Header Data={user} />
    <Education edu={education} />
    <Skills skill={skills}/>
    <Projects project={project}/>
    <Footer contact={footer}/>
  </>
)
}

export default App