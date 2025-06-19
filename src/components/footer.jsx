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
      <Helmet></Helmet>

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
