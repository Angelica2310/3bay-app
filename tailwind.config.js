/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
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
