const {test, expect} = require('@playwright/test');

test('demoblaze test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    //by using the id css selector
    // await page.locator('#login2').click();               

    //by using the id locator
    // await page.locator('id =login2').click();

    //by using directly the click method with the id locator
    await page.click('#login2');

    // by using the id locator to fill the username field with css selector
    // await page.locator('#loginusername').fill('testuser');
    //await page.locator('id=loginusername').fill('testuser');

    // by using the id locator to fill the username field with id locator directly
    await page.fill('#loginusername', 'testuser');
    await page.fill('#loginpassword', 'testpassword');
    await page.click('button[onclick="logIn()"]');
    //$$ are used to get all the elements matching the selector and return an array of elements
    //log the total number of links on the page
    const element = await page.$$('//a');
    //for length of the element array //a
    console.log('Total number of links on the page: ' + element.length);

    //for loop for each link in the element array and show the text content of the link in the console
    for (const link of element) {
        console.log(await link.textContent());
        console.log("=====================================================");
        
    }
    await page.waitForTimeout(1000);

});