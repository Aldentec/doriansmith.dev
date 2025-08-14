import React from 'react';
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
  return (
    <div>
      <SEO /> 
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