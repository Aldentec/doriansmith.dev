import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container text-center">
        <p className="mb-0">© {new Date().getFullYear()} Dorian Smith. All Rights Reserved.</p>
        <small className="text-muted">Designed and developed with ❤️ by Dorian Smith</small>
      </div>
    </footer>
  );
};

export default Footer;
