const { test, expect } = require('@playwright/test');

test('Add and remove MacBook Pro from cart', async ({ page }) => {
    await page.goto('http://opencart.abstracta.us/');

    await page.getByRole('link', { name: 'Laptops & Notebooks' }).hover();

    await page.getByRole('link', { name: 'Show All Laptops & Notebooks' }).click();

    await page.locator('.product-thumb:has-text("MacBook Pro")').getByRole('button', { name: 'Add to Cart' }).click();
    
    await expect(page.getByText('Success: You have added MacBook Pro to your shopping cart!')).toBeVisible();

    await page.getByRole('button', { name: /.*item/i }).click();

    await page.getByRole('link', { name: 'View Cart' }).click();

    await page.locator('button[data-original-title="Remove"]').click();

    await expect(page.locator('#content').getByText('Your shopping cart is empty!')).toBeVisible();
});