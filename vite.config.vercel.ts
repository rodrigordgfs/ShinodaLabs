import { nitro } from "nitro/vite";

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("framer-motion") || id.includes("motion-dom")) {
              return "framer-motion";
            }
            if (id.includes("@fontsource")) {
              return "fonts";
            }
          },
        },
      },
    },
  },
  plugins: [
    nitro({
      preset: "vercel",
    }),
  ],
});
