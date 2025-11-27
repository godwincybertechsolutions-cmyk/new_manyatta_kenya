import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [], // Explicitly empty
    },
  },
  optimizeDeps: {
    include: ['@supabase/supabase-js'],
    exclude: [] // Ensure supabase isn't excluded
  }
});
