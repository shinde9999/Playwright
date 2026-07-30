const { test, expect } = require('@playwright/test') //test = is to declare test
                                                     //expect = is to declare assertion
test("My First Test", async function({ page}) {
  expect(12).toBe(12)
} )

test("My Second Test", async function({ page}) {

  expect(10).toBe(9)
  
} )

test("My Third Test", async function({ page}) {
  
  expect(2.0).toBe(2.0)
} )

test("My Fourth Test", async function({ page}) {

  expect("Aniket Shinde").toContain("Aniket");
} )


