import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className="navbar"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a className="link" href="/">
          Home
        </a>
        <a className="link" onClick={() => scrollToSection("Services")}>
          Services
        </a>
        <a className="link" onClick={() => scrollToSection("Portfolio")}>
          Portfolio
        </a>
        <a className="link" onClick={() => scrollToSection("Contact")}>
          Contact
        </a>
      </div>
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
