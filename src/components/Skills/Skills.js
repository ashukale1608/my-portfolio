import React from "react";
import "./Skills.css";

import { FaJava, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiApachekafka, SiMysql, SiJavascript, SiTypescript } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2>Technical Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <FaJava className="skill-icon" />
          <p>Java</p>
        </div>

        <div className="skill-card">
          <SiSpringboot className="skill-icon" />
          <p>Spring Boot</p>
        </div>

        <div className="skill-card">
          <SiApachekafka className="skill-icon" />
          <p>Kafka</p>
        </div>

        <div className="skill-card">
          <FaNodeJs className="skill-icon" />
          <p>Node.js</p>
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon" />
          <p>React</p>
        </div>

        <div className="skill-card">
          <SiMysql className="skill-icon" />
          <p>MySQL</p>
        </div>

        <div className="skill-card">
          <SiJavascript className="skill-icon" />
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <SiTypescript className="skill-icon" />
          <p>TypeScript</p>
        </div>

        <div className="skill-card">
          <FaDocker className="skill-icon" />
          <p>Docker</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;