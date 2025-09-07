import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const aliasList = [
  'app',
  'components',
  'data',
  'definitions',
  'hooks',
  'pages',
  'services',
  'styles',
  'utils'
];

const alias = aliasList.reduce(
  (acc, name) => {
    acc[`@${name}`] = path.resolve(__dirname, `src/${name}`);
    return acc;
  },
  {} as Record<string, string>
);

export default defineConfig({
  server: {
    fs: {}
  },
  plugins: [react()],
  resolve: {
    alias
  },
  css: {
    preprocessorOptions: {
      scss: {}
    },
    devSourcemap: true
  },
  build: {
    rollupOptions: {
      treeshake: true
    }
  }
});
