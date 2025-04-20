import {test, expect } from "@playwright/test"

test.describe("Home page with no auth", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practicesoftwaretesting.com/");
    });

test("Validate Sign-in", async({ page }) => {
    // Ensure the sign-in butto link is present
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
});
 // Check the title of the page
test("Validate title page and items  display on site", async({ page }) => { 
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");
    // Check the count of the item displayed
    const productgrid = page.locator(".col-md-9")
    await expect(productgrid.getByRole("link")).toHaveCount(9);
});

// test("Validate grid count for non Assertions", async({ page }) => {
//     // using non locator assertions
//     //expect(await productgrid.getByRole("link").count()).toBe(9);
// });

test("Validate Searched function", async({ page }) => {
    // Searched for Thor hammer
    // create a script for searching capabilities
    await page.getByLabel("Search").fill("Thor");
    await page.locator('[data-test="search-submit"]').click();
    const productgrid = page.locator(".col-md-9")
    await expect(productgrid.getByRole("link")).toHaveCount(1);
    await expect(page.locator('[data-test="search-term"]')).toBeVisible()
});
   
  
});

// with auth

test.describe("Home page with customer01 with auth", () => {

    test.use({storageState: ".auth/customer01.json"});
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practicesoftwaretesting.com/");
    });

    test("check customer01 is signed in", async ({ page }) => {
        await expect(page.getByTestId("nav-sign-in")).not.toBeVisible();
    })
});