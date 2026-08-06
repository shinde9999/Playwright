const {test, expect} = require('@playwright/test');

test("Dropdown Test", async function({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.locator("#state").selectOption("Maharashtra");
    await page.waitForTimeout(1000);

    await page.locator("#state").selectOption({label: "Bihar"});
    await page.waitForTimeout(1000);

    await page.locator("#state").selectOption({index: 3});
    await page.waitForTimeout(1000);

    await page.locator("#state").selectOption({value: "Gujarat"});

    await page.waitForTimeout(2000);

    const value = await page.locator("#state").textContent();
    console.log("All States are: " + value);
    console.log("NO of state",+value.length)

    await expect(value.includes("Gujarat")).toBeTruthy();

    let state=await page.$("#state")

    let allElements=await state.$$("option");

    for(let i=0;i<allElements.length;i++)
    {
        let element=allElements[i]
        let text=await element.textContent();
        console.log("All Values in the Dropdown are: " + text);
    }

    await page.locator("#hobbies").selectOption(["Playing", "Swimming"]);

    await page.waitForTimeout(2000);
})