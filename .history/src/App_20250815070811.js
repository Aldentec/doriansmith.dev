import React, { useState, useEffect } from 'react';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import SEO from './Components/SEO/SEO';
import ScrollProgress from './Components/ScrollProgress/ScrollProgress';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Smooth scrolling for navigation links
    const initSmoothScrolling = () => {
      const navLinks = document.querySelectorAll('a[href^="#"]');
      
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
    };

    // Intersection Observer for animations
    const initScrollAnimations = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            // Update current section
            const sectionId = entry.target.id;
            if (sectionId) {
              setCurrentSection(sectionId);
            }
          }
        });
      }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      });

      // Observe sections for animation and tracking
      const sectionsToObserve = document.querySelectorAll(
        'section, .skill-category, .project-card, .experience-item, .contact-method'
      );
      
      sectionsToObserve.forEach(el => observer.observe(el));
    };

    // Initialize functions
    initSmoothScrolling();
    initScrollAnimations();

    // Cleanup function
    return () => {
      // Remove event listeners if needed
    };
  }, []);

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
      case 'skills':
        return {
          title: "Skills - Dorian Smith | React, Node.js, AWS Expertise",
          description: "Comprehensive technical skills including React.js, Node.js, AWS cloud solutions, and full-stack development.",
          type: "article",
          url: "https://doriansmith.dev/#skills"
        };
      case 'experience':
        return {
          title: "Experience - Dorian Smith | Amazon Web Developer",
          description: "Professional experience as Web Development Engineer at Amazon, building scalable applications and leading technical innovation.",
          type: "article",
          url: "https://doriansmith.dev/#experience"
        };
      case 'contact':
        return {
          title: "Contact - Dorian Smith | Let's Work Together",
          description: "Get in touch to discuss your next project. Available for full-stack development, React applications, and AWS solutions.",
          type: "article",
          url: "https://doriansmith.dev/#contact"
        };
      default:
        return {}; // Will use default values from SEO component
    }
  };

  return (
    <div className="App">
      <SEO {...getSEOData()} />
      <ScrollProgress />
      <Nav currentSection={currentSection} />
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