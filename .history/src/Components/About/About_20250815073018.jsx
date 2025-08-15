import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  const specializations = [
    'React Development',
    'Node.js Backend',
    'AWS Cloud Architecture',
    'Music Production',
    'Accessibility Focus',
    'UI/UX Design'
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate developer with a unique blend of technical expertise and creative vision
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <article>
              <h3 className="sr-only">Professional Background</h3>
              <p className="lead">
                My journey in technology has been an exciting adventure of continuous learning and innovation. 
                As a <strong>Full-Stack Developer at Amazon</strong>, I've had the privilege of working on large-scale 
                applications that serve millions of users worldwide.
              </p>
              
              <h4 className="about-subsection-title">Technical Expertise</h4>
              <p className="lead">
                I specialize in modern web technologies including <strong>React.js</strong>, <strong>Node.js</strong>, 
                and <strong>AWS cloud solutions</strong>. My approach combines technical excellence with user-centered 
                design, ensuring that every application I build is both performant and intuitive.
              </p>
              
              <h4 className="about-subsection-title">Creative Background</h4>
              <p className="lead">
                Beyond coding, I'm a passionate <strong>music producer</strong> who finds inspiration in the rhythm 
                of creativity. This artistic background brings a unique perspective to my development work, 
                helping me craft digital experiences that resonate with users on an emotional level.
              </p>
              
              <h4 className="about-subsection-title">Accessibility Advocacy</h4>
              <p className="lead">
                I'm particularly passionate about <strong>accessibility</strong> and creating inclusive digital 
                experiences that everyone can enjoy, regardless of their abilities. This commitment drives me 
                to build applications that are not just functional, but truly accessible to all users.
              </p>
            </article>
            
            <div className="specializations">
              <h4 className="specializations-title">Core Specializations</h4>
              <div className="specializations-list">
                {specializations.map((spec, index) => (
                  <span key={index} className="specialization-tag">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image-container">
            <div 
              className={`image-flip-container ${isFlipped ? 'flipped' : ''}`}
              onClick={handleImageClick}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleImageClick();
                }
              }}
              aria-label="Click to reveal music passion"
            >
              <div className="image-front">
                <img 
                  src="https://s3.us-west-2.amazonaws.com/www.doriansmith.dev/dorian-about-me-section.JPG" 
                  alt="Dorian Smith, Full-Stack Developer, working at his desk with multiple monitors displaying code"
                  loading="lazy"
                />
              </div>
              <div className="image-back">
                <div className="image-back-content">
                  <i className="fas fa-music music-icon" aria-hidden="true"></i>
                  <h5>Music Producer</h5>
                  <p>
                    When I'm not coding, you'll find me creating beats and melodies that inspire my development work.
                  </p>
                </div>
              </div>
            </div>
            
            {showSuccess && (
              <div className="success-message" role="alert">
                <i className="fas fa-heart" aria-hidden="true"></i>
                Thanks for discovering my musical side!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;