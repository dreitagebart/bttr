import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/apps/bttr/wow",
  server: {
    host: true,
    port: 3000,
  },
});
