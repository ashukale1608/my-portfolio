import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Contact Me</h2>

      <p>
        Feel free to reach out if you want to collaborate, discuss a project,
        or have any job opportunities.
      </p>

      <div className="contact-info">

        <div className="contact-item">
          <h4>Email</h4>
          <p>ashukale1608@gmail.com</p>
        </div>

        <div className="contact-item">
          <h4>Phone</h4>
          <p>+91 8788406372</p>
        </div>

        <div className="contact-item">
          <h4>Location</h4>
          <p>Maharashtra, India</p>
        </div>

      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/ashwini-kale-201844287/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a href="https://github.com/ashukale1608" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

    </section>
  );
}

export default Contact;