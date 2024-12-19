/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust to match your file structure
    "./public/index.html",
  ],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      prismarine: "#127475",
      stormygreen: "#0e9594",
      gingeralefizz: "#f5dfbb",
      benihired: "#f2542d",
      bratwurst: "#562c2c",
      white: "#ffffff",
      black: "#000000",
      // tailwind grays
      gray100: "#f3f4f6",
      gray200: "#e5e7eb",
      gray300: "#d1d5db",
      gray400: "#9ca3af",
      gray500: "#6b7280",
      gray600: "#4b5563",
      gray700: "#374151",
      gray800: "#1f2937",
      gray900: "#111827",
      // Other key colors
      purple100: "#faf5ff",
      blue100: "#dbeafe",
      blue500: "#3b82f6",
      red600: "#e11d48",
    },
    extend: {
      backgroundColor: {
        "color-theme1": "#0E9594",
        "color-theme2": "#d1aea6",
        "color-theme3": "#EDD777",
        "color-theme4": "#F3C8DD",
        "color-theme5": "#828155",
        "color-theme6": "#29274c",
        "color-theme7": "#3e6985",
        "color-theme8": "#f3e9dc",
        "color-theme9": "#DEDEDE",

        "color-card-theme1": "#f5dfbb",
        "color-card-theme2": "#ad3a3c",
        "color-card-theme3": "#FFF9DE",
        "color-card-theme4": "#D183A9",
        "color-card-theme5": "#f5dfbb",
        "color-card-theme6": "#E6B3FF",
        "color-card-theme7": "#0d273d",
        "color-card-theme8": "#c08552",
        "color-card-theme9": "#777777",
      },
      textColor: {
        "color-text-theme1": "#562c2c",
        "color-text-theme2": "#ffffff",
        "color-text-theme3": "#4C4625",
        "color-text-theme4": "#000000",
        "color-text-theme5": "#562c2c",
        "color-text-theme6": "#000000",
        "color-text-theme7": "#cdd7df",
        "color-text-theme8": "#f3e9dc",
        "color-text-theme9": "#ffffff",
      },
    },
  },

  // tailwind needs a safelist.
  // it needs to know which utility classes it can use
  // pattern matching so you don't have to do a long long list
  safelist: [
    {
      pattern:
        /bg-color-(theme1|theme2|theme3|theme4|theme5|theme6|theme7|theme8|theme9)/,
    },
    {
      pattern:
        /bg-color-card-(theme1|theme2|theme3|theme4|theme5|theme6|theme7|theme8|theme9)/,
    },
    {
      pattern:
        /text-color-text-(theme1|theme2|theme3|theme4|theme5|theme6|theme7|theme8|theme9)/,
    },
  ],
  plugins: [],
};
