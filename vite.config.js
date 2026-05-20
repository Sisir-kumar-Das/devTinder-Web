import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss"; // Note: For the default setup, 'tailwindcss/vite' might not be needed/correct here. Often, you just need the 'postcss' setup for Tailwind, but if you're using a specific Vite plugin for Tailwind, the import path should be correct. Assuming you intended to use both plugins in the array:

// Using '@tailwindcss/vite' if it's a specific plugin:
import tailwindcssVite from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // Place all plugins here, separated by commas
    tailwindcssVite(),
  ],
});
