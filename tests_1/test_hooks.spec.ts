import {test, expect} from '@playwright/test';

test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com');
        
    });

test('main navigation', async ({ page }) => {
    await expect(page).toHaveURL('https://practicesoftwaretesting.com');
    });

});