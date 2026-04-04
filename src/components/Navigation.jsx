import  { useState } from "react";
import "../style/Navigation.css";

function Navigation({ data }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" }); 
    setOpen(false);
  };

  return (
    <section className="Navbar">

    <nav className="navBar">
      <div className="logo">
        <span className="name">Salina</span> Bhattarai
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className={open ? "line active" : "line"}></div>
        <div className={open ? "line active" : "line"}></div>
        <div className={open ? "line active" : "line"}></div>
      </div>

      {/* Nav Links */}
      <ul className={open ? "navLinks open" : "navLinks"}>
        {data.map((nav, index) => (
          <li key={index} onClick={() => scrollTo(nav)}>
            {nav}
          </li>
        ))}
      </ul>
    </nav>
    </section>
  );
}

export default Navigation;