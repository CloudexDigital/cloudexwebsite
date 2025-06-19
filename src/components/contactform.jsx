import React from "react";
import "../styles/contactform.css";

const ContactForm = () => {
  return (
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
          value="https://www.cloudexdigital.co.za"
        />

        <input
          type="hidden"
          name="subject"
          value="Contact submission from CloudEx Digital"
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

          <button type="submit" className="send-btn">
            Launch →
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
