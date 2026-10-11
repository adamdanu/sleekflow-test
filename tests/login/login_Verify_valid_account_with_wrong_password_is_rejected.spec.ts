import { test, expect } from '../../fixture/base.fixtures';
import { hasTestCredentials, TEST_USER_EMAIL } from '../../utils/env';

test.describe('Login - valid account with wrong password rejected', () => {
  test('rejects a valid account with wrong password', { tag: '@regression' }, async ({ loginPage }) => {
    test.skip(!hasTestCredentials, 'Set TEST_USER_EMAIL in .env');

    await loginPage.login(TEST_USER_EMAIL, 'DefinitelyWrong1!');

    await expect(loginPage.wrongCredentialsError).toBeVisible();
    await expect(loginPage.passwordInput).toHaveAttribute('aria-invalid', 'true');
  });
});
