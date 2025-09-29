
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ['Inter', 'sans-serif'],
//       },
//       animation: {
//         blob: "blob 20s infinite ease-in-out",
//         'fade-in': "fadeIn 0.4s ease-out",
//       },
//       keyframes: {
//         blob: {
//           "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
//           "25%": { transform: "translate(20px, -10px) scale(1.05)" },
//           "50%": { transform: "translate(-10px, 20px) scale(1)" },
//           "75%": { transform: "translate(-20px, -10px) scale(0.95)" },
//         },
//         fadeIn: {
//           "0%": { opacity: 0, transform: "translateY(-5px)" },
//           "100%": { opacity: 1, transform: "translateY(0)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // ✅ Enables manual dark mode toggle via .dark
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        blob: "blob 20s infinite ease-in-out",
        'fade-in': "fadeIn 0.4s ease-out",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "25%": { transform: "translate(20px, -10px) scale(1.05)" },
          "50%": { transform: "translate(-10px, 20px) scale(1)" },
          "75%": { transform: "translate(-20px, -10px) scale(0.95)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-5px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
