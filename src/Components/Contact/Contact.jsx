import React from 'react';
import SendMessage from './SendMessage'

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-primary">
      <div className="container">
        <h1 className="display-4 mb-0 text-white">Contact Me</h1>
        <p className="lead fs-5 fst-italic text-white">Forge a Connection, Begin a New Digital Odyssey</p>

        <div className="row">
          <div className="col-md-6">
            <SendMessage />
          </div>

          <div className="col-md-6">
            <h3 className="mb-3 text-white"> Direct Connect</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong className="text-white">Phone Beacon:</strong> <span class="text-white"> +1 541-430-5377 </span>
              </li>
              <li className="mb-2">
                <strong className="text-white">LinkedIn Portal:</strong> <a href="https://linkedin.com/in/aldentec" target="_blank" rel="noopener noreferrer" className="text-light">linkedin.com/in/aldentec</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;