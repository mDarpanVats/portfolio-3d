// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  server: {
    port: 3000,
  },
  base: "/portfolio-3d/",
  root: "./",
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      },
    },
  },
  plugins: [
    react(),
    svgr(),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  assetsInclude: ["**/*.glb", "**/*.gltf"],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/compoonents/pages"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@data": path.resolve(__dirname, "src/data"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@hoc": path.resolve(__dirname, "src/hoc"),
    },
  },
});
