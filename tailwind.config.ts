import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        input: "var(--input)",
        background: "var(--background)",
        paragraph: "var(--paragraph)",
        footer: "var(--footer)",
        cards: "var(--cards)",
        primary: "var(--primary)",
        gray: "var(--gray)",
        error: "var(--error)",
        "input-placeholder": "var(--placeholder)",
        "primary-hover": "var(--primary-hover)",
        "primary-active": "var(--primary-active)",
        "gray-hover": "var(--gray-hover)",
        "gray-active": "var(--gray-active)",
      },
      fontSize: {
        'fluid-7xl': 'clamp(3rem, 6vw, 5rem)',
        'fluid-6xl': 'clamp(1.5rem, 6vw, 3.75rem)',
        'fluid-5xl': 'clamp(2rem, 5vw, 3rem)',
        'fluid-4xl': 'clamp(1.5rem, 4vw, 2.25rem)',
        'fluid-3xl': 'clamp(2rem, 1.5rem + 1vw, 3rem)',
        'fluid-2xl': 'clamp(1.25rem, 2vw, 1.875rem)'
      }
    },
  },
  plugins: [],
} satisfies Config;
