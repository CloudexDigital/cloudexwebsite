import React, { useRef } from "react";
import "../styles/SiteRevampSection.css";
import { Helmet } from "react-helmet";

const SiteRevampSection = () => {
  const showcaseRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = showcaseRef.current.getBoundingClientRect();
    const offsetX = e.clientX - bounds.left;
    const percentage = (offsetX / bounds.width) * 100;
    const clipped = Math.min(100, Math.max(0, percentage));
    showcaseRef.current.style.setProperty("--revamp-percent", `${clipped}%`);
  };

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

      <section
        className="revamp-wrapper"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h2 className="revamp-title">
          <span className="pulse">Your website should evolve</span> as fast as
          your business does.
        </h2>
        <p className="revamp-sub">
          If it feels outdated, clunky—or just... meh—let’s rebuild it into
          something faster, cleaner, and smarter.
        </p>

        <div
          className="revamp-showcase"
          ref={showcaseRef}
          onMouseMove={handleMouseMove}
        >
          {/* Outdated Site (Left Side) */}
          <div className="revamp-before">
            <div className="old-navbar">Home | Services | Contact</div>
            <h3 className="old-header">Welcome to My Site</h3>
            <p className="old-text">We do stuff. Kinda cool I guess.</p>
            <img className="old-image" src="/broken.jpg" alt="broken" />
            <button className="old-button">Click Me</button>
          </div>

          {/* Modern UI (Right Side) */}
          <div className="revamp-after">
            <header className="modern-header">
              <h2>Accelerate your digital presence</h2>
              <p>
                High-speed, mobile-optimized websites built to perform and
                convert.
              </p>
              <button className="modern-cta">Let’s Revamp →</button>
            </header>
            <section className="modern-cards">
              <div className="card">⚡ Fast Performance</div>
              <div className="card">📱 Responsive Design</div>
              <div className="card">🔐 Enterprise Security</div>
            </section>
          </div>

          {/* Slider */}
          <div className="revamp-slider" />
        </div>
      </section>
    </>
  );
};

export default SiteRevampSection;
