const{test, expect} = require('@playwright/test');

test("Handle checkbox", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.locator("#sunday").check();

    // const s = await page.locator("#sunday");
    // // await s.check();

    // await page.check("#sunday");
    // await page.locator("#tuesday").click();
    // await page.click("#friday");
    
    const check_else = ['#sunday','#monday','#tuesday','#wednesday','#thursday','#friday','#saturday'];

    for (let locator1 of check_else) {
        
        await page.locator(locator1).check();
        await page.waitForTimeout(1000);
    }
    // for (let locator1 of check_else) {
        
    //     await page.locator(locator1).uncheck();
    //     await page.waitForTimeout(1000);
    // }
    const check_els = ['#sunday','#tuesday','#thursday','#saturday'];

    for (let locator2 of check_els) {
        
        await page.locator(locator2).click();
        await page.waitForTimeout(1000);
    }
    // for (let locator2 of check_els) {
        
    //     await page.locator(locator2).click();
    //     await page.waitForTimeout(1000);
    // }


   
    // await page.waitForTimeout(3000);
    await page.close();
})