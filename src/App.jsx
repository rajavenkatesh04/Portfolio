import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { scroller } from "react-scroll"; 
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CoolCard from "./components/CoolCard";

function App() {
  
  return (
    <Router>
      <Header />
      <Hero />
      <Skills />
      {/* <Projects />
      <Contact />
      > */}
      <Footer />
    </Router>
  );
}

export default App;
