import {test, expect } from "@playwright/test"


test("Home page", async({ page }) => {

    await page.goto("https://practicesoftwaretesting.com/");
    // Ensure the sign-in butto link is present
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
    // Check the title of the page
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");
    // Check the count of the item displayed
    const productgrid = page.locator(".col-md-9")
    await expect(productgrid.getByRole("link")).toHaveCount(9);

    // using non locator assertions

    //expect(await productgrid.getByRole("link").count()).toBe(9);

    

    // Searched for Thor hammer
    // create a script for searching capabilities

    await page.getByLabel("Search").fill("Thor");
    await page.locator('[data-test="search-submit"]').click();
    await expect(productgrid.getByRole("link")).toHaveCount(1);
    await expect(page.locator('[data-test="search-term"]')).toBeVisible();

    // using non locator assertions

    //expect(await productgrid.getByRole("link").count()).toBe(9);

    
})