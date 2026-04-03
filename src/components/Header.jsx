import React from "react";
import "../style/Header.css";

const Header = ({ Data }) => {
  return (
    <section className="header" id="about">
      <div className="header-container">
        
        
        <div className="header-text">
          <h1>{Data.name}</h1>
          <h2>{Data.role}</h2>
          <p>{Data.bio}</p>

          <button className="header-btn">View Projects</button>
        </div>

        <div className="header-image">
          <img src={Data.imageSrc} alt="profile" />
        </div>

      </div>
    </section>
  );
};

export default Header;