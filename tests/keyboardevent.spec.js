const {test, expect} = require('@playwright/test');

test('Keyboard Event Test', async function({page})  {
    await page.goto('https://www.google.com/');
    await page.locator("textarea[name='q']").fill('youtube');
    await page.waitForTimeout(2000);
    await page.keyboard.press('Control+KeyA');
    await page.keyboard.press('Control+KeyC');
    await page.keyboard.press('Backspace');


    await page.keyboard.press('Control+KeyV');
    await page.waitForTimeout(2000);
    await page.keyboard.press('Control+KeyA');
    await page.keyboard.press('Backspace');
})