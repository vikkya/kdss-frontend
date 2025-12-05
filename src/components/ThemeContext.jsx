import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Provider Component
export const ThemeProvider = ({ children }) => {
  // 1. Initialize state based on user's preference or default to 'light'
  const [theme, setTheme] = useState(() => {
    // Check local storage for a previously saved theme
    const savedTheme = localStorage.getItem('theme');
    // Check system preference (prefers-color-scheme)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      return savedTheme;
    }
    
    return prefersDark ? 'dark' : 'light';
  });

  // 2. Function to toggle the theme
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // 3. Effect to update the body class and local storage
  useEffect(() => {
    const root = document.documentElement; // This is the <html> element
    
    // Update the 'theme' in local storage
    localStorage.setItem('theme', theme);
    
    // Add or remove the 'dark' class on the root HTML element
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]); // Rerun this effect whenever the theme changes

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};