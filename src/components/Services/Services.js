import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

function Services() {
  return (
    <section id="services" className="services">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What I Build
      </motion.h2>
      <div className="services-container">

        <div className="service-card floating">
          <h3>Backend Development</h3>
          <p>
            Building scalable REST APIs and secure backend systems using
            Java, Spring Boot, Node.js and Microservices architecture.
          </p>
        </div>

        <div className="service-card floating">
          <h3>Frontend Development</h3>
          <p>
            Creating modern and responsive user interfaces using
            React, Angular, JavaScript, TypeScript and CSS.
          </p>
        </div>

        <div className="service-card floating">
          <h3>Full Stack Applications</h3>
          <p>
            Developing complete applications by integrating
            frontend, backend APIs, databases and authentication systems.
          </p>
        </div>

        <div className="service-card floating">
          <h3>Microservices Architecture</h3>
          <p>
            Designing distributed systems using Kafka,
            REST APIs, containerized services and event-driven architecture.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;