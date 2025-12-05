import React from 'react';
import { useTheme } from './ThemeContext'; // Import the custom hook

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border-2 border-current transition-colors duration-300"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {/* Dynamic icon and text based on the current theme */}
      {theme === 'light' ? (
        <span role="img" aria-label="Dark Mode">
          🌙 Dark Mode
        </span>
      ) : (
        <span role="img" aria-label="Light Mode">
          ☀️ Light Mode
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;