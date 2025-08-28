import { createPreset } from "fumadocs-ui/tailwind-plugin";
import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.tsx",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  presets: [createPreset()],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
