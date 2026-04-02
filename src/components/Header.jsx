import React from 'react'
import "../style/Header.css"

//about sectin ho
const Header = ({Data}) => {
 
  return (
    <>
    <div className='Header' id="about">
      <div className="Text " >
        <h1>{Data.name}</h1>
        <p>{Data.role}</p>
        <p>{Data.bio}</p>
        
      </div>
      <div className="picture">
        <img src={Data.imageSrc} />

      </div>
    </div>
    </>
  )
}

export default Header