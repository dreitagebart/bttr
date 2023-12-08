import path from 'path'
import react from '@vitejs/plugin-react'
import { UserConfig, defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  const config: UserConfig = {
    plugins: [react()]
  }

  return {
    ...config,
    base:
      command === 'build'
        ? `/apps/${path.basename(
            path.resolve(__dirname, '..')
          )}/${path.basename(path.resolve(__dirname))}`
        : '/'
  }
})
