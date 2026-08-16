/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Palette
        navy: {
          DEFAULT: "#003366", // Primary
          dark: "#002244",
          light: "#004488",
        },
        "safety-orange": {
          DEFAULT: "#F58220", // Secondary
          dark: "#D66B12",
          light: "#FF9947",
        },
        charcoal: {
          DEFAULT: "#4A4A4A", // Support
          dark: "#1A1A1A",
          light: "#666666",
        },
        emerald: {
          DEFAULT: "#009966", // Optional Accent
          light: "#00B377",
        },
      },
    },
  },
  plugins: [],
};