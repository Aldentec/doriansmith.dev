import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [displayName, setDisplayName] = useState('');
  const fullName = 'Dorian Smith';

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (6 + Math.random() * 4) + 's';
        particlesContainer.appendChild(particle);
      }
    };

    // Typing effect for name
    const typeWriter = () => {
      let i = 0;
      const typing = () => {
        if (i < fullName.length) {
          setDisplayName(fullName.slice(0, i + 1));
          i++;
          setTimeout(typing, 150);
        }
      };
      
      // Start typing after initial animation delay
      setTimeout(typing, 2000);
    };

    createParticles();
    typeWriter();

    // Cleanup function
    return () => {
      const particlesContainer = document.getElementById('particles');
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="particles" id="particles"></div>
      <header className="hero-content">
        <div className="hero-greeting">Hi, my name is</div>
        <h1 className="hero-name">{displayName}</h1>
        <p className="hero-title">Full-Stack Developer & Music Producer</p>
        <p className="hero-description">
          I craft elegant digital experiences with clean code and creative flair. 
          From React frontends to AWS backends, I bring ideas to life through technology.
        </p>
        <div className="cta-buttons">
          <a href="#portfolio" className="btn btn-primary">
            <i className="fas fa-code"></i>
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            <i className="fas fa-envelope"></i>
            Get In Touch
          </a>
        </div>
      </header>
    </section>
  );
};

export default Header;