import React from 'react'
import "../style/Footer.css"
const Footer = ({contact}) => {
  return (
    <div className="footer-class" id="contact">
     
        <span>{contact.phone}</span>
        <p>{contact.email}</p>
        <p>{contact.reserveRigtht}</p>
          
      
    </div>
  )
}
export default Footer
