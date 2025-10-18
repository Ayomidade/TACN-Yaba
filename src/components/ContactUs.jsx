import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <main className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Whether you have a question, testimony, or
          prayer request, feel free to reach out.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* <div className="contact-details">
          <h2>Church Address</h2>
          <p>Grace Sanctuary Church</p>
          <p>45 Peace Avenue, Lekki Phase 1, Lagos, Nigeria</p>

          <h3>Service Hours</h3>
          <p>Sunday: 8:00 AM – 11:00 AM</p>
          <p>Wednesday: 6:00 PM – 8:00 PM</p>

          <h3>Get in Touch</h3>
          <p>📞 +234 801 234 5678</p>
          <p>📧 info@gracesanctuary.org</p>

          <div className="map">
            <iframe
              title="church-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0460021418337!2d3.4583333153092614!3d6.431102495340248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf509a16a56d7%3A0x5b2e55c2e5c6df40!2sLekki%20Phase%201!5e0!3m2!1sen!2sng!4v1693763638003!5m2!1sen!2sng"
              width="100%"
              height="250"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}
      </section>
    </main>
  );
};

export default ContactUs;
