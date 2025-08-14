import React from 'react';
import './Portfolio.css';
import amazePuzzlesImg from '../../Assets/amaze-puzzles-home.png';
import dualToolsImg from '../Assets/dual-tools-home.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Amaze Puzzles',
      description: 'A platform dedicated to increasing Braille literacy through innovative puzzles. Built with React, Node.js, and AWS (Lambda, S3, CloudFront, DynamoDB).',
      link: 'https://amazepuzzles.com',
      image: amazePuzzlesImg
    },
    {
      title: 'Dual Tools',
      description: 'Non-profit organization providing accessibility tools and resources. Built with React, Node.js, and AWS.',
      link: 'https://dualtools.org',
      image: dualToolsImg
    }
  ];

  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container">
        <h1 className="display-4 mb-0">Portfolio</h1>
        <p className="lead fs-5 fst-italic">Showcasing My Web Creations</p>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit Website</a>
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
