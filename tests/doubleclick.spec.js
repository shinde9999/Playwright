const{test, expect} = require('@playwright/test');

test("Double Click ", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const dblclick = await page.locator("//button[normalize-space()='Copy Text']");

    await dblclick.dblclick();

    const field = await page.locator("#field2");

    await page.waitForTimeout(4000);

    expect(field).toHaveValue("Hello World!");

    console.log(await field.textContent());

})