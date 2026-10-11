import { test, expect } from '../../fixture/base.fixtures';

test.describe('Signup - all elements on signup password page present', () => {
  test('displays every element of the signup password step', { tag: '@regression' }, async ({
    signupPage,
  }) => {
    await signupPage.fillEmailAndAcceptTerms('probe@example.com');
    await signupPage.clickSignUp();

    await expect(signupPage.editEmailLink).toBeVisible();
    await expect(signupPage.passwordField).toBeVisible();
    await expect(signupPage.showPasswordSwitch).toBeVisible();
    await expect(signupPage.signUpButton).toBeVisible();
  });
});
