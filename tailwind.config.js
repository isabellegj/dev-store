/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "medium-gray": "#dfdfdf",
      gray: "#f8f8f8",
      "darker-gray": "#2e2e2e",
      magenta: "#a31c76",
      "border-gray": "#c6c6c6",
      white: "#ffffff",
      green: "#869f64",
      "lighter-magenta": "#80165D",
    },
  },
  plugins: [],
};
