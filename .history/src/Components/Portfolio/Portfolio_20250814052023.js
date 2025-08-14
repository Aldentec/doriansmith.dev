import React from 'react';
import './Portfolio.css';
import amazePuzzlesImg from '../../Assets/amaze-puzzles-home.png';
import dualToolsImg from '../../Assets/dualt-tools-home.png';
import composer from '../../Assets/8-bit-composer-home.png';

const Portfolio = () => {
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

  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container">
        <h1 className="display-4 mb-0">Portfolio</h1>
        <p className="lead mb-4">Innovative projects showcasing full-stack development and creative technology</p>
        
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  <img 
                    src={project.image} 
                    className="card-img-top" 
                    alt={`${project.title} - Screenshot of application interface`}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  {project.isComingSoon && (
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-warning">Coming Soon</span>
                    </div>
                  )}
                </div>
                
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  
                  {/* Technology tags */}
                  <div className="mb-3">
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
                        aria-label={`Visit ${project.title} website`}
                      >
                        Visit Website
                      </a>
                    ) : (
                      <button className="btn btn-outline-primary" disabled>
                        Demo Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional project highlights */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-primary text-white p-4 rounded">
              <h3 className="h4 mb-3">Project Highlights</h3>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <h5 className="h6">Accessibility Focus</h5>
                  <p className="mb-0 small">Building inclusive web applications that serve diverse user needs</p>
                </div>
                <div className="col-md-4 mb-3">
                  <h5 className="h6">Creative Technology</h5>
                  <p className="mb-0 small">Merging music production expertise with modern web development</p>
                </div>
                <div className="col-md-4 mb-3">
                  <h5 className="h6">Cloud Architecture</h5>
                  <p className="mb-0 small">Scalable AWS solutions for performance and reliability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;