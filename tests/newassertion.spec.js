const { test , expect} = require('@playwright/test');

test("Assertions", async ({page})=>{

    await page.goto("https://www.nopcommerce.com/en/register");

    //check url
    await expect(page).toHaveURL("https://www.nopcommerce.com/en/register");

    const text = await page.getByAltText("nopCommerce");

    await expect(text).toBeVisible();

    await expect(page).toHaveTitle("Register - nopCommerce");
})