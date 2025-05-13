/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html", // 👈 Esto es lo que faltaba
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
