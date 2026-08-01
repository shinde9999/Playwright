const {test, expect} = require('@playwright/test');

test('handle auto suggestion', async ({ page }) => {
  
    await page.goto('https://docs.oracle.com/javase/8/docs/api/'); 
    const iframe = await page.frameLocator("//frame[@title='All Packages']");
    await iframe.locator("//a[normalize-space()='java.applet']").click();
    // await page.getByTitle('All Packages').contentFrame().getByRole('link', { name: 'java.awt', exact: true }).click();
    await page.pause()


})