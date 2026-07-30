import { test, expect } from '@playwright/test';

import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
});

test('test', async function ({ page })  {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.waitForTimeout(5000);
  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

// import { test, expect } from '@playwright/test';

// test('Login and Logout', async ({ page }) => {
//   test.setTimeout(60000);

//   await page.goto(
//     'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
//     { waitUntil: 'domcontentloaded' }
//   );

//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

//   await page.getByRole('button', { name: 'Login' }).click();

//   // Wait for dashboard
//   await expect(page).toHaveURL(/dashboard/, { timeout: 60000 });

//   // Wait for profile dropdown and click it
//   await page.locator('.oxd-userdropdown-tab').waitFor({
//     state: 'visible',
//     timeout: 60000
//   });

//   await page.locator('.oxd-userdropdown-tab').click();

//   // Logout
//   await page.getByText('Logout', { exact: true }).click();

//   await expect(page).toHaveURL(/auth\/login/);
// });