import { test, expect } from '../../fixture/base.fixtures';
import { hasTestCredentials, TEST_USER_EMAIL, TEST_USER_PASSWORD } from '../../utils/env';

test.describe('Login - success using valid credential', () => {
    test.skip(!hasTestCredentials, 'Set TEST_USER_EMAIL and TEST_USER_PASSWORD in .env');

    test('logs in with valid credentials and lands on the app', {
        tag: ['@smoketest', '@regression'],
    }, async ({ loginPage }) => {
        await loginPage.login(TEST_USER_EMAIL, TEST_USER_PASSWORD);

        // Landing page varies by account onboarding state
        await expect(loginPage.page).toHaveURL(
            /app\.sleekflow\.io\/en\/(inbox\/?screen_hint=login|onboarding\/shared-inbox-checklist)/,
            { timeout: 15_000 }
        );

        await expect(loginPage.emailOrUsernameField).toBeHidden();
    });
});
