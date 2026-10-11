import { test, expect } from '../../fixture/base.fixtures';

test.describe('Login - all elements on login password page present', () => {


  test('displays every element of the login password step', { tag: '@regression' }, async ({ loginPage }) => {
    await loginPage.enterEmailOrUsername('probe@example.com');
    await loginPage.clickContinue();

    await expect(loginPage.page.getByRole('heading', { name: 'Sign in to continue' })).toBeVisible();
    await expect(loginPage.editEmailLink).toBeVisible();
    await expect(loginPage.passwordField).toBeVisible();
    await expect(loginPage.showPasswordSwitch).toBeVisible();
    await expect(loginPage.resetPasswordLink).toBeVisible();
    await expect(loginPage.keepMeSignedInCheckbox).toBeVisible();
    await expect(loginPage.signInButton).toBeVisible();
  });
});
