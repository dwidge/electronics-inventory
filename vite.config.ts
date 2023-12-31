import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import process from "node:process";
const { env } = process;

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: env.VITE_BASE_URL,
    plugins: [
      react(),
      VitePWA({
        workbox: {
          globPatterns: ["**/*"],
        },
        includeAssets: ["**/*"],
        manifest: {
          name: env.VITE_TITLE,
          short_name: env.VITE_TITLE,
          description: env.VITE_DESCRIPTION,
          start_url: env.VITE_BASE_URL,
          scope: env.VITE_BASE_URL,
          theme_color: env.VITE_THEME_COLOR,
          background_color: "#222222",
          icons: [
            {
              src: "apple-touch-icon.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      }),
    ],
  };
});
