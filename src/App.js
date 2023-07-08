import './App.css';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import {Routes,Route} from "react-router-dom"
import { Element } from 'react-scroll';
import React, { useEffect } from 'react';
import AOS from 'aos';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out', 
      once: true 
    });
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Element name='home-page'><Home></Home></Element>
      <Element name='about-page'><About></About></Element>
      <Element name='skills-page'><Skills></Skills></Element>
      <Element name='project-page'><Projects></Projects></Element>
      <Element name='contact-page'><Contact></Contact></Element>
    </div>
  );
}

export default App;
