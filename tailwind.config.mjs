/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animated"),
    require("taos/plugin"),
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#f8f8f8",
        "secondary-color": "#3B6EFF",
        "accent-color": "#FDC01A",
        "black-color": "#484848",
        "white-color": "#f5f5f5",
      },
    },
    screens: {
      'smallMobile': '360px',
      'bigMobile': '414px',
      'tablet': '720px',
      'computer': '1024px'
    },
  },
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
