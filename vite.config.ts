import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-router": ["react-router-dom"],
          "vendor-i18n": ["i18next", "react-i18next"],
          "vendor-radix": ["@radix-ui/react-tooltip"],
          "vendor-forms": ["react-hook-form", "@hookform/resolvers", "zod"],
          "vendor-ui": ["lucide-react", "next-themes"],
        },
      },
    },
  },
});
