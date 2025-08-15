const { expect } = require('@playwright/test');

class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.myAccountLink = page.getByRole('link', { name: ' My Account' });
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.firstNameInput = page.locator('#input-firstname');
    this.lastNameInput = page.locator('#input-lastname');
    this.emailInput = page.locator('#input-email');
    this.telephoneInput = page.locator('#input-telephone');
    this.passwordInput = page.locator('#input-password');
    this.confirmPasswordInput = page.locator('#input-confirm');
    this.privacyPolicyCheckbox = page.locator('input[name="agree"]');
    this.continueButton = page.locator('input[value="Continue"]');
    this.successMessage = page.locator('#content').getByText('Congratulations! Your new account has been successfully created!');
  }

  async goto() {
    await this.page.goto('http://opencart.abstracta.us/');
  }

  async navigateToRegistrationForm() {
    await this.myAccountLink.click();
    await this.registerLink.click();
  }

  async fillRegistrationForm(userData) {
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.emailInput.fill(userData.email);
    await this.telephoneInput.fill(userData.telephone);
    await this.passwordInput.fill(userData.password);
    await this.confirmPasswordInput.fill(userData.confirmPassword);
  }

  async acceptPrivacyPolicyAndContinue() {
    await this.privacyPolicyCheckbox.check();
    await this.continueButton.click();
  }

  async assertRegistrationSuccess() {
    await expect(this.successMessage).toBeVisible();
  }
}

module.exports = { RegistrationPage };