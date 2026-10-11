import { test, expect } from '../../fixture/base.fixtures';

test.describe('Login - empty form is rejected', () => {
  test('rejects an empty email or username field', { tag: '@regression' }, async ({ loginPage }) => {
    await loginPage.clickContinue();

    await expect(loginPage.emptyEmailError).toBeVisible();
    await expect(loginPage.emailOrUsernameField).toHaveAttribute('aria-invalid', 'true');
    await expect(loginPage.page).toHaveURL(/sso\.sleekflow\.io\/u\/login\/identifier/);
  });
});
