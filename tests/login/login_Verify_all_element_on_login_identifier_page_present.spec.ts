import { test, expect } from '../../fixture/base.fixtures';

test.describe('Login - all elements on login identifier page present', () => {
  test('displays every element of the login identifier step', { tag: '@regression' }, async ({ loginPage }) => {
    await expect(loginPage.heading).toBeVisible();
    await expect(loginPage.page.getByText('Sign in to continue to SleekFlow')).toBeVisible();
    await expect(loginPage.emailOrUsernameField).toBeVisible();
    await expect(loginPage.continueButton).toBeVisible();
    await expect(loginPage.signUpLink).toBeVisible();
    await expect(loginPage.orDivider).toBeVisible();
    await expect(loginPage.googleSignInButton).toBeVisible();
    await expect(loginPage.appleSignInButton).toBeVisible();
    await expect(loginPage.page.getByText("Don't have an account?")).toBeVisible();
  });
});
