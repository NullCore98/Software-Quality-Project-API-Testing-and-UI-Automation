const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.step1Link = page.getByRole('link', { name: /Checkout Options/i });
    this.step1Section = page.locator('#collapse-checkout-option');
    this.guestCheckoutRadio = page.getByLabel('Guest Checkout');
    this.continueButton = this.step1Section.getByRole('button', { name: 'Continue' });

    this.firstNameInput = page.getByLabel('First Name');
    this.lastNameInput = page.getByLabel('Last Name');
    this.emailInput = page.locator('#input-payment-email');
    this.telephoneInput = page.getByLabel('Telephone');
    this.address1Input = page.getByLabel('Address 1');
    this.cityInput = page.getByLabel('City');
    this.postCodeInput = page.getByLabel('Post Code');
    this.countrySelect = page.getByLabel('Country');
    this.regionSelect = page.getByLabel('Region / State');
    this.deliverySameCheckbox = page.getByLabel('My delivery and billing addresses are the same.');
    this.guestButton = page.locator('#button-guest');

    this.shippingMethodButton = page.locator('#button-shipping-method');
    this.termsCheckbox = page
      .getByRole('link', { name: 'Terms & Conditions' })
      .locator('xpath=../input[@type="checkbox"]');
    this.paymentMethodButton = page.locator('#button-payment-method');

    this.confirmOrderButton = page.locator('#button-confirm');
    this.orderPlacedHeading = page.getByText('Your order has been placed!');
  }

  async startGuestCheckout() {
    await this.step1Section.waitFor({ state: 'attached' });
    if (!(await this.step1Section.isVisible())) {
      await this.step1Link.click();
      await expect(this.step1Section).toBeVisible();
    }
    await this.guestCheckoutRadio.waitFor({ state: 'visible' });
    await this.guestCheckoutRadio.check();
    await expect(this.continueButton).toBeEnabled();
    await this.continueButton.click();
    await expect(this.firstNameInput).toBeVisible();
  }

  async fillBillingDetails(user) {
    await this.lastNameInput.waitFor({ state: 'visible' });
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill(user.email);
    await this.telephoneInput.fill(user.telephone);
    await this.address1Input.fill(user.address);
    await this.cityInput.fill(user.city);
    await this.postCodeInput.fill(user.postCode);
    await this.countrySelect.selectOption({ label: user.country });
    await this.regionSelect.selectOption({ label: user.region });
    if (await this.deliverySameCheckbox.isVisible()) {
      await this.deliverySameCheckbox.check();
    }
    await expect(this.guestButton).toBeEnabled();
    await this.guestButton.click();
    await expect(this.shippingMethodButton).toBeVisible();
  }

  async confirmShippingMethod() {
    await expect(this.shippingMethodButton).toBeEnabled();
    await this.shippingMethodButton.click();
    await expect(this.paymentMethodButton).toBeVisible();
  }

  async acceptTermsAndConditions() {
    await this.termsCheckbox.waitFor({ state: 'visible' });
    await this.termsCheckbox.check();
  }

  async confirmPaymentMethod() {
    await expect(this.paymentMethodButton).toBeEnabled();
    await this.paymentMethodButton.click();
    await expect(this.confirmOrderButton).toBeVisible();
  }

  async confirmOrder() {
    await expect(this.confirmOrderButton).toBeEnabled();
    await this.confirmOrderButton.click();
    await this.page.waitForURL('**/success');
    await expect(this.orderPlacedHeading).toBeVisible();
  }
}

module.exports = { CheckoutPage };
