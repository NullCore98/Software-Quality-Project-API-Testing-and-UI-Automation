const { expect } = require('@playwright/test');

class ResetPasswordPage {
  constructor(page) {
    this.page = page;
    this.myAccountLink = page.getByRole('link', { name: ' My Account' });
    this.loginLink = page.getByRole('link', { name: 'Login' });
    this.forgottenPasswordLink = page.locator('#content').getByRole('link', { name: 'Forgotten Password' });
    this.emailInput = page.locator('#input-email');
    this.continueButton = page.locator('input[value="Continue"]');
    this.successMessage = page.getByText('An email with a confirmation link has been sent your email address.');
  }

  async goto() {
    await this.page.goto('http://opencart.abstracta.us/');
  }

  async navigateToForgottenPassword() {
    await this.myAccountLink.click();
    await this.loginLink.click();
    await this.forgottenPasswordLink.click();
  }

  async resetPassword(email) {
    await this.emailInput.fill(email);
    await this.continueButton.click();
  }

  async assertPasswordResetSuccess() {
    await expect(this.successMessage).toBeVisible();
  }
}

module.exports = { ResetPasswordPage };