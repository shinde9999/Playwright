const {test, expect} = require('@playwright/test');
// const e = require('cors');

test("File Upload Test", async function({page}) {

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").setInputFiles("C:\\Users\\ACER\\Pictures\\18bae05e79ff7615f96566f77f401d6e.jpg");

    await page.locator("#file-submit").click();

    expect(await page.locator("//h3")).toHaveText("File Uploaded!");
})