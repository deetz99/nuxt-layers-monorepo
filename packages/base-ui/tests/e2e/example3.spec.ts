import { test, expect } from '@playwright/test'

test.describe('Example 3', () => {
  test('Base page loads with expected visuals 3', async ({ page }) => {
    await page.goto('./')
    await expect(page.getByText('Hello this should err')).toBeVisible()
  })
  test('another example 3 test', async ({ page }) => {
    await page.goto('./')
    await expect(page.getByText('Hello this should err')).toBeVisible()
  })
  test('another example 3 test', async ({ page }) => {
    await page.goto('./')
    await expect(page.getByText('Hello this should err')).toBeVisible()
  })
})
