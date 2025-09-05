import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

const aliasList = [
  "app",
  "components",
  "data",
  "definitions",
  "pages",
  "styles",
];

const alias = aliasList.reduce(
  (acc, name) => {
    acc[`@${name}`] = path.resolve(__dirname, `src/${name}`);
    return acc;
  },
  {} as Record<string, string>,
);

export default defineConfig({
  server: {
    fs: {},
  },
  plugins: [react()],
  resolve: {
    alias,
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      treeshake: true,
    },
  },
});
