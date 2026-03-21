import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Projects</h2>
      </motion.h2>

      {/* Client Projects */}
      <h3 className="project-category">Professional Experience</h3>

      <div className="projects-container">

        <div className="project-card">
          <h4>Authentication Service (VMS)</h4>
          <p>
            Built a secure authentication and authorization system using
            Spring Boot and Keycloak with JWT based security.
          </p>

          <p><b>Technologies:</b> Java, Spring Boot, Keycloak, JWT</p>

          <p className="private-note">
            Source Code: Private Company Repository
          </p>
        </div>

        <div className="project-card">
          <h4>Shift Management Module</h4>
          <p>
            Developed REST APIs for managing workforce shifts including
            scheduling, validations and role-based access.
          </p>

          <p><b>Technologies:</b> Node.js, Express.js, MySQL</p>

          <p className="private-note">
            Source Code: Private Company Repository
          </p>
        </div>

        <div className="project-card">
          <h4>Notification Service</h4>
          <p>
            Designed an event-driven notification system supporting Email,
            SMS and Push notifications using Apache Kafka.
          </p>

          <p><b>Technologies:</b> Node.js, Kafka, MySQL</p>

          <p className="private-note">
            Source Code: Private Company Repository
          </p>
        </div>

      </div>

      {/* Personal Projects */}
      <h3 className="project-category">Personal Projects</h3>

      <div className="projects-container">

        <div className="project-card">
          <h4>GraphQL with Spring Boot</h4>
          <p>
            Implemented a GraphQL API using Spring Boot to allow flexible
            client queries and efficient data fetching.
          </p>

          <p><b>Technologies:</b> Java, Spring Boot, GraphQL</p>

          <div className="project-links">
            <a href="https://github.com/ashukale1608/graphQLwithSpringBoot" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h4>Student Management System</h4>
          <p>
            Built a CRUD REST API to manage student records with Spring Boot
            and MySQL.
          </p>

          <p><b>Technologies:</b> Java, Spring Boot, MySQL</p>

          <div className="project-links">
            <a href="https://github.com/ashukale1608/Student-Manegment-system" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h4>Smart Contact App</h4>
          <p>
            Web application for managing personal contacts with login,
            contact storage and search functionality.
          </p>

          <p><b>Technologies:</b> Java, Spring Boot, Thymeleaf</p>

          <div className="project-links">
            <a href="https://github.com/ashukale1608/Smart-contect-app" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;