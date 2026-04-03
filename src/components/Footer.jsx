import React from 'react'
import "../style/Footer.css"
const Footer = ({ contact }) => {
  return (
    <div className="footer-class" id="contact">

      <span>{contact.phone}</span>
      <p>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p>{contact.reserveRight}</p>
    </div>
  )
}
export default Footer
