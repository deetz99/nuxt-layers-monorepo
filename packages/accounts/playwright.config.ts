import { createResolver } from 'nuxt/kit'
import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

const { resolve } = createResolver(import.meta.url)

const deviceNames = ['Desktop Chrome']

export default defineConfig<ConfigOptions>({
  globalSetup: './tests/e2e/setup',
  testDir: './tests/e2e',
  testMatch: '*.spec.ts',
  use: {
    nuxt: {
      rootDir: resolve('./'),
      runner: 'vitest'
    },
    actionTimeout: 2000,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'off',
    // do not open browser
    headless: true
  },
  projects: deviceNames.map(name => ({ name, use: devices[name] })),
  webServer: {
    command: 'pnpm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 3000
  }
})
