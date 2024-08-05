import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        '270': '270deg',
      },
      transformOrigin: {
        'left-bottom': 'left bottom',
      },
      backgroundImage: {
        pattern: "url('/bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
