import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('dinu@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('dinu123');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Book Now' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Start Date' }).fill('2026-07-30');
  await page.getByLabel('Hours of Work Per Day').selectOption('2');
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Message / Instructions' }).click();
  await page.getByRole('textbox', { name: 'Message / Instructions' }).fill('for morning and evening also');
  await page.waitForTimeout(2000);
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Send Request' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Logout' }).click();
});