import React, { useState } from 'react';
import SEO from '../SEO/SEO'; 
import './Portfolio.css';
import amazePuzzlesImg from '../../Assets/amaze-puzzles-home.png';
import dualToolsImg from '../../Assets/dualt-tools-home.png';
import composer from '../../Assets/8-bit-composer-home.png';

const Portfolio = () => {
  const [imageLoaded, setImageLoaded] = useState({});

  const projects = [
    {
      title: 'Amaze Puzzles',
      description: 'A platform dedicated to increasing Braille literacy through innovative puzzles. Built with React, Node.js, and AWS (Lambda, S3, CloudFront, DynamoDB).',
      link: 'https://amazepuzzles.com',
      image: amazePuzzlesImg,
      tags: ['React', 'Node.js', 'AWS', 'Accessibility']
    },
    {
      title: 'Dual Tools',
      description: 'Non-profit organization providing accessibility tools and resources. Built with React, Node.js, and AWS.',
      link: 'https://dualtools.org',
      image: dualToolsImg,
      tags: ['React', 'Node.js', 'AWS', 'Non-profit']
    },
    {
      title: '8-Bit Music Composer',
      description: 'An intuitive grid-based composition tool for creating 8-bit chiptune music. Features a visual sequencer interface, real-time audio synthesis, and GenAI-powered melody suggestions. Combines Web Audio API with modern React architecture for seamless music creation.',
      link: 'https://8bitcomposer.com/',
      image: composer,
      tags: ['React', 'Web Audio API', 'GenAI', 'Music Tech']
    }
  ];

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <SEO 
        title="Portfolio - Dorian Smith | React & AWS Projects"
        description="Explore innovative projects including Amaze Puzzles accessibility platform, Dual Tools non-profit, and 8-Bit Music Composer."
        type="article"
        url="https://doriansmith.dev/#portfolio"
      />
      <section id="portfolio" className="py-5 bg-light">
        <div className="container">
          <h1 className="display-4 mb-0">Portfolio</h1>
          <p className="lead mb-4">Innovative projects showcasing full-stack development and creative technology</p>
          
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div 
                  className="card h-100 shadow-sm portfolio-card"
                  tabIndex="0"
                  role="article"
                  aria-labelledby={`project-title-${index}`}
                >
                  <div className="position-relative image-container">
                    <img 
                      src={project.image} 
                      className={`card-img-top ${imageLoaded[index] ? 'loaded' : 'loading'}`}
                      alt={`${project.title} - Screenshot of application interface`}
                      style={{ height: '200px', objectFit: 'cover' }}
                      onLoad={() => handleImageLoad(index)}
                      loading="lazy"
                    />
                    {!imageLoaded[index] && (
                      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-light">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}
                    {project.isComingSoon && (
                      <div className="position-absolute top-0 end-0 m-2">
                        <span className="badge bg-warning">Coming Soon</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="card-body d-flex flex-column">
                    <h5 id={`project-title-${index}`} className="card-title">{project.title}</h5>
                    <p className="card-text flex-grow-1">{project.description}</p>
                    
                    {/* Technology tags */}
                    <div className="mb-3" aria-label="Technologies used">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="badge bg-secondary me-1 mb-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      {project.link !== '#' ? (
                        <a 
                          href={project.link} 
                          className="btn btn-primary"
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.title} website (opens in new tab)`}
                        >
                          <span>Visit Website</span>
                          <i className="fas fa-external-link-alt ms-2" aria-hidden="true"></i>
                        </a>
                      ) : (
                        <button className="btn btn-outline-primary" disabled>
                          <span>Demo Coming Soon</span>
                          <i className="fas fa-clock ms-2" aria-hidden="true"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;