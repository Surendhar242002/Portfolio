import React from 'react'
import './Home.css'
import suren from './images/suren.png'
import { Link } from 'react-router-dom'

const Home = () => {
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
              <li><Link to="/education">Academics</Link></li>
              <li><Link to="/About">Resume</Link></li>
              <li><Link to="/contact">About</Link></li>
            </ul>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-container">

          {/* LEFT */}
          <div className="hero-left">
            <h1>
              Hello, I'm <br />
              <span>Surendhar R</span>
            </h1>

            <p>
              I am a passionate MERN Stack Developer with hands-on experience in
              creating dynamic and scalable web applications. I work with frontend
              technologies like HTML, CSS, JavaScript, React and backend tools
              like Node.js, Express, MongoDB / MySQL.
            </p>

            <div className="stats">
              <div>
                <h2>1.3 Years</h2>
                <span>Experience</span>
              </div>
              <div>
                <h2>5+</h2>
                <span>Projects</span>
              </div>
            </div>

            <div className="class">
              <div className="social">
                <a href="https://github.com/Surendhar242002"><i className="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/surendhar-r-397b8b369/"><i className="fa fa-linkedin-square"></i></a>
                <a href="mailto:itssuren2409@gmail.com"><i className="fa fa-envelope"></i></a>
                <a href="https://wa.me/919043967775"><i className="fa fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/v3foxxyy._24/"><i className="fa fa-instagram"></i></a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <img src={suren} alt="Surendhar" />
          </div>

        </div>
      </section>
    </>
  )
}

export default Home
