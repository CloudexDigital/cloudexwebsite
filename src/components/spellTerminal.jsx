import { useEffect, useState } from "react";
import "../styles/spellTerminal.css";
import { Helmet } from "react-helmet";

const commands = [
  "We craft lightning-fast, <span>SEO-optimized websites that rank higher and convert better.</span> Get your free quote",
];

const SpellTerminal = () => {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (index >= commands.length) return;
    const current = commands[index];
    let charIndex = 0;
    const interval = setInterval(() => {
      setTyped(current.slice(0, ++charIndex));
      if (charIndex === current.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [index]);

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

      <div className="terminal">
        <span
          className="prompt"
          dangerouslySetInnerHTML={{ __html: `${typed}|` }}
        />
      </div>
    </>
  );
};

export default SpellTerminal;
