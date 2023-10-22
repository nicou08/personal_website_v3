import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "17": "60px",
        "30": "120px",
        "50": "200px",
        "87": "21rem",
        "88": "22rem",
        "965": "26rem",
        "97": "28rem",
        "99": "32rem",
      },
      fontFamily: {
        SFMono: ["SF Mono", "monospace"],
        monaSans: ["Mona Sans", "monospace"],
        gillSans: ["Gill Sans MT", "sans-serif"],
        lucidaSans: ["Lucida Sans Unicode", "sans-serif"],
        notoSans: ["Noto Sans JP", "sans-serif"],
        notoSansBold: ["Noto Sans JP Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
