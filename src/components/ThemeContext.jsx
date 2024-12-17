// themeContext does 2 things -
// 1. creates a ThemeProvider
// 2. creates a ThemeContext
// then we export both of them

"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// here theme1 is our branding/default theme
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("theme1");

  // if saved theme - fetch that (chosen theme "theme"), if not use default (theme1)
  // call it
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "theme1";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
