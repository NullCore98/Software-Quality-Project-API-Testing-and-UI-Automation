const { test, expect } = require('@playwright/test');

test('Add MacBook Pro to cart', async ({ page }) => {
    await page.goto('http://opencart.abstracta.us/');

    await page.getByRole('link', { name: 'Laptops & Notebooks' }).hover();

    await page.getByRole('link', { name: 'Show All Laptops & Notebooks' }).click();

    await page.locator('.product-thumb:has-text("MacBook Pro")').getByRole('button', { name: 'Add to Cart' }).click();
    
    await expect(page.getByText('Success: You have added MacBook Pro to your shopping cart!')).toBeVisible();
});