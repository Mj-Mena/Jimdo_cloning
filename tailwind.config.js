/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        nav_color: "#001453",
        hover_color: "#004ced",
        head_color: "rgb(0 0 0 / 70%)",
        dropdown: "#f8f8f8",
        sub_cap: "#6d6d6d",
      },
      fontSize: {
        nav_size: "16px",
        under_sec: "14px",
        head_size: "12px",
      },
      lineHeight: {
        nav_lh: "24px",
      },
      maxWidth: {
        maxW: "1600px",
      },
      margin: {
        margin_bt_sec: "28px",
      },
      fontFamily: {
        main_font: "'Euclid Circular A', sans-serif",
      },
    },
  },
  plugins: [],
};
