import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        gold: "#C9A96E",
        brown: "#2C2319",
        "brown-dark": "#1A150D",
        "brown-light": "#3D2E1A",
        sand: "#F5EFE4",
        "sand-light": "#FFFDF9",
        muted: "#7A6A55",
        "muted-light": "#A08C70",
        "border-warm": "#E2D5C3",
      },
      fontFamily: {
        serif: ["var(--font-libre-baskerville)", "Baskerville", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
