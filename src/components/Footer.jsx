import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "../style/Footer.css";

const Footer = ({ contact }) => {
  return (
    <div className="footer-class" id="contact">
      <div className="footer-links">
        <a href={contact.github} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        {contact.linkedin && (
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        )}
        <a href={`mailto:${contact.email}`}>
          <FaEnvelope />
        </a>
        <a href={`https://wa.me/977${contact.phone}`}>
          <FaWhatsapp />
        </a>
      </div>
      <span>{contact.phone}</span>
      <p>{contact.email}</p>
      <p>{contact.reserveRight}</p>
    </div>
  );
};
export default Footer;