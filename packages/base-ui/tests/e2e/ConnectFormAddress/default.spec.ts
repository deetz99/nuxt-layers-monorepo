import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import type { Page } from '@playwright/test'

async function scanA11y(page: Page) {
  // TODO: banner needs to be in a landmark
  const accessibilityScanResults = await new AxeBuilder({ page })
    .exclude(['#connect-system-banner', '#address_list'])
    .analyze()
  expect(accessibilityScanResults.violations).toEqual([])
}

test.describe('ConnectFormAddress', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./examples/components/ConnectFormAddress')
    await page.waitForURL('*/**/examples/components/ConnectFormAddress')
  })

  test.afterEach(async ({ page }) => {
    // wait for page to render fully before scanning
    await expect(page.getByRole('heading').first()).toBeVisible()
    await expect(page.getByRole('listbox')).not.toBeVisible()
    await scanA11y(page)
  })

  test('Loads with expected visuals', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'ConnectFormAddress' }).first()).toBeVisible()
  })

  // TODO: get secrets working in CI
  test('Address Complete is enabled', async ({ page }) => {
    await page.goto('./examples/components/ConnectFormAddress')
    await page.waitForURL('*/**/examples/components/ConnectFormAddress')

    // get default example
    const defaultContainer = page.getByTestId('default-container')

    // enter Vancouver Art Gallery for lookup address
    const lookupAddress = '750 Hornby St'

    // .fill does not trigger address complete
    await defaultContainer.getByTestId('default-input-street').pressSequentially(lookupAddress, { delay: 100 })

    // list of options should be displayed
    await expect(page.getByRole('listbox')).toBeVisible({ timeout: 5000 })

    // should be an option that matches the lookup address, select it
    await page.getByRole('option').first().click()

    // assert fields are populated after selection
    await expect(page.getByTestId('default-input-street')).toHaveValue(lookupAddress)
    await expect(page.getByTestId('default-input-city')).toHaveValue('Vancouver')
    await expect(page.getByTestId('default-input-region')).toContainText('British Columbia')
    await expect(page.getByTestId('default-input-postalCode')).toHaveValue('V6Z 2H7')
  })

  // TODO: get secrets working in CI
  test('disableAddressComplete prop prevents lookup', async ({ page }) => {
    const streetInput = page.getByTestId('disable-address-complete-input-street')
    await streetInput.pressSequentially('123 Main St', { delay: 100 })
    // address options shouldnt be there
    const listbox = page.locator('[role="listbox"]')
    await expect(listbox).not.toBeVisible()
  })

  test('disabledFields prop disables the correct inputs', async ({ page }) => {
    const container = page.getByTestId('disabled-fields-container')

    // should be disabled
    await expect(container.locator('[data-testid="disabled-fields-input-country"]')).toBeDisabled()
    await expect(container.locator('[data-testid="disabled-fields-input-locationDescription"]')).toBeDisabled()
    await expect(container.locator('[data-testid="disabled-fields-input-streetAdditional"]')).toBeDisabled()

    // should still be enabled
    await expect(container.locator('[data-testid="disabled-fields-input-street"]')).toBeEnabled()
  })

  test('excludedFields prop removes inputs from the DOM', async ({ page }) => {
    const container = page.getByTestId('excluded-fields-container')

    // shouldnt render these
    await expect(container.locator('[data-testid="excluded-fields-input-locationDescription"]')).not.toBeVisible()
    await expect(container.locator('[data-testid="excluded-fields-input-streetAdditional"]')).not.toBeVisible()
  })

  test('streetHelpText prop shows "no-po" message', async ({ page }) => {
    const container = page.getByTestId('no-po-box-container')
    await expect(container).toBeVisible()
    await expect(container).toContainText('Address cannot be a PO Box.')
  })

  test('streetHelpText prop shows "allow-po" message', async ({ page }) => {
    const container = page.getByTestId('allow-po-box-container')
    await expect(container).toBeVisible()
    await expect(container).toContainText('Street address, PO box, rural route, or general delivery address.')
  })
})
