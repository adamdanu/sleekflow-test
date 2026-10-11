import { test, expect } from '../../fixture/base.fixtures';

test.describe('Signup - invalid email is rejected', () => {
  test('rejects a malformed email address', { tag: '@regression' }, async ({ signupPage }) => {
    await signupPage.fillEmail('not-an-email');
    await signupPage.acceptTerms();
    await signupPage.clickSignUp();

    await expect(signupPage.invalidEmailError).toBeVisible();
    await expect(signupPage.emailField).toHaveAttribute('aria-invalid', 'true');
  });
});
