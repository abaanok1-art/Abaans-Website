import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <button 
      className={`theme__toggle ${isDark ? 'dark' : 'light'}`} 
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle Theme"
    >
      <span className="theme__icon">
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

export default ThemeToggle;