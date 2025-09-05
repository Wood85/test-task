import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const aliasList = [
  "assets",
  "components",
  "config",
  "layouts",
  "lib",
  "pages",
  "routes",
  "styles",
  "app-types",
  "utils",
];

const alias = aliasList.reduce(
  (acc, name) => {
    const dir = name === "app-types" ? "src/types" : `src/${name}`;
    acc[`@${name}`] = path.resolve(__dirname, dir);
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
