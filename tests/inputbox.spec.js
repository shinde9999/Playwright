const {test,expect} = require('@playwright/test');

test("Handle input boxes", async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");

    await expect(await page.locator("#loginusername")).toBeEditable();

    await expect(await page.locator("#loginusername")).toBeEmpty();

    await expect(await page.locator("#loginusername")).toBeEnabled();

    // await expect.soft(await page.locator("#loginusername")).toBeVisible();

    // await page.locator("#loginusername").fill("Aniket Shinde");

    await page.waitForTimeout(4000);

})