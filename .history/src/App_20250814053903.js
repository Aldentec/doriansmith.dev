import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About'
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import SEO from './Components/SEO/SEO';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const getSEOData = () => {
    switch(currentSection) {
      case 'portfolio':
        return {
          title: "Portfolio - Dorian Smith | React & AWS Projects",
          description: "Explore innovative projects including Amaze Puzzles accessibility platform, Dual Tools non-profit, and 8-Bit Music Composer.",
          type: "article",
          url: "https://doriansmith.dev/#portfolio"
        };
      case 'about':
        return {
          title: "About - Dorian Smith | Full-Stack Developer Story",
          description: "Learn about Dorian Smith's journey as a full-stack developer, from Amazon engineer to accessibility advocate.",
          type: "article", 
          url: "https://doriansmith.dev/#about"
        };
      // Add more cases for other sections
      default:
        return {}; // Will use default values from SEO component
    }
  };

  return (
    <div>
      <SEO {...getSEOData()} />
      <Nav />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;