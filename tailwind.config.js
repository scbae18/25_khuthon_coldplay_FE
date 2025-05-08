/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "title-01": [
          "20px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.005em",
            fontWeight: 700,
          },
        ],

        "title-02": [
          "18px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.005em",
            fontWeight: 700,
          },
        ],

        "body-01": [
          "16px",
          {
            lineHeight: "150%",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],

        "body-02": [
          "14px",
          {
            lineHeight: "150%",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],

        "body-03": [
          "12px",
          {
            lineHeight: "150%",
            letterSpacing: "0em",
            fontWeight: 500,
          },
        ],

        "caption-01": [
          "10px",
          {
            lineHeight: "140%",
            letterSpacing: "0.2px",
            fontWeight: 500,
          },
        ],

        "caption-02": [
          "8px",
          {
            lineHeight: "140%",
            letterSpacing: "0.2px",
            fontWeight: 500,
          },
        ],
      },

      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },

      fontWeight: {
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      colors: {
        black: "#121213",
        white: "#FDFDFD",
        gray: {
          100: "#F4F6F8",
          200: "#D8DCE2",
          300: "#D8DCE2",
          400: "#C4CAD4",
          500: "#A5ADBD",
        },
        green: {
          300: "#A8D881",
          500: "#7AAD51",
        },
        red: {
          300: "#F6A6A6",
          500: "#F16C6C",
        },
      },
    },
  },
  plugins: [],
};

