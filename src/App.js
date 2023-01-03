import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  return (
    <BrowserRouter>
      <div className="navbar">
        <NavBar theme={theme} setTheme={setTheme}/>
      </div> 
      <Routes>
        <Route exact path="/" element={<Home theme={theme} setTheme={setTheme}/>} />
        <Route path="/about" element={<AboutMe theme={theme} setTheme={setTheme}/>} />
        <Route path="/contact" element={<Contact theme={theme} setTheme={setTheme}/>} />
        <Route path="/projects" element={<Projects theme={theme} setTheme={setTheme}/>} />
        <Route path="/skills" element={<Skills theme={theme} setTheme={setTheme}/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
