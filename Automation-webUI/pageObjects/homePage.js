class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.getByRole('textbox', { name: 'Search' });
    this.searchButton = page.getByRole('button', { name: '' });
    this.laptopsAndNotebooksLink = page.getByRole('link', { name: 'Laptops & Notebooks' });
    this.showAllLaptopsLink = page.getByRole('link', { name: 'Show All Laptops & Notebooks' });
    this.macBookProCard = page.locator('.product-thumb:has-text("MacBook Pro")');
    this.galaxyTabCard = page.locator('.product-thumb:has-text("Samsung Galaxy Tab 10.1")');
    this.cartButton = page.getByRole('button', { name: /.*item/i });
  }

  async goto() {
    await this.page.goto('http://opencart.abstracta.us/');
  }

  async searchForProduct(productName) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }

  async addMacbookToCart() {
    await this.laptopsAndNotebooksLink.hover();
    await this.showAllLaptopsLink.click();
    await this.macBookProCard.getByRole('button', { name: 'Add to Cart' }).click();
  }
  
  async addGalaxyTabToCart() {
    await this.galaxyTabCard.getByRole('button', { name: 'Add to Cart' }).click();
  }

  async clickCart() {
    await this.cartButton.click();
  }
}

module.exports = { HomePage };