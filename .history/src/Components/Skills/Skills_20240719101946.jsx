import React from 'react';
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-primary">
      <div className="container">
        {/* <div className="text-center mb-4"> */}
        <h1 className="display-4 mb-0"> Skills </h1>
          <p className="lead fs-5 fst-italic"> Forging the Web with Expertise </p>
        {/* </div> */}
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-3">Programming Languages</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong className="text-white">React.js Visionary:</strong> Crafting intricate UIs with React's wizardry, conjuring captivating user interfaces.
              </li>
              <li className="mb-2">
                <strong className="text-white">JavaScript Sage:</strong> Channeling the power of interactivity, breathing life into websites with dynamic functionality.
              </li>
              <li className="mb-2">
                <strong className="text-white">HTML Artisan:</strong> Sculpting the structure of the digital canvas, crafting seamless user experiences.
              </li>
              <li className="mb-2">
                <strong className="text-white">CSS Enchanter:</strong> Weaving styles like threads of magic, casting spells to captivate and engage users.
              </li>
              <li className="mb-2">
                <strong className="text-white">MySQL Maestro:</strong> Conjuring and orchestrating data symphonies with MySQL, architecting databases that hum in harmony.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3 className="mb-3">Infrastructure & Design</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong className="text-white">AWS Cloud Conjurer:</strong> Harnessing the power of the cloud to create scalable and resilient digital realms.
              </li>
              <li className="mb-2">
                <strong className="text-white">Linux Sorcerer:</strong> Commanding the forces of the command line, shaping Linux environments to perfection.
              </li>
              <li className="mb-2">
                <strong className="text-white">Bootstrap Magician:</strong> Transforming designs into responsive wonders, conjuring layouts that adapt like magic.
              </li>
              <li className="mb-2">
                <strong className="text-white">Wordpress Alchemist:</strong> Infusing websites with the essence of WordPress, crafting dynamic and versatile online realms.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
