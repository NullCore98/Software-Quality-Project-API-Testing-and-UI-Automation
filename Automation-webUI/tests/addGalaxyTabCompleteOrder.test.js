const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pageObjects/homePage');
const { CartPage } = require('../pageObjects/cartPage');
const { CheckoutPage } = require('../pageObjects/checkoutPage');

test('Add macbook pro, remove macbook pro, and confirm order for galaxy tab', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    const testUser = {
        firstName: 'Bruce',
        lastName: 'Wayne',
        email: 'testuser26@test.com',
        telephone: '5551234567',
        address: '123 Test St',
        city: 'CiudadGotica',
        postCode: '12345',
        country: 'Uganda',
        region: 'Kampala',
    };

    await homePage.goto();
    await homePage.addMacbookToCart();
    await expect(page.getByText('Success: You have added MacBook Pro to your shopping cart!')).toBeVisible();
    
    await homePage.clickCart();
    await cartPage.gotoCartFromDropdown();
    await cartPage.removeItem();
    await cartPage.assertCartIsEmpty();

    await homePage.goto();
    await homePage.searchForProduct('Samsung Galaxy Tab');
    await homePage.addGalaxyTabToCart();
    await expect(page.getByText('Success: You have added Samsung Galaxy Tab 10.1 to your shopping cart!')).toBeVisible();

    await homePage.clickCart();
    await cartPage.checkoutLink.click();
    await checkoutPage.startGuestCheckout();
    await checkoutPage.fillBillingDetails(testUser);
    await checkoutPage.confirmShippingMethod();
    await checkoutPage.acceptTermsAndConditions();
    await checkoutPage.confirmPaymentMethod();
    await checkoutPage.confirmOrder();

    await expect(checkoutPage.orderPlacedHeading).toBeVisible();
});