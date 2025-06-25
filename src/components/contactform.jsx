import { Helmet } from "react-helmet";
import "../styles/contactform.css";

const ContactForm = () => {

const handleFormSubmit = () => {
  if (typeof gtag === "function") {
    gtag('event', 'form_submit', {
      event_category: 'Contact',
      event_label: 'Contact Form Submission',
    });
  }
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
        className="contact-wrapper"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        id="Contact"
      >
        <h2 className="contact-title">Contact Us today</h2>
        <p className="contact-text">for a free consultation</p>

        <form
          action="https://api.staticforms.xyz/submit"
          method="POST"
          itemScope
          itemType="https://schema.org/ContactAction"
          aria-label="Contact form"
          className="contact-form"
        >
          <input
            type="hidden"
            name="accessKey"
            value="sf_nhl5fc2cah95d8ld9eh0ch97"
          />

          <input
            type="hidden"
            name="redirectTo"
            value="http://www.cloudexdigital.co.za/#/thankYou"
          />

          <input
            type="hidden"
            name="subject"
            value="Contact submission from Cloudex Digital"
          />

          <input type="hidden" name="replyTo" value="email" />

          <input type="hidden" name="_captcha" value="false" />

          <div className="form-shell">
            <div className="form-group">
              <input type="text" name="name" required placeholder=" " />
              <label>Name</label>
            </div>
            <div className="form-group">
              <input type="text" name="company" placeholder=" " />
              <label>Company Name</label>
            </div>
            <div className="form-group">
              <input type="text" name="company_type" placeholder=" " />
              <label>Type of Company</label>
            </div>
            <div className="form-group">
              <input type="tel" name="phone" placeholder=" " />
              <label>Phone Number</label>
            </div>
            <div className="form-group">
              <input type="email" name="email" required placeholder=" " />
              <label>Email</label>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                required
                rows="4"
                placeholder=" "
              ></textarea>
              <label>What would you like to build together?</label>
            </div>

            <button type="submit" className="send-btn" onSubmit={handleFormSubmit}>
              Launch →
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
