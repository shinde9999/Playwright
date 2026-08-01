const {test, expect} = require('@playwright/test');

test('handle auto suggestion', async ({ page }) => {
  await page.goto('https://www.google.com/')
  await page.locator('textarea[name="q"]').fill('playwright')
  await page.locator('ul[role="listbox"] li').first().waitFor();

  await page.keyboard.press('ArrowDown')
  await page.waitForTimeout(2000)
  await page.keyboard.press('ArrowDown')
  await page.waitForTimeout(2000)
  await page.keyboard.press('Enter')
  await page.waitForTimeout(2000)

  await page.$$()
})