const { test, expect } = require('@playwright/test');
const { ResetPasswordPage } = require('../pageObjects/resetPasswordPage');

test('Password reset', async ({ page }) => {
    const resetPasswordPage = new ResetPasswordPage(page);
    
    const userEmail = 'user.test345@test.com';

    await resetPasswordPage.goto();
    await resetPasswordPage.navigateToForgottenPassword();
    await resetPasswordPage.resetPassword(userEmail);
    await resetPasswordPage.assertPasswordResetSuccess();
});