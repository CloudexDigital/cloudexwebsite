import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title>Cloudex Digital – Full-Stack Web Solutions</title>
        <meta
          name="description"
          content="Custom websites built through your vision and design, with automation, and frontend excellence."
        />
        <link rel="canonical" href="https://www.cloudexdigital.co.za" />
        <meta property="og:title" content="Cloudex Digital" />
        <meta
          property="og:description"
          content="Empowering businesses through tech innovation."
        />
        <meta
          property="og:image"
          content="https://www.cloudexdigital.co.za/CloudexDigitalLoader.png"
        />
        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Cloudex Digital",
        "url": "https://www.cloudexdigital.co.za",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "info@cloudexdigital.co.za",
          "contactType": "Customer Service"
        }
      }
    `}
        </script>
      </Helmet>
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
    </>
  );
};

export default Navbar;
