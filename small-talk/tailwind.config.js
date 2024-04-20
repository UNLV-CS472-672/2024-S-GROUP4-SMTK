/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,json}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  screens: {
    'sm': '640px',  // Standard small screen size
    // => @media (min-width: 640px) { ... }

    'md': '768px',  // Standard medium screen size
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',  // Large screen size, suitable for tablets
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',  // Extra-large screen size, suitable for larger tablets and smaller laptops
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',  // Extra-extra-large screen size, suitable for larger laptops and desktops
    // => @media (min-width: 1536px) { ... }

    '3xl': '1920px',  // Extra-extra-extra-large screen size, for larger desktops and high-resolution monitors
    // => @media (min-width: 1920px) { ... }
    
    '4xl': '2560px',  // Extra-extra-extra-extra-large screen size, for very large monitors and ultra-wide displays
    // => @media (min-width: 2560px) { ... }
  },
  plugins: [],
};
