import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h3>Ashwini Kale</h3>

      <p>Backend Developer | Java | Spring Boot | Microservices</p>

      <div className="footer-links">

        <a href="mailto:ashukale1608@gmail.com">
          Email
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

      </div>

      <p className="copyright">
        © 2026 Ashwini Kale. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;