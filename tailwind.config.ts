import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        archivo: ["Archivo", "Arial", "Helvetica", "sans-serif"], // Custom font key for Archivo
      },
      screens: {
        mobile: { max: "1023px" }, // Applies to devices with width <= 767px
        "not-mobile": { min: "1024px" }, // Applies to devices with width >= 768px
        xs: { min: "480px" }, // Extra small devices
        sm: { min: "640px" }, // Small devices
        md: { min: "768px" }, // Medium devices (tablets)
        lg: { min: "1024px" }, // Large devices (laptops)
        xl: { min: "1280px" }, // Extra large devices (desktops)
        "2xl": { min: "1536px" }, // Larger screens
      },
    },
  },
  plugins: [

  ],
} satisfies Config;
