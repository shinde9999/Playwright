const {test,expect}=require('@playwright/test');

test ("Assertion", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page).toHaveTitle("OrangeHRM");
    
    const alt1 = await page.getByAltText("company-branding");
    await expect(alt1).toBeVisible();

    

})