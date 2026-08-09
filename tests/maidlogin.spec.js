const {test, expect} = require('@playwright/test');
const Maidlog = require('../pages/maidLog');

test('login test', async ({ page }) => {

    await page.goto("http://localhost:3000");
    const maidLog = new Maidlog(page);
    await maidLog.loginToMaid();
    await page.waitForTimeout(3000)



});