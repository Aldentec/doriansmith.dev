import React, { useState, useEffect } from 'react';
import '../../App.css';
import './About.css';
import dorianSimpson from '../../Assets/dorian-simpson.jpg';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipCount, setFlipCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  // Image URLs - replace the second one with your actual easter egg image
  const frontImage = "https://s3.us-west-2.amazonaws.com/www.doriansmith.dev/dorian-about-me-section.JPG";
  const backImage = dorianSimpson

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
    setFlipCount(prev => prev + 1);
    
    // Add success animation
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 300);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleImageClick();
    }
  };

  // Easter egg: Special message after multiple flips
  useEffect(() => {
    if (flipCount === 5) {
      console.log("🎉 You found the easter egg! You're persistent - I like that in a developer!");
    } else if (flipCount === 10) {
      console.log("🚀 Wow, you really like clicking! Want to collaborate on a project?");
    }
  }, [flipCount]);

  return (
    <section id="about" className="py-5 bg-light" aria-labelledby="about-heading">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <header>
              <h1 id="about-heading" className="display-4 mb-0">What I Do</h1>
            </header>
            
            <article>
              <h2 className="sr-only">About Dorian Smith - Full-Stack Developer</h2>
              
              <p className="lead custom-paragraph">
                Hey there! I'm <strong>Dorian Smith</strong>, a dedicated <strong>full-stack developer</strong> with an imaginative flair. 
                My journey in technology has been nothing short of exhilarating. 
                I craft elegant front-end interfaces and architect robust back-end solutions, thriving on the boundless possibilities of code.
              </p>
              
              <p className="lead custom-paragraph">
                With a sharp design eye and insatiable curiosity, I bridge creativity with functionality. 
                I'm passionate about crafting seamless user experiences. 
                Proficient in <strong>JavaScript frameworks</strong> (<strong>React</strong> and <strong>Node.js</strong>), <strong>HTML/CSS</strong>, <strong>AWS</strong>, database administration, and more. 
                I bring ideas to life with meticulous code.
              </p>
              
              <p className="lead custom-paragraph">
                My projects showcase my commitment to excellence. 
                From <strong>dynamic web applications</strong> to <strong>optimized databases</strong> and <strong>cloud solutions</strong>, I approach each challenge with enthusiasm and determination.
              </p>
              
              <p className="lead custom-paragraph">
                In addition to my tech endeavors, I'm also a passionate <strong>music producer</strong>. 
                Creating and producing music allows me to explore a different side of my creativity, bringing a unique perspective to my development work. 
                Whether it's coding or composing, I strive for innovation and excellence.
              </p>
              
              <p className="lead custom-paragraph">
                I'm excited to collaborate on projects that push the boundaries of what's possible. 
                Let's embark on this digital journey together, and unleash imagination through the power of code.
              </p>
              
              {/* Additional SEO content */}
              <div className="mt-4">
                <h3 className="h5 mb-2">Specializations:</h3>
                <ul className="list-inline">
                  <li className="list-inline-item badge bg-primary me-2 mb-2">React Development</li>
                  <li className="list-inline-item badge bg-primary me-2 mb-2">Node.js</li>
                  <li className="list-inline-item badge bg-primary me-2 mb-2">AWS Cloud Solutions</li>
                  <li className="list-inline-item badge bg-primary me-2 mb-2">Full-Stack Development</li>
                  <li className="list-inline-item badge bg-primary me-2 mb-2">Accessibility Tools</li>
                  <li className="list-inline-item badge bg-primary me-2 mb-2">Music Production</li>
                </ul>
              </div>
            </article>
          </div>
          
          <div className="col-md-6">
            <figure>
              <div 
                className={`image-flip-container ${isFlipped ? 'flipped' : ''} ${showSuccess ? 'flip-success' : ''}`}
                onClick={handleImageClick}
                onKeyPress={handleKeyPress}
                tabIndex="0"
                role="button"
                aria-label={`Profile image of Dorian Smith. Click to flip and see another image. Currently showing ${isFlipped ? 'back' : 'front'} image.`}
                aria-pressed={isFlipped}
              >
                <div className="image-flip-inner">
                  {/* Front Image */}
                  <div className="image-flip-front">
                    <img
                      src={frontImage}
                      className="about-image"
                      alt="Dorian Smith - Professional headshot showing full-stack developer and music producer"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                  </div>
                  
                  {/* Back Image */}
                  <div className="image-flip-back">
                    <img
                      src={backImage}
                      className="about-image"
                      alt="Dorian Smith - As a simpsons character"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;