const {test, expect} = require('@playwright/test');

test('handle multiple tabs', async ({browser}) => {//for multiple tabs we need to use browser object instead of 
                                          //page object because page object is for single tab and browser object is for multiple tabs

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://freelance-learn-automation.vercel.app/login');

        const [newPage] = await Promise.all([//promise.all is used to wait for multiple 
                                             //promises to resolve before proceeding to the next line of code

                context.waitForEvent('page'),
                page.locator("(//*[name()='path'])[4]").click()

        ])
        await newPage.locator("(//input[@name='email'])[2]").fill("aniketshinde12457@gmail.com");
        await page.waitForTimeout(2000)
        await newPage.close()

        await page.locator("#email1").fill("aniketshinde12457@gmail.com")
        await page.waitForTimeout(2000)
})