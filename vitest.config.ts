import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: 'v8'
    },
    includeSource: ['src/**/*.{js,ts}', 'src/**/*.{jsx,tsx}']
  },
  // ビルド時インソーステストを無視
  define: {
    'import.meta.vitest': 'undefined',
  }
})