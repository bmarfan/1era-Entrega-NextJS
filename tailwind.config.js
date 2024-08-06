/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            "background": "var(--back)",
            "background2": "var(--back2)",
            "background3": "var(--back3)",
            "accent": "var(--accent)",
            "accent2": "var(--accent2)",
        },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'tablet': '768px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '992px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1200px',
        // => @media (min-width: 1280px) { ... }
      },
      gridTemplateRows: {
        // Simple 16 row grid
        'layout-principal' : '80px minmax(200px, auto) 150px'
      }
    },
  },
  plugins: [],
};
