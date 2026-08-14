const{test, expect} = require('@playwright/test');

test("Handle checkbox", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Table id #productTable
    const table = await page.locator("#productTable");

    //to select a column we are go to locator thead tr th
    const column = await table.locator("thead tr th");

    console.log(await column.count());
    
    //to select a row we are go to locator tbody tr 
    const row = await table.locator("tbody tr ");

    console.log(await row.count());

    expect(await row.count()).toBe(5);

    expect(await column.count()).toBe(4);



    //Select checkbox for product4
    const matchrow = row.filter({
        has:page.locator('td'),
        hasText: 'Smartwatch'
    })

    await matchrow.locator('input').check();

    await page.waitForTimeout(3000)
    

})