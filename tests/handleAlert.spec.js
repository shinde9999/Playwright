const{test,expect}=require('@playwright/test');

test('handle alert',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.on('dialog',async(d)=>{

        expect(d.type()).toContain('alert');
        expect(d.message()).toContain('I am a JS Alert');
        await d.accept();

    })
    await page.waitForTimeout(2000)
    await page.click("//button[normalize-space()='Click for JS Alert']");

})

test('handle confirm',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.on('dialog',async(c)=>{

        expect(c.type()).toContain('confirm');
        expect(c.message()).toContain('I am a JS Confirm');
        // await c.accept();
        await c.dismiss();

    })
    await page.waitForTimeout(2000)
    await page.click("//button[normalize-space()='Click for JS Confirm']");

})

test('handle prompt',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.on('dialog',async(c)=>{

        expect(c.type()).toContain('prompt');
        expect(c.message()).toBe('I am a JS prompt');
        await c.accept("PAtil");
        // await c.dismiss();

    })
    await page.waitForTimeout(2000)
    await page.click("//button[normalize-space()='Click for JS Prompt']");

})