/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'palette-blue': '#343CE7',
        'palette-yellow': '#FFD639',
        'palette-pink': '#FCB1CD',
        'palette-green': '#B9ED26',
        'palette-purple': '#CD9AEC',
        'palette-red': '#FF2C2C',
      },
    },
  },
  plugins: [],
}
