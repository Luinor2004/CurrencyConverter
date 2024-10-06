/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 
        "linear-gradient(135deg, #a2d9ff 0%, #004e92 100%);",
      },
    },
  },
  plugins: [],
}

