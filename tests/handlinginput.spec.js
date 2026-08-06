const { test, expect } = require('@playwright/test');

test('Handling Input Boxes', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('networkidle');

    await page.locator('#male').check();
    await expect(page.locator('#male')).toBeChecked();
    await expect(await page.locator('#male').isChecked()).toBeTruthy();

    const f_name = page.locator('#name');
    await expect(f_name).toBeVisible();
    await expect(f_name).toBeEditable();
    await expect(f_name).toBeEnabled();
    await expect(f_name).toBeEmpty();

    await f_name.fill('Aniket');
    await expect(f_name).toHaveValue('Aniket');
});