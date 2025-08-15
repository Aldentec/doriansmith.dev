import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const API_ENDPOINT = 'https://6zbd618rob.execute-api.us-west-2.amazonaws.com/prod';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST', 
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data.message);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
      icon: 'fas fa-phone',
      title: 'Phone',
      subtitle: '+1 541-430-5377',
      href: 'tel:+15414305377',
      description: 'Call me directly'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">
          Ready to bring your next project to life? Let's discuss how we can create something amazing together.
        </p>
        
        <div className="contact-main-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-container card">
              <h3 className="contact-form-title">
                <i className="fas fa-paper-plane"></i>
                Send a Message
              </h3>
              
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <i className="fas fa-check-circle"></i>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <i className="fas fa-exclamation-circle"></i>
                  Failed to send message. Please try again or email me directly.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="contact-methods-section">
            <h3 className="contact-methods-title">Other Ways to Connect</h3>
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
          </div>
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
      </div>
    </section>
  );
};

export default Contact;