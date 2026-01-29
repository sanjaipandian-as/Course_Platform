/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind v4 uses CSS as the source of truth. 
  // This file is kept for backward compatibility and to tell v4 where to find your content if needed.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
