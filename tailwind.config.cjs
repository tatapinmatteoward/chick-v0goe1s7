/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6a0dad',
        accent: '#ff1493',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
