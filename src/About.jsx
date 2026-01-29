// About.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SkillBar from "./Skillbar.jsx";
import "./About.css";
import cv from "./Resume/Surendhar_R_Resume.pdf";

const About = () => {
  const navigate = useNavigate();

  const downloadcv = () => {
    alert("Do you want to download the Resume/CV ?");
  };

  const goToProjects = () => {
    navigate("/project");
  };

  return (
    <>
      {/* HEADER */}
      <header className="header_container">
        <div className="stacker">
          <h1>SURENDHAR R</h1>
          <h3>MERN Stack Developer</h3>
        </div>

        <div className="stacker">
          <div className="stacker2">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/project">Project</Link></li>
              <li><Link to="/education">Skills</Link></li>
              <li><Link to="/about">Resume</Link></li>
              <li><Link to="/contact">About</Link></li>
            </ul>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <main className="body">
        <section className="card">
          <div className="about-text">
            <h1>I am a Java Full Stack Developer</h1>
            <p>
              I am a dedicated and enthusiastic learner currently pursuing
              full-stack web development. I have a strong interest in building
              responsive, user-friendly websites and applications. As a student,
              I focus on strengthening my fundamentals in HTML, CSS, JavaScript,
              React, and backend technologies.
            </p>

            <div className="buttons">
              <a href={cv} download>
                <button className="primary" onClick={downloadcv}>
                  Download CV
                </button>
              </a>

              <button className="secondary" onClick={goToProjects}>
                My Projects
              </button>
            </div>
          </div>

          <div className="grid">
            <div className="skills-grid">
              <SkillBar label="HTML" value={90} />
              <SkillBar label="CSS" value={90} />
              <SkillBar label="BOOTSTRAP" value={95} />
              <SkillBar label="JAVASCRIPT" value={90} />
            </div>

            <div className="skills-grid">
              <SkillBar label="REACT.JS" value={85} />
              <SkillBar label="NODE.JS" value={80} />
              <SkillBar label="MONGODB" value={90} />
              <SkillBar label="MYSQL" value={85} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
