import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'fab fa-react',
      skills: [
        'React.js & Modern JavaScript (ES6+)',
        'HTML5 & CSS3 (Responsive Design)',
        'TypeScript for Type Safety',
        'State Management (Redux, Context API)',
        'Component Libraries & Design Systems',
        'Performance Optimization'
      ]
    },
    {
      title: 'Backend & Database',
      icon: 'fas fa-server',
      skills: [
        'Node.js & Express.js',
        'RESTful API Development',
        'MySQL & Database Design',
        'Authentication & Security',
        'Microservices Architecture',
        'API Documentation & Testing'
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fab fa-aws',
      skills: [
        'AWS (EC2, S3, Lambda, RDS)',
        'CloudFormation & Infrastructure as Code',
        'Docker & Containerization',
        'CI/CD Pipelines',
        'Linux Server Administration',
        'Monitoring & Performance Optimization'
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: 'fas fa-tools',
      skills: [
        'Git & GitHub (Version Control)',
        'Agile Development Methodologies',
        'Code Review & Collaboration',
        'Testing (Unit, Integration, E2E)',
        'Documentation & Technical Writing',
        'Team Leadership & Mentoring'
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A comprehensive toolkit for building modern web applications
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <article key={index} className="skill-category card">
              <h3 className="skill-category-title">
                <i className={category.icon} aria-hidden="true"></i>
                {category.title}
              </h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;