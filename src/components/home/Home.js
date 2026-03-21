import React from "react";
import "./Home.css";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <section id="home" className="home">
                <div className="overlay">

                    <motion.div
                        className="home-container"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >

                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Hi, I'm <span className="highlight">Ashwini Kale</span>
                        </motion.h1>

                        <h2 className="typing">
                            <ReactTyped
                                strings={[
                                    "Backend Developer",
                                    "Java Developer",
                                    "Full Stack Developer"
                                ]}
                                typeSpeed={60}
                                backSpeed={40}
                                loop
                            />
                        </h2>
                        <motion.div
                            className="about-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <p>
                                Backend Developer with <b>1+ year of experience</b> building scalable
                                applications using <b>Java, Spring Boot, Node.js and Microservices</b>.
                            </p>

                            <p>
                                Experienced in building secure <b>REST APIs</b>, implementing
                                <b>JWT & Keycloak authentication</b>, and designing
                                <b>event-driven systems using Apache Kafka</b>.
                            </p>

                            <p>
                                I also have frontend development knowledge using
                                <b> React, Angular, JavaScript and TypeScript</b>.
                            </p>
                        </motion.div>
                        <div className="buttons">

                            <button className="btn" onClick={scrollToProjects}>
                                View Projects
                            </button>

                            <button className="btn" onClick={scrollToContact}>
                                Contact Me
                            </button>

                            <a className="btn"
                                href="https://github.com/ashukale1608"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaGithub /> GitHub
                            </a>

                            <a className="btn"
                                href="https://www.linkedin.com/in/ashwini-kale-201844287/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedin /> LinkedIn
                            </a>

                            <a className="btn"
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaDownload /> Resume
                            </a>

                        </div>
                    </motion.div>
                </div>
            </section >
        </motion.section>
    );
}

export default Home;