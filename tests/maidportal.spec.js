import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('dinu@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('dinu123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Book Now' }).first().click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Start Date' }).fill('2026-08-12');
  await page.getByLabel('Hours of Work Per Day').selectOption('6');
  await page.waitForTimeout(2000);
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Send Request' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Logout' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
});