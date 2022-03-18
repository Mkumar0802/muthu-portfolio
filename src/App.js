
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Navbar from './components/Navbar.js';
 import Project  from './components/Project.js'

function App() {
  return (
     <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skill" element={<Skill />} />
          <Route path="project" element={<Project />} />
      </Routes>
     
    </BrowserRouter>
  </>
  );
}

export default App;
