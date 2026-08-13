const {test,expect}=require('@playwright/test');

test("Handle Multiple values", async({page})=>{

    await page.goto("https://www.demoblaze.com/");

    const url = await page.$$('a');


    for(const urltext of url){

        const newurltext = await urltext.textContent();
        console.log(newurltext);
        console.log("==================================================");
        
        
    }


    const product = await page.$$("//div[@id='tbodyid']//div/h4/a");

    for (const productname of product){

        const newname = await productname.textContent();
        console.log(newname);
        
    }
})