const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.myAccountLink = page.getByRole('link', { name: ' My Account' });
    this.loginLink = page.getByRole('link', { name: 'Login' });
    this.emailInput = page.locator('#input-email');
    this.passwordInput = page.locator('#input-password');
    this.loginButton = page.locator('input[value="Login"]');
    this.myAccountHeading = page.locator('xpath=/html/body/div[2]/div/div/h2[1]');
  }

  async goto() {
    await this.page.goto('http://opencart.abstracta.us/');
  }

  async navigateToLoginPage() {
    await this.myAccountLink.click();
    await this.loginLink.click();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoginSuccess() {
    await expect(this.myAccountHeading).toHaveText('My Account');
  }
}

module.exports = { LoginPage };