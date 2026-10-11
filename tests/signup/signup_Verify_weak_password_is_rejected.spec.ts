import { test, expect } from '../../fixture/base.fixtures';
import { uniqueEmail, weakPassword } from '../../utils/generators';

test.describe('Signup - weak password is rejected', () => {
  test('rejects a password that does not meet the policy', { tag: '@regression' }, async ({
    signupPage,
  }) => {
    await signupPage.fillEmailAndAcceptTerms(uniqueEmail('signup'));
    await signupPage.clickSignUp();
    await signupPage.fillPassword(weakPassword());
    await signupPage.clickSignUp();

    await expect(signupPage.weakPasswordError).toBeVisible();
    await expect(signupPage.passwordRequirementsPanel).toBeVisible();
    await expect(signupPage.passwordInput).toHaveAttribute('aria-invalid', 'true');
  });
});
