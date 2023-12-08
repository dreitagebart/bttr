import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// export default defineConfig(({ command }) => {
//   const config: UserConfig = {
//     plugins: [react()]
//   }

//   return {
//     ...config,
//     base: command === 'build' ? '/launchpad' : '/'
//   }
// })
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000
  }
})
