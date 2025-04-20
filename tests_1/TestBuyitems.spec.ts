import { test, expect } from '@playwright/test';

 test.beforeEach(async ({ page }) => {
   const screenSize = await page.evaluate(() => {
      return {width: 1905, height: 917};

   });
    await page.setViewportSize(screenSize)
 });

test('Buy and add to cart items', async ({ page }) => {
  
  // login to website
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').fill('');
  await page.locator('[data-test="password"]').fill('');
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
  await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
  // Go to home
  await page.locator('[data-test="nav-home"]').click();
// Add to cart to items
// category is not stable 
await expect(page.getByAltText('Claw Hammer with Shock Reduction Grip')).toBeVisible();
await page.getByAltText('Claw Hammer with Shock Reduction Grip').click();
await expect(page.locator('[data-test="product-name"]')).toBeVisible();
await page.locator('[data-test="add-to-cart"]').click();
await page.getByRole('alert', { name: 'Product added to shopping' }).click();
await page.locator('[data-test="nav-cart"]').click();
await page.locator('[data-test="proceed-1"]').click();
// //login to add the cart
// await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com')
// await page.locator('[data-test="password"]').fill('welcome01');
// await page.locator('[date-test="data-test="login-submit"]').click();
await page.locator('[data-test="proceed-2"]').click();
await page.getByLabel('Street').fill('test 05-a');
await page.getByLabel('City').fill('Quezon City');
await page.getByLabel('State').fill('dahlia');
await page.getByLabel('Country').fill('Vienna');
await page.getByLabel('Postal code').fill('1119');
await page.locator('[data-test="proceed-3"]').click();
await page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');
await page.locator('[data-test="finish"]').click();
await page.locator('[data-test="payment-success-message"]').click();
await page.locator('[data-test="finish"]').click();
await page.getByText('Thanks for your order! Your').click();
 

});


// await page.getByLabel('Street').fill('Test street 98');
// await page.getByLabel('State').fill('US');
// await page.getByLabel('Country').fill('Austria')
// await page.getByLabel('Postal code').fill('11119');



