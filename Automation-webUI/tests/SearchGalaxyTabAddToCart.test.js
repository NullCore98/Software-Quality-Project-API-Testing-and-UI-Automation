const { test, expect } = require('@playwright/test');

test('Search Samsung Galaxy Tab and add to cart', async ({ page }) => {
    await page.goto('http://opencart.abstracta.us/');

    await page.getByRole('textbox', { name: 'Search' }).fill('Samsung Galaxy Tab');
    
    await page.getByRole('button', { name: '' }).click();
    
    await page.locator('.product-thumb:has-text("Samsung Galaxy Tab")').getByRole('button', { name: 'Add to Cart' }).click();

    await expect(page.getByText('Success: You have added Samsung Galaxy Tab 10.1 to your shopping cart!')).toBeVisible();
});