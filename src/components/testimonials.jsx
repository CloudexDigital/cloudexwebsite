import { useEffect, useRef } from "react";
import "../styles/testimonials.css";

const testimonials = [
  {
    name: "Ryan M.",
    title: "CEO, Tarrow Holdings",
    quote:
      "Cloudex brought clarity and speed to our data platform—our internal dashboard loads 5x faster now.",
    image: "clients/TH-Logo(white).jpeg",
  },
  {
    name: "Tiana P.",
    title: "CEO, Rowtar Holdings",
    quote:
      "The mobile experience overhaul by Cloudex immediately boosted conversions. They felt like a true tech partner.",
    image: "clients/RowtarLogo.png",
  },
  {
    name: "Ryan M.",
    title: "CEO, AquaMoov",
    quote:
      "From Figma to final deploy, Cloudex kept us looped in and delivered pixel perfection—on time, and on budget.",
    image: "clients/AquaMoovlogo.png",
  },
  {
    name: "Clandy N.",
    title: "CEO, Hive-Consulting",
    quote:
      "From Figma to final deploy, Cloudex kept us looped in and delivered pixel perfection—on time, and on budget.",
    image: "clients/HiveLogo.svg",
  },
];

const TestimonialCard = ({ quote, name, title, image }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current.classList.add("reveal");
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="testimonial-card"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      ref={ref}
    >
      <img src={image} alt={name} className="client-avatar" />
      <div className="line-animate" />
      <p className="quote">“{quote}”</p>
      <div className="client">
        <strong>{name}</strong>
        <span>{title}</span>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="testimonial-wrapper">
      <div className="testimonial-header">
        <h2>What Our Clients Say</h2>
        <p>
          Trusted by entrepreneurs, small business, and growth-focused teams
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i}
            name={t.name}
            title={t.title}
            quote={t.quote}
            image={t.image}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
