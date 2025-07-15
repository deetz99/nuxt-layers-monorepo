import { test, expect } from '@playwright/test'

test.describe('Example 1', () => {
  test('Base page loads with expected visuals 1', async ({ page }) => {
    await page.goto('./')
    await expect(page.getByRole('heading', { name: 'Hello World! Base!' })).toBeVisible()
    await expect(page.getByText('{ "name": "Hello from Nuxt layer NEW AGAIN x 8!!" }')).toBeVisible()
  })
  test('Another example 1 test', async ({ page }) => {
    await page.goto('./')
    await expect(page.getByRole('heading', { name: 'Hello World! Base!' })).toBeVisible()
  })
})
