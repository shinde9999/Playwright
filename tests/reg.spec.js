const {test,expect}= require('@playwright/test');

test("Registration", async({page})=>{

    await page.goto("http://localhost:3000/register");
    await page.locator('#name').fill("Prapti Dhote");
    await page.getByPlaceholder("name@example.com").fill("prapti@gmail.com");

    await page.locator('#password').fill("Prapti123");
    await page.locator("//button[normalize-space()='Register']").click();

    await page.goto("http://localhost:3000/")
    await page.locator("#email").fill("prapti@gmail.com");
    await page.locator('#password').fill("Prapti123");
    await page.locator("//button[normalize-space()='Login']").click();


    await page.waitForTimeout(2000);
})