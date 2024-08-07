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
        pattern: "url('https://rniscvxztrspzsoduaqy.supabase.co/storage/v1/object/public/portifolio/bg.png?t=2024-08-07T03%3A21%3A14.023Z')",
        me: "url('https://rniscvxztrspzsoduaqy.supabase.co/storage/v1/object/public/portifolio/me.jpg?t=2024-08-07T03%3A21%3A42.455Z')",
      },
    },
  },
  plugins: [],
};
export default config;
