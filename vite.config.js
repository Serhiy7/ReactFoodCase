import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()], // Только React-плагин
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@layouts": path.resolve(__dirname, "./src/layouts/index.js"),
      "@regulamin": path.resolve(__dirname, "./src/components/RegulaminFeatures"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
  server: {
    port: 3000,
    open: true, // Автооткрытие браузера
  },
  css: {
    modules: {
      localsConvention: "camelCase", // camelCase для CSS-модулей
    },
  },
});
