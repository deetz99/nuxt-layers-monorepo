import { test, expect } from '@playwright/test'

test.describe('Example 2', () => {
  test('Base page loads with expected visuals 2', async ({ page }) => {
    await page.goto('./')
    await expect(page.getByText('Hello World text base')).toBeVisible()
    await expect(page.getByText('error')).toBeVisible()
  })
})
