const{test, expect} = require('@playwright/test');

test("Date picker ", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#datepicker").fill("08/17/2026");

    await page.waitForTimeout(4000);
})