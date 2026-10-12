import { test, expect } from '../../fixture/base.fixtures';
import { hasTestCredentials, TEST_USER_EMAIL } from '../../utils/env';
import { uniqueEmail } from '../../utils/generators';

test.describe('Login - invalid credentials rejected', () => {
  test('rejects an unknown account', { tag: '@regression' }, async ({ loginPage }) => {
    await loginPage.login(uniqueEmail('unknown'), 'SomePass1!');

    await expect(loginPage.wrongCredentialsError).toBeVisible();
    await expect(loginPage.page).toHaveURL(/sso\.sleekflow\.io/);
  });
});
