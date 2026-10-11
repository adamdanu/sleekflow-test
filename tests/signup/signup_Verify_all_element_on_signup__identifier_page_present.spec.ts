import { test, expect } from '../../fixture/base.fixtures';

test.describe('Signup - all elements on signup page present', () => {
  test('displays every element of the signup identifier step', { tag: '@regression' }, async ({
    signupPage,
  }) => {
    await expect(signupPage.heading).toBeVisible();
    await expect(
      signupPage.page.getByText('Sign up for your SleekFlow account to continue'),
    ).toBeVisible();
    await expect(signupPage.emailField).toBeVisible();
    await expect(signupPage.termsCheckbox).toBeVisible();
    await expect(signupPage.signUpButton).toBeVisible();
    await expect(signupPage.googleSignUpButton).toBeVisible();
    await expect(signupPage.appleSignUpButton).toBeVisible();
    await expect(signupPage.signInLink).toBeVisible();
    await expect(signupPage.page.getByText('Already have an account?')).toBeVisible();
  });
});
