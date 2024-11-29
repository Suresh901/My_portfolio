/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
    keyframes: {
        spin: {
          '0%, 100%': { boxShadow: '0.2em 0 0 0 currentColor' },
          '12%': { boxShadow: '0.2em 0.2em 0 0 currentColor' },
          '25%': { boxShadow: '0 0.2em 0 0 currentColor' },
          '37%': { boxShadow: '-0.2em 0.2em 0 0 currentColor' },
          '50%': { boxShadow: '-0.2em 0 0 0 currentColor' },
          '62%': { boxShadow: '-0.2em -0.2em 0 0 currentColor' },
          '75%': { boxShadow: '0 -0.2em 0 0 currentColor' },
          '87%': { boxShadow: '0.2em -0.2em 0 0 currentColor' },
        },
        rotate: {
          '0%': { transform: 'translate(-50%, -50%) rotateZ(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotateZ(360deg)' },
        },
        rotateccw: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(-360deg)' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
        rotate: 'rotate 1s linear infinite',
        rotateccw: 'rotateccw 1s linear infinite',
      },
  },
  plugins: [],
};
