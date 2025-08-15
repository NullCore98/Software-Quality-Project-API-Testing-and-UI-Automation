const { test, expect } = require('@playwright/test');

test('Navigate to Laptops & Notebooks', async ({ page }) => {
    await page.goto('http://opencart.abstracta.us/');

    await page.getByRole('link', { name: 'Laptops & Notebooks' }).hover();

    await page.getByRole('link', { name: 'Show All Laptops & Notebooks' }).click();

    await expect(page.getByRole('heading', { name: 'Laptops & Notebooks' })).toBeVisible();
});