// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the react plugin

export default defineConfig({
  plugins: [react()], // Use the react plugin
  // You can add other configurations here if needed,
  // but for now, this minimal setup is sufficient.
});