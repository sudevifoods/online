import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/online/', // Replace 'sudevi' with your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
