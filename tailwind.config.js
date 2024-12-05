/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fade 1s ease-out forwards",
        "fade-down": "fadeDown 1s ease-out forwards",
        jump: "jump 0.5s ease-out forwards",
        typing: "typing 4s steps(30) 1s 1 normal both", // Animación tipo máquina de escribir
      },
      keyframes: {
        fade: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeDown: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(20px)" },
        },
        jump: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
