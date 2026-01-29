// Project.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

import img from "./images/SLetter.png";
import pet from "./images/petshop.webp";
import cafe from "./images/cafeshop.png";
import arcade from "./images/arcade.png";
import lens from "./images/lenskart.png";
import admin from "./images/adminpanel.png";
import port from "./images/portfolio.png";

const Project = () => {
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

      {/* PROJECT SECTION */}
      <main className="container">
        <header className="header">
          <h2>Projects</h2>
        </header>

        <section className="container_1">

          <div className="image_card">
            <img src={port} alt="Portfolio Project" />
            <div className="card_content">
              <h3>Portfolio</h3>
              <p>
                Modern developed portfolio template <br />
                using React.js
              </p>
            </div>
          </div>

          <div className="image_card">
            <img src={pet} alt="Petshop Project" />
            <div className="card_content">
              <h3>Petshop</h3>
              <p>
                Petshop was developed by template <br />
                using HTML, CSS and Bootstrap
              </p>
            </div>
          </div>

          <div className="image_card">
            <img src={cafe} alt="Cafeshop Project" />
            <div className="card_content">
              <h3>Cafeshop</h3>
              <p>
                Modern developed cafeshop template <br />
                using HTML, CSS and Bootstrap
              </p>
            </div>
          </div>

          <div className="image_card">
            <img src={arcade} alt="Arcade Gaming Hub Project" />
            <div className="card_content">
              <h3>Arcade Gaming Hub</h3>
              <p>
                Modern developed Gaming Hub template <br />
                using HTML and CSS
              </p>
            </div>
          </div>

          <div className="image_card">
            <img src={lens} alt="Lenskart Project" />
            <div className="card_content">
              <h3>Lenskart</h3>
              <p>
                Lenskart was developed by template <br />
                using HTML, CSS, Bootstrap and JavaScript
              </p>
            </div>
          </div>

          <div className="image_card">
            <img src={admin} alt="Admin Panel Project" />
            <div className="card_content">
              <h3>Admin Panel</h3>
              <p>
                Admin panel was developed using <br />
                HTML, CSS, Node.js and MongoDB
              </p>
            </div>
          </div>

        </section>
      </main>
    </>
  );
};

export default Project;
