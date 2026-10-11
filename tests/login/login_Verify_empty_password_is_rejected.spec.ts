import { test, expect } from '../../fixture/base.fixtures';
import { uniqueEmail } from '../../utils/generators';

test.describe('Login - empty password is rejected', () => {
  test('rejects an empty password at the password step', { tag: '@regression' }, async ({ loginPage }) => {
    await loginPage.enterEmailOrUsername(uniqueEmail('probe'));
    await loginPage.clickContinue();
    await loginPage.clickSignIn();

    await expect(loginPage.emptyPasswordError).toBeVisible();
    await expect(loginPage.passwordInput).toHaveAttribute('aria-invalid', 'true');
    await expect(loginPage.page).toHaveURL(/sso\.sleekflow\.io\/u\/login\/password/);
  });
});
