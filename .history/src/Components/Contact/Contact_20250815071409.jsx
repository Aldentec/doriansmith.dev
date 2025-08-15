import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email Me',
      subtitle: 'contact@doriansmith.dev',
      href: 'mailto:contact@doriansmith.dev',
      description: 'Send me an email for project inquiries'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      subtitle: 'Connect with me',
      href: 'https://www.linkedin.com/in/aldentec',
      description: 'Let\'s connect professionally'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      subtitle: 'View my code',
      href: 'https://github.com/Aldentec',
      description: 'Check out my repositories'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <div className="contact-content">
          <p className="contact-description">
            Ready to bring your next project to life? I'm always excited to collaborate on innovative 
            solutions that make a difference. Let's discuss how we can create something amazing together.
          </p>
          
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.href} 
                className="contact-method card"
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-icon">
                  <i className={method.icon}></i>
                </div>
                <div className="contact-info">
                  <div className="contact-title">{method.title}</div>
                  <div className="contact-subtitle">{method.subtitle}</div>
                  <div className="contact-description-small">{method.description}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Additional Contact Information */}
          <div className="contact-additional">
            <div className="contact-availability">
              <h3>
                <i className="fas fa-clock"></i>
                Availability
              </h3>
              <p>
                Currently available for freelance projects and full-time opportunities. 
                I typically respond to emails within 24 hours.
              </p>
            </div>
            
            <div className="contact-location">
              <h3>
                <i className="fas fa-map-marker-alt"></i>
                Location
              </h3>
              <p>
                Based in Roseburg, Oregon, USA. Open to remote work worldwide 
                and local collaborations in the Pacific Northwest.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="contact-cta">
            <h3>Ready to Start a Project?</h3>
            <p>
              Whether you need a full-stack web application, a React frontend, 
              or AWS cloud solutions, I'm here to help bring your vision to life.
            </p>
            <a href="mailto:contact@doriansmith.dev" className="btn btn-primary btn-large">
              <i className="fas fa-paper-plane"></i>
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;