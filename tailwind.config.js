/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",         // #0B1E3F
        "accent-red": "var(--color-accent-red)",  // #C8102E
        "neutral-light": "var(--color-neutral-light)", // #F5F5F5
        "neutral-dark": "var(--color-neutral-dark)",   // #333333
        "accent-gold": "var(--color-accent-gold)",     // #FFC107
        "accent-coral": "var(--color-accent-coral)",   // #F97316
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};
