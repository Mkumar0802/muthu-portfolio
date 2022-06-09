
import React, { useEffect, useState }  from 'react'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'; 
import Skill from './components/Skill';
import Navbar from './components/Navbar.js';
 import Project  from './components/Project.js'
//  import Header from './components/Header';

function App() {
  
  
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    setProgress(100)
  },[])
  

  return (
     <>
    <BrowserRouter>
      <Navbar/>
      
      <LoadingBar color="#005757" progress={progress}  waitingTime={3000}  onLoaderFinished={() => setProgress(0)} />
      
     
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
