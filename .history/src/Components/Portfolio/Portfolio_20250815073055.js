import React from 'react';
import './Portfolio.css';

// Import your project images
import amazePuzzlesImg from '../../Assets/amaze-puzzles-home.png';
import dualToolsImg from '../../Assets/dualt-tools-home.png';
import composerImg from '../../Assets/8-bit-composer-home.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Amaze Puzzles',
      description: 'A platform dedicated to increasing Braille literacy through innovative puzzles. Built with React, Node.js, and AWS (Lambda, S3, CloudFront, DynamoDB). Features accessibility-first design and voice guidance.',
      image: amazePuzzlesImg,
      technologies: ['React', 'Node.js', 'AWS', 'Accessibility'],
      liveDemo: 'https://amazepuzzles.com',
      github: 'https://github.com/Aldentec',
      gradient: 'var(--primary-gradient)'
    },
    {
      title: 'Dual Tools',
      description: 'Non-profit organization providing accessibility tools and resources. Comprehensive web platform featuring donation management, volunteer coordination, and community engagement tools.',
      image: dualToolsImg,
      technologies: ['React', 'Node.js', 'AWS', 'Non-profit'],
      liveDemo: 'https://dualtools.org',
      github: 'https://github.com/Aldentec',
      gradient: 'var(--secondary-gradient)'
    },
    {
      title: '8-Bit Music Composer',
      description: 'An intuitive grid-based composition tool for creating 8-bit chiptune music. Features a visual sequencer interface, real-time audio synthesis, and GenAI-powered melody suggestions.',
      image: composerImg,
      technologies: ['React', 'Web Audio API', 'GenAI', 'Music Tech'],
      liveDemo: 'https://8bitcomposer.com/',
      github: 'https://github.com/Aldentec',
      gradient: 'var(--accent-gradient)'
    },
    {
      title: 'Portfolio Website',
      description: 'This very website! A modern, responsive portfolio showcasing my work and skills. Built with React and featuring smooth animations, dark theme, and mobile-first design.',
      icon: 'fas fa-code',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveDemo: 'https://doriansmith.dev',
      github: 'https://github.com/Aldentec',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing innovation through code and creativity
        </p>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card card">
              <div className="project-image-container">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={`${project.title} - Screenshot showing the main interface and features of the application`}
                    className="project-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-icon-container" style={{ background: project.gradient }}>
                    <i className={project.icon} aria-hidden="true"></i>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="overlay-content">
                    <a 
                      href={project.liveDemo} 
                      className="overlay-btn btn-demo"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      className="overlay-btn btn-github"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <i className="fab fa-github" aria-hidden="true"></i>
                      Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} website`}
                  >
                    <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                  >
                    <i className="fab fa-github" aria-hidden="true"></i>
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;