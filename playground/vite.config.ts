import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import unpluginDataUri from '../src/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    unpluginDataUri(),
  ],
})
