/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        8: ["8px", { lineHeight: "12px" }],
        10: ["10px", { lineHeight: "16px" }],
        11: ["11px", { lineHeight: "16px" }],
        12: ["12px", { lineHeight: "20px" }],
        14: ["14px", { lineHeight: "20px" }],
        16: ["16px", { lineHeight: "24px" }],
        18: ["18px", { lineHeight: "28px" }],
        20: ["20px", { lineHeight: "28px" }],
        22: ["22px", { lineHeight: "32px" }],
        24: ["24px", { lineHeight: "32px" }],
        25: ["25px", { lineHeight: "37.5px" }],
        28: ["28px", { lineHeight: "42px" }],
        32: ["32px", { lineHeight: "48px" }],
        36: ["36px", { lineHeight: "49.1px" }],
        40: ["40px", { lineHeight: "54.56px" }],
        44: ["44px", { lineHeight: "60.2px" }],
        58: ["58px", { lineHeight: "87px" }],
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
