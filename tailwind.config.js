/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CFB471",
        "primary-shade": "#C6A554",
        green: "#039228",
        "green-shade": "#027521",
        surface: {
          DEFAULT: "#0f0f10",
          raised: "#1a1a1c",
          overlay: "rgba(15, 15, 16, 0.85)",
        },
        ink: {
          DEFAULT: "#f5f5f7",
          muted: "#a1a1aa",
          subtle: "#71717a",
          inverse: "#0f0f10",
        },
        line: {
          DEFAULT: "rgba(255, 255, 255, 0.12)",
          strong: "rgba(255, 255, 255, 0.24)",
        },
        danger: {
          DEFAULT: "#f87171",
          bg: "rgba(248, 113, 113, 0.1)",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        spinnaker: ["Spinnaker", "sans-serif"],
      },
      boxShadow: {
        "glow-primary": "0 0 0 4px rgba(207, 180, 113, 0.15)",
        "glow-danger": "0 0 0 4px rgba(248, 113, 113, 0.12)",
        "glow-green": "0 0 0 4px rgba(3, 146, 40, 0.18)",
        "card-premium":
          "0 24px 48px -24px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.15)",
      },
      backgroundImage: {
        "mesh-gold":
          "radial-gradient(at 12% 18%, rgba(207,180,113,0.35) 0, transparent 45%), " +
          "radial-gradient(at 88% 10%, rgba(3,146,40,0.25) 0, transparent 40%), " +
          "radial-gradient(at 70% 85%, rgba(207,180,113,0.22) 0, transparent 55%), " +
          "radial-gradient(at 12% 90%, rgba(255,255,255,0.08) 0, transparent 45%)",
        "mesh-dark":
          "radial-gradient(at 20% 20%, rgba(207,180,113,0.18) 0, transparent 50%), " +
          "radial-gradient(at 80% 0%, rgba(3,146,40,0.22) 0, transparent 45%), " +
          "radial-gradient(at 50% 100%, rgba(198,165,84,0.14) 0, transparent 55%)",
        noise:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" },
        },
        "float-lg": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(12px, -26px, 0) scale(1.04)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(-10%, 6%, 0) rotate(6deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 0.65 },
          "50%": { opacity: 1 },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out both",
        shimmer: "shimmer 1.6s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-lg": "float-lg 12s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3.2s ease-in-out infinite",
        "gradient-pan": "gradient-pan 9s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [],
};
