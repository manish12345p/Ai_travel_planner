/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0284c7",
          "primary-hover": "#0369a1",
          cyan: "#38bdf8",
          blue: "#0099ff",
          dark: "#0f172a",
          navy: "#132238",
          "navy-dark": "#0d1726",
          teal: "#036592",
          muted: "#64748b",
          border: "#e2e8f0",
          card: "#ffffff",
          surface: "#f8fafc",
          "surface-alt": "#f1f5f9",
        },
        telemetry: {
          bg: "#eff6ff",
          text: "#2563eb",
          border: "#dbeafe",
        },
        algorithmic: {
          bg: "#f5f3ff",
          text: "#7c3aed",
          border: "#ede9fe",
        },
        vault: {
          bg: "#faf5ff",
          text: "#9333ea",
          border: "#f3e8ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        pill: "9999px",
        card: "1.25rem",
        "card-lg": "1.75rem",
        "card-sm": "0.875rem",
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.02)",
        "card-hover": "0 20px 35px -10px rgba(0, 0, 0, 0.08), 0 10px 15px -5px rgba(0, 0, 0, 0.04)",
        search: "0 12px 35px -5px rgba(0, 0, 0, 0.12)",
        glow: "0 0 25px rgba(2, 132, 199, 0.35)",
        cta: "0 20px 40px -15px rgba(11, 67, 107, 0.4)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        odyssey: {
          primary: "#0284c7",
          "primary-content": "#ffffff",
          secondary: "#0ea5e9",
          accent: "#7c3aed",
          neutral: "#0f172a",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#f1f5f9",
          "base-content": "#0f172a",
          info: "#38bdf8",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
    defaultTheme: "odyssey",
    logs: false,
  },
};
