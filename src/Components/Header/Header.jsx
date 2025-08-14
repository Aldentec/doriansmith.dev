import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white text-center py-5" role="banner">
      <div className="container">
        <h1 className="display-4 mb-4">
          Unleashing Imagination through Code
        </h1>
        <h2 className="lead fs-2 fst-italic mb-3">
          The Digital Journey of Dorian Smith
        </h2>
        <p className="lead mb-0" aria-label="Professional summary">
          Full-Stack Developer specializing in React, Node.js & AWS | Music Producer
        </p>
        
        {/* Hidden structured content for SEO */}
        <div className="sr-only" aria-hidden="true">
          <p>
            Dorian Smith is a passionate full-stack developer with expertise in 
            JavaScript, React, Node.js, AWS, and modern web technologies. 
            Based in the Pacific Northwest, creating innovative web applications 
            and accessibility tools.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;