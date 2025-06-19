import React, { useEffect, useRef } from "react";
import "../styles/GalaxyRoadmap.css";
import Waypoint from "./Waypoint";
import { Helmet } from "react-helmet";

const services = [
  {
    title: "High-Speed Development",
    desc: "Websites built for speed with optimized code, lazy loading, and modern frameworks to ensure 95+ Google PageSpeed scores.",
    icon: "🛰️",
  },
  {
    title: "SEO Optimization",
    desc: "Built-in SEO best practices including semantic HTML, optimized images, schema markup, and fast-loading pages to rank higher.",
    icon: "🛠️",
  },
  {
    title: "Responsive Design",
    desc: "Flawless mobile experience with responsive designs that adapt to any screen size, ensuring 100% mobile-friendliness.",
    icon: "🚀",
  },
  {
    title: "Performance Analytics",
    desc: "Comprehensive performance tracking with Google Analytics and Lighthouse integration to monitor and improve your site.",
    icon: "🧠",
  },
  {
    title: "Security Hardening",
    desc: "Enterprise-grade security with HTTPS, CSP headers, XSS protection, and regular security audits to keep your site safe.",
    icon: "🪐",
  },
  {
    title: "Ongoing Maintenance",
    desc: "Regular updates, backups, and performance optimizations to ensure your website stays fast, secure, and up-to-date.",
    icon: "🧭",
  },
];

const GalaxyRoadmap = () => {
  const trackWrapperRef = useRef(null);
  const rocketRef = useRef(null);

  useEffect(() => {
    const track = trackWrapperRef.current;
    const rocket = rocketRef.current;

    const handleScroll = () => {
      const scrollLeft = track.scrollLeft;
      const maxScroll = track.scrollWidth - track.clientWidth;
      const scrollRatio = scrollLeft / maxScroll;
      const rocketRange = track.clientWidth - 40;
      const rocketPos = rocketRange * scrollRatio;
      rocket.style.transform = `translateX(${rocketPos}px)`;

      const trail = track.querySelector(".rocket-trail");
      if (trail) {
        trail.style.width = `${rocketPos + 20}px`;
      }
    };

    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

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
        className="galaxy-wrapper"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        id="Services"
      >
        <h2 className="galaxy-title">
          <span className="highlight">Our Solutions</span> to what your looking
          for
        </h2>
        <p className="galaxy-text">
          We’re not just developers—we’re digital mission control for your
          business. Whether you’re launching your first site or scaling into new
          galaxies, we build experiences that are fast, responsive, secure, and
          designed to convert.{" "}
          <span className="text-highlight">Our services go beyond code.</span>{" "}
          We blend performance, usability, and long-term growth strategy to give
          your brand a web presence that feels alive—and works hard behind the
          scenes.
        </p>
        <div className="galaxy-track-wrapper" ref={trackWrapperRef}>
          <svg
            className="galaxy-path"
            viewBox="0 0 2000 100"
            preserveAspectRatio="none"
          >
            <path d="M0 50 Q 300 0, 600 50 T 1200 50 T 1800 50" />
          </svg>

          <div className="rocket-tracker" ref={rocketRef}>
            🚀
          </div>

          <div className="rocket-trail" />

          <div className="galaxy-track">
            {services.map((service, index) => (
              <Waypoint key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalaxyRoadmap;
