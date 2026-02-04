import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
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
   
    </>




  )
}

export default Header