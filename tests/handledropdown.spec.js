const {test, expect} = require('@playwright/test');

test("Handle Dropdown", async ({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");
    //By using the attribute
    // await page.locator('#country').selectOption('canada');
    // await page.waitForTimeout(2000);
    // //By using the value
    // await page.locator('#country').selectOption({value:'japan'});
    // await page.waitForTimeout(2000);
    // //By using the index no
    // await page.locator('#country').selectOption({index:9});
    // await page.waitForTimeout(2000);

    const c = await page.locator('#country option').count();
    console.log(c);
    expect(c).toBe(10);

    const d = await page.$$('#country option');
    for(let option of d){
        const value = await option.textContent();//return values
        console.log("===============================================================================================================");
        console.log(value);
        
    }
    console.log("===============================================================================================================");
    //console.log("Number of Contry",+d);
    console.log("Number of Contry",+d.length);
    await expect(d.length).toBe(10);




    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    console.log("===================================================================================================");
    const col = await page.locator('#colors').textContent();
    await expect(col.includes("Red")).toBeTruthy();
    await expect(col.includes("Blue")).toBeTruthy();
    await expect(col.includes("Green")).toBeTruthy();
    await expect(col.includes("Yellow")).toBeTruthy();

    console.log("===============================================================================================================");
    console.log("For test Multiple colors in single line");
    
    await expect(await page.locator('#colors').textContent()).toEqual(expect.stringMatching(/Red|Blue|Green|Yellow/));

    await expect(col.includes("Black")).toBeFalsy();
    

})
