"use client";

import React from "react";
import { useTheme } from "@/components/ThemeContext";

const UserInfo = () => {
  const { theme } = useTheme();
  const inputClasses = "p-2 border rounded-lg outline-none";
  return (
    <div
      className={`bg-color-card-${theme} flex flex-col gap-2 border rounded-lg p4`}
    >
      <button
        className={`text-color-${theme} border-color-${theme}  bg-gray-100`}
      >
        Save
      </button>
    </div>
  );
};

export default UserInfo;

//   <input className={inputClasses} type="text" placeholder="input" />
//   <input className={inputClasses} type="text" placeholder="input" />
