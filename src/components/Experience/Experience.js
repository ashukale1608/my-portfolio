import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="experience">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>

      <div className="experience-card">

        <h3>Backend Developer</h3>

        <h4>The Baap Company</h4>

        <p className="date">
          Dec 2024 – Present | Sangamner, Maharashtra
        </p>

        <ul>
          <li>Developed scalable REST APIs using Spring Boot.</li>
          <li>Implemented authentication using JWT and Keycloak.</li>
          <li>Designed Role-Based Access Control (RBAC).</li>
          <li>Integrated Apache Kafka for event-driven notifications.</li>
          <li>Implemented dynamic email templates using Thymeleaf.</li>
          <li>Optimized MySQL and MongoDB database queries.</li>
          <li>Created API documentation using Swagger.</li>
          <li>Developed unit tests using JUnit and Mockito.</li>
        </ul>

      </div>

    </section>
  );
}

export default Experience;