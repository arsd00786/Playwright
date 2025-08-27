import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('what is playwright');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByText('Double-click to edit a todo').click();
  await page.getByText('Part of TodoMVC').click();
  await page.locator('html').click();
  await page.getByText('JavaScript', { exact: true }).click();
  await page.getByText('Compile-to-JS').click();
  await page.getByText('Labs').click();
  await page.getByRole('tab', { name: 'Labs' }).click();
  await expect(page.getByText('JavaScript', { exact: true })).toBeVisible();
  await expect(page.getByText('JavaScript', { exact: true })).toBeVisible();
  await page.getByText('Compile-to-JS').click();
  await page.getByText('Labs').click();
  await expect(page.locator('iframe[title="X Post Button"]').contentFrame().locator('[id="l"]')).toMatchAriaSnapshot(`- text: Post`);
});