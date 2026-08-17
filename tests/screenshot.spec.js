const {test, expect} = require('@playwright/test');

test('Screenshot', async ({ page }) => {
    await page.goto('https://www.opencart.com/index.php?route=cms/demo');
    await page.screenshot({path:'tests/screenshot/'+Date.now()+'homepage.png'});
    
});

//we can also use the tags for run the specfic tags with help help of --grep "tagname"
test('Full Page @full ', async ({ page }) => {
    await page.goto('https://www.opencart.com/index.php?route=cms/demo');
    await page.screenshot({path:'tests/screenshot/'+Date.now()+'fullpage.png',fullPage:true});
    
});

test('Specific Element @element', async ({ page }) => {
    await page.goto('https://www.opencart.com/index.php?route=cms/demo');
    await page.locator("//a[@href='https://demo.opencart.com/']").screenshot({path:'tests/screenshot/'+Date.now()+'elementpage.png'});
    
});