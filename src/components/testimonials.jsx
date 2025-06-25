import { useEffect, useRef } from "react";
import "../styles/testimonials.css";
import { Helmet } from "react-helmet";

const testimonials = [
 {
  name: "Ryan M.",
  title: "CEO, Tarrow Holdings",
  quote:
    "We came to Cloudex with a sluggish landing page, and they didn’t just fix it—they transformed it. The speed improvement alone (5x faster!) has made a noticeable difference for our team. They were sharp, responsive, and truly understood what we needed.",
  image: "clients/TH-Logo(white).jpeg",
},
{
  name: "Tiana P.",
  title: "CEO, Rowtar Holdings",
  quote:
    "I was honestly blown away by how quickly Cloudex grasped our vision. The mobile redesign not only looked better—it started converting better almost immediately. It never felt like an outsourced job; they felt like part of our team from day one.",
  image: "clients/RowtarLogo.png",
},
{
  name: "Ryan M.",
  title: "CEO, AquaMoov",
  quote:
    "Working with Cloudex was effortless. They took our Figma files and brought them to life with precision, care, and attention to detail. We were kept in the loop the whole way, and they hit every milestone—on time, on budget, and with zero stress on our side.",
  image: "clients/AquaMoovlogo.png",
},

  {
    name: "Clandy N.",
    title: "CEO, Hive-Consulting",
    quote:
      "Working with Cloudex was seamless from start to finish. They transformed our Figma designs into a flawless live product, staying true to every pixel. What impressed us most was their clear communication, timely delivery, and staying right on budget. We couldn’t have asked for a better development partner.",
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
    </>
  );
};

export default TestimonialSection;
