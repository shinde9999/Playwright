// const { test, expect } = require('@playwright/test')

// test("login", async function({ page }) {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.getByPlaceholder("Username").fill("Admin")
//     await page.locator("input[name='password']").fill("admin123") 
//     await page.locator("//button[@type='submit']").click() 
//     await expect(page).toHaveURL(/dashboard/);

// })


const { test, expect } = require('@playwright/test');
// test.use({ viewport: { width: 1450, height: 920 } });

test("login", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // console.log(await page.viewportSize().width)
    // console.log(await page.viewportSize().height)

    await page.getByPlaceholder("Username").fill("Admin")
    await page.locator("input[name='password']").fill("admin123")
    await page.getByRole("button", { name: "Login" }).click();
    // await page.waitForTimeout(9000)
    await expect(page).toHaveURL('/dashboard/');
    await page.getByAltText("profile picture").first().click()
    await page.getByText("Logout").click()
    // await page.waitForTimeout(7000)
    await expect(page).toHaveURL(/login/)

});


// const { test, expect } = require('@playwright/test');

// test("login", async ({ page }) => {

//     await page.goto(
//         "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//     );

//     await page.getByPlaceholder("Username").fill("Admin");
//     await page.locator("input[name='password']").fill("admin123");

//     await page.getByRole("button", { name: "Login" }).click();

//     // Wait for successful login/navigation
//     await expect(page).toHaveURL(/dashboard/, { timeout: 15000 });

//     // Open profile menu
//     await page.getByAltText("profile picture").first().click();

//     // Logout
//     await page.getByText("Logout").click();

//     await expect(page).toHaveURL(/login/, { timeout: 10000 });
// });
