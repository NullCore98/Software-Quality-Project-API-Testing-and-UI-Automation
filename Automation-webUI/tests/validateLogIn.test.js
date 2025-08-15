const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/loginPage');

test('Verify a registered user can log in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    const userCredentials = {
        email: 'user.test345@test.com',
        password: 'Pass123'
    };

    await loginPage.goto();
    await loginPage.navigateToLoginPage();
    await loginPage.login(userCredentials.email, userCredentials.password);
    await loginPage.assertLoginSuccess();
});