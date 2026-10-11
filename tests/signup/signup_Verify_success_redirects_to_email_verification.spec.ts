import { test, expect } from '../../fixture/base.fixtures';
import { strongPassword, uniqueEmail } from '../../utils/generators';

test.describe('Signup - success redirects to email verification', () => {
  test('creates an account and asks for email verification', { tag: ['@smoketest', '@regression'] }, async ({
    signupPage,
    page,
  }) => {
    const email = uniqueEmail('kerabulu');

    await signupPage.signUp(email, strongPassword());

    // SleekFlow creates the account, then requires email verification
    // before the app can be accessed.
    await expect(page).toHaveURL(/error=access_denied/);
    await expect(page).toHaveURL(/verify%20the%20email/);
  });
});
