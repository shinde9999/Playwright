const {test, expect} = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require('../testdata.json')));

test.describe("Read Data from JSON", function()  
        {

           for(const data of testdata) {

            test.describe(`Test with data: ${data.id}`, function() {

            test(`Login with ${data.username}`, async ({ page }) => {

                    await page.goto("https://freelance-learn-automation.vercel.app/login");
                    await page.locator("//input[@id='email1']").fill(data.username);
                    await page.locator("//input[@id='password1']").fill(data.password);
    
            });
        })
    }

})