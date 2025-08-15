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
              <p className="lead">
                My journey in technology has been an exciting adventure of continuous learning and innovation. 
                As a <strong>Full-Stack Developer at Amazon</strong>, I've had the privilege of working on large-scale 
                applications that serve millions of users worldwide.
              </p>
              
              <p className="lead">
                I specialize in modern web technologies including <strong>React.js</strong>, <strong>Node.js</strong>, 
                and <strong>AWS cloud solutions</strong>. My approach combines technical excellence with user-centered 
                design, ensuring that every application I build is both performant and intuitive.
              </p>
              
              <p className="lead">
                Beyond coding, I'm a passionate <strong>music producer</strong> who finds inspiration in the rhythm 
                of creativity. This artistic background brings a unique perspective to my development work, 
                helping me craft digital experiences that resonate with users on an emotional level.
              </p>
              
              <p className="lead">
                I'm particularly passionate about <strong>accessibility</strong> and creating inclusive digital 
                experiences that everyone can enjoy, regardless of their abilities.
              </p>
              
              {/* Specializations */}
              <div className="specializations">
                <h3 className="specializations-title">Specializations:</h3>
                <div className="specializations-list">
                  <span className="specialization-tag">React Development</span>
                  <span className="specialization-tag">Node.js</span>
                  <span className="specialization-tag">AWS Cloud Solutions</span>
                  <span className="specialization-tag">Full-Stack Development</span>
                  <span className="specialization-tag">Accessibility Tools</span>
                  <span className="specialization-tag">Music Production</span>
                </div>
              </div>
            </article>
          </div>
          
          <div className="about-image-container">
            <figure>
              <div 
                className={`image-flip-container ${isFlipped ? 'flipped' : ''} ${showSuccess ? 'success' : ''}`}
                onClick={handleImageClick}
              >
                <div className="image-front">
                  <img 
                    src="https://s3.us-west-2.amazonaws.com/www.doriansmith.dev/dorian-about-me-section.JPG" 
                    alt="Dorian Smith - Full-Stack Developer" 
                    loading="lazy"
                  />
                </div>
                <div className="image-back">
                  <div className="image-back-content">
                    <i className="fas fa-music music-icon"></i>
                    <h3>Music Producer</h3>
                    <p>Creating beats and melodies that inspire my code</p>
                  </div>
                </div>
              </div>
              {showSuccess && (
                <div className="success-message">
                  <i className="fas fa-heart"></i>
                  Thanks for discovering my musical side!
                </div>
              )}
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;