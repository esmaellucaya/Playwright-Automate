import { test, expect } from '@playwright/test';

test('Login_Test', async ({ page }) => {
    //login test
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').fill('');
  await page.locator('[data-test="email"]').press('Tab');
  await page.locator('[data-test="password"]').fill('');
  await page.locator('[data-test="login-submit"]').click();
  //Assert value to checked
  await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
  await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
// Screenshots
  await expect(page.locator('app-root')).toMatchAriaSnapshot(`
    - navigation:
      - link "Practice Software Testing - Toolshop":
        - img
      - menubar "Main menu":
        - menuitem "Home":
          - link "Home"
        - menuitem "Categories":
          - button "Categories"
        - menuitem "Contact":
          - link "Contact"
        - menuitem "Jane Doe":
          - button "Jane Doe"
    - heading "My account" [level=1]
    - paragraph: Here you can manage your profile, favorites and orders.
    - button "Favorites"
    - button "Profile"
    - button "Invoices"
    - button "Messages"
    - paragraph:
      - text: This is a DEMO application (
      - link "GitHub repo"
      - text: ), used for software testing training purpose. |
      - link "Support this project"
      - text: "|"
      - link "Privacy Policy"
      - text: "| Banner photo by"
      - link "Barn Images"
      - text: "on"
      - link "Unsplash"
      - text: .
    `);
});