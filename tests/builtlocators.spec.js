const{test, expect} = require('@playwright/test');

test('built locators test', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const logo = await page.getByAltText("company-branding");  // Locate the company branding logo using its alt text
    await expect(logo).toBeVisible();  // Verify that the logo is visible on the page


    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", {type: "submit"}).click();  // Locate and click the login button using its role and type
    // const text = await page.getByText("Jon Doe");  
    // await expect(text).toBeVisible();  // Verify that the text "Jon Doe" is visible on the page

    const profile = await page.getByAltText("profile picture");  // Locate the profile picture using its alt text
    await expect(profile).toBeVisible();  // Verify that the profile picture is visible on the page

    const name = await page.locator("//p[@class='oxd-userdropdown-name']");  // Locate the user dropdown name using an XPath selector and get its text content
    console.log(await name.textContent());  // Log the retrieved name to the console
    await expect(name).toBeVisible();  // Verify that the retrieved name is visible on the page
    await page.waitForTimeout(2000);

});