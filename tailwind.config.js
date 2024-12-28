/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: 'glow 3s infinite',
      },
      keyframes: {
        glow: {
          '0%': { borderColor: '#ff0000', boxShadow: '0 0 10px #ff0000' },
          '25%': { borderColor: '#00ff00', boxShadow: '0 0 10px #00ff00' },
          '50%': { borderColor: '#0000ff', boxShadow: '0 0 10px #0000ff' },
          '75%': { borderColor: '#ffff00', boxShadow: '0 0 10px #ffff00' },
          '100%': { borderColor: '#ff0000', boxShadow: '0 0 10px #ff0000' },
        },
      },
    },
  },
};
