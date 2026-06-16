import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f1b2d",
        cobalt: "#2514c9",
        lagoon: "#17b9c1",
        gold: "#d5a246",
        sand: "#f3efe6",
        milk: "#fbfbf7",
      },
      boxShadow: {
        glass: "0 18px 70px rgba(31, 20, 150, 0.13)",
        lift: "0 24px 80px rgba(14, 35, 72, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
