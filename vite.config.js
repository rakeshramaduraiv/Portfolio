import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base to '/portfolio/' if deploying to GitHub Pages at a sub-path,
// or '/' for Vercel / custom domain / root GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
