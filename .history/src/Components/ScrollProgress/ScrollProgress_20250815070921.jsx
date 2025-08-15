import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initialize on mount

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="scroll-indicator">
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;