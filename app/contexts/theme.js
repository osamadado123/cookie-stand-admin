'use client';

import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeWrapper({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkTheme(storedTheme === 'dark');
      document.body.classList.add(storedTheme);
    } else {
      localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
      document.body.classList.add(isDarkTheme ? 'dark' : 'light');
    }
  }, []);

  function toggleThemeHandler() {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.replace(isDarkTheme ? 'dark' : 'light', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  const globalState = {
    isDarkTheme,
    toggleThemeHandler,
  };

  return (
    <ThemeContext.Provider value={globalState}>
      {children}
    </ThemeContext.Provider>
  );
}
