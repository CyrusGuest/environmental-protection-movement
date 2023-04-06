module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "crimson-red": "#FA5959",
        "sadd-grey": "#9194A2",
        "sadd-pink": "#fe7faa",
        "sadd-white": "#f7f7f7",
        "sadd-blue": "#5c8748",
        "sadd-dark-blue": "#242A45",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
