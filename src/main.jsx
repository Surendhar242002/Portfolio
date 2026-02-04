import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './Header.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Education from './Education.jsx'
import Project from './Project.jsx'
import Contact from './Con1.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>   
  </StrictMode>
)

