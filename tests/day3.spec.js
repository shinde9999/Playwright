const {test, expect} = require('@playwright/test');

test("Showing Error Messages", async function({ page }) 
{
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin", { delay: 300 });
    
    await page.locator("input[name='password']").fill("admin1234", { delay: 300 });

    await page.locator("//button[@type='submit']").click()

    const errorMessage = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()

    console.log("Error Message: ", errorMessage)
})