import React from "react";
import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <div className="about-container">

        <p>
          I am a Backend Developer with 1+ year of experience building scalable
          backend applications using <b>Java and Spring Boot</b>.
        </p>

        <p>
          I have contributed to the development of an enterprise
          <b> Vendor Management System (VMS)</b> where I worked on secure REST
          APIs, authentication using <b>JWT and Keycloak</b>, and
          event-driven notification systems using <b>Apache Kafka</b>.
        </p>

        <p>
          I also have experience working with <b>Node.js and Express.js</b> and
          frontend technologies like <b>React, Angular, JavaScript, and
            TypeScript</b>.
        </p>

        <p>
          I enjoy building scalable microservices, optimizing database queries,
          and designing clean and maintainable backend architectures.
        </p>

      </div>

    </section>
  );
}

export default About;