import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../homeStyles/home.css";

import TrustCards from "../components/trustCards";
import SpellTerminal from "../components/spellTerminal";

import GalaxyRoadmap from "../components/GalaxyRoadmap";
import SiteRevampSection from "../components/SiteRevampSection";
import ProjectSpotlight from "../components/launchLog";
import TestimonialSection from "../components/testimonials";
import ContactForm from "../components/contactform";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const canvas = document.getElementById("starCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size based on devicePixelRatio
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // Scale the drawing context
    ctx.scale(dpr, dpr);

    let stars = [];
    const numStars = 120;
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.2,
        alpha: Math.random(),
        delta: Math.random() * 0.02,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      for (let star of stars) {
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.shadowBlur = 2;
        ctx.shadowColor = "white";

        ctx.fill();
      }
      requestAnimationFrame(animate);
    };

    animate();

    // Resize responsiveness
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <canvas id="starCanvas"></canvas>
      <div className="Hero" data-aos="fade-down">
        <div className="hero-top">
          <span>🚀 Crafting the future of web experiences</span>
        </div>

        <div className="hero-text">
          <h1>
            <SpellTerminal />
          </h1>
        </div>

        <div className="cta-buttons">
          <a onClick={() => scrollToSection("Contact")} className="cta-quote">Get a free quote</a>
          <a onClick={() => scrollToSection("Portfolio")} className="cta">See our work</a>
        </div>

         <TrustCards />

        <GalaxyRoadmap />

        <SiteRevampSection />

        <ProjectSpotlight />

        <TestimonialSection />

        <ContactForm/> 
      </div>
    </>
  );
};

export default Home;
