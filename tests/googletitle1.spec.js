const {test, expect} = require ('@playwright/test')

test("Google Title Test", async ({page}) => {
    await page.goto("https://www.google.com/")
    const url = page.url()
    console.log("URL is: ", url)
    const title = await page.title()
    console.log("Title is: ", title)
    await expect(page).toHaveTitle("Google")
})  