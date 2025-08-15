import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Web Development Engineer',
      company: 'Amazon',
      period: '2019 - Present',
      location: 'Seattle, WA (Remote)',
      description: 'Leading full-stack development initiatives for high-traffic consumer applications. Architecting scalable solutions using React, Node.js, and AWS services while mentoring junior developers and driving technical innovation across multiple product teams.',
      achievements: [
        'Architected and deployed microservices handling 10M+ daily requests',
        'Led migration from monolithic to serverless architecture, reducing costs by 40%',
        'Implemented comprehensive accessibility features improving WCAG compliance',
        'Mentored 8+ junior developers in modern web development practices',
        'Designed and built real-time data visualization dashboards',
        'Optimized application performance resulting in 60% faster load times'
      ]
    },
    {
      title: 'Software Development Engineer',
      company: 'Amazon',
      period: '2017 - 2019',
      location: 'Seattle, WA',
      description: 'Developed and maintained customer-facing web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality features while ensuring optimal user experience and code maintainability.',
      achievements: [
        'Built responsive React components serving millions of users daily',
        'Implemented automated testing strategies reducing bug reports by 45%',
        'Developed REST APIs with Node.js and Express.js',
        'Contributed to design system adoption across 15+ product teams',
        'Participated in code reviews and technical documentation',
        'Collaborated with UX designers to implement pixel-perfect interfaces'
      ]
    },
    {
      title: 'Operations Research Analyst',
      company: 'Amazon',
      period: '2015 - 2017',
      location: 'Phoenix, AZ',
      description: 'Specialized in workforce management and operational analytics for customer service operations. This early project sparked my passion for web development and set the foundation for my career in technology.',
      achievements: [
        'Developed real-time call queue monitoring web application',
        'Enabled operations managers to view multiple queues simultaneously',
        'Significantly improved response times and operational efficiency',
        'Created foundation for transition into full-time web development',
        'Managed workforce scheduling and real-time analysis',
        'Optimized staffing levels based on call volume patterns'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          Building scalable solutions and leading technical innovation
        </p>
        
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <article key={index} className="experience-item">
              <div className="experience-content card">
                <h3 className="experience-title">{experience.title}</h3>
                <h4 className="experience-company">{experience.company}</h4>
                <div className="experience-period">
                  <time dateTime={experience.period.split(' - ')[0]}>{experience.period}</time> | {experience.location}
                </div>
                <p className="experience-description">
                  {experience.description}
                </p>
                <div className="experience-achievements">
                  <h5 className="achievements-title">Key Achievements</h5>
                  <ul className="achievements-list">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="experience-dot"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;