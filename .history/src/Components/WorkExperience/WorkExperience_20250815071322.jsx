import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Web Development Engineer I',
      company: 'Amazon',
      period: 'September 2019 - Present',
      location: 'Remote',
      description: 'Leading the development of highly scalable web applications using React.js and Node.js. Built robust backend APIs and complex AWS infrastructures using CloudFormation with CDK, reducing operational load by 50%. Mentored multiple colleagues in their transition to tech roles and created comprehensive documentation that reduced training time by 30%.',
      achievements: [
        'Designed and developed highly scalable web applications using React.js',
        'Created user experiences that fetched, parsed, and formatted real-time data',
        'Built backend APIs using Node.js and MySQL for web applications',
        'Created and maintained complex AWS infrastructures using CloudFormation with CDK',
        'Reduced operational load by 50% through infrastructure automation',
        'Mentored multiple non-tech employees into successful tech roles',
        'Created documentation that reduced training time by 30%'
      ]
    },
    {
      title: 'Sr. Workflow Analyst',
      company: 'Amazon',
      period: 'May 2016 - August 2019',
      location: 'Remote',
      description: 'Developed and implemented a comprehensive web application serving as an employee information database utilized across Workflow, Operations, Training, and HR departments throughout North America. Created multiple Excel + VBA tools to streamline processes and improve error rates.',
      achievements: [
        'Developed employee information database web app for multiple departments',
        'Utilized by Workflow, Operations, Training, HR across all North America CS sites',
        'Developed multiple Excel + VBA tools for process automation',
        'Improved error rates through automated workflow solutions',
        'Managed headcount planning for ~50 workgroups across 4 US sites',
        'Ensured planned headcount targets were consistently met'
      ]
    },
    {
      title: 'WFM Real-time Analyst & Scheduler',
      company: 'First Call Resolution',
      period: 'August 2014 - May 2016',
      location: 'Roseburg, OR',
      description: 'Developed a web application enabling operations managers to monitor multiple call queues in real-time, significantly improving response times and operational efficiency. This early project sparked my passion for web development and set the foundation for my career in technology.',
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
            <div key={index} className="experience-item">
              <div className="experience-content card">
                <h3 className="experience-title">{experience.title}</h3>
                <div className="experience-company">{experience.company}</div>
                <div className="experience-period">
                  {experience.period} | {experience.location}
                </div>
                <div className="experience-description">
                  {experience.description}
                </div>
                <ul className="experience-achievements">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="experience-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;