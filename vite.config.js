import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import mpa from 'vite-plugin-multi-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
  //   mpa({/* options */
  //   defaultOpenPage: './src/main',
  //   about: '../about/About',
  //   contact: '../contact/Contact',
  //   portfolio: '../portfolio/Portfolio'
  // }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/_variables.scss";
          
        `
            }
                          }
        },
          //base: '/shaksphere.github.io'
                              }
)
