import React from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Education from './components/Education'

import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import "./App.css"
import salinaImg from "./assets/salina.jpeg";
import neparthaImg from "./assets/nepartha.png";
import flappyImg from "./assets/flappy.png";
import chatbotImg from "./assets/chatbot.png";


const App = () => {
  const navData = ["About", "Education", "Skills", "Projects", "Contact"]

  // yo about ko lagi
 const user = {
  imageSrc: salinaImg,
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
    {title:"Nepartha -expenses tracker",
      imageSrc:neparthaImg,
      description:"It allow to put the monthly buteses, add the expenses ,see the visually report on the expenses. simple track the money you spend ",
      github:"https://github.com/salina1031/FinalNepartha",
      link:"https://final-nepartha.vercel.app/"
    },
    {
      title:"Flappy Bird",
      imageSrc:flappyImg,
      description:"2D game created  using  just the javascript ",
      github:"https://github.com/salina1031/Flappybird",
      link:"https://flappybird-eta-six.vercel.app/"
    },{
      title:"Chatbot",
      imageSrc:chatbotImg,
      description:"A web-based AI chatbot that answers questions in real time. Built with React and Vite, it provides instant, intelligent responses to user queries",
      github:"https://github.com/salina1031/Chatbot-",
      links:"https://chatbot-five-pi-68.vercel.app/"
    }
  ]
  const footer = {
  phone: "9806011838",
  email: "salinabhattarai@gmail.com",
  github: "https://github.com/salina1031",
  linkedin: "https://www.linkedin.com/in/salina-bhattarai-61b882311/", 
  reserveRight: "© 2026 Copyright: salina.com"
};
 

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