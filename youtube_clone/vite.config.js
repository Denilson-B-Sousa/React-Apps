import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
    
    // The watched package must be excluded from optimization,
    // so that it can appear in the dependency graph and trigger hot reload.
    optimizeDeps: {
      exclude: ['your-package-name'],
    },
})
  

