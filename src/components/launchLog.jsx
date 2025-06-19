import React from "react";
import { Helmet } from "react-helmet";
import "../styles/launchLog.css";

const projects = [
  {
    name: "Tarrow Holdings",
    image: "Porfolioimages/tarrowHoldings.png",
    url: "https://www.tarrowholdings.co.za",
    services: ["Custom Design", "Analytics Integrated", "SEO Optimized"],
    impact: "Rebuilt design, ranked #1 for 3 keywords",
  },
  {
    name: "AquaMoov static site",
    image: "Porfolioimages/aquamoov.png",
    url: "https://www.aquamoov.co.za/",
    services: [
      "3D design",
      "Performance Optimization",
      "Dark UI",
      "SEO Optimized",
    ],
    impact: "Load time dropped by 80%, mobile sales +32%",
  },
  {
    name: "Hive-Consulting",
    image: "Porfolioimages/hiveConsulting.png",
    url: "https://www.hive-consulting.co.za",
    services: ["Blog integration", "Role-Based Access", "Dark UI"],
    impact: "Realtime insights, 5x faster user reporting",
  },
];

const ProjectSpotlight = () => {
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
        className="spotlight-wrapper"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        id="Portfolio"
      >
        <h2 className="spotlight-title">Featured Projects</h2>
        <p className="spotlight-intro">
          These aren’t just websites—they’re solutions. Here’s what we’ve built
          for real clients to drive performance, clarity, and results.
        </p>
        <div className="project-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="card-contents">
                <img src={project.image} alt={project.name} />
                <h3>{project.name}</h3>
                <ul className="service-tags">
                  {project.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
                <p className="impact">{project.impact}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Site →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectSpotlight;
