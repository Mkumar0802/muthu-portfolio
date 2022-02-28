
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';

function App() {
  return ( <>
    <BrowserRouter>
      <Header /> 
      <Routes>
      <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skill" element={<Skill />} />
        
      </Routes>
     
    </BrowserRouter>
  </>
  );
}

export default App;
