import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {

  return (
    <BrowserRouter>
      <div className="navbar">
        <NavBar/>
      </div> 
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
