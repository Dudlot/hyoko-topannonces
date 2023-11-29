import React, { useState } from 'react';
import '../../src/App.css';

function AnimatedButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      className={`animated-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Déposer une annonce
    </button>
  );
}

export default AnimatedButton;