import { test, expect } from '../../fixture/base.fixtures';

test.describe('Signup - empty form is rejected', () => {
  test('rejects an empty email field', { tag: '@regression' }, async ({ signupPage }) => {
    await signupPage.clickSignUp();

    await expect(signupPage.emptyEmailError).toBeVisible();
    await expect(signupPage.emailField).toHaveAttribute('aria-invalid', 'true');
    await expect(signupPage.page).toHaveURL(/sso\.sleekflow\.io\/u\/signup\/identifier/);
  });
});
