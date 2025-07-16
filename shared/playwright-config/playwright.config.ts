import { createResolver } from 'nuxt/kit'
import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

const { resolve } = createResolver(import.meta.url)

const deviceNames = [
  'Desktop Chrome',
  'Desktop Firefox',
  'Desktop Edge',
  'Desktop Safari',
  'iPad (gen 11) landscape',
  'Blackberry PlayBook landscape',
  'Nexus 10 landscape',
  'iPhone 15 Pro',
  'Pixel 7',
  'iPhone 6'
]

export default defineConfig<ConfigOptions>({
  globalSetup: './tests/e2e/setup',
  testDir: './tests/e2e',
  testMatch: '*.spec.ts',
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    nuxt: {
      rootDir: resolve('./'),
      runner: 'vitest',
      host: process.env.NUXT_BASE_URL
    },
    actionTimeout: 2000,
    baseURL: process.env.NUXT_BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'off',
    // do not open browser
    headless: true
  },
  projects: deviceNames.map(name => ({ name, use: devices[name] })),
  webServer: {
    command: 'pnpm build:test',
    port: 3000,
    reuseExistingServer: true,
    timeout: 30000
  }
})
