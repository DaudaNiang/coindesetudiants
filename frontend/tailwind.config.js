/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1E5AA8",
          foreground: "#FFFFFF",
          50: "#EBF2FA",
          100: "#D7E5F5",
          200: "#AFCBEB",
          300: "#87B1E0",
          400: "#5F97D6",
          500: "#1E5AA8",
          600: "#184A8A",
          700: "#123A6C",
          800: "#0C2A4E",
          900: "#061A30",
        },
        secondary: {
          DEFAULT: "#4CAF50",
          foreground: "#FFFFFF",
          50: "#EDF7ED",
          100: "#DBEFDC",
          200: "#B7DFB9",
          300: "#93CF96",
          400: "#6FBF73",
          500: "#4CAF50",
          600: "#3D8B40",
          700: "#2E6730",
          800: "#1F4420",
          900: "#102210",
        },
        muted: {
          DEFAULT: "#E2E8F0",
          foreground: "#64748B",
        },
        accent: {
          DEFAULT: "#F5F7FA",
          foreground: "#0B1B2B",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0B1B2B",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "count-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "count-up": "count-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
