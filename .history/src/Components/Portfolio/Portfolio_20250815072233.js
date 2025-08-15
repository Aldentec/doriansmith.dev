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
            <div key={index} className="project-card card">
              <div className="project-image-container">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    className="project-image-photo"
                    loading="lazy"
                  />
                ) : (
                  <div 
                    className="project-image-icon" 
                    style={{ background: project.gradient }}
                  >
                    <i className={project.icon}></i>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="overlay-btn btn-demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="overlay-btn btn-github"
                    >
                      <i className="fab fa-github"></i>
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
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amazon Projects Note */}
        <div className="amazon-projects-note">
          <div className="note-content card">
            <h3>
              <i className="fab fa-amazon"></i>
              Amazon Projects
            </h3>
            <p>
              During my time at Amazon, I developed several proprietary internal applications including 
              an <strong>Employee Information Database</strong> serving multiple departments across North America, 
              and a <strong>Real-time Queue Monitor</strong> for operations management. These projects showcase 
              enterprise-level development but remain confidential per Amazon's policies.
            </p>
            <div className="amazon-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">Enterprise Scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
                    import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Amaze Puzzles',
      description: 'An innovative accessibility platform designed to make puzzle games enjoyable for everyone, including users with visual impairments. Features voice guidance and adaptive interfaces.',
      icon: 'fas fa-puzzle-piece',
      technologies: ['React', 'Node.js', 'AWS', 'Accessibility'],
      liveDemo: '#',
      github: '#',
      gradient: 'var(--primary-gradient)'
    },
    {
      title: 'Dual Tools Non-Profit',
      description: 'A comprehensive web platform for a non-profit organization, featuring donation management, volunteer coordination, and community engagement tools with a focus on user experience.',
      icon: 'fas fa-hands-helping',
      technologies: ['React', 'Express', 'MySQL', 'Stripe API'],
      liveDemo: '#',
      github: '#',
      gradient: 'var(--secondary-gradient)'
    },
    {
      title: '8-Bit Music Composer',
      description: 'A creative web application that allows users to compose retro-style music with an intuitive interface. Combines my passion for music production with web development skills.',
      icon: 'fas fa-music',
      technologies: ['JavaScript', 'Web Audio API', 'Canvas', 'Music Theory'],
      liveDemo: '#',
      github: '#',
      gradient: 'var(--accent-gradient)'
    },
    {
      title: 'Employee Information Database',
      description: 'Enterprise-level web application serving as a comprehensive employee database utilized across multiple departments at Amazon. Built with scalability and performance in mind.',
      icon: 'fas fa-database',
      technologies: ['React', 'Node.js', 'MySQL', 'AWS'],
      liveDemo: '#',
      github: '#',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
    },
    {
      title: 'Real-time Queue Monitor',
      description: 'Operations management tool enabling real-time monitoring of multiple call queues with analytics dashboard. Significantly improved response times and operational efficiency.',
      icon: 'fas fa-chart-line',
      technologies: ['JavaScript', 'WebSocket', 'Chart.js', 'Express'],
      liveDemo: '#',
      github: '#',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Portfolio Website',
      description: 'This very website! A modern, responsive portfolio showcasing my work and skills. Built with React and featuring smooth animations, dark theme, and mobile-first design.',
      icon: 'fas fa-code',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveDemo: '#',
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
            <div key={index} className="project-card card">
              <div 
                className="project-image" 
                style={{ background: project.gradient }}
              >
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;