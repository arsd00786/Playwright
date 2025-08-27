import {test, expect} from '@playwright/test';
import { beforeEach } from 'node:test';
test.beforeEach(async ({page}) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');
    await page.locator('input[name="username"]').fill('Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
});

test('First Test "Login"', async ({page}) =>{

    const url = page.url();
    expect(url).toContain('dashboard');

});

test('Second Test "Logout"', async ({page}) =>{

    await page.getByText('firstNameTest lastNameTest').click();
    await page.getByText('Logout').click();
    const url = page.url();
    expect(url).toContain('login');
    await page.waitForTimeout(3000);
});