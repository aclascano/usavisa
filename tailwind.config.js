// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1E3F",       // Navy Blue Profundo
        secondary: "#D32F2F",     // Rojo Energético
        accent: "#FFC107",        // Dorado Elegante
        accent2: "#F97316",       // Coral Vivo
        neutralLight: "#F5F5F5",  // Gris Polvo
        neutralDark: "#333333"    // Gris Antracita
      }
    }
  },
  plugins: [],
};
