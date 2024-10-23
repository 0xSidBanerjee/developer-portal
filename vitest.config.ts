/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    watch: false,
    globals: true,
    setupFiles: 'src/__tests__/setup.ts',
    reporters: [
      ['html', { outputFile: './reports/index.html' }],
    ],
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
})
