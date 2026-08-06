const {test, expect} = require('@playwright/test');

test('login test', async ({ page }) => {

    await page.goto("http://localhost:3000/register");
    await page.locator("//input[@id='name']").fill("pooja");
    await page.locator("//input[@id='email']").fill("pooja@example.com");
    await page.locator("//input[@id='password']").fill("password123");
    await page.locator("//button[@type='submit']").click();  // Locate and click the submit button using an XPath selector

    await expect(page).toHaveURL('http://localhost:3000/');
    await page.locator("//input[@id='email']").fill("pooja@example.com");
    await page.locator("//input[@id='password']").fill("password123");
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(2000);



});