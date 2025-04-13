import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'dot-pattern': 'radial-gradient(circle at center, currentColor 0.15rem, transparent 0)',
      },
      backgroundSize: {
        'dot': '1.5rem 1.5rem',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-dot': (value: any) => ({
            backgroundImage: `radial-gradient(${value} 2px, transparent 2px)`,
            backgroundSize: '40px 40px',
          }),
        },
        { values: theme('colors') }
      )
    },
  ],
};

export default config; 