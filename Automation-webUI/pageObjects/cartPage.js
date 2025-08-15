const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
    this.removeButton = page.locator('button[data-original-title="Remove"]');
    this.checkoutLink = page.locator('#cart').getByRole('link', { name: 'Checkout' });
    this.emptyCartMessage = page.locator('#content').getByText('Your shopping cart is empty!');
  }

  async gotoCartFromDropdown() {
    await this.viewCartLink.click();
  }

  async removeItem() {
    await this.removeButton.click();
  }

  async assertCartIsEmpty() {
    await this.page.waitForSelector('#content');
    await expect(this.emptyCartMessage).toBeVisible();
  }
}

module.exports = { CartPage };