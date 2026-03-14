import React from "react";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Home() {

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="home">
            <div className="overlay">
                <div className="home-container">

                    <h1>
                        Hi, I'm <span className="name">Ashwini Kale</span>
                    </h1>

                    <h2 className="typing">
                        <TypeAnimation
                            sequence={[
                                "Backend Developer",
                                2000,
                                "Frontend Developer",
                                2000,
                                "Full Stack Developer",
                                2000,
                                "Microservices Developer",
                                2000
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>

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
                </div>
            </div>
        </section>
    );
}

export default Home;