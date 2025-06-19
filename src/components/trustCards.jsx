import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faLifeRing,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/trustCards.css";
import { Helmet } from "react-helmet";

const TrustCards = () => {
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

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div
          className="card-text"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h2>At Cloudex Digital we believe in </h2>
        </div>

        <div
          className="card-wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="card-content">
            <li>
              <FontAwesomeIcon icon={faComments} />
            </li>
            <h2> Transparent Communication</h2>
            <p>We keep you in the loop from day one—no jargon, no surprises.</p>
          </div>

          <div className="card-content">
            <li>
              <FontAwesomeIcon icon={faLifeRing} />
            </li>
            <h2> Dedicated Support</h2>
            <p>
              Always available for updates, fixes, or advice—our support doesn’t
              stop after launch
            </p>
          </div>

          <div className="card-content">
            <li>
              <FontAwesomeIcon icon={faChartLine} />
            </li>
            <h2>Proven Track Record</h2>
            <p>
              Backed by measurable SEO growth, speed scores, and client
              referrals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustCards;
