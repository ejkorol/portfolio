import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        'xl': '0 0 18px rgba(255, 255, 255, 0.25)',
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#1e1e1e',
            foreground: '#e0e0e0',
            primary: {
              400: '#e0e0e0',
              500: '#b0b0b0',
              900: '#212121',
              DEFAULT: '#e0e0e0',
              foreground: '#e0e0e0'
            },
            secondary: {
              DEFAULT: '#b0b0b0'
            },
            danger: {
              DEFAULT: '#e94e77'
            },
            success: {
              DEFAULT: '#7ed321'
            }
          }
        }
      }
    })
  ],
};

export default config;
