import { Helmet } from "react-helmet";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/footer.css";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>CloudEx Digital – Full-Stack Web Solutions</title>
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

      <footer>
        <div
          className="footer"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="row">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <div className="row">
            <ul>
              <li>
                <a onClick={() => scrollToSection("Contact")}>Contact us</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("Services")}>Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("Portfolio")}>Portfolio</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div className="row">
            Cloudex Digital &copy; {new Date().getFullYear()}- All rights
            reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
