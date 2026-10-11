import { test, expect } from '../../fixture/base.fixtures';
import { uniqueEmail } from '../../utils/generators';

test.describe('Signup - empty password is rejected', () => {
  test('rejects an empty password with the requirements panel', { tag: '@regression' }, async ({
    signupPage,
  }) => {
    await signupPage.fillEmailAndAcceptTerms(uniqueEmail('signup'));
    await signupPage.clickSignUp();
    await signupPage.clickSignUp();

    await expect(signupPage.passwordRequiredError).toBeVisible();
    await expect(signupPage.passwordRequirementsPanel).toBeVisible();
    await expect(signupPage.page).toHaveURL(/sso\.sleekflow\.io\/u\/signup\/password/);
  });
});
