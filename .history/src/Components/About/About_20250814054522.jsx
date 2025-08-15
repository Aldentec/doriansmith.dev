import React from 'react';
import '../../App.css';
import './About.css';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light" aria-labelledby="about-heading">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <header>
              <h1 id="about-heading" className="display-4 mb-0">What I Do</h1>
            </header>
            
            <article>
              <h2 className="sr-only">About Dorian Smith - Full-Stack Developer</h2>
              
              <p className="lead custom-paragraph">
                Hey there! I'm <strong>Dorian Smith</strong>, a dedicated <strong>full-stack developer</strong> with an imaginative flair. 
                My journey in technology has been nothing short of exhilarating. 
                I craft elegant front-end interfaces and architect robust back-end solutions, thriving on the boundless possibilities of code.
              </p>
              
              <p className="lead custom-paragraph">
                With a sharp design eye and insatiable curiosity, I bridge creativity with functionality. 
                I'm passionate about crafting seamless user experiences. 
                Proficient in <strong>JavaScript frameworks</strong> (<strong>React</strong> and <strong>Node.js</strong>), <strong>HTML/CSS</strong>, <strong>AWS</strong>, database administration, and more. 
                I bring ideas to life with meticulous code.
              </p>
              
              <p className="lead custom-paragraph">
                My projects showcase my commitment to excellence. 
                From <strong>dynamic web applications</strong> to <strong>optimized databases</strong> and <strong>cloud solutions</strong>, I approach each challenge with enthusiasm and determination.
              </p>
              
              <p className="lead custom-paragraph">
                In addition to my tech endeavors, I'm also a passionate <strong>music producer</strong>. 
                Creating and producing music allows me to explore a different side of my creativity, bringing a unique perspective to my development work. 
                Whether it's coding or composing, I strive for innovation and excellence.
              </p>
              
              <p className="lead custom-paragraph">
                I'm excited to collaborate on projects that push the boundaries of what's possible. 
                Let's embark on this digital journey together, and unleash imagination through the power of code.
              </p>
              
              {/* Additional SEO content */}
              <div className="mt-4">
                <h3 className="h5 mb-2">Specializations:</h3>
                <ul className="list-inline">
                  <li className="list-inline-item badge bg-primary me-2 mb-2">React Development</li>
                  <li className="list-inline-item badge bg-primary me-2 mb-2">Node.js</li>
                  <li className="list-inline-item badge bg-primary me-2 mb-2">AWS Cloud Solutions</li>
                  <li className="list-inline-item badge bg-primary me-2 mb-2">Full-Stack Development</li>
                  <li className="list-inline-item badge bg-primary me-2 mb-2">Accessibility Tools</li>
                  <li className="list-inline-item badge bg-primary me-2 mb-2">Music Production</li>
                </ul>
              </div>
            </article>
          </div>
          
          <div className="col-md-6">
            <figure>
              <img
                src="https://s3.us-west-2.amazonaws.com/www.doriansmith.dev/dorian-about-me-section.JPG"
                className="img-fluid rounded-circle about-image"
                alt="Dorian Smith - Full-Stack Developer and Music Producer, professional headshot"
                loading="lazy"
                width="600"
                height="600"
              />
              <figcaption className="sr-only">
                Professional photo of Dorian Smith, showcasing his approachable personality and professional demeanor as a full-stack developer.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;