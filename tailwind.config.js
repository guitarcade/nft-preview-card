/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-1":"hsl(215, 51%, 70%)",
        "primary-2":"hsl(178, 100%, 50%)",
        "neutral-1":"hsl(217, 54%, 11%)",
        "neutral-2":"hsl(216, 50%, 16%)",
        "neutral-3":"hsl(215, 32%, 27%)",
        "white":"hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}
