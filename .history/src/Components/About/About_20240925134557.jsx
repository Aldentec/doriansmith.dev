import React from 'react';
import '../../App.css';
import './About.css';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4 mb-0">About Me</h1>
            <p className="lead custom-paragraph">
              Hey there! I'm Dorian Smith, a dedicated full-stack developer with an imaginative flair. 
              My journey in technology has been nothing short of exhilarating. 
              I craft elegant front-end interfaces and architect robust back-end solutions, thriving on the boundless possibilities of code.
            </p>
            <p className="lead custom-paragraph">
              With a sharp design eye and insatiable curiosity, I bridge creativity with functionality. 
              I'm passionate about crafting seamless user experiences. 
              Proficient in JavaScript frameworks (React and Node), HTML/CSS, AWS, database administration, and more. 
              I bring ideas to life with meticulous code.
            </p>
            <p className="lead custom-paragraph">
              My projects showcase my commitment to excellence. 
              From dynamic web apps to optimized databases and cloud solutions, I approach each challenge with enthusiasm and determination.
            </p>
            <p className="lead custom-paragraph">
              In addition to my tech endeavors, I'm also a passionate music producer. 
              Creating and producing music allows me to explore a different side of my creativity, bringing a unique perspective to my development work. 
              Whether it's coding or composing, I strive for innovation and excellence.
            </p>
            <p className="lead custom-paragraph">
              I'm excited to collaborate on projects that push the boundaries of what's possible. 
              Let's embark on this digital journey together, and unleash imagination through the power of code.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://s3.us-west-2.amazonaws.com/www.doriansmith.dev/dorian-about-me-section.JPG"
              className="img-fluid rounded-circle about-image"
              alt="Dorian About Me"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
