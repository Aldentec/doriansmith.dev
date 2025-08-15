import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: 'fab fa-github',
      href: 'https://github.com/Aldentec',
      label: 'GitHub'
    },
    {
      icon: 'fab fa-linkedin',
      href: 'https://www.linkedin.com/in/aldentec',
      label: 'LinkedIn'
    },
    {
      icon: 'fas fa-envelope',
      href: 'mailto:contact@doriansmith.dev',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h2 className="footer-name">Dorian Smith</h2>
              <p className="footer-tagline">
                Full-Stack Developer & Music Producer
              </p>
              <p className="footer-description">
                Crafting elegant digital experiences with clean code and creative flair. 
                Let's build something amazing together.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h3>Quick Links</h3>
                <nav aria-label="Footer navigation">
                  <ul className="footer-nav">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              
              <div className="footer-section">
                <h3>Get In Touch</h3>
                <div className="footer-contact">
                  <p>
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:contact@doriansmith.dev">contact@doriansmith.dev</a>
                  </p>
                  <p>
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                    Roseburg, Oregon, USA
                  </p>
                  <p>
                    <i className="fas fa-clock" aria-hidden="true"></i>
                    Available for projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} Dorian Smith. Crafted with ❤️ and lots of ☕</p>
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="social-link"
                >
                  <i className={social.icon} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;