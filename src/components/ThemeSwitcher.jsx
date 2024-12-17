"use client";

import React from "react";
import { useTheme } from "@/components/ThemeContext";

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme();
  const buttonClasses = `text-color-${theme} border-color-${theme}  bg-gray-100`;
  return (
    <div>
      <button
        className={buttonClasses}
        onClick={() => {
          toggleTheme("theme1");
        }}
      >
        Theme1
      </button>
    </div>
  );
};

export default ThemeSwitcher;
