import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Playfair Display', 'ui-serif'],
        'walsheim': ['GT Walsheim Pro', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#9b87f5',
          foreground: '#210F4A'
        },
        secondary: {
          DEFAULT: '#F1F0FB',
          foreground: '#22223b'
        },
        accent: {
          DEFAULT: '#8B5CF6',
          foreground: '#FFFFFF'
        },
        card: {
          DEFAULT: '#fff',
          foreground: '#1A1F2C'
        },
        muted: {
          DEFAULT: '#8E9196',
        },
        dark: '#1A1F2C'
      },
      borderRadius: {
        lg: '1.5rem',
        md: '1rem',
        sm: '0.75rem'
      },
      backgroundImage: {
        "gradient-to-br": "linear-gradient(120deg, #9b87f5 0%, #7ba3f9 100%)",
        "card-gradient": "linear-gradient(110deg, #fff 0%, #F1F0FB 100%)"
      },
      textColor: {
        "gradient": "transparent",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
