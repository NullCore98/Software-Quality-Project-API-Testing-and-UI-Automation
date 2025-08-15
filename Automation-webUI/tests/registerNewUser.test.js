const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../pageObjects/registrationPage');

test('Register new user', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    
    const randomEmail = `Marty.Mcfly${Math.floor(Math.random() * 1000)}@test.com`;
    const userData = {
        firstName: 'Marty',
        lastName: 'Mcfly',
        email: randomEmail,
        telephone: '1234567890',
        password: 'Pass123',
        confirmPassword: 'Pass123'
    };

    await registrationPage.goto();
    await registrationPage.navigateToRegistrationForm();
    await registrationPage.fillRegistrationForm(userData);
    await registrationPage.acceptPrivacyPolicyAndContinue();
    await registrationPage.assertRegistrationSuccess();
});